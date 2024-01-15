export const getIeltsListeningQuestionGroups = async () => {
    const response = await fetch('http://localhost:5000/ielts-listening-question-groups');
    const data = await response.json();
    return data;
}

