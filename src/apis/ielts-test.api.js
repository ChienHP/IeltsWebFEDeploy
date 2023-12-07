import { get, post } from "../utils/request"

export const getIeltsTestList = (page, limit, name, type) => {
    return get(`/ielts-test/list`, {
        params: {
            page,
            limit,
            name,
            type
        }
    });
}

export const getLatestTestResult = (testId) => {
    return get(`/ielts-test/latest-test-result/${testId}`);
}

export const submitIeltsListeningAndReadingAnswers = (body) => {
    return post(`/ielts-test/submit-ielts-listenig-and-reading-answers`, body);
}