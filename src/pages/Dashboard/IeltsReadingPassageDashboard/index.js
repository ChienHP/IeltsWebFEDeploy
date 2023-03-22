import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Collapse } from "react-bootstrap";
import { CreatePassageForm } from "./CreatePassageForm";
import { ShowParagraph } from "./ShowParagraph";
import { IeltsReadingQuestions } from "./IeltsReadingQuestions";
import { CreateQuestion } from "./CreateQuestion";
import './style.css'
export const IeltsReadingPassageDashboard = () => {
  const { testId } = useParams("testId");
  const [passages, setPassages] = useState([]);
  const [test, setTest] = useState({});
  const [isOpen, setIsOpen] = useState([]);
  const [showCreate, setShowCreate] = useState(false);

  const handleOpen = (index) => {
    const newIsOpen = [...isOpen]
    newIsOpen[index] = !isOpen[index]
    setIsOpen(newIsOpen)
  };

  const handleShowCreate = () => {
    setShowCreate(true);
  };
  const handleCloseCreate = () => {
    setShowCreate(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const passagesRes = await axios.get(
          `http://localhost:3001/ielts_reading_passage/list`,
          {
            params: {
              testId,
            },
          }
        );
        setPassages(passagesRes.data.results);

        const testRes = await axios.get(
          `http://localhost:3001/ielts_reading_test/get/${testId}`
        );
        setTest(testRes.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="passage-test-name">{test.name}</h2>
      <button
        type="button"
        style={{ float: "right" }}
        className="btn btn-success"
        onClick={handleShowCreate}
      >
        Add New Passage
      </button>

      <div>
        {passages.map((item, index) => {
          return (
            <div key={index}>
              <Button
                onClick={() => {
                  handleOpen(index);
                }}
                className="button-show-paragraph"
              >
                <h5>
                  {item.passageNumber}: {item.title}
                </h5>
              </Button>
              <Collapse in={isOpen[index]}>
                <div>
                  <div className="reading-box passage-reading-box">
                    <div className="split">
                            <ShowParagraph passageId={item.id}></ShowParagraph>
                    </div>
                    <div className="split">
                            <IeltsReadingQuestions passageId={item.id}></IeltsReadingQuestions>
                            <CreateQuestion testId={testId} passageId={item.id}></CreateQuestion>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          );
        })}
      </div>

      <CreatePassageForm
        show={showCreate}
        handleClose={handleCloseCreate}
        testId={testId}
      ></CreatePassageForm>
    </div>
  );
};
