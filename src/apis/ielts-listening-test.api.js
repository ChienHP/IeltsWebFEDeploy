import { IELTS_TEST_TYPE } from "../shared/constant"
import http from "../utils/http"
import { get, post } from "../utils/request"

export const getIeltsTestList = (page, limit, name, type) => {
    return http.get(`ielts-test/list`, {
        params: {
            page,
            limit,
            name,
            type
        }
    })
}

export const getIeltsTestPartList = (testId) => {
    return get(`/ielts-test-part/list/${testId}`)
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
    return post(`/question-group/create`, body)
}

export const ieltsListeningQuestionList = (testId) => {
    return get(`ielts-listening-test/ielts-listening-questions/${testId}`)
}