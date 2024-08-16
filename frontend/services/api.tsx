import axios from 'axios'

export const URL = 'http://localhost:3333/'

const api = axios.create ({
    baseURL: URL
})

export default api;