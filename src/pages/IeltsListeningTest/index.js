import { useParams } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { getIeltsTestPartList, getScore } from "../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";
import IeltsListeningPart from "./IeltsListeningPart";
import CountdownTimer from "../../components/CountdownTimer";

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
    }

    const getUserAnswer = (questionId) => {
        const questionIndex = userAnswers.findIndex((question) => {
            return question.questionId === questionId;
        });
        return userAnswers[questionIndex].answer;
    }

    const handleSubmitAnswers = async () => {
        try {
            const data = await getScore({
                testId,
                userAnswers
            });
            toast.success(`Your score is ${data.data.score}`);
        } catch (error) {
            toast.error(error);
        }
    }

    useEffect(() => {
        (async (testId) => {
            try {
                const response = await getIeltsTestPartList(testId);
                setIeltsTestPartList(response.data);
                setIeltsTestPart(response.data[0]);

                for (const item of response.data) {
                    userAnswers = [...userAnswers, ...(item.questionKeys.map((questionKey) => {
                        return {
                            questionId: questionKey.id,
                            questionNumber: questionKey.questionNumber,
                            answer: ""
                        }
                    }))]
                }
                setUserAnswers(userAnswers);
            } catch (error) {
                toast.error(error);
            }
        })(testId);
    }, []);

    const handleTimeExpired = () => {
        toast.success('Timeout'); 
      };

    return (
        <div>
            <h3>IeltsListeningTest</h3>
            {Object.values(ieltsTestPart).length !== 0 && (
                <IeltsListeningPart
                    ieltsTestPart={ieltsTestPart}
                    getUserAnswer={getUserAnswer}
                    handleAnswerChange={handleAnswerChange}
                ></IeltsListeningPart>
            )}

            {ieltsTestPartList.map((item, index) => {
                return (
                    <div key={index} onClick={() => {
                        setIeltsTestPart(item);
                    }}>
                        Part {item.partNumber + " "}
                        {item.questionKeys.map((questionKey, index) => {
                            return (
                                <span key={index}>
                                    {questionKey.questionNumber}{" "}
                                </span>
                            );
                        })}
                    </div>
                );
            })}

            <h3>
                <CountdownTimer initialTime={5} onTimeExpired={handleTimeExpired}></CountdownTimer>
            </h3>
            <button onClick={handleSubmitAnswers}>Submit</button>
        </div>
    );
};

export default IeltsListeningTest;
