import "./style.css";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { createIeltsTest, updateIeltsTest } from "../../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";
import { IELTS_TEST_TYPE } from "../../../shared/constant";

const initialFormState = {
    name: "",
};
const IeltsListeningTestDetail = ({mode, ieltslListeningTest = undefined}) => {
    const [show, setShow] = useState(false);
    const [formState, setFormState] = useState(initialFormState);

    useEffect(() => {
        if (mode == 'update' && ieltslListeningTest) {
            setFormState(ieltslListeningTest);
        }
    }, []);

    const handleChange = (field) => (e) => {
        setFormState({
            ...formState,
            [field]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (mode == 'create') {
                await createIeltsTest({
                    ...formState,
                    type: IELTS_TEST_TYPE.LISTENING
                });
                toast.success("Create successfully");
                setFormState(initialFormState);
            } else if (mode == 'update') {
                await updateIeltsTest({
                    ...formState
                });
                toast.success("Update successfully");
            }
            window.location.href = window.location.href
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setShow(true)}>{mode == 'create' ? 'Add new test' : 'Update test'}</button>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{mode == 'create' ? 'Add new test' : 'Update test'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                        {/* <button type="submit" className="btn btn-primary">
                            Submit
                        </button> */}
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button type='submit' variant="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default IeltsListeningTestDetail;
