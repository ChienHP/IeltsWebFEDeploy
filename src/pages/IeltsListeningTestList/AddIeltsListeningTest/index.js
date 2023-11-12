import { useMatch, useParams } from "react-router-dom";
import { createIeltsListeningTest } from "../../../apis/ielts-listening-test.api";
import "./style.css";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getIeltsListeningTest } from "../../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";

const initialFormState = {
    name: "",
};
const AddIeltsListeningTest = () => {
    const addMatch = useMatch("/ielts-listening-test/add-new-test");
    const isAddMode = Boolean(addMatch);
    const [formState, setFormState] = useState(initialFormState);
    const { id } = useParams();

    useEffect(() => {
        if (!isAddMode) {
            (async (id) => {
                try {
                    const { data: ieltsListeningTest } =
                        await getIeltsListeningTest(id);
                    setFormState(ieltsListeningTest);
                } catch (error) {
                    toast.error(error.message);
                }
            })(id);
        }
    }, []);

    const handleChange = (field) => (e) => {
        setFormState({
            ...formState,
            [field]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createIeltsListeningTest(formState);
            toast.success("Create successfully");
        } catch (error) {
            toast.error(error.message);
        }
        setFormState(initialFormState);
    };

    return (
        <div>
            <h1 className="text-lg">
                {isAddMode ? "Add" : "Detail"} IeltsListeningTest
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={formState.name}
                        onChange={handleChange("name")}
                        required
                    ></input>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddIeltsListeningTest;
