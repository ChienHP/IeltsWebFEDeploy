import { useState } from "react";
import { ArrowRight, Flag, InfoCircle } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import configs from "../../configs";

export const EndModal = ({ show, setShow, onClickReviewAnswers }) => {
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        backgroundColor: "#f8f9fa",
                    }}
                >
                    <Modal.Title id="contained-modal-title-vcenter justify-content-center">
                        <div className="fw-bold fs-3">
                            IT’S THE END OF THIS TEST
                        </div>
                    </Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="flex justify-content-center">
                    <Flag size={100} color="orange" className="" />
                </div>
                <div className="text-center mt-4">
                    <strong className="fs-2 text-warning">
                        TEST FINISHED!
                    </strong>
                </div>
                <div className="text-center mt-4">
                    <span className="fs-5 text-warning">
                        You can review your answers recording by clicking the
                        button below
                    </span>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div
                    className=""
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    <button
                        className="my-button-74"
                        onClick={() => onClickReviewAnswers()}
                    >
                        Review My Answers
                    </button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};
