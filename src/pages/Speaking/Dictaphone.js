import React, {useState} from 'react';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import {AudioRecorder, useAudioRecorder} from "react-audio-voice-recorder";

const Dictaphone = () => {
    const {
        transcript, listening, resetTranscript, browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    const [isRecording, setIsRecording] = useState(false);
    const recorderControls = useAudioRecorder({
            noiseSuppression: true, echoCancellation: true,
        }, (err) => console.table(err) // onNotAllowedOrFound
    );
    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement('audio');
        audio.src = url;
        audio.controls = true;
        document.body.appendChild(audio);
    };
    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    const handleStart = () => {
        SpeechRecognition.startListening()
        setIsRecording(!isRecording)
    }
    const handleStop = () => {
        SpeechRecognition.stopListening()
        recorderControls.stopRecording()
    }


    return (<div className="flex-col flex gap-3">
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button onClick={() => handleStart()} className="flex gap-2">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg> */}
            <AudioRecorder
                onRecordingComplete={(blob) => addAudioElement(blob)}
                recorderControls={recorderControls}
                // downloadOnSavePress={true}
                // downloadFileExtension="mp3"
                // showVisualizer={true}
            />
            {isRecording ? 'Stop Recording' : 'Start Recording'}
        </button>
        <button onClick={() => handleStop()} className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"/>
            </svg>
            Stop
        </button>
        <button onClick={resetTranscript} className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
            </svg>
            Reset
        </button>
        <p>{transcript}</p>

    </div>);
};
export default Dictaphone;