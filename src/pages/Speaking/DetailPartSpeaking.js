import Dictaphone from "./Dictaphone";
import {Button} from "react-bootstrap";
import PreparSpeaking from "./PreparSpeaking";
import {useState} from "react";

const DetailPartSpeaking = ({dataMock}) => {
    const [isStarted, setIsStarted] = useState(false)
    return (<div className="w-full h-full">
        <div className='flex justify-content-between pt-6 mx-3'>
            <div className="flex justify-content-center">
                <Button className="flex justify-content-center w-[200px]  bg-[#C76378]" onClick={() => {
                }}>Reset This Part</Button>
            </div>
            <p className="font-bold text-2xl mt-3"> {`PART ${dataMock?.part} ${dataMock?.contentPart}`}</p>
            <div className="flex justify-content-center">
                <Button className="flex justify-content-center w-[200px] bg-[#C76378]" onClick={() => {
                }}>Next Part</Button>
            </div>
        </div>
        <div className="w-full flex flex-col justify-content-between items-center h-full font-bold text-2xl">
            <div>
                <p className='text-center'>{`${dataMock?.question[0]}`}</p>

                <Dictaphone/>
            </div>
            <div className="text-center">
                YOU CAN CLICK NEXT PART TO CONTINUE PART 2
                OR RESET THIS PART TO RECORD AGAIN
                Note: your recording will not be saved when reset
            </div>
        </div>

    </div>);
};

export default DetailPartSpeaking;