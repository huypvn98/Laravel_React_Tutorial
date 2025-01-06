import axiosInstance from "../configs/axios";
import axios from "axios";
import { toast } from "react-toastify";

type LoginPayload = {
    email: string,
    password: string
}

const login = async (payload:LoginPayload) => {
    try {

        await axiosInstance.post('/auth/login', {
            email: payload.email,
            password: payload.password
        })
        return true

    } catch (error) {
        if(axios.isAxiosError(error)){
            if(error.response && error.response.data){
                toast.error(error.response.data.error)
            }
        }
        return false
    }
}

export { login }