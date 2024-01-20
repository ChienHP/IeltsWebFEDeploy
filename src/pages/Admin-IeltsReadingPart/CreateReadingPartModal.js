import { Button, Modal } from "react-bootstrap";
import IeltsReadingPartForm from "./IeltsReadingPartForm";
export const CreateReadingPartModal = ({ show, setShow, testId }) => {
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
                        <span className="fw-bold fs-4">Create Reading Passage</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <IeltsReadingPartForm mode='create' testId={testId}></IeltsReadingPartForm>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
