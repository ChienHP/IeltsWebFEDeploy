import React, { Fragment, useEffect, useRef, useState } from "react";
import { QUESTION_TYPE, TYPE_OF_QUESTION_LABEL } from "../../shared/constant";
import { EditorWrap } from "../../components/Editor/index";
import { createIeltsListeningQuestions } from "../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";

const initialFormState = {
    partId: 0,
    type: "",
    from: 0,
    to: 0,
    content: "",
    typeOfLabel: "",
    listOfOptions: [],
    listOfKeys: [],
    listOfQuestions: [],
};

const IeltsListeningQuestions = ({ partId, questionGroup, mode }) => {
    const [formState, setFormState] = useState(initialFormState);
    useEffect(() => {
        const numberOfQuestion = formState.to - formState.from + 1;
        const newListOfKeys = formState.listOfKeys;

        if (numberOfQuestion < 0) {
            return;
        }

        if (formState.from && formState.to) {
            while (newListOfKeys.length !== numberOfQuestion) {
                if (newListOfKeys.length < numberOfQuestion) {
                    newListOfKeys.push("");
                } else {
                    newListOfKeys.pop();
                }
            }
        } else if (formState.from) {
            while (newListOfKeys.length !== 1) {
                if (newListOfKeys.length < 1) {
                    newListOfKeys.push("");
                } else {
                    newListOfKeys.pop();
                }
            }
        }

        const newListOfQuestions = formState.listOfQuestions;

        if (numberOfQuestion < 0) {
            return;
        }

        if (formState.from && formState.to) {
            while (newListOfQuestions.length !== numberOfQuestion) {
                if (newListOfQuestions.length < numberOfQuestion) {
                    newListOfQuestions.push("");
                } else {
                    newListOfQuestions.pop();
                }
            }
        } else if (formState.from) {
            while (newListOfQuestions.length !== 1) {
                if (newListOfQuestions.length < 1) {
                    newListOfQuestions.push("");
                } else {
                    newListOfQuestions.pop();
                }
            }
        }

        setFormState({
            ...formState,
            listOfKeys: newListOfKeys,
        });
    }, [formState.from, formState.to]);

    useEffect(() => {
        if (mode == "read") {
            setFormState({
                partId: questionGroup?.partId,
                type: questionGroup?.type,
                from: questionGroup?.from,
                to: questionGroup?.to,
                content: questionGroup?.content,
                typeOfLabel: "Alphabet",
                listOfOptions: questionGroup?.options.map((e) => e.content),
                listOfKeys: questionGroup?.keys.map((e) => e.key),
                listOfQuestions: questionGroup?.keys.map((e) => e.content),
            });
        }
    }, [questionGroup]);

    const handleChange = (field) => (e) => {
        if (typeof formState[field] === "number") {
            setFormState({
                ...formState,
                [field]: parseInt(e.target.value),
            });
            return;
        }

        setFormState({
            ...formState,
            [field]: e.target.value,
        });
    };

    const handleEditorChange = (content) => {
        setFormState({
            ...formState,
            content: content,
        });
    };

    const handleSave = async () => {
        try {
            const request = {};
            request.partId = partId;
            request.type = formState.type;
            request.from = formState.from;
            request.to = formState.to;
            request.content = formState.content;
            request.listOfKeys = formState.listOfKeys;

            if (formState.type === QUESTION_TYPE.MULTIPLE_CHOICE) {
                delete formState.to;
            }

            if (
                [
                    QUESTION_TYPE.MULTIPLE_CHOICE,
                    QUESTION_TYPE.MATCHING,
                ].includes(formState.type)
            ) {
                request.typOfLabel = formState.typOfLabel;
            }

            if (
                [
                    QUESTION_TYPE.MULTIPLE_CHOICE,
                    QUESTION_TYPE.MATCHING,
                ].includes(formState.type)
            ) {
                request.listOfOptions = formState.listOfOptions;
            }

            if (
                [
                    QUESTION_TYPE.TRUE_FALSE_NOT_GIVEN,
                    QUESTION_TYPE.MATCHING,
                ].includes(formState.type)
            ) {
                request.listOfQuestions = formState.listOfQuestions;
            }

            await createIeltsListeningQuestions(request);
            toast.success("Create successfully");
            setFormState(initialFormState);
            window.location.reload();
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div className="p-4 border-2 border-black rounded-2xl mt-2 border-dotted">
            <div className="">
                <label htmlFor="types" className="fw-bold fs-5">
                    {" "}
                    Type:{" "}
                </label>
                <select
                    name="types"
                    value={formState.type}
                    onChange={handleChange("type")}
                    disabled={mode == "read"}
                    className="ml-4 border border-dark rounded-xl p-1"
                >
                    <option value="none">Select an Option</option>
                    {Object.values(QUESTION_TYPE).map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mt-2">
                <span className="fw-bold fs-5">Question:</span>
                <input
                    type="number"
                    id="fname"
                    name="fname"
                    className="ml-4 border border-dark rounded-xl p-1"
                    disabled={mode == "read"}
                    value={formState.from ? formState.from : ""}
                    onChange={handleChange("from")}
                ></input>{" "}
                {formState.type !== QUESTION_TYPE.MULTIPLE_CHOICE && (
                    <Fragment>
                        <span className="fw-bold fs-5 ml-2">to</span>
                        <input
                            type="number"
                            id="fname"
                            name="fname"
                            className="ml-4 border border-dark rounded-xl p-1"
                            value={formState.to ? formState.to : ""}
                            onChange={handleChange("to")}
                            disabled={
                                formState.type ===
                                    QUESTION_TYPE.MULTIPLE_CHOICE ||
                                mode == "read"
                            }
                        ></input>
                    </Fragment>
                )}
            </div>
            <div className="mt-2">
                <div>
                    <span className="fw-bold fs-5">Content:</span>
                </div>
                <div className="border border-dark rounded-xl p-1">
                    <EditorWrap
                        value={formState.content}
                        onChange={handleEditorChange}
                        disabled={mode == "read"}
                    ></EditorWrap>
                </div>
            </div>

            {[QUESTION_TYPE.MULTIPLE_CHOICE, QUESTION_TYPE.MATCHING].includes(
                formState.type
            ) && (
                <div className="mt-2">
                    <label htmlFor="typeOfLabel">
                        <span className="fw-bold fs-5">Type of label: </span>
                    </label>
                    <select
                        name="typeOfLabel"
                        value={formState.typeOfLabel}
                        className="ml-4 border border-dark rounded-xl p-1"
                        disabled={mode == "read"}
                        onChange={handleChange("typeOfLabel")}
                    >
                        <option value="none">Select an Option</option>
                        {Object.values(TYPE_OF_QUESTION_LABEL).map(
                            (e, index) => (
                                <option key={index} value={e.labelName}>
                                    {e.labelName}
                                </option>
                            )
                        )}
                    </select>
                </div>
            )}

            {[QUESTION_TYPE.MULTIPLE_CHOICE, QUESTION_TYPE.MATCHING].includes(
                formState.type
            ) && (
                <div>
                    <div>
                        <span className="fw-bold fs-5">List of options: </span>
                    </div>
                    <ul>
                        {formState.listOfOptions.map((value, index) => (
                            <li key={index} className="mt-2">
                                <div className="border d-inline-block border-dark rounded-2xl p-1">
                                    <label
                                        htmlFor=""
                                        className="fw-bold ml-2 border border-dark rounded-full p-1 px-2"
                                    >
                                        {
                                            Object.values(
                                                TYPE_OF_QUESTION_LABEL
                                            ).find((e) => {
                                                return (
                                                    e.labelName ===
                                                    formState.typeOfLabel
                                                );
                                            })?.value[index]
                                        }
                                    </label>
                                    <input
                                        type="text"
                                        value={formState.listOfOptions[index]}
                                        disabled={mode == "read"}
                                        className="ml-2 border border-dark rounded-xl p-1 w-96"
                                        onChange={(e) => {
                                            formState.listOfOptions[index] =
                                                e.target.value;
                                            setFormState({
                                                ...formState,
                                                listOfOptions:
                                                    formState.listOfOptions,
                                            });
                                        }}
                                    ></input>
                                    {mode == "create" && (
                                        <button
                                            onClick={() => {
                                                const newListOfOptions =
                                                    formState.listOfOptions;
                                                newListOfOptions.splice(
                                                    index,
                                                    1
                                                );
                                                setFormState({
                                                    ...formState,
                                                    listOfOptions:
                                                        newListOfOptions,
                                                });
                                            }}
                                        >
                                            <span className="border-1 rounded-xl border-red-600 p-1 text-red-400  p-1 ml-2">
                                                Remove
                                            </span>
                                        </button>
                                    )}
                                </div>
                            </li>
                        ))}

                        {mode == "create" && (
                            <button
                                className="border-1 border-green-400 rounded-xl p-1 text-green-400 fw-bold mt-2"
                                onClick={() => {
                                    const newListOfOptions =
                                        formState.listOfOptions;
                                    newListOfOptions.push("");
                                    setFormState({
                                        ...formState,
                                        listOfOptions: newListOfOptions,
                                    });
                                }}
                            >
                                More option
                            </button>
                        )}
                    </ul>
                </div>
            )}

            {[
                QUESTION_TYPE.TRUE_FALSE_NOT_GIVEN,
                QUESTION_TYPE.MATCHING,
            ].includes(formState.type) && (
                <div>
                    <span className="fw-bold fs-5">List of questions: </span>
                    <ul>
                        {formState.listOfQuestions.map((value, index) => (
                            <li key={index} className="mt-2">
                                <div className="border-1 border-black rounded-2xl d-inline-block p-1">
                                    {" "}
                                    <span className="fw-bold ml-2">
                                        Question {formState.from + index}:
                                    </span>
                                    <input
                                        type="text"
                                        value={value}
                                        disabled={mode == "read"}
                                        className="ml-2 border border-dark rounded-xl p-1 w-96"
                                        onChange={(e) => {
                                            formState.listOfQuestions[index] =
                                                e.target.value;
                                            setFormState({
                                                ...formState,
                                                listOfQuestions:
                                                    formState.listOfQuestions,
                                            });
                                        }}
                                    ></input>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div>
                <span className="fw-bold fs-5">List of keys:</span>
                <ul>
                    {formState.listOfKeys.map((value, index) => (
                        <li key={index} className="mt-2">
                            <div className="border-1 border-black rounded-2xl d-inline-block p-2">
                                <span className="fw-bold ml-2">
                                    Question {formState.from + index}:
                                </span>
                                <input
                                    type="text"
                                    value={value}
                                    disabled={mode == "read"}
                                    className="ml-2 border border-dark rounded-xl p-1 w-96"
                                    onChange={(e) => {
                                        formState.listOfKeys[index] =
                                            e.target.value;
                                        setFormState({
                                            ...formState,
                                            listOfKeys: formState.listOfKeys,
                                        });
                                    }}
                                ></input>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {mode == "create" && (
                <button className="my-button-74" onClick={handleSave}>
                    Save
                </button>
            )}
        </div>
    );
};

export default IeltsListeningQuestions;
