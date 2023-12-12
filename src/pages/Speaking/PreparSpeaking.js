import Dictaphone from "./Dictaphone";
import {Button} from "react-bootstrap";

const PreparSpeaking = ({setIsStarted}) => {
    return (<div>
        <p className="font-bold text-2xl text-center pt-8 text-[#284664]">
            TEST YOUR MICROPHONE
        </p>
        <div className='flex justify-content-center'>
            <Dictaphone></Dictaphone>
        </div>
        <p className="text-center">You have 20 seconds to speak…</p>
        <p className="text-center">To complete this activity, you must allow access to your system's microphone.
            Click the button
            below to Start.
        </p>
        <div className="flex justify-content-center">
            <Button className="flex justify-content-center w-[200px]" onClick={() => {
                setIsStarted(true)
            }}>Start</Button>
        </div>
    </div>);
};

export default PreparSpeaking;