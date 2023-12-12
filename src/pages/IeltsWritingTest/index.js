import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import {
    getIeltsTestDetail,
    getScore,
} from "../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";
import IeltsListeningPaletteSection from "../../components/Layouts/components(dungchung)/ielts-palette-section";
import Split from "react-split-it";
import { Header } from "../IeltsListeningTest/Header/header";
import { EditorWrap } from "../../components/Editor";
import { getIeltsWritingPartList } from "../../apis/ielts-writing-test.api";
import { submitIeltsWritingAnswers } from "../../apis/ielts-test.api";
import configs from "../../configs";

const IeltsWritingTest = () => {
    const navigate = useNavigate();
    const { testId } = useParams();
    const [test, setTest] = useState({});
    const [ieltsTestPartList, setIeltsTestPartList] = useState([]);
    const [ieltsTestPart, setIeltsTestPart] = useState(null);
    const currentPartIndex = ieltsTestPartList.findIndex((item) => {
        // @ts-ignore
        return item.partNumber === ieltsTestPart.partNumber;
    });

    let [userAnswers, setUserAnswers] = useState([]);

    const getUserAnswer = (partId) => {
        return userAnswers.find((item) => {
            return item.partId === partId;
        })?.answer;
    };

    const handleSubmitAnswers = async () => {
        try {
            const res = await submitIeltsWritingAnswers({userAnswers});
            navigate(configs.routes.reviewAnswers.replace(":testResultId", res.data.id));
        } catch (error) {
            toast.error(error);
        }
    };

    useEffect(() => {
        (async (testId) => {
            try {
                const response = await getIeltsWritingPartList(testId);
                setIeltsTestPartList(response.data);
                setIeltsTestPart(response.data[0]);

                userAnswers = response.data.map((item) => {
                    return {
                        partId: item.id,
                        answer: "",
                    };
                })

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

                <div className="ielts-listening-page-content question-only overflow-auto bg-orange-50	">
                    <Split className="flex h-full w-full flex-1 ">
                        <div className="bg-orange-100 px-4 py-2 overflow-auto">
                            <p className="text-red-800 text-3xl font-bold">
                                Part{" "}
                                {
                                    // @ts-ignore
                                    ieltsTestPart?.partNumber || "" + ": "
                                }
                            </p>
                            <div dangerouslySetInnerHTML={{
                                __html: ieltsTestPart?.partDetail?.content
                            }}></div>
                        </div>

                        <div className="overflow-auto">
                            <EditorWrap value={getUserAnswer(ieltsTestPart?.id)} onChange={(value) => {
                                const newAnswer = [...userAnswers];
                                const partIndex = newAnswer.findIndex((item) => {
                                    return item.partId === ieltsTestPart.id;
                                });
                                newAnswer[partIndex].answer = value;
                            }}></EditorWrap>
                        </div>
                    </Split>
                </div>

                <div className="test-panel__nav test-panel__nav_for_writing">
                    <div
                        className="test-panel__nav-buttons"
                        id="js-btn-wrap"
                        data-part-show="0"
                    >
                        {" "}
                        <button
                            className="test-panel__nav-btn -prev -disabled"
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
                            className="test-panel__nav-btn -next"
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
                                    ieltsTestPart?.partNumber == item.partNumber
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
                                    partNumber={item?.partNumber}
                                    questionNumbers={[]}
                                ></IeltsListeningPaletteSection>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IeltsWritingTest;
