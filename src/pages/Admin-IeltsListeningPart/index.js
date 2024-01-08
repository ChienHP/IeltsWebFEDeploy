import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
    getIeltsTestDetail,
    getIeltsTestPartList,
} from "../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";
import CreateListeningIeltsPartForm from "./CreateListeningIeltsPartForm";
import { UpdateAudioModal } from "./UpdateAudioModal/UpdateAudioModal";

export const AdminIeltsListeningPart = () => {
    const { testId } = useParams();
    const [test, setTest] = useState(null);
    const [ieltsListeningParts, setIeltsListeningParts] = useState(null);
    const [ieltsListeningPart, setIeltsListeningPart] = useState(null);
    const [showUpdateAudioModal, setShowUpdateAudioModal] = useState(false);

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
                    <div className="d-flex justify-content-center">
                        <audio
                            controls
                            className="my-audio-player"
                            style={{ width: "500px" }}
                            key={ieltsListeningPart?.partDetail?.audioSrc}
                        >
                            <source
                                src={ieltsListeningPart?.partDetail?.audioSrc}
                            ></source>
                        </audio>

                        <button
                            className="my-button-74"
                            onClick={() => setShowUpdateAudioModal(true)}
                        >
                            Update
                        </button>

                        <UpdateAudioModal
                            show={showUpdateAudioModal}
                            setShow={setShowUpdateAudioModal}
                            partId={ieltsListeningPart?.id}
                        ></UpdateAudioModal>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminIeltsListeningPart;
