import axios from "axios";
import { useEffect, useState } from "react";
import { Collapse } from "react-bootstrap";
import { Question } from "./Question/Question";

export const IeltsReadingQuestions = ({ passageId }) => {
  const [questions, setQuestions] = useState([]);
  const [isOpen, setIsOpen] = useState([false, false, false]);
  const handleOpen = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !isOpen[index];
    setIsOpen(newIsOpen);
  };

  useEffect(() => {
    const fetchData = async (passageId) => {
      try {
        const res = await axios.get(
          `http://localhost:3001/ielts-reading-question/${passageId}/questions`
        );
        setQuestions(res.data);
      } catch (err) {
        console.log({ err });
      }
    };
    fetchData(passageId);
  }, []);

  const handleDeleteQuestion = async (questionId) => {
    try {
      const res = await axios.delete(
        `http://localhost:3001/ielts-reading-question/${questionId}`
      );
      alert(res.data);
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div className="questions-boundary">
      {questions.map((question, index) => {
        return (
          <div key={index} className="question">
            <button
              className="btn btn-primary "
              onClick={() => handleOpen(index)}
            >
              Questions {question.from} - {question.to}
            </button>
            <Collapse in={isOpen[index]}>
              <div>
                <Question id={question.id}></Question>
              </div>
            </Collapse>
            <button
              className="btn btn-danger question-btn-delete"
              onClick={() => handleDeleteQuestion(question.id)}
              style={{
                'margin':'0px 0px 0px 12px'
              }}
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};
