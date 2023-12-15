import {
    CardChecklist,
    Pencil,
    QuestionCircle,
    RecordCircle,
} from "react-bootstrap-icons";
import { MyButton } from "../../components/Button";
import {
    evaluateSpeakingTestAnswer,
    requestToGetEvaluatedByExaminer,
} from "../../apis/ielts-test.api";
import { toast } from "react-toastify";
import { AuthContext } from "../login/authContext";
import { useContext, useEffect } from "react";
import { Role } from "../../shared/constant";
import { EditorWrap } from "../../components/Editor";
import { useState } from "react";

export const ReviewAnswersSpeaking = ({ testResult }) => {
    const { user } = useContext(AuthContext);
    const [evaluate, setEvaluate] = useState({
        score: 0,
        comment: "",
    });

    const handleRequestToEvaluate = async () => {
        try {
            await requestToGetEvaluatedByExaminer(testResult?.id);
            toast.success("Request sent successfully");
        } catch (error) {
            toast.error(error);
        }
    };

    const handleEvaluate = async () => {
        try {
            await evaluateSpeakingTestAnswer({
                testResultId: testResult?.id,
                score: evaluate?.score,
                comment: evaluate?.comment,
            });
            toast.success("Save successfully");
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div className="m-8">
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                    <div className="">
                        <RecordCircle
                            size={50}
                            color="red"
                            className=""
                        ></RecordCircle>
                    </div>
                    <span className="fs-2 fw-bold ml-4">MY RECORDINGS</span>
                </div>
                {user?.roles.includes(Role.User) && (
                    <div className="d-flex">
                        <div className="ml-">
                            <MyButton>Evaluate with AI</MyButton>
                        </div>
                        <div className="ml-4">
                            <MyButton onClick={() => handleRequestToEvaluate()}>
                                Request to evaluate
                            </MyButton>
                        </div>
                    </div>
                )}
            </div>
            <div className="m-4">
                <div
                    className=""
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {testResult?.userAnswers.map((item) => {
                        return (
                            <div className="border-double border-4 border-green-800 rounded-3xl p-2 mt-4">
                                <div className="d-flex fw-bold fs-5 d-flex align-items-center">
                                    <QuestionCircle
                                        color="green"
                                        size={40}
                                    ></QuestionCircle>
                                    <div className="ml-4">
                                        Question {item?.questionNumber}:{" "}
                                        {item?.question}
                                    </div>
                                </div>
                                <div className="mt-2 ml-64">
                                    <audio
                                        className="my-audio-player"
                                        style={{ width: "500px" }}
                                        src={item?.answer}
                                        controls
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-4">
                    <div className="d-flex align-items-center">
                        <CardChecklist color="orange" size={60}></CardChecklist>
                        <span className="fs-2 fw-bold ml-4">
                            Examiner's Evaluation
                        </span>
                    </div>
                    <div className="mt-2 border-4 border-double border-orange-300 hover:border-orange-700 rounded-3xl p-4">
                        {user.roles.includes(Role.Examiner) ? (
                            <div>
                                <EditorWrap
                                    value={evaluate?.comment}
                                    onChange={(value) =>
                                        setEvaluate({
                                            ...evaluate,
                                            comment: value,
                                        })
                                    }
                                ></EditorWrap>
                                <div className="d-flex mt-4">
                                    <div className="fs-2 fw-bold text-red-800">
                                        Score:
                                    </div>
                                    <input
                                        className="border-slate-900	border-1 rounded-2xl p-2 focus:outline-red-800 ml-4"
                                        type="number"
                                        value={evaluate?.score}
                                        onChange={(e) =>
                                            setEvaluate({
                                                ...evaluate,
                                                score: Number(e.target.value),
                                            })
                                        }
                                    ></input>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button
                                        className="my-button-74"
                                        onClick={() => handleEvaluate()}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: testResult?.comment,
                                    }}
                                ></div>
                                <div className="d-flex mt-4 align-items-center">
                                    <div className="fs-2 fw-bold text-red-800">
                                        Score:
                                    </div>
                                    <div className="fs-2 fw-bold text-red-800 ml-4 border-solid border-3 border-red-800 rounded-3xl p-4">
                                        {testResult?.bandScore}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <div className="mr-8 fw-bold fs-4">
                                        Reviewed By:
                                        <span className="ml-4 text-green-800">{testResult?.reviewerName}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
