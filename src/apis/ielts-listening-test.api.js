import http from "../utils/http"

export const getIeltsListeningTests = (page, limit, name) => {
    return http.get(`ielts-listening-test/list`, {
        params: {
            page,
            limit,
            name
        }
    })
}