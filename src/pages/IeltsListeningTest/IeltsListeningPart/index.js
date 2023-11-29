import { EditorWrap } from "../../../components/Editor";
import { QUESTION_TYPE } from "../../../shared/constant";
import ReactDOMServer from "react-dom/server";
import "./style.css";
import NumberWrapInline from "../../../components/Layouts/components(dungchung)/NumberWrapInline";

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
                    <span>
                        <div key={index} style={{ display: "inline-block" }}>
                            _____
                            <NumberWrapInline
                                number={questionKey.questionNumber}
                            ></NumberWrapInline>
                            _____
                        </div>
                    </span>
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
            <div className="test-content ielts-listening-question-container no-ads ">
                {ieltsTestPart.questionGroups.map((questionGroup, index) => {
                    return (
                        <div
                            key={index}
                            className="border-dotted border-2 border-red-300 rounded-3xl p-4"
                        >
                            <h3 className="text-red-700 font-semibold">
                                <span>
                                    Questions {questionGroup.from + " "}
                                </span>
                                {questionGroup.to && (
                                    <span>- {questionGroup.to}</span>
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
                                                    <NumberWrapInline
                                                        number={
                                                            questionKey.questionNumber
                                                        }
                                                    ></NumberWrapInline>
                                                    <input
                                                        className="border-slate-900	border-1 rounded-2xl p-2 m-2 focus:outline-red-800"
                                                        key={index}
                                                        type="text"
                                                        value={getUserAnswer(
                                                            questionKey.id
                                                        )}
                                                        onChange={(event) => {
                                                            handleAnswerChange(
                                                                questionKey.id,
                                                                event.target
                                                                    .value
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
                                    className="m-3"
                                    dangerouslySetInnerHTML={{
                                        __html: questionGroup.content,
                                    }}
                                ></div>
                            )}

                            {questionGroup.type ===
                                QUESTION_TYPE.MULTIPLE_CHOICE && (
                                <div>
                                    {questionGroup.options.map(
                                        (option, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="test-panel__answer-item"
                                                >
                                                    <label
                                                        htmlFor={index}
                                                        className="answer-option"
                                                    >
                                                        {option.label}
                                                    </label>
                                                    <input
                                                        className="iot-radio"
                                                        type="radio"
                                                        id={index}
                                                        name={questionGroup.id}
                                                        value={option.label}
                                                        checked={
                                                            getUserAnswer(
                                                                questionGroup
                                                                    .keys[0].id
                                                            ) ===
                                                            questionGroup
                                                                .options[index]
                                                                .label
                                                        }
                                                        onChange={(event) => {
                                                            handleAnswerChange(
                                                                questionGroup
                                                                    .keys[0].id,
                                                                event.target
                                                                    .value
                                                            );
                                                        }}
                                                    ></input>
                                                    <label htmlFor={index}>
                                                        {option.content}
                                                    </label>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            )}

                            {questionGroup.type === QUESTION_TYPE.MATCHING && (
                                <div>
                                    <table
                                        key={index}
                                        className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                    >
                                        <tbody>
                                            {questionGroup.options.map(
                                                (option, index) => {
                                                    return (
                                                        <tr
                                                            key={index}
                                                            className="bg-white border-b border-gray-700 text-gray-700 hover:text-red-800"
                                                        >
                                                            <td className="px-4 py-2 font-bold">
                                                                {option.label}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                {option.content}
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {questionGroup.type === QUESTION_TYPE.MATCHING && (
                                <div>
                                    {questionGroup.keys.map(
                                        (questionKey, index) => {
                                            return (
                                                <div key={index}>
                                                    <NumberWrapInline
                                                        number={
                                                            questionKey.questionNumber
                                                        }
                                                    ></NumberWrapInline>
                                                    <select
                                                        className="iot-option outline-red-800"
                                                        value={getUserAnswer(
                                                            questionKey.id
                                                        )}
                                                        onChange={(event) => {
                                                            handleAnswerChange(
                                                                questionKey.id,
                                                                event.target
                                                                    .value
                                                            );
                                                        }}
                                                    >
                                                        <option value="">{`Choose your answer`}</option>
                                                        {questionGroup.options.map(
                                                            (option, index) => {
                                                                return (
                                                                    <option
                                                                        key={
                                                                            index
                                                                        }
                                                                        value={
                                                                            option.label
                                                                        }
                                                                    >
                                                                        {
                                                                            option.label
                                                                        }
                                                                    </option>
                                                                );
                                                            }
                                                        )}
                                                    </select>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default IeltsListeningPart;
