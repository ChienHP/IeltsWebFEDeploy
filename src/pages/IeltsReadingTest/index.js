import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ReadingQuestionType } from "../../constants/readingQuestionType";
import "./style.css";
import SummaryNoteCompletion from "./IeltsReadingQuestionType/Summary_note_completion";
import SentenceCompletion from "./IeltsReadingQuestionType/SentenceCompletion";
import { YesNoNotGiven } from "./IeltsReadingQuestionType/YesNoNotGiven";
import MatchingHeadings from "./IeltsReadingQuestionType/MatchingHeadings";
import ListSelection from "./IeltsReadingQuestionType/ListSelection";
import MultipleChoice from "./IeltsReadingQuestionType/MultipleChoice";
import MatchingEndings from "./IeltsReadingQuestionType/MatchingEndings";
import TrueFalseNotGiven from "./IeltsReadingQuestionType/TrueFalseNotGiven";
import { MatchingInformation } from "./IeltsReadingQuestionType/MatchingInformation";
import { Modal, Button } from "react-bootstrap";

const formatTime = (time) => {
  const minute = Math.floor(time / 60);
  const second = time - minute * 60;
  return `${minute}:${second}`;
};

export const IeltsReadingTest = () => {
  const { testId } = useParams("testId");
  const [readingPassages, setReadingPassages] = useState([]);
  const [readingPassage, setReadingPassage] = useState({
    id: 0,
    passageNumber: "",
    title: "",
    paragraphs: [],
  });
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState([
    // {
    //   questionId: "",
    //   answers: "" //[]
    // }
  ]);
  const [point, setPoint] = useState(0);
  const handleChoose = (result) => {
    const newResults = [...results];
    let i;
    for (i = 0; i < newResults.length; i++) {
      if (result.questionId === newResults[i].questionId) {
        newResults[i].answers = result.answers;
        setResults(newResults);
        return;
      }
    }
    if (i === newResults.length) {
      newResults.push(result);
    }
    setResults(newResults);
  };

  const submit = async () => {
    console.log(results);
    try {
      const res = await axios.post(
        "http://localhost:3001/ielts-reading-question/get-point",
        {
          results: results,
        }
      );
      setPoint(res.data.point);
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/ielts_reading_passage/list",
          {
            params: {
              testId,
            },
          }
        );
        for (let i = 0; i < res.data.results.length; i++) {
          res.data.results[i].paragraphs = JSON.parse(
            res.data.results[i].paragraphs
          );
        }
        setReadingPassages(res.data.results);
        setReadingPassage(res.data.results[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async (passageId) => {
      try {
        const res = await axios.get(
          `http://localhost:3001/ielts-reading-question/${passageId}/questions`
        );
        setQuestions(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(readingPassage.id);
  }, [readingPassage]);

  const handleNextPassage = () => {
    if (readingPassage.passageNumber >= 3) return;
    else setReadingPassage(readingPassages[readingPassage.passageNumber]);
  };
  const handlePreviousPassage = () => {
    if (readingPassage.passageNumber <= 1) return;
    else {
      setReadingPassage(readingPassages[readingPassage.passageNumber - 2]);
    }
  };

  const [countDown, setCountDown] = useState(3600);
  useEffect(() => {
    const clockInterval = setInterval(() => {
      setCountDown((preState) => {
        if (preState === 0) {
          clearInterval(clockInterval);
          submit();
          return 0;
        }
        return preState - 1;
      });
    }, 1000);
    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  const [showResultModal, setShowResultModal] = useState(false);
  const handleCloseResultModal = () => {
    setShowResultModal(!showResultModal);
  };

  return (
    <div>
      <div className="reading-box">
        <div className="split ">
          <div className="reading-passage">
            <h1 className="primary-color">
              <strong>READING PASSAGE {readingPassage.passageNumber}</strong>
            </h1>
            <h2 className="primary-color aligncenter">
              {readingPassage.title}
            </h2>
            {readingPassage.paragraphs.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
        </div>

        <div className="split">
          <div className="questions">
            {questions.map((question, index) => {
              if (question.type === ReadingQuestionType.YES_NO_NOT_GIVEN)
                return (
                  <YesNoNotGiven
                    key={index}
                    questions={question}
                    handleChoose={handleChoose}
                  ></YesNoNotGiven>
                );
              if (question.type === ReadingQuestionType.SUMMARY_NOTE_COMPLETION)
                return (
                  <SummaryNoteCompletion
                    key={index}
                    questions={question}
                    handleChoose={handleChoose}
                  ></SummaryNoteCompletion>
                );
              if (question.type === ReadingQuestionType.SENTENCE_COMPLETION)
                return (
                  <SentenceCompletion
                    key={index}
                    questions={question}
                    handleChoose={handleChoose}
                  ></SentenceCompletion>
                );
              if (question.type === ReadingQuestionType.MATCHING_HEADINGS)
                return (
                  <MatchingHeadings
                    key={index}
                    questions={question}
                    handleChoose={handleChoose}
                  ></MatchingHeadings>
                );
              if (question.type === ReadingQuestionType.MATCHING_INFORMATION)
                return (
                  <MatchingInformation
                    key={index}
                    questions={question}
                    handleChoose={handleChoose}
                  ></MatchingInformation>
                );
              if (question.type === ReadingQuestionType.LIST_SELECTION)
                return (
                  <ListSelection
                    key={index}
                    questions={question}
                    handleChoose={handleChoose}
                  ></ListSelection>
                );
              if (question.type === ReadingQuestionType.MULTIPLE_CHOICE)
                return (
                  <MultipleChoice
                    key={index}
                    questions={question}
                    handleChoose={handleChoose}
                  ></MultipleChoice>
                );
              if (question.type === ReadingQuestionType.MATCHING_ENDINGS)
                return (
                  <MatchingEndings
                    key={index}
                    questions={question}
                    handleChoose={handleChoose}
                  ></MatchingEndings>
                );
              if (question.type === ReadingQuestionType.TRUE_FALSE_NOT_GIVEN)
                return (
                  <TrueFalseNotGiven
                    key={index}
                    questions={question}
                    handleChoose={handleChoose}
                  ></TrueFalseNotGiven>
                );
            })}
          </div>

          <div className="button-questions">
            <button className="button-control" onClick={handleNextPassage}>
              Next
            </button>
            <button className="button-control" onClick={handlePreviousPassage}>
              Previous
            </button>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="">
          <div>
            <i class="fa-regular fa-clock"></i>
            <h2>{formatTime(countDown)}</h2>
          </div>
          <button
            onClick={() => {
              submit();
              handleCloseResultModal();
            }}
          >
            Submit
          </button>
        </div>
      </div>

      <Modal
        show={showResultModal}
        onHide={handleCloseResultModal}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h2 className="primary-color">Your Score</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className="primary-color">Correct Answer: {point}/40</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseResultModal}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleCloseResultModal}>
            Thi lại
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
