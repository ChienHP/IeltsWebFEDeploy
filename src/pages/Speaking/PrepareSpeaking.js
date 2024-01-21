import { useState } from "react";
import { MyButton } from "../../components/Button";
import Dictaphone from "./Dictaphone";
import { Button } from "react-bootstrap";

const PrepareSpeaking = ({ setIsStarted }) => {
    const [audioFile, setAudioFile] = useState(null);

    return (
        <div>
            <p className="font-bold text-3xl text-center pt-8 text-red-800">
                TEST YOUR MICROPHONE
            </p>
            <div className="flex justify-content-center mt-36">
                <Dictaphone
                    audioFile={audioFile}
                    setAudioFile={setAudioFile}
                ></Dictaphone>
            </div>
            <p className="text-center mt-4">You have 10 seconds to speak…</p>
            <p className="text-center">
                To complete this activity, you must allow access to your
                system's microphone. Click the button below to{" "}
                <strong>Start</strong>.
            </p>
            <div className="flex justify-content-center mt-4">
                <div onClick={() => setIsStarted(true)}>
                    <MyButton>Start Exam</MyButton>
                </div>
            </div>
        </div>
    );
};

export default PrepareSpeaking;
