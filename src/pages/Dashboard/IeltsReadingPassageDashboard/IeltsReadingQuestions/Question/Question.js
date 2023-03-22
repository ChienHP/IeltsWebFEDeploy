import { useState, useEffect } from "react";
import axios from "axios";
export const Question = ({ id }) => {
  const [question, setQuestion] = useState({
    from: "",
    to: "",
    type: "",
    detail: {},
  });

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const res = await axios.get(
          `http://localhost:3001/ielts-reading-question/${id}`
        );
        setQuestion(res.data);
      } catch (err) {
        console.log({ err });
      }
    };
    fetchData(id);
  }, []);

  return (
    <div>
      <div className="question-input">
        <label>From</label>
        <input
          value={question.from}
          onChange={(e) => {
            const newQuestion = { ...question };
            newQuestion.from = e.target.value;
            setQuestion(newQuestion);
          }}
          readOnly={true}
        ></input>
      </div>
      <div>
        <label>To</label>
        <input
          value={question.to}
          onChange={(e) => {
            const newQuestion = { ...question };
            newQuestion.to = e.target.value;
            setQuestion(newQuestion);
          }}
          readOnly={true}
        ></input>
      </div>
      <div>
        <label>Type</label>
        <input value={question.type} readOnly={true}></input>
      </div>

      {Object.keys(question.detail).map((title, index) => {
        return (
          <div key={index}>
            <h4>{title}</h4>
            <textarea
              style={{ width: "100%", height: "200px" }}
              value={question.detail[title]}
              readOnly={true}
            ></textarea>
          </div>
        );
      })}
    </div>
  );
};
