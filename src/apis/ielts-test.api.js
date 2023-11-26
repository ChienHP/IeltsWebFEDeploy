import { get } from "../utils/request"

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