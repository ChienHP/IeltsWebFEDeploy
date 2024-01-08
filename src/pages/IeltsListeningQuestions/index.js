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

const IeltsListeningQuestions = () => {
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
            request.partId = formState.partId;
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
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div className="p-4">
            <div className="d-flex align-items-center">
                <span className="fw-bold fs-5">Part: </span>
                <div className="ml-4">
                    <input
                        className="p-1 border border-dark rounded-xl"
                        type="number"
                        value={formState.partId ? formState.partId : ""}
                        onChange={handleChange("partId")}
                    ></input>
                </div>
            </div>

            <div>
                <label htmlFor="types"> Type </label>
                <select
                    name="types"
                    value={formState.type}
                    onChange={handleChange("type")}
                >
                    <option value="none">Select an Option</option>
                    {Object.values(QUESTION_TYPE).map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                Question{" "}
                <input
                    type="number"
                    id="fname"
                    name="fname"
                    value={formState.from ? formState.from : ""}
                    onChange={handleChange("from")}
                ></input>{" "}
                {formState.type !== QUESTION_TYPE.MULTIPLE_CHOICE && (
                    <Fragment>
                        to{" "}
                        <input
                            type="number"
                            id="fname"
                            name="fname"
                            value={formState.to ? formState.to : ""}
                            onChange={handleChange("to")}
                            disabled={
                                formState.type === QUESTION_TYPE.MULTIPLE_CHOICE
                            }
                        ></input>
                    </Fragment>
                )}
            </div>

            <EditorWrap
                value={formState.content}
                onChange={handleEditorChange}
            ></EditorWrap>

            {[QUESTION_TYPE.MULTIPLE_CHOICE, QUESTION_TYPE.MATCHING].includes(
                formState.type
            ) && (
                <div>
                    <label htmlFor="typeOfLabel"> Type of label: </label>
                    <select
                        name="typeOfLabel"
                        value={formState.typeOfLabel}
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
                    <div>List of options</div>
                    <ul>
                        {formState.listOfOptions.map((value, index) => (
                            <li key={index}>
                                <label htmlFor="fname">
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
                                <button
                                    onClick={() => {
                                        const newListOfOptions =
                                            formState.listOfOptions;
                                        newListOfOptions.splice(index, 1);
                                        setFormState({
                                            ...formState,
                                            listOfOptions: newListOfOptions,
                                        });
                                    }}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                        <button
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
                    </ul>
                </div>
            )}

            {[
                QUESTION_TYPE.TRUE_FALSE_NOT_GIVEN,
                QUESTION_TYPE.MATCHING,
            ].includes(formState.type) && (
                <div>
                    List of questions
                    <ul>
                        {formState.listOfQuestions.map((value, index) => (
                            <li key={index}>
                                Question {formState.from + index}:
                                <input
                                    type="text"
                                    value={value}
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
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div>
                List of keys
                <ul>
                    {formState.listOfKeys.map((value, index) => (
                        <li key={index}>
                            Question {formState.from + index}:
                            <input
                                type="text"
                                value={value}
                                onChange={(e) => {
                                    formState.listOfKeys[index] =
                                        e.target.value;
                                    setFormState({
                                        ...formState,
                                        listOfKeys: formState.listOfKeys,
                                    });
                                }}
                            ></input>
                        </li>
                    ))}
                </ul>
            </div>

            <button className="my-button-74" onClick={handleSave}>
                Save
            </button>
        </div>
    );
};

export default IeltsListeningQuestions;
