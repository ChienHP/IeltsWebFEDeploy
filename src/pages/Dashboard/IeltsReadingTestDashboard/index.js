import IeltsReadingTestCreateForm from "./IeltsReadingTestCreateForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { UpdateForm } from "./UpdateForm";
import { Link } from "react-router-dom";

const IeltsReadingTestDashboard = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const [data, setData] = useState({
    results: [],
    pagination: [],
  });
  const [showCreate, setShowCreate] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState();
  const [error, setError] = useState("");
  const [reRender, setReRender] = useState(false);

  const reRenderList = () => {
    if (reRender) setReRender(false);
    else setReRender(true);
  };
  const handleShowCreate = () => setShowCreate(true);
  const handleCloseCreate = () => {
    resetInput();
    setShowCreate(false);
  };
  const handleShowUpdate = async (id) => {
    setId(id);
    try {
      const res = await axios.get(
        `http://localhost:3001/ielts_reading_test/get/${id}`
      );
      setName(res.data.name);
    } catch (err) {
      console.log({ err });
    }
    setShowUpdate(true);
  };

  const handleCloseUpdate = () => {
    resetInput();
    setShowUpdate(false);
  };

  const resetInput = () => {
    setId("");
    setName("");
    setError("");
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3001/ielts_reading_test/delete/${id}`
      );
      reRenderList();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `http://localhost:3001/ielts_reading_test/list`,
          {
            params: {
              page,
              limit,
            },
          }
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [page, showCreate, showUpdate, reRender]);

  const next = () => {
    if (page < data.pagination.totalPages) {
      setPage(page + 1);
    }
  };

  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <h2 className="mt-3">Ielts Reading Test</h2>
      <button
        type="button"
        style={{ float: "right" }}
        className="btn btn-success"
        onClick={handleShowCreate}
      >
        Add New
      </button>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Name</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {data.results.map((item, index) => {
            return (
              <tr key={index}>
                <td>{(page - 1) * limit + ++index}</td>
                <td>{item.name}</td>
                <td>
                  <div>
                    <button
                      type="button"
                      className="btn btn-warning"
                      style={{ "margin-right": "8px" }}
                      onClick={() => handleShowUpdate(item.id)}
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{ "margin-right": "8px" }}
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>

                    <Link to={`/admin/${item.id}/ielts-reading-passage`}>
                      <button
                        type="button"
                        className="btn btn-primary"
                        style={{ "margin-right": "8px" }}
                      >
                        Detail
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button
        type="button"
        className="btn btn-secondary btn-lg"
        style={{ float: "right" }}
        onClick={next}
      >
        {" "}
        {">>"}{" "}
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-lg"
        style={{ float: "left" }}
        onClick={previous}
      >
        {" "}
        {"<<"}{" "}
      </button>
      <IeltsReadingTestCreateForm
        show={showCreate}
        handleClose={handleCloseCreate}
        name={name}
        setName={setName}
        error={error}
        setError={setError}
      ></IeltsReadingTestCreateForm>

      <UpdateForm
        show={showUpdate}
        handleClose={handleCloseUpdate}
        id={id}
        name={name}
        setName={setName}
        error={error}
        setError={setError}
      ></UpdateForm>
    </div>
  );
};
export default IeltsReadingTestDashboard;
