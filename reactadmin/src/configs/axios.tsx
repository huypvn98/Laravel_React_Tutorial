import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: 'https://laravelreact/api/',
    baseURL: 'http://localhost:8083/laravelreact/public/api/v1/',
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.response.use(
    response => {
        return response.data ? response.data : response
    },
    error => {
        return Promise.reject(error)
    }
)

export default axiosInstance