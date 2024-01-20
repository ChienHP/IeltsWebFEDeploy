import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIeltsTestDetail } from "../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";
import {
    createOneSpeakingQuestion,
    getIeltsSpeakingPartList,
} from "../../apis/ielts-speaking-test.api";
import { Nav } from "react-bootstrap";
import { CreateIeltsSpeakingPartModal } from "./CreateIeltsSpeakingPartModal";

const initQuestionForm = {
    questionNumber: 0,
    content: "",
};

export const AdminIeltsSpeakingParts = () => {
    const { testId } = useParams();
    const [test, setTest] = useState(null);
    const [ieltsParts, setIeltsParts] = useState(null);
    const [ieltsPart, setIeltsPart] = useState(null);
    const [showCreateSpeakingPartModal, setShowCreateSpeakingPartModal] =
        useState(false);
    const [questionForm, setQuestionForm] = useState(initQuestionForm);

    useEffect(() => {
        (async () => {
            try {
                const res = await getIeltsTestDetail(testId);
                setTest(res.data);
            } catch (error) {
                toast.error(error);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const res = await getIeltsSpeakingPartList(testId);
                setIeltsParts(res.data);
                setIeltsPart(res.data[0]);
                console.log("res.data", res.data[0]);
            } catch (error) {
                toast.error(error);
            }
        })();
    }, []);

    const handleCreateQuestion = async () => {
        try {
            await createOneSpeakingQuestion({
                partId: ieltsPart.id,
                ...questionForm,
            });
            toast.success("Create successfully");
            setQuestionForm(initQuestionForm);
            window.location.reload();
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div>
            <h3>{test?.name}</h3>
            <div className="mt-4 d-flex justify-content-end mr-2">
                <button
                    className="my-button-74"
                    onClick={() => setShowCreateSpeakingPartModal(true)}
                >
                    Create new part
                </button>

                <CreateIeltsSpeakingPartModal
                    show={showCreateSpeakingPartModal}
                    onHide={() => setShowCreateSpeakingPartModal(false)}
                    testId={Number(testId)}
                ></CreateIeltsSpeakingPartModal>
            </div>
            <div className="mt-4">
                <Nav justify variant="tabs" defaultActiveKey="">
                    {ieltsParts &&
                        ieltsParts.map((item, index) => {
                            return (
                                <Nav.Item key={index}>
                                    <Nav.Link
                                        eventKey={index}
                                        onClick={() => setIeltsPart(item)}
                                    >
                                        <span className="fw-bold fs-5">
                                            Part number {item.partNumber}
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                            );
                        })}
                </Nav>
            </div>

            {ieltsPart && (
                <div className="mt-2 border-1 border-dark rounded-2xl p-3">
                    <div className="fw-bold fs-4">
                        Current questions: {ieltsPart?.questions?.length}
                    </div>
                    <div className="mt-2 mr-2 border-1 border-dark rounded-2xl p-3">
                        {ieltsPart.questions.map((item, index) => {
                            return (
                                <div key={index} className="border-1 border-dark rounded-2xl p-1 mb-3">
                                    <div>
                                        <span className="fw-bold fs-5">
                                            Question Number:{" "}
                                            {item.questionNumber}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="fw-bold fs-5">
                                            Content:
                                        </span>
                                        <span className="ml-2 fs-5">
                                            {item.content}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-4">
                        <div className="fw-bold fs-4">Create new question</div>
                        <div className="border-1 border-dark rounded-2xl p-3">
                            <div className="d-flex align-items-center">
                                <span className="fw-bold fs-5">
                                    Question number:{" "}
                                </span>
                                <input
                                    type="number"
                                    className="border-1 border-dark rounded-2xl p-1 ml-2"
                                    value={questionForm.questionNumber}
                                    onChange={(e) =>
                                        setQuestionForm({
                                            ...questionForm,
                                            questionNumber: Number(
                                                e.target.value
                                            ),
                                        })
                                    }
                                ></input>
                            </div>
                            <div className="d-flex align-items-center mt-2">
                                <span className="fw-bold fs-5">Content: </span>
                                <input
                                    type="text"
                                    className="border-1 border-dark rounded-2xl p-1 ml-2 w-100"
                                    value={questionForm.content}
                                    onChange={(e) =>
                                        setQuestionForm({
                                            ...questionForm,
                                            content: e.target.value,
                                        })
                                    }
                                ></input>
                            </div>
                            <div className="d-flex justify-content-end mt-2 mr-2">
                                <button
                                    className="my-button-74"
                                    onClick={() => handleCreateQuestion()}
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminIeltsSpeakingParts;
