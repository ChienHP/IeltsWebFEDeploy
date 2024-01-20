import { post } from "../utils/request";

export const createIeltsReadingPart = (body) => {
    return post(`/ielts-test-part/create-ielts-reading-part`, body);
};

export const updateIeltsReadingPart = (body) => {
    return post(`/ielts-test-part/reading/update`, body);
};