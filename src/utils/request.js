import axios from "axios"

const request = axios.create({
    baseURL: process.env.REACT_APP_WEB_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
})

export const get = async (url, options = {}) => {
    try {
        const response = await request.get(url, options)
        return response.data
    } catch (error) {
        throw error.response.data
    }
}

export const post = async (url, data, options = {}) => {
    try {
        const response = await request.post(url, data, options)
        return response.data
    } catch (error) {
        throw error.response.data
    }
}