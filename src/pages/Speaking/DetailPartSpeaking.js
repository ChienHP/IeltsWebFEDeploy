import Dictaphone from "./Dictaphone";
import { useEffect, useState } from "react";
import { getIeltsSpeakingPartList, submitIeltsSpeakingAnswer } from "../../apis/ielts-speaking-test.api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { createTestResult } from "../../apis/ielts-test.api";
import { EndModal } from "./EndModal";

const DetailPartSpeaking = () => {
    const [isStarted, setIsStarted] = useState(false);
    const { testId } = useParams();
    const [parts, setParts] = useState([]);
    const [currentPart, setCurrentPart] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);

    const [audioFile, setAudioFile] = useState(null);
    const [testResultId, setTestResultId] = useState(null);

    const [showEndModal, setShowEndModal] = useState(false);
    const isTheLastQuestion = () => {
        const currentIndex = currentPart?.questions.findIndex(
            (item) => item.id === currentQuestion?.id
        );
        const nextQuestion = currentPart?.questions[currentIndex + 1];
        if (nextQuestion) {
            return false;
        } else {
            const currentPartIndex = parts.findIndex(
                (item) => item.id === currentPart?.id
            );
            const nextPart = parts[currentPartIndex + 1];
            if (nextPart) {
                return false;
            } else {
                return true;
            }
        }
    }
    
    useEffect(() => {
        (async () => {
            try {
                const res = await getIeltsSpeakingPartList(testId);
                setParts(res.data);
                setCurrentPart(res.data[0]);
                setCurrentQuestion(res.data[0].questions[0]);
                const testResultRes = await createTestResult({
                    testId: Number(testId),
                })
                setTestResultId(testResultRes.data.id)
            } catch (error) {
                toast.error(error);
            }
        })();
    }, []);



    const handleSubmitAnswer = async () => {
        if (audioFile) {
            const file = audioFile;
            const formData = new FormData();
            formData.append("file", file);
            try {
                const config = {
                    headers: {
                        "content-type": "multipart/form-data",
                    },
                };
                const res = await axios.post(
                    `${process.env.REACT_APP_WEB_URL}/upload/single-file`,
                    formData,
                    config
                );
                const url = res.data.data.url

                await submitIeltsSpeakingAnswer({
                    testResultId,
                    questionId: currentQuestion?.id,
                    answer: url,
                });
                toast.success("Submit answer successfully");
            } catch (error) {
                toast.error(error);
                throw new Error(error);
            }
        }
        else {
            toast.error("Please record your answer");
            throw new Error("Please record your answer");
        }
    }

    return (
        <div className="w-full h-full d-flex flex-column" style={{}}>
            <div
                className=""
                style={{
                    flex: 1,
                    background: "#edbfbf",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <div
                    className=""
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <div
                        className="text-center"
                        style={{
                            flexGrow: 1,
                        }}
                    >
                        <div className="text-2xl font-bold">
                            PART {currentPart?.partNumber}
                            {currentPart?.partNumber === 1 && " - INTRODUCTION AND INTERVIEW"}
                            {currentPart?.partNumber === 2 && " - TOPIC"}
                            {currentPart?.partNumber === 3 && " - TOPIC DISCUSSION"}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className=""
                style={{
                    display: "flex",
                    flex: 5,
                    flexFlow: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="text-red-800 fs-2 font-bold" style={{}}>
                    Question Number: {currentQuestion?.questionNumber}
                </div>

                <div className="font-bold fs-3 text-center">{currentQuestion?.content}</div>

                <div className="mt-8">
                    <Dictaphone audioFile={audioFile} setAudioFile={setAudioFile}/>
                </div>
            </div>

            <div
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "end",
                    marginRight: "20px",
                    paddingBottom: "20px",
                }}
            >
                <button className="my-button-74" onClick={async () => {
                    try {
                        await handleSubmitAnswer();
                    } catch (error) {
                        return
                    }

                    setAudioFile(null);
                    const currentIndex = currentPart?.questions.findIndex(
                        (item) => item.id === currentQuestion?.id
                    );
                    const nextQuestion = currentPart?.questions[currentIndex + 1];
                    if (nextQuestion) {
                        setCurrentQuestion(nextQuestion);
                    } else {
                        const currentPartIndex = parts.findIndex(
                            (item) => item.id === currentPart?.id
                        );
                        const nextPart = parts[currentPartIndex + 1];
                        if (nextPart) {
                            setCurrentQuestion(nextPart?.questions[0]);
                            setCurrentPart(nextPart);
                        } else {
                            setShowEndModal(true);
                        }
                    }
                }}>
                    Next question
                </button>
            </div>

            <EndModal show={showEndModal} setShow={setShowEndModal}></EndModal>
        </div>
    );
};

export default DetailPartSpeaking;
