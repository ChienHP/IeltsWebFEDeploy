import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIeltsTestDetail } from "../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";
import { EditorWrap } from "../../components/Editor";
import {
    createIeltsReadingPart,
    updateIeltsReadingPart,
} from "../../apis/ielts-reading-test.api";

const IeltsReadingPartForm = ({ mode, testId, ieltsReadingPart }) => {
    const [formState, setFormState] = useState({
        partNumber: 0,
        title: "",
        paragraphs: "",
    });
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!testId) throw "Test id is required";
            await createIeltsReadingPart({
                testId,
                ...formState,
            });
            toast.success("Create successfully");
        } catch (error) {
            toast.error(error);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateIeltsReadingPart({
                id: ieltsReadingPart.id,
                ...formState,
            });
            toast.success("Update successfully");
        } catch (error) {
            toast.error(error);
        }
    };

    useEffect(() => {
        if (mode == "update") {
            if (ieltsReadingPart) {
                formState.partNumber = ieltsReadingPart?.partNumber;
                formState.title = ieltsReadingPart?.partDetail?.title;
                formState.paragraphs = ieltsReadingPart?.partDetail?.paragraphs;
                setFormState({
                    ...formState,
                });
            }
        }
    }, [ieltsReadingPart]);

    return (
        <div>
            <div>
                <div className="d-flex align-items-center">
                    <label className="fw-bold fs-4">Part number: </label>
                    <input
                        type="number"
                        value={formState.partNumber}
                        className="border-1 border-black p-1 px-3 ml-4 rounded-2xl"
                        disabled={mode == "update"}
                        onChange={handleChange("partNumber")}
                    ></input>
                </div>
                <div className="d-flex align-items-center">
                    <label className="fw-bold fs-4">Title: </label>
                    <input
                        type="text"
                        value={formState.title}
                        className="border-1 border-black p-1 px-3 ml-4 rounded-2xl"
                        onChange={handleChange("title")}
                    ></input>
                </div>

                <div>
                    <label className="fw-bold fs-4">Paragraphs:</label>
                    <EditorWrap
                        value={formState.paragraphs}
                        onChange={(content) => {
                            setFormState({
                                ...formState,
                                paragraphs: content,
                            });
                        }}
                    ></EditorWrap>
                </div>

                <div className="w-full d-flex justify-content-end">
                    {mode == "update" && (
                        <button
                            className="my-button-74 mt-4"
                            onClick={handleUpdate}
                        >
                            Update
                        </button>
                    )}
                    {mode == "create" && (
                        <button
                            className="my-button-74 mt-4"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default IeltsReadingPartForm;
