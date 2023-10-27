import axios from 'axios'

class Http {
    instance
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:3001',
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
    }
}

const http = new Http().instance

export default http