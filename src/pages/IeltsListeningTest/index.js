import { useParams } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import {
    getIeltsTestPartList,
    getScore,
} from "../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";
import IeltsListeningPart from "./IeltsListeningPart";
import CountdownTimer from "../../components/CountdownTimer";
import Header from "./Header/header";
import BottomPanel from "../../components/Layouts/components(dungchung)/bottom-panel";
import IeltsListeningPaletteSection from "../../components/Layouts/components(dungchung)/ielts-palette-section";

const IeltsListeningTest = () => {
    const { testId } = useParams();
    const [ieltsTestPartList, setIeltsTestPartList] = useState([]);
    const [ieltsTestPart, setIeltsTestPart] = useState({});
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
            const data = await getScore({
                testId,
                userAnswers,
            });
            toast.success(`Your score is ${data.data.score}`);
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

    const handleTimeExpired = () => {
        toast.success("Timeout");
    };

    return (
        <div>
            <div className="ielts-listening-test-container no-ads">
                <div className="ielts-listening-site-header">
                    {/* <Header></Header> */}
                </div>

                <div className="ielts-listening-page-content question-only overflow-auto">
                    {Object.values(ieltsTestPart).length !== 0 && (
                        <IeltsListeningPart
                            ieltsTestPart={ieltsTestPart}
                            getUserAnswer={getUserAnswer}
                            handleAnswerChange={handleAnswerChange}
                        ></IeltsListeningPart>
                    )}
                </div>

                <div className="ielts-listening-bottom-panel">
                    <BottomPanel
                        IeltsListeningPaletteSections={ieltsTestPartList.map(
                            (item, index) => (
                                <div className="outline" onClick={() => {
                                    console.log("item", item);
                                    setIeltsTestPart(item);
                                }}>
                                    <IeltsListeningPaletteSection
                                        key={index}
                                        partNumber={item.partNumber}
                                        questionNumbers={item.questionKeys.map(
                                            (questionKey) =>
                                                questionKey.questionNumber
                                        )}
                                    ></IeltsListeningPaletteSection>
                                </div>
                            )
                        )}
                    ></BottomPanel>
                </div>
            </div>
        </div>
    );
};

export default IeltsListeningTest;
