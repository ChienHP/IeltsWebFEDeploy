import { useReducer, createContext } from "react";
import { ieltsListeningQuestionGroupReducer } from "../reducers/IeltsListeningQuestionGroupReducer";

export const IeltsListeningQuestionGroupContext = createContext();

export const IeltsListeningQuestionGroupContextProvider = ( props ) => {
    const [ieltsListeningQuestionGroups, dispatch] = useReducer(ieltsListeningQuestionGroupReducer, [localStorage.getItem('ieltsListeningQuestionGroups') ? JSON.parse(localStorage.getItem('ieltsListeningQuestionGroups')) : []]);
    
    return (
        <IeltsListeningQuestionGroupContext.Provider value={{ieltsListeningQuestionGroups, dispatch}}>
            {props.children}
        </IeltsListeningQuestionGroupContext.Provider>
    )
} 
