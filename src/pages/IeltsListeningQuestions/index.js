import { IELTS_LISTENING_QUESTION_TYPE } from "../../shared/constant";
import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";

const IeltsListeningQuestions = () => {
  const [content, setContent] = React.useState("Init content");
  const inputTagStr = '<input type="text" id="fname" name="fname">'
  return (
    <div>
      {Object.values(IELTS_LISTENING_QUESTION_TYPE).map((item, index) => {
        if (item === IELTS_LISTENING_QUESTION_TYPE.FILL_IN_THE_BLANKS)
          return (
            <div key={index}>
              <h3>{item}</h3>
              
              <div dangerouslySetInnerHTML={{ __html: content.replaceAll('{answer}', '') }}></div>
            </div>
          );
      })}
    </div>
  );
};

export default IeltsListeningQuestions;
