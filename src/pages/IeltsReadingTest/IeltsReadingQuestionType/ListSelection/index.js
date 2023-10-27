import { useEffect, useState } from "react";
import { ALPHABETS } from "../../../../shared/constant";

const ListSelection = ({ questions, handleChoose }) => {
  const [checkboxes, setCheckboxes] = useState();
  useEffect(() => {
    const allCheckboxs = document.querySelectorAll("input[type=checkbox]");
    setCheckboxes(allCheckboxs);
  }, []);
  const handleChange = () => {
    const newAnswers = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        if (newAnswers.length < 2) {
          newAnswers.push(checkboxes[i].value);
        }
      }
    }
    handleChoose({
      questionId: questions.id,
      answers: newAnswers,
    });
  };
  return (
    <div>
      <h3>
        Questions {questions.from}-{questions.to}
      </h3>
      <em>{questions.detail.question}</em>

      <ul className="list-question">
        {JSON.parse(questions.detail.listOfAnswers).map((item, index) => {
          return (
            <li key={index}>
              <span className="lq-number">{ALPHABETS[index]}</span>
              <input
                type="checkbox"
                style={{ margin: "4px" }}
                value={ALPHABETS[index]}
                onChange={(e) => handleChange()}
              ></input>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ListSelection;
