import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    deleteQuestionGroup,
    getIeltsTestDetail,
    getIeltsTestPartList,
} from "../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";
import { EditorWrap } from "../../components/Editor";
import { createIeltsReadingPart } from "../../apis/ielts-reading-test.api";
import { Collapse, Nav } from "react-bootstrap";
import IeltsReadingPartForm from "./IeltsReadingPartForm";
import { CreateReadingPartModal } from "./CreateReadingPartModal";
import IeltsListeningQuestions from "../IeltsListeningQuestions";

const AdminIeltsReadingPart = () => {
    const { testId } = useParams();
    const [test, setTest] = useState(null);
    const [ieltsParts, setIeltsParts] = useState(null);
    const [ieltsPart, setIeltsPart] = useState(null);
    const [showCreatePartModal, setShowCreatePartModal] = useState(false);
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
                setIeltsParts(res.data);
                setIeltsPart(res.data[0]);
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
                <div className="my-button-74" onClick={() => setShowCreatePartModal(!showCreatePartModal)}>
                    Create new part
                </div>
            </div>
            
            <Nav justify variant="tabs" defaultActiveKey="">
                {ieltsParts?.map((item, index) => {
                    return (
                        <Nav.Item
                            key={index}
                            onClick={() => {
                                console.log("heeh");
                                setIeltsPart(item);
                            }}
                        >
                            <Nav.Link eventKey={index}>
                                <span className="fw-bold fs-5">
                                    Part number {item.partNumber}
                                </span>
                            </Nav.Link>
                        </Nav.Item>
                    );
                })}
            </Nav>

            {ieltsPart && (
                <div className="border-2 border-dotted border-black p-4 mt-4 rounded-2xl">
                    <IeltsReadingPartForm
                        mode="update"
                        ieltsReadingPart={ieltsPart}
                    ></IeltsReadingPartForm>
                </div>
            )}

            <CreateReadingPartModal show={showCreatePartModal} setShow={setShowCreatePartModal} testId={Number(testId)}></CreateReadingPartModal>

            <div className="border-2 border-black border-dotted rounded-2xl mt-4 px-4">
                {ieltsPart?.questionGroups?.length > 0 &&
                    ieltsPart?.questionGroups?.map((item, index) => {
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
                                        partId={ieltsPart?.id}
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
                                partId={ieltsPart?.id}
                                mode="create"
                            ></IeltsListeningQuestions>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    );
};

export default AdminIeltsReadingPart;
