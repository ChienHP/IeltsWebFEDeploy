import "./style.css";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
    createIeltsListeningPart,
    createIeltsTest,
    updateIeltsTest,
} from "../../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";
import { IELTS_TEST_TYPE } from "../../../shared/constant";
import SingleFileUploader from "../../../components/SingleFileUploader";

const initialFormState = {
    partNumber: 0,
    audioSrc: "",
};
const CreateListeningIeltsPartForm = ({
    mode,
    ieltslListeningPart = undefined,
    testId = undefined,
}) => {
    const [show, setShow] = useState(false);
    const [formState, setFormState] = useState(initialFormState);

    useEffect(() => {
        if (mode == "update" && ieltslListeningPart) {
            setFormState(ieltslListeningPart);
        }
    }, []);

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
            if (mode == "create") {
                await createIeltsListeningPart({
                    ...formState,
                    testId,
                });
                toast.success("Create successfully");
                setFormState(initialFormState);
            } else if (mode == "update") {
                await updateIeltsTest({
                    ...formState,
                });
                toast.success("Update successfully");
            }
            window.location.href = window.location.href;
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div>
            <button onClick={() => setShow(true)}>
                {mode == "create" ? "Add new part" : "Update part"}
            </button>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {mode == "create" ? "Add new part" : "Update part"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Part Number</label>
                            <input
                                type="text"
                                className="form-control"
                                value={formState.partNumber}
                                onChange={handleChange("partNumber")}
                                required
                            ></input>
                        </div>
                        AudioSrc
                        <SingleFileUploader
                            setUrl={(url) => {
                                setFormState({
                                    ...formState,
                                    audioSrc: url,
                                });
                            }}
                        ></SingleFileUploader>
                        {/* <button type="submit" className="btn btn-primary">
                            Submit
                        </button> */}
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button
                        type="submit"
                        variant="primary"
                        onClick={handleSubmit}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateListeningIeltsPartForm;
