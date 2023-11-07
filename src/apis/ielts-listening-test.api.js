import http from "../utils/http"
import { get, post } from "../utils/request"

export const getIeltsListeningTests = (page, limit, name) => {
    return http.get(`ielts-listening-test/list`, {
        params: {
            page,
            limit,
            name
        }
    })
}

export const createIeltsListeningTest = (body) => {
    return post(`ielts-listening-test/create`, body)
}

export const getIeltsListeningTest = (id) => {
    return get(`ielts-listening-test/get-detail/${id}`)
}    

export const getIeltsListeningPartList = (id) => {
    return get(`ielts-listening-test/ielts-listening-parts/${id}`)
}

export const createIeltsListeningQuestions = (body) => {
    return post(`/ielts-listening-questions/create`, body)
}

export const ieltsListeningQuestionList = (testId) => {
    return get(`ielts-listening-test/ielts-listening-questions/${testId}`)
}