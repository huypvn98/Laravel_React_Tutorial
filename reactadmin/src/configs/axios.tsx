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

        const { response } = error

        if(response.status === 401){

        }

        return Promise.reject(error)
    }
)

export default axiosInstance