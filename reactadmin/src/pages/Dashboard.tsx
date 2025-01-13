import { useEffect } from "react"
import { useToast } from "../contexts/ToastContext"
import { toast } from "react-toastify"

const Dashboard = () => {

    const { message, setMessage } = useToast()

    useEffect(() => {
        if(message){
            toast.success(message)
            setMessage('')
        }

    }, [message, setMessage])

    return (
        <>
            <div>
                Đây là trang Dashboard nè
            </div>
        </>
    )
}

export default Dashboard