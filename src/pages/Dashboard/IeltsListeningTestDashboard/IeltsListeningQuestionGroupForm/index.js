import { EditorWrap } from "../../../../components/Editor";
import {IeltsListeningQuestionGroupContext} from "../../../../contexts/IeltsListeningQuestionGroupContext";
import React from "react";

export const IeltsListeningQuestionGroupForm = () => {
  const { dispatch } = React.useContext(IeltsListeningQuestionGroupContext);
  const [content, setContent] = React.useState("");
  return (
    <div>
      <h3>Content</h3>
      <EditorWrap value={content} onChange={setContent} />

      <button
        onClick={() =>
          dispatch({
            type: "ADD_IELTS_LISTENING_QUESTION_GROUP",
            ieltsListeningQuestionGroup: {
              content: content,
            },
          })
        }
      >
        {" "}
        Add
      </button>
    </div>
  );
};
