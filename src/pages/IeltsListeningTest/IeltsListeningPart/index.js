import { EditorWrap } from "../../../components/Editor";
import { QUESTION_TYPE } from "../../../shared/constant";
import ReactDOMServer from "react-dom/server";
import "./style.css";

const IeltsListeningPart = ({
    ieltsTestPart,
    getUserAnswer,
    handleAnswerChange,
}) => {
    for (const questionGroup of ieltsTestPart.questionGroups) {
        if (questionGroup.type === QUESTION_TYPE.FILL_IN_THE_BLANKS) {
            const inputElements = questionGroup.keys.map(
                (questionKey, index) => (
                    // <input
                    //     key={index}
                    //     type="text"
                    //     placeholder="your answer"
                    //     value={getUserAnswer(questionKey.id)}
                    //     onChange={(event) => {
                    //         console.log("event.target.value", event.target.value);
                    //         handleAnswerChange(questionKey.id, event.target.value);
                    //     }}
                    // ></input>
                    <span>_____{questionKey.questionNumber}_____</span>
                )
            );

            const contentWithInputs = questionGroup.content.replace(
                /{key}/g,
                () => {
                    const nextInput = inputElements.shift();
                    return nextInput
                        ? ReactDOMServer.renderToStaticMarkup(nextInput)
                        : "";
                }
            );
            questionGroup["contentWithInputs"] = contentWithInputs;
        }
    }

    return (
        <div>
            <div className="ielts-listening-part-announcement-container">
                <div
                    id="ielts-listening-part-announcement-1"
                    className="ielts-listening-part-announcement current"
                >
                    <strong>Part 1:</strong>
                    <audio
                        controls
                        id="ielts-listening-test-audio-1"
                        className="ielts-listening-test-audio"
                    >
                        <source
                            src="https://engnovate.com/wp-content/uploads/2023/08/cambridge-ielts-18-academic-listening-1-audio-1.mp3"
                            type="audio/mpeg"
                        />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>

            <div className="test-content ielts-listening-question-container no-ads">
                
            </div>
            {ieltsTestPart.questionGroups.map((questionGroup, index) => {
                return (
                    <div key={index}>
                        <h3>
                            <span>Question {questionGroup.from}</span>
                            {questionGroup.to && (
                                <span>to {questionGroup.to}</span>
                            )}
                        </h3>

                        {(questionGroup.type ===
                            QUESTION_TYPE.FILL_IN_THE_BLANKS && (
                            <div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: questionGroup.contentWithInputs,
                                    }}
                                ></div>

                                {questionGroup.keys.map(
                                    (questionKey, index) => {
                                        return (
                                            <div key={index}>
                                                <span>
                                                    {questionKey.questionNumber}
                                                </span>
                                                <input
                                                    key={index}
                                                    type="text"
                                                    placeholder="your answer"
                                                    value={getUserAnswer(
                                                        questionKey.id
                                                    )}
                                                    onChange={(event) => {
                                                        handleAnswerChange(
                                                            questionKey.id,
                                                            event.target.value
                                                        );
                                                    }}
                                                ></input>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        )) || (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: questionGroup.content,
                                }}
                            ></div>
                        )}

                        {questionGroup.type ===
                            QUESTION_TYPE.MULTIPLE_CHOICE && (
                            <div>
                                {questionGroup.options.map((option, index) => {
                                    return (
                                        <div key={index}>
                                            <input
                                                type="radio"
                                                id={index}
                                                name={questionGroup.id}
                                                value={option.label}
                                                checked={
                                                    getUserAnswer(
                                                        questionGroup.keys[0].id
                                                    ) ===
                                                    questionGroup.options[index]
                                                        .label
                                                }
                                                onChange={(event) => {
                                                    handleAnswerChange(
                                                        questionGroup.keys[0]
                                                            .id,
                                                        event.target.value
                                                    );
                                                }}
                                            ></input>
                                            <label htmlFor={index}>
                                                {option.label}.{option.label}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default IeltsListeningPart;
