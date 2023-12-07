import { get, post } from "../utils/request";

export const getIeltsWritingPartList = (testId) => {
    return get(`/ielts-test-part/writing-part-list/${testId}`);
}

export const createIeltsWritingPart = (data) => {
    return post(`/ielts-test-part/create-ielts-writing-part`, data);
}
