import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
function IeltsReadingTestCreateForm({show, handleClose, name, setName, error, setError}) {
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleSubmit = async () => {
    try {
      const res = await axios.post(`http://localhost:3001/ielts_reading_test/create`,{
        name
      });
      if (res.data.message) {
        setError(res.data.message)
        return
      }
      handleClose()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Ielts Reading Test</Modal.Title>
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
                onChange={handleName}
              ></input>
            </div>
          </form>
          <div>
            <span style={{'color':'red'}}>{error}</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default IeltsReadingTestCreateForm;
