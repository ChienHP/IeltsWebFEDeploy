import { get, post } from "../utils/request";

export const getIeltsTestList = (page, limit, name, type) => {
    return get(`/ielts-test/list`, {
        params: {
            page,
            limit,
            name,
            type,
        },
    });
};

export const getLatestTestResult = (testId) => {
    return get(`/ielts-test/latest-test-result/${testId}`);
};

export const submitIeltsListeningAndReadingAnswers = (body) => {
    return post(`/ielts-test/submit-ielts-listening-and-reading-answers`, body);
};

export const submitIeltsWritingAnswers = (body) => {
    return post(`/ielts-test/submit-ielts-writing-answers`, body);
};

export const requestToGetEvaluatedByExaminer = (testResultId) => {
    return post(`/ielts-test/request-to-get-evaluated-by-examiner`, {
        testResultId,
    });
};

export const getTestResultById = (testResultId) => {
    return get(`/ielts-test/test-result/${testResultId}`);
}

export const evaluateWritingPartAnswer = (body) => {
    return post(`/ielts-test/evaluate-writing-part-answer`, body);
}

export const evaluateSpeakingTestAnswer = (body) => {
    return post(`/ielts-test/evaluate-speaking-test-answer`, body);
}

export const getTestResultList = ({page, limit, type, status}) => {
    return get(`/ielts-test/test-result-list`, {
        params: {
            page,
            limit,
            type,
            status,
        },
    });
}

export const createTestResult = (body) => {
    return post(`/ielts-test/create-test-result`, body);
}