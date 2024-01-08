import { Button, Modal } from "react-bootstrap";
import SingleFileUploader from "../../../components/SingleFileUploader";
import { useState } from "react";
import { updateIeltsListeningPart } from "../../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";

export const UpdateAudioModal = ({ show, setShow, partId }) => {
    const [audioUrl, setAudioUrl] = useState("");
    console.log("audioUrl", audioUrl);
    const handleUpdateAudio = async () => {
        try {
            if (!audioUrl) throw "Please choose a file";

            await updateIeltsListeningPart({
                partId: partId,
                audioSrc: audioUrl,
            });
            toast.success("Update successfully");
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div>
            <Modal
                aria-labelledby="contained-modal-title-vcenter"
                size="lg"
                centered
                show={show}
                onHide={() => setShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span className="fw-bold fs-4">Update Audio</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex align-items-center">
                        <span>
                            <span className="fw-bold">New Audio: </span>
                        </span>
                        <div className="ml-4">
                            <SingleFileUploader
                                setUrl={(url) => {
                                    setAudioUrl(url);
                                }}
                            ></SingleFileUploader>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button
                        type="submit"
                        variant="primary"
                        onClick={async () => {
                            await handleUpdateAudio();
                            setShow(false);
                            window.location.href = window.location.href;
                        }}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
