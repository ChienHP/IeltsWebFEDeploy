import { useState } from "react";
import { ArrowRight, InfoCircle } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import configs from "../../configs";

export const SubmitModal = ({ children, handleSubmitAnswers }) => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div
                show={show.toString()}
                onClick={() => {
                    setShow(!show);
                }}
            >
                {children}
            </div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter justify-content-center"></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="flex justify-content-center">
                        <InfoCircle size={100} color="orange" className="" />
                    </div>
                    <div className="text-center mt-4">
                        <strong className="fs-2 text-warning">
                            Are you sure you want to submit result?
                        </strong>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => setShow(false)}
                    >
                        Cancel
                    </button>
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleSubmitAnswers()}>
                        Submit and Review Answers
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
