import React, { useRef, useState } from "react";
import { IELTS_LISTENING_QUESTION_TYPE } from "../../../shared/constant";
import { EditorWrap } from "../../../components/Editor/index";
import { createIeltsListeningQuestions } from "../../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";

const initialFormState = {
    partId: 0,
    type: "",
    from: 0,
    to: 0,
    content: "",
    listOfOptions: [],
    listOfKeys: "",
};

const CreateIeltsListeningQuestions = () => {
    const [formState, setFormState] = useState(initialFormState);

    console.log(formState)
    
    const handleChange = (field) => (e) => {
        console.log(typeof initialFormState[field])
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
            console.log(formState)
            await createIeltsListeningQuestions({
                ...formState,
                listOfKeys: formState.listOfKeys.split(','),
            });
            toast.success("Create successfully");
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div>
            <div>
                Part{" "}
                <input
                    type="number"
                    value={formState.partId ? formState.partId: ''}
                    onChange={handleChange("partId")}
                ></input>
            </div>

            <div>
                <label htmlFor="types"> Type </label>
                <select
                    name="types"
                    value={formState.type}
                    onChange={handleChange("type")}
                >
                    <option value="none">Select an Option</option>
                    {Object.values(IELTS_LISTENING_QUESTION_TYPE).map(
                        (type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        )
                    )}
                </select>
            </div>

            <div>
                Question <input type="number" id="fname" name="fname" value={formState.from ? formState.from : ""} onChange={handleChange("from")}></input>{" "}
                to <input type="number" id="fname" name="fname" value={formState.to ? formState.to : ""} onChange={handleChange('to')}></input>
            </div>

            <EditorWrap
                value={formState.content}
                onChange={handleEditorChange}
            ></EditorWrap>

            <div>
                List of keys <input type="text" value={formState.listOfKeys} onChange={handleChange('listOfKeys')}></input>
            </div>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default CreateIeltsListeningQuestions;
