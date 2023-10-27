export const ieltsListeningQuestionGroupReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_IELTS_LISTENING_QUESTION_GROUP':
            return [
                ...state,
                action.ieltsListeningQuestionGroup
            ]
        case 'REMOVE_IELTS_LISTENING_QUESTION_GROUP':
            return state.filter((group, index) => index !== action.index)
        default:
            return state    
    }
}