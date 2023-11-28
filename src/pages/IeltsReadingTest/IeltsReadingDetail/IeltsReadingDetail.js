import {ContentTopic} from "./ContentTopic";
import {ResultAnswer} from "./ResultAnswer";
import {Header} from "./Header"
import Split from 'react-split-it';
import './style.css'
import {useRef} from "react";
export const IeltsReadingDetail = () => {

    return (
        <div className="relative bg-[#faebd7]">
                <Header />
            <div className="pt-4">
                <Split className="flex h-full w-full flex-1">
                    <ContentTopic/>
                    <ResultAnswer/>
                </Split>
            </div>
        </div>
    )
}