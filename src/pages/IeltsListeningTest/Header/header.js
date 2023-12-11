import { Button } from "react-bootstrap";
import "./style.css";
import CountdownTimer from "../../../components/CountdownTimer";
import { toast } from "react-toastify";

export const Header = ({handleSubmitAnswers}) => {
    const toggleFullscreen = () => {
        const fullscreenElement =
            document.fullscreenElement || document.webkitFullscreenElement;
        if (fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.body.requestFullscreen();
        }
    };

    const handleTimeExpired = () => {
        handleSubmitAnswers();
    };
    return (
        <div className="d-flex justify-content-between align-items-center border-bottom border-danger border-bottom p-2">
            <Button className="btn-secondary d-flex">Back</Button>
            <div className="d-flex">
                <i className="fa-sharp fa-regular fa-clock fa-2xl pt-3 pr-2"></i>
                <span className="pt-1">
                    <CountdownTimer initialTime={2400} onTimeExpired={() => handleTimeExpired()} />
                </span>
            </div>
            <Button className="button d-flex" onClick={() => handleSubmitAnswers()}>Submit</Button>
        </div>
    );
};
