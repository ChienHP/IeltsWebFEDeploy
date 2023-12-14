import { get, post } from "../utils/request";

export const getIeltsSpeakingPartList = (testId) => {
    return get(`/ielts-test-part/speaking-part-list/${testId}`);
}

export const submitIeltsSpeakingAnswer = (data) => {
    return post(`/ielts-test/submit-ielts-speaking-answer`, data);
}