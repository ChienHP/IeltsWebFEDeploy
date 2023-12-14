import { useState } from "react";
import DetailPartSpeaking from "./DetailPartSpeaking";
import PrepareSpeaking from "./PrepareSpeaking";

const SpeakingDetailWrapper = () => {
    const [isStarted, setIsStarted] = useState(false);
    return (
        <div>
            <div className="w-full h-full flex justify-content-center mt-[50px] px-[200px]">
                <div className="w-[1200px] h-[500px] bg-[#f3f3f3] border-double border-4 border-red-800 rounded-3xl flex justify-content-center overflow-hidden"
                style={{
                    background: '#FBEEEE',
                    boxShadow: "#422800 4px 4px 0 0",
                }}
                >
                    {isStarted ? (
                        <DetailPartSpeaking />
                    ) : (
                        <PrepareSpeaking setIsStarted={setIsStarted} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SpeakingDetailWrapper;
