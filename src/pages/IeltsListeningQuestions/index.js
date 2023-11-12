import { QUESTION_TYPE } from "../../shared/constant";
import React, { useRef } from "react";
import CreateIeltsListeningQuestions from "./CreateIeltsListeningQuestions/index.js";
import { EditorWrap } from "../../components/Editor";

const initialFormState = {
  partId: "",
  type:"",
  from: "",
  to: "",
  content: "",
  listOfOptions: [],
  listOfKeys: []
}

const IeltsListeningQuestions = () => {
  // const [ieltsListeningQuestion, setIeltsListeningQuestion] = useState({
    
  // })
  
  const inputTagStr = '<input type="text" id="fname" name="fname">'
  return (
    <div>
      <CreateIeltsListeningQuestions></CreateIeltsListeningQuestions>

      {Object.values(QUESTION_TYPE).map((item, index) => {
        if (item === QUESTION_TYPE.FILL_IN_THE_BLANKS)
          return (
            <div key={index}>
              <h3>{item}</h3>
              {/* <EditorWrap></EditorWrap> */}
              {/* <div dangerouslySetInnerHTML={{ __html: content.replaceAll('{answer}', '') }}></div> */}
            </div>
          );
      })}
    </div>
  );
};

export default IeltsListeningQuestions;
