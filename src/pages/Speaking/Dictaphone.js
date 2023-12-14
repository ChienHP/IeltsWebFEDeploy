import React, { useState } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

const Dictaphone = ({audioFile, setAudioFile}) => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition();
    // const [isRecording, setIsRecording] = useState(false);
    const [audio, setAudio] = useState(null);

    const recorderControls = useAudioRecorder(
        {
            noiseSuppression: true,
            echoCancellation: true,
        },
        (err) => console.table(err) // onNotAllowedOrFound
    );
    const onRecordingComplete = (blob) => {
        const url = URL.createObjectURL(blob);
        var file = new File([blob],'audioSpeaking' + Date.now(),{ type:"audio/wav" })
        setAudio(url);
        setAudioFile(file)
    };
    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    const handleStart = () => {
        SpeechRecognition.startListening();
        setAudio(null);
        setAudioFile(null);
        // setIsRecording(!isRecording)
    };
    const handleStop = () => {
        SpeechRecognition.stopListening();
        recorderControls.stopRecording();
    };

    return (
        <div className="flex-col flex gap-3" style={{ alignItems: "center" }}>
            {audio && audioFile && (
                <div>
                    <audio className="my-audio-player" src={audio} controls />
                </div>
            )}
            <button onClick={() => handleStart()}>
                <AudioRecorder
                    onRecordingComplete={(blob) => onRecordingComplete(blob)}
                    recorderControls={recorderControls}
                    // downloadOnSavePress={true}
                    // downloadFileExtension="mp3"
                    // showVisualizer={true}
                />
            </button>

            {/* <button onClick={resetTranscript} className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
            </svg>
            Reset
        </button> */}
        </div>
    );
};
export default Dictaphone;
