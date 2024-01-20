import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { createIeltsSpeakingPart } from "../../apis/ielts-speaking-test.api";

export const CreateIeltsSpeakingPartModal = ({ show, onHide, testId }) => {
    const [formState, setFormState] = useState({
        partNumber: 1,
    });

    const handleSave = async () => {
        try {
            await createIeltsSpeakingPart({
                ...formState,
                testId,
            });
            toast.success("Create successfully");
            onHide();
            window.location.reload();
        } catch (error) {
            toast.error(error);
        }
    };
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <span className="fw-bold fs-4">Create new part</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex align-items-center">
                    <label htmlFor="" className="fw-bold fs-5">
                        Part Number:{" "}
                    </label>
                    <input
                        type="number"
                        className="border-1 border-dark rounded-2xl p-1 ml-2"
                        value={formState.partNumber}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                partNumber: Number(e.target.value),
                            })
                        }
                    ></input>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="my-button-74" onClick={() => handleSave()}>
                    Save
                </button>
            </Modal.Footer>
        </Modal>
    );
};
