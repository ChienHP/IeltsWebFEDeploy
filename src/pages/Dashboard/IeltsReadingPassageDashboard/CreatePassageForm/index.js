import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
export const CreatePassageForm = ({ show, handleClose, testId }) => {
  const [error, setError] = useState("");
  const [passageNumber, setPassageNumber] = useState("");
  const [title, setTitle] = useState("");
  const [paragraphs, setParagraphs] = useState("");

  const refreshInput = () => {
    setError("");
    setPassageNumber("");
    setTitle("");
    setParagraphs("");
  };

  const handleAdd = async () => {
    try {
      const res = await axios.post(
        `http://localhost:3001/ielts_reading_passage/create`,
        {
          testId,
          passageNumber,
          title,
          paragraphs: paragraphs,
        }
      );
      if (res.data.error) {
        setError(res.data.error);
        return;
      }
      refreshInput();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new passage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">Passage Number</label>
              <input
                type="text"
                className="form-control"
                id="passageNumber"
                value={passageNumber}
                onChange={(e) => setPassageNumber(e.target.value)}
              ></input>
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>

              <label className="form-label">Paragraphs</label>
              <input
              style={{cols:'100', rows:'200'}}
                type="text"
                className="form-control"
                id="title"
                value={paragraphs}
                placeholder='["paragraph1", "paragraph2", ... ]'
                onChange={(e) => setParagraphs(e.target.value)}
              ></input>
            </div>
          </form>
          <div>
            <span style={{ color: "red" }}>{error}</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              refreshInput();
              handleClose();
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
