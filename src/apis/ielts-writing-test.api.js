import { get } from "../utils/request";

export const getIeltsWritingPartList = (testId) => {
    return get(`/ielts-test-part/writing-part-list/${testId}`);
}