import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import {
    getIeltsTestDetail,
    getIeltsTestPartList,
} from "../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";
import IeltsListeningPart from "./IeltsListeningPart";
import IeltsListeningPaletteSection from "../../components/Layouts/components(dungchung)/ielts-palette-section";
import { Header } from "./Header/header";
import { IELTS_TEST_TYPE } from "../../shared/constant";
import Split from "react-split-it";
import { submitIeltsListeningAndReadingAnswers } from "../../apis/ielts-test.api";
import configs from "../../configs";

const IeltsListeningTest = () => {
    const { testId } = useParams();
    const [test, setTest] = useState({});
    const [ieltsTestPartList, setIeltsTestPartList] = useState([]);
    const [ieltsTestPart, setIeltsTestPart] = useState(null);
    const navigate = useNavigate();
    
    const currentPartIndex = ieltsTestPartList.findIndex((item) => {
        // @ts-ignore
        return item.partNumber === ieltsTestPart.partNumber;
    });

    let [userAnswers, setUserAnswers] = useState([]);

    const handleAnswerChange = (questionId, answer) => {
        const newUserAnswers = [...userAnswers];
        const questionIndex = newUserAnswers.findIndex((question) => {
            return question.questionId === questionId;
        });
        newUserAnswers[questionIndex].answer = answer;
        setUserAnswers(newUserAnswers);
    };

    const getUserAnswer = (questionId) => {
        const questionIndex = userAnswers.findIndex((question) => {
            return question.questionId === questionId;
        });
        return userAnswers[questionIndex].answer;
    };

    const handleSubmitAnswers = async () => {
        try {
            const res = await submitIeltsListeningAndReadingAnswers({
                testId,
                userAnswers,
            });
            navigate(configs.routes.reviewAnswers.replace(":testResultId", res.data.id));
        } catch (error) {
            toast.error(error);
        }
    };

    useEffect(() => {
        (async (testId) => {
            try {
                const response = await getIeltsTestPartList(testId);
                setIeltsTestPartList(response.data);
                setIeltsTestPart(response.data[0]);

                for (const item of response.data) {
                    userAnswers = [
                        ...userAnswers,
                        ...item.questionKeys.map((questionKey) => {
                            return {
                                questionId: questionKey.id,
                                questionNumber: questionKey.questionNumber,
                                answer: "",
                            };
                        }),
                    ];
                }
                setUserAnswers(userAnswers);
            } catch (error) {
                toast.error(error);
            }
        })(testId);
    }, []);

    useEffect(() => {
        (async (testId) => {
            try {
                const response = await getIeltsTestDetail(testId);
                setTest(response.data);
            } catch (error) {
                toast.error(error);
            }
        })(testId);
    }, []);

    return (
        <div>
            <div className="ielts-listening-test-container no-ads">
                <div className="ielts-listening-site-header">
                    <Header handleSubmitAnswers={handleSubmitAnswers}></Header>
                </div>

                <div className="ielts-listening-page-content question-only overflow-auto" style={{
                    backgroundColor: '#f5f5f5'
                }}>
                    {
                        // @ts-ignore
                        test.type == IELTS_TEST_TYPE.LISTENING && (
                            <div>
                                <div className="ielts-listening-part-announcement-container">
                                    <div
                                        id="ielts-listening-part-announcement-1"
                                        className="ielts-listening-part-announcement current"
                                    >
                                        <strong className="text-red-800 text-3xl">
                                            Part{" "}
                                            {
                                                ieltsTestPart?.partNumber
                                            }
                                            :
                                        </strong>
                                        <audio
                                            controls
                                            id="ielts-listening-test-audio-1"
                                            className="ielts-listening-test-audio"
                                            key={ieltsTestPart?.partDetail?.audioSrc}
                                        >
                                            <source
                                                src={
                                                    ieltsTestPart?.partDetail
                                                        ?.audioSrc
                                                }
                                                type="audio/mpeg"
                                            />
                                            Your browser does not support the
                                            audio element.
                                        </audio>
                                    </div>
                                </div>

                                {Object.values(ieltsTestPart ?? {}).length !== 0 && (
                                    <IeltsListeningPart
                                        ieltsTestPart={ieltsTestPart}
                                        getUserAnswer={getUserAnswer}
                                        handleAnswerChange={handleAnswerChange}
                                    ></IeltsListeningPart>
                                )}
                            </div>
                        )
                    }

                    {
                        // @ts-ignore
                        test.type == IELTS_TEST_TYPE.READING && (
                            <Split className="flex h-full w-full flex-1 ">
                                <div className="px-4 py-2 overflow-auto h-[72vh] my-scroll-bar" style={{
                                    backgroundColor: '#f5f5f5'
                                }}>
                                    <p className="text-red-800 text-3xl font-bold">
                                        Part{" "}
                                        {
                                            // @ts-ignore
                                            ieltsTestPart?.partNumber + ": "
                                        }
                                    </p>
                                    <p className="text-red-800 text-3xl font-bold text-center">
                                        Part{" "}
                                        {
                                            // @ts-ignore
                                            ieltsTestPart?.partDetail?.title
                                        }
                                    </p>
                                    <div>
                                        <span>
                                            {
                                                // @ts-ignore
                                                ieltsTestPart?.partDetail
                                                    ?.paragraphs
                                            }
                                        </span>
                                    </div>
                                </div>

                                <div className="overflow-auto h-[72vh] bg-white">
                                    {Object.values(ieltsTestPart || {}).length !==
                                        0 && (
                                        <IeltsListeningPart
                                            ieltsTestPart={ieltsTestPart}
                                            getUserAnswer={getUserAnswer}
                                            handleAnswerChange={
                                                handleAnswerChange
                                            }
                                        ></IeltsListeningPart>
                                    )}
                                </div>
                            </Split>
                        )
                    }
                </div>

                <div className="test-panel__nav">
                    <div
                        className="test-panel__nav-buttons"
                        id="js-btn-wrap"
                        data-part-show="0"
                    >
                        {" "}
                        <button
                            className="my-button-74"
                            id="js-btn-previous"
                            onClick={() =>
                                setIeltsTestPart(
                                    currentPartIndex > 0
                                        ? ieltsTestPartList[
                                              currentPartIndex - 1
                                          ]
                                        : ieltsTestPartList[currentPartIndex]
                                )
                            }
                        >
                            <span className="ioticon-prev-icon">{"<"}</span>{" "}
                        </button>{" "}
                        <button
                            className="my-button-74"
                            id="js-btn-next"
                            onClick={() =>
                                setIeltsTestPart(
                                    currentPartIndex <
                                        ieltsTestPartList.length - 1
                                        ? ieltsTestPartList[
                                              currentPartIndex + 1
                                          ]
                                        : ieltsTestPartList[currentPartIndex]
                                )
                            }
                        >
                            <span className="ioticon-next-icon">{">"}</span>{" "}
                        </button>
                    </div>
                </div>

                <div className="ielts-listening-bottom-panel">
                    <div className="ielts-listening-question-palette">
                        {ieltsTestPartList.map((item, index) => (
                            <button
                                // @ts-ignore
                                className={`ielts-listening-palette-section ${
                                    // @ts-ignore
                                    ieltsTestPart.partNumber == item.partNumber
                                        ? "current"
                                        : ""
                                }`}
                                key={index}
                                onClick={() => {
                                    setIeltsTestPart(item);
                                }}
                            >
                                <IeltsListeningPaletteSection
                                    key={index}
                                    partNumber={item.partNumber}
                                    questionNumbers={item.questionKeys.map(
                                        (questionKey) =>
                                            questionKey.questionNumber
                                    )}
                                ></IeltsListeningPaletteSection>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IeltsListeningTest;
