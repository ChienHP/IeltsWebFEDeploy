import Dictaphone from "./Dictaphone";
import {Button} from "react-bootstrap";
import PreparSpeaking from "./PreparSpeaking";
import {useState} from "react";
import DetailPartSpeaking from "./DetailPartSpeaking";

const SpeakingDetailWrapper = () => {
    const [isStarted, setIsStarted] = useState(false)
    const dataMock = [{
        part: '1',
        contentPart:' INTRODUCTION AND INTERVIEW',
        question: ["Question 1", "Question 2", "Question 3"],
    }, {
        part: '2',
        question: ["Question 1", "Question 2", "Question 3", "Question 4"],
    }]
    return (<div>
        <div className="w-full h-full flex justify-content-center mt-[100px] px-[300px]">
            <div className="w-[1000px] h-[480px] bg-[#f3f3f3] rounded-md">
                {isStarted ? <DetailPartSpeaking dataMock={dataMock[0]}/> : <PreparSpeaking setIsStarted={setIsStarted}/>}
            </div>
        </div>
    </div>);
};

export default SpeakingDetailWrapper;