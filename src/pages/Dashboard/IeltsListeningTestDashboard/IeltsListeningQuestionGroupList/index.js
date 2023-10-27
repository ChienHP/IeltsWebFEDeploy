import { useContext } from "react";
import { IeltsListeningQuestionGroupDetail } from "../IeltsListeningQuestionGroupDetail";
import { IeltsListeningQuestionGroupContext } from "../../../../contexts/IeltsListeningQuestionGroupContext";

export const IeltsListeningQuestionGroupList = () => {
  const { ieltsListeningQuestionGroups } = useContext(
    IeltsListeningQuestionGroupContext
  );
  return ieltsListeningQuestionGroups.length ? (
    <div>
      {ieltsListeningQuestionGroups.map(
        (ieltsListeningQuestionGroup, index) => {
          return (
            <IeltsListeningQuestionGroupDetail
              ieltsListeningQuestionGroup={ieltsListeningQuestionGroup}
              index={index}
              key={index}
            ></IeltsListeningQuestionGroupDetail>
          );
        }
      )}
    </div>
  ) : (
    <div>
      <h1>No Ielts Listening Question Group</h1>
    </div>
  );
};
