import { ReadingQuestionType } from "../../../../../constants/readingQuestionType";

export const CreateDetailQuestion = ({
  questionType,
  listOfQuestions,
  setListOfQuestions,
  require,
  setRequire,
  title,
  setTitle,
  summary,
  setSummary,
  remaining,
  setRemaining,
  listOfSentences,
  setListOfSentences,
  listOfHeadings,
  setListOfHeadings,
  listOfParagraphs,
  setListOfParagraphs,
  question,
  setQuestion,
  listOfAnswers,
  setListOfAnswers,
  listOfEndings,
  setListOfEndings,
  listOfStatements,
  setListOfStatements,
  answers,
  setAnswers
}) => {
  if (questionType === ReadingQuestionType.YES_NO_NOT_GIVEN || questionType === ReadingQuestionType.TRUE_FALSE_NOT_GIVEN) {
    return (
      <div>
        <h4>List of questions</h4>
        <textarea
          style={{ width: "100%", height: "200px" }}
          value={listOfQuestions}
          onChange={(e) => setListOfQuestions(e.target.value)}
        ></textarea>
        <textarea
          style={{ width: "100%"}}
          value={answers}
          onChange={(e) => setAnswers(e.target.value)}
        ></textarea>
      </div>
    );
  }
  if (questionType === ReadingQuestionType.SUMMARY_NOTE_COMPLETION) {
    return (
      <div>
        <h4>Require</h4>
        <textarea
          style={{ width: "100%" }}
          value={require}
          onChange={(e) => setRequire(e.target.value)}
        ></textarea>
        <h4>Title</h4>
        <textarea
          style={{ width: "100%" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
        <h4>Summary</h4>
        <textarea
          style={{ width: "100%", height: "200px" }}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        ></textarea>
        <h4>Remaining</h4>
        <textarea
          style={{ width: "100%" }}
          value={remaining}
          onChange={(e) => setRemaining(e.target.value)}
        ></textarea>
        <textarea
          style={{ width: "100%"}}
          value={answers}
          onChange={(e) => setAnswers(e.target.value)}
        ></textarea>
      </div>
    );
  }

  if (questionType === ReadingQuestionType.SENTENCE_COMPLETION) {
    return (
      <div>
        <h4>Require</h4>
        <textarea
          style={{ width: "100%" }}
          value={require}
          onChange={(e) => setRequire(e.target.value)}
        ></textarea>
        <h4>List of sentences</h4>
        <textarea
          style={{ width: "100%", height: "200px" }}
          value={listOfSentences}
          onChange={(e) => setListOfSentences(e.target.value)}
        ></textarea>
        <textarea
          style={{ width: "100%"}}
          value={answers}
          onChange={(e) => setAnswers(e.target.value)}
        ></textarea>
      </div>
    );
  }
  
  if (questionType === ReadingQuestionType.MATCHING_HEADINGS) {
    return (
      <div>
        <h4>List of headings</h4>
        <textarea
          style={{ width: "100%",height: "200px" }}
          value={listOfHeadings}
          onChange={(e) => setListOfHeadings(e.target.value)}
        ></textarea>
        <h4>List of paragraphs</h4>
        <textarea
          style={{ width: "100%", height: "200px" }}
          value={listOfParagraphs}
          onChange={(e) => setListOfParagraphs(e.target.value)}
        ></textarea>
        <textarea
          style={{ width: "100%"}}
          value={answers}
          onChange={(e) => setAnswers(e.target.value)}
        ></textarea>
      </div>
    );
  }
  
  if (questionType === ReadingQuestionType.LIST_SELECTION || questionType === ReadingQuestionType.MULTIPLE_CHOICE) {
    return (
      <div>
        <h4>Question</h4>
        <textarea
          style={{ width: "100%"}}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
        <h4>List of answers</h4>
        <textarea
          style={{ width: "100%", height: "200px" }}
          value={listOfAnswers}
          onChange={(e) => setListOfAnswers(e.target.value)}
        ></textarea>
        <textarea
          style={{ width: "100%"}}
          value={answers}
          onChange={(e) => setAnswers(e.target.value)}
        ></textarea>
      </div>
    );
  }
  
  if (questionType === ReadingQuestionType.MATCHING_PARAGRAPH_INFORMATION) {
    return (
      <div>
        <h4>List of statements</h4>
        <textarea
          style={{ width: "100%", height: "200px"}}
          value={listOfStatements}
          onChange={(e) => setListOfStatements(e.target.value)}
        ></textarea>
        <h4>List of endings</h4>
        <textarea
          style={{ width: "100%", height: "200px" }}
          value={listOfEndings}
          onChange={(e) => setListOfEndings(e.target.value)}
        ></textarea>
        <textarea
          style={{ width: "100%"}}
          value={answers}
          onChange={(e) => setAnswers(e.target.value)}
        ></textarea>
      </div>
    );
  }

};
