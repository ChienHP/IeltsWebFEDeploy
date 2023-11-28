import {Button} from "react-bootstrap";
import './style.css'

export const Header = () => {
    const toggleFullscreen = () => {
        const fullscreenElement =
            document.fullscreenElement || document.webkitFullscreenElement;
        if (fullscreenElement) {
            document.exitFullscreen();
        }else{
            document.body.requestFullscreen();
        }
    };
    return (
        <div className="pt-2 flex justify-content-evenly sticky">
            <div className="flex">
                <i className="fa-sharp fa-regular fa-clock fa-2xl pt-3 pr-2"></i>
                <span className="pt-1">30 minutes remaining</span>
            </div>
            <div className="flex gap-3" title={'nhấn để mở full màn hình'}>
                <i className="fa-thin fa-expand fa-2xl pt-3" onClick={toggleFullscreen}>full screen mode</i>
                <Button className="button">Submit</Button>
            </div>
        </div>
    )
}