import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ReadingQuestionType } from "../../../../constants/readingQuestionType";
import { CreateDetailQuestion } from "./CreateDetailQuestion";
import axios from "axios";
export const CreateQuestion = ({ testId, passageId }) => {
  const [isShow, setIsShow] = useState(false);
  const [error, setError] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [type, setType] = useState(ReadingQuestionType.YES_NO_NOT_GIVEN);
  const [listOfQuestions, setListOfQuestions] = useState("");
  const [require, setRequire] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [remaining, setRemaining] = useState("");
  const [listOfSentences, setListOfSentences] = useState("");
  const [listOfHeadings, setListOfHeadings] = useState("");
  const [listOfParagraphs, setListOfParagraphs] = useState("");
  const [listOfObjects, setListOfObjects] = useState("")
  const [question, setQuestion] = useState("");
  const [listOfAnswers, setListOfAnswers] = useState("");
  const [listOfEndings, setListOfEndings] = useState("");
  const [listOfStatements, setListOfStatements] = useState("");
  const [answers, setAnswers] = useState("");

  const handleShow = () => {
    if (isShow) setIsShow(false);
    else setIsShow(true);
  };
  const handleAdd = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3001/ielts-reading-question/create",
        {
          testId,
          passageId,
          from,
          to,
          type,
          listOfQuestions,
          require,
          title,
          summary,
          remaining,
          listOfSentences,
          listOfHeadings,
          listOfParagraphs,
          listOfObjects,
          question,
          listOfAnswers,
          listOfEndings,
          listOfStatements,
          answers,
        }
      );
      if (res.data.error) {
        setError(res.data.error);
      } else {
        handleShow();
        setError("");
        // window.location.reload()
      }
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <>
      <button onClick={handleShow}>Add new question</button>
      <Modal show={isShow} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Add new question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">From</label>
              <input
                type="text"
                className="form-control"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              ></input>
              <label className="form-label">To</label>
              <input
                type="text"
                className="form-control"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              ></input>

              <label className="form-label">Type</label>
              <select
                className="form-control"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value={ReadingQuestionType.YES_NO_NOT_GIVEN}>
                  YES_NO_NOT_GIVEN
                </option>
                <option value={ReadingQuestionType.SUMMARY_NOTE_COMPLETION}>
                  SUMMARY_NOTE_COMPLETION
                </option>
                <option value={ReadingQuestionType.SENTENCE_COMPLETION}>
                  SENTENCE_COMPLETION
                </option>
                <option value={ReadingQuestionType.MATCHING_HEADINGS}>
                  MATCHING_HEADINGS
                </option>
                <option value={ReadingQuestionType.MATCHING_INFORMATION}>
                  MATCHING_INFORMATION
                </option>
                <option value={ReadingQuestionType.LIST_SELECTION}>
                  LIST_SELECTION
                </option>
                <option value={ReadingQuestionType.MULTIPLE_CHOICE}>
                  MULTIPLE_CHOICE
                </option>
                <option value={ReadingQuestionType.TRUE_FALSE_NOT_GIVEN}>
                  TRUE_FALSE_NOT_GIVEN
                </option>
              </select>

              <CreateDetailQuestion
                questionType={type}
                listOfQuestions={listOfQuestions}
                setListOfQuestions={setListOfQuestions}
                require={require}
                setRequire={setRequire}
                title={title}
                setTitle={setTitle}
                summary={summary}
                setSummary={setSummary}
                remaining={remaining}
                setRemaining={setRemaining}
                listOfSentences={listOfSentences}
                setListOfSentences={setListOfSentences}
                listOfHeadings={listOfHeadings}
                setListOfHeadings={setListOfHeadings}
                listOfParagraphs={listOfParagraphs}
                setListOfParagraphs={setListOfParagraphs}
                listOfObjects={listOfObjects}
                setListOfObjects={setListOfObjects}
                question={question}
                setQuestion={setQuestion}
                listOfAnswers={listOfAnswers}
                setListOfAnswers={setListOfAnswers}
                listOfEndings={listOfEndings}
                setListOfEndings={setListOfEndings}
                listOfStatements={listOfStatements}
                setListOfStatements={setListOfStatements}
                answers={answers}
                setAnswers={setAnswers}
              ></CreateDetailQuestion>
            </div>
          </form>
          <div>
            <span style={{ color: "red" }}>{error}</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
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
