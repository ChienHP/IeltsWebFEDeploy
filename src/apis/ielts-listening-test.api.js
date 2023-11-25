import { IELTS_TEST_TYPE } from "../shared/constant"
import http from "../utils/http"
import { deleteReq, get, post, put } from "../utils/request"

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

export const createIeltsListeningPart = (body) => {
    return post(`/create-ielts-listening-part`, body)
}

export const createIeltsTest = (body) => {
    return post(`/ielts-test/create`, body)
}

export const updateIeltsTest = (body) => {
    return put(`/ielts-test/update`, body)
}

export const getIeltsTestDetail = (id) => {
    return get(`/ielts-test/${id}`)
}

export const deleteIeltsTest = (id) => {
    return deleteReq(`/ielts-test/${id}`)
}

export const getIeltsListeningTest = (id) => {
    return get(`ielts-listening-test/get-detail/${id}`)
}    

export const createIeltsListeningQuestions = (body) => {
    return post(`/question-group/create`, body)
}

export const ieltsListeningQuestionList = (testId) => {
    return get(`ielts-listening-test/ielts-listening-questions/${testId}`)
}

export const getScore = (body) => {
    return post(`ielts-test/get-score`, body)
}