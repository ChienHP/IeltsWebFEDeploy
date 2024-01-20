import { get, post } from "../utils/request";

export const getIeltsSpeakingPartList = (testId) => {
    return get(`/ielts-test-part/speaking-part-list/${testId}`);
}

export const submitIeltsSpeakingAnswer = (data) => {
    return post(`/ielts-test/submit-ielts-speaking-answer`, data);
}

export const createIeltsSpeakingPart = (data) => {
    return post(`/ielts-test-part/create-ielts-speaking-part`, data);
}

export const createOneSpeakingQuestion = (data) => {
    return post(`/question-group/create-one-speaking-question`, data);
}