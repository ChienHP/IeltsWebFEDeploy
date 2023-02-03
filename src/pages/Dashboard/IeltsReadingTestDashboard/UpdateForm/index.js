import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
export const UpdateForm = ({ show, handleClose, id, name, setName, error, setError }) => {
  const handleSubmit = async () => {
    try {
        const res = await axios.post("http://localhost:3001/ielts_reading_test/update", {
            id, name
        })
        if (res.data.error) {
            setError(res.data.error)
            return
        }
        handleClose()
    } catch (err) {
        console.log(err)
    }
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Ielts Reading Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Ielts Reading Test Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
          </form>
          <div>
            <span style={{ color: "red" }}>{error}</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
