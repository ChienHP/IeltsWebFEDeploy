import { post } from "../utils/request";

export const createIeltsReadingPart = (body) => {
    return post(`/ielts-test-part/create-ielts-reading-part`, body);
};
