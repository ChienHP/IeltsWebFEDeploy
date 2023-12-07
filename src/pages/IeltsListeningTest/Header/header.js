import { Button } from "react-bootstrap";
import "./style.css";
import CountdownTimer from "../../../components/CountdownTimer";
import { toast } from "react-toastify";
import { SubmitModal } from "../../../components/SubmitModal/submitModal";
import { useState } from "react";

export const Header = ({ handleSubmitAnswers }) => {
    const handleTimeExpired = () => {
        handleSubmitAnswers();
    };
    return (
        <div className="d-flex justify-content-between align-items-center border-bottom border-danger border-bottom p-2">
            <Button className="btn-secondary d-flex">Back</Button>
            <div className="d-flex">
                <i className="fa-sharp fa-regular fa-clock fa-2xl pt-3 pr-2"></i>
                <span className="pt-1">
                    <CountdownTimer
                        initialTime={2400}
                        onTimeExpired={() => handleTimeExpired()}
                    />
                </span>
            </div>
            {/* <Button
                className="button d-flex"
                onClick={() => setShowSubmitModal(true)}
            >
                Submit
            </Button> */}

            {/* <SubmitModal show={showSubmitModal} onHide={() => setShowSubmitModal(false)}></SubmitModal> */}

            <SubmitModal handleSubmitAnswers={handleSubmitAnswers}>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                    Submit
                </button>
            </SubmitModal>
        </div>
    );
};
