import { useEffect, useState } from "react";
import { Button, Collapse, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
    deleteQuestionGroup,
    getIeltsTestDetail,
    getIeltsTestPartList,
} from "../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";
import CreateListeningIeltsPartForm from "./CreateListeningIeltsPartForm";
import { UpdateAudioModal } from "./UpdateAudioModal/UpdateAudioModal";
import { AudioAndUpdate } from "./AudioAndUpdate";
import IeltsListeningQuestions from "../IeltsListeningQuestions";

export const AdminIeltsListeningPart = () => {
    const { testId } = useParams();
    const [test, setTest] = useState(null);
    const [ieltsListeningParts, setIeltsListeningParts] = useState(null);
    const [ieltsListeningPart, setIeltsListeningPart] = useState(null);

    const [openCollapseCreateQuestions, setOpenCollapseCreateQuestions] =
        useState(false);
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
                const res = await getIeltsTestPartList(testId);
                setIeltsListeningParts(res.data);
                setIeltsListeningPart(res.data[0]);
            } catch (error) {
                toast.error(error);
            }
        })();
    }, []);

    const handleRemoveQuestionGroup = async (questionGroupId) => {
        try {
            const res = await deleteQuestionGroup(questionGroupId);
            toast.success("Remove successfully");
            window.location.reload();
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div>
            <div className="fw-bold fs-2">{test?.name}</div>
            <div className="d-flex justify-content-end mt-4 mb-4">
                <div className="my-button-74">
                    <CreateListeningIeltsPartForm
                        mode="create"
                        testId={test?.id}
                    ></CreateListeningIeltsPartForm>
                </div>
            </div>

            <Nav justify variant="tabs" defaultActiveKey="">
                {ieltsListeningParts &&
                    ieltsListeningParts.map((item, index) => {
                        return (
                            <Nav.Item key={index}>
                                <Nav.Link
                                    eventKey={index}
                                    onClick={() => setIeltsListeningPart(item)}
                                >
                                    <span className="fw-bold fs-5">
                                        Part number {item.partNumber}
                                    </span>
                                </Nav.Link>
                            </Nav.Item>
                        );
                    })}
            </Nav>

            <div className="d-flex justify-content-center mt-4">
                {ieltsListeningPart && (
                    <AudioAndUpdate
                        ieltsListeningPart={ieltsListeningPart}
                    ></AudioAndUpdate>
                )}
            </div>

            <div className="border-2 border-black border-dotted rounded-2xl mt-4 px-4">
                {ieltsListeningPart?.questionGroups?.length > 0 &&
                    ieltsListeningPart?.questionGroups?.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="d-flex align-items-center">
                                    <button className="my-button-74 mt-4 mb-4">
                                        Questions {item.from}{" "}
                                        {item.to ? "to " + item.to : ""}
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleRemoveQuestionGroup(item.id)
                                        }
                                        className="border-2 text-red-600 border-red-600 rounded-2xl p-1 ml-2"
                                    >
                                        Remove
                                    </button>
                                </div>

                                <div>
                                    <IeltsListeningQuestions
                                        partId={ieltsListeningPart?.id}
                                        mode="read"
                                        questionGroup={item}
                                    ></IeltsListeningQuestions>
                                </div>
                            </div>
                        );
                    })}

                <div>
                    <button
                        onClick={() =>
                            setOpenCollapseCreateQuestions(
                                !openCollapseCreateQuestions
                            )
                        }
                        className="my-button-74 mb-4 mt-4"
                    >
                        Add new questions
                    </button>
                    <Collapse in={openCollapseCreateQuestions}>
                        <div>
                            <IeltsListeningQuestions
                                partId={ieltsListeningPart?.id}
                                mode="create"
                            ></IeltsListeningQuestions>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    );
};

export default AdminIeltsListeningPart;
