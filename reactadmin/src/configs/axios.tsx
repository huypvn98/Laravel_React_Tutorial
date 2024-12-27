import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: 'https://laravelreact/api/',
    baseURL: 'http://localhost:8083/laravelreact/public/api/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosInstance