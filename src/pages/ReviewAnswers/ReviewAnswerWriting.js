import { Pencil } from "react-bootstrap-icons";
import { Button } from "../../components/Button";
import {
    evaluateWritingPartAnswer,
    requestToGetEvaluatedByExaminer,
} from "../../apis/ielts-test.api";
import { toast } from "react-toastify";
import { AuthContext } from "../login/authContext";
import { useContext, useEffect } from "react";
import { Role } from "../../shared/constant";
import { EditorWrap } from "../../components/Editor";
import { useState } from "react";

export const ReviewAnswersWriting = ({ testResult }) => {
    const { user } = useContext(AuthContext);
    const [evaluates, setEvaluates] = useState([]);

    useEffect(() => {
        const temp = testResult?.userAnswers.map((item) => {
            return {
                partId: item?.partId,
                score: item?.score,
                comment: item?.comment,
            };
        });
        setEvaluates(temp);
    }, [testResult]);

    const handleRequestToEvaluate = async () => {
        try {
            await requestToGetEvaluatedByExaminer(testResult?.id);
            toast.success("Request sent successfully");
        } catch (error) {
            toast.error(error);
        }
    };

    const handleEvaluate = async (partId) => {
        try {
            const evaluate = evaluates.find((e) => e.partId === partId);
            await evaluateWritingPartAnswer({
                testResultId: testResult?.id,
                partId,
                score: evaluate.score,
                comment: evaluate.comment,
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
                        <Pencil size={50} color="orange" className=""></Pencil>
                    </div>
                    <span className="fs-2 fw-bold ml-4">Yours Answer</span>
                </div>
                {user?.roles.includes(Role.User) && (
                    <div className="d-flex">
                        <div className="ml-">
                            <Button>Evaluate with AI</Button>
                        </div>
                        <div className="ml-4">
                            <Button onClick={() => handleRequestToEvaluate()}>
                                Request to evaluate
                            </Button>
                        </div>
                    </div>
                )}
            </div>
            <div className="mt-4">
                {testResult?.userAnswers.map((item, index) => {
                    const evaluate = evaluates.find(
                        (e) => e.partId === item?.partId
                    );
                    return (
                        <div
                            key={index}
                            className="border-double border-4 border-red-800 rounded-3xl mb-16"
                        >
                            <div className="p-8">
                                <div className="fs-2 text-red-800 fw-bold text-center">
                                    Part {item?.partNumber}
                                </div>
                                <div
                                    className="mt-4"
                                    style={{ display: "flex" }}
                                >
                                    <div
                                        className="border-dashed border-4 border-red-800 rounded-3xl p-4"
                                        style={{ flex: "1 0 55%" }}
                                    >
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: item?.question,
                                            }}
                                        ></div>
                                    </div>
                                    <div
                                        className="border-double border-4 border-red-800 rounded-3xl p-4 ml-4 text-red-700 fs-5"
                                        style={{ flex: "1 0 45%" }}
                                    >
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: item?.answer,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    {user?.roles.includes(Role.Examiner) && (
                                        <EditorWrap
                                            value={evaluate?.comment}
                                            onChange={(value) => {
                                                evaluate.comment = value;
                                                setEvaluates([...evaluates]);
                                            }}
                                        ></EditorWrap>
                                    )}
                                    {!user?.roles.includes(Role.Examiner) && (
                                        <div
                                            className="border-dashed border-4 border-red-800 rounded-3xl p-4"
                                            dangerouslySetInnerHTML={{
                                                __html: evaluate?.comment,
                                            }}
                                        ></div>
                                    )}
                                    <div
                                        className="mt-4"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <div className="fs-2 fw-bold text-red-800">
                                            Score:
                                        </div>
                                        {(user?.roles.includes(
                                            Role.Examiner
                                        ) && (
                                            <input
                                                className="border-slate-900	border-1 rounded-2xl p-2 focus:outline-red-800 ml-4"
                                                key={index}
                                                type="number"
                                                value={evaluate?.score || ""}
                                                onChange={(e) => {
                                                    evaluate.score = Number(
                                                        e.target.value
                                                    );
                                                    setEvaluates([
                                                        ...evaluates,
                                                    ]);
                                                }}
                                            ></input>
                                        )) || (
                                            <div className="fs-2 fw-bold text-red-800 ml-4 border-solid border-3 border-red-800 rounded-3xl p-4">
                                                {evaluate?.score}
                                            </div>
                                        )}
                                    </div>

                                    {user?.roles.includes(Role.Examiner) && (
                                        <div
                                            className="mt-4"
                                            style={{
                                                display: "flex",
                                                justifyContent: "right",
                                            }}
                                        >
                                            <Button
                                                onClick={() =>
                                                    handleEvaluate(item?.partId)
                                                }
                                            >
                                                Save
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
