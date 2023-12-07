import axios from "axios"

const request = axios.create({
    baseURL: process.env.REACT_APP_WEB_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
    },
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
        if (Array.isArray(error.response.data.message)) {
            throw error.response.data.message.join(", ")
        } else throw error.response.data.message
    }
}

export const put = async (url, data, options = {}) => {
    try {
        const response = await request.put(url, data, options)
        return response.data
    } catch (error) {
        if (Array.isArray(error.response.data.message)) {
            throw error.response.data.message.join(", ")
        } else throw error.response.data.message
    }
}

export const deleteReq = async (url, options = {}) => {
    try {
        const response = await request.delete(url, options)
        return response.data
    } catch (error) {
        throw error.response.data
    }
}