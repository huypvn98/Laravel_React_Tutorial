import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

type Inputs = {
    email: string,
    password: string,
};

const Login = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const loginHandler: SubmitHandler<Inputs> = async (payload) => {
        const logged = await login(payload)
        logged && navigate('/dashboard')
    };

    return (
        <div className="min-h-screen pt-24 items-center justify-center bg-gray-100">
            <div className="max-w-screen-md mx-auto">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4">
                        <h2 className="font-bold text-2xl mb-4 text-neutral-500">
                            Welcome to HT Version 1.0.0+
                        </h2>
                        <p className="mb-2 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odit eius fugiat nesciunt dolor molestias,
                            blanditiis rem, at suscipit provident est, explicabo
                            velit error quod? Officia, soluta fugiat! Quae, sed
                            nisi?
                        </p>
                        <p className="mb-2 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odit eius fugiat nesciunt dolor molestias,
                            blanditiis rem, at suscipit provident est, explicabo
                            velit error quod? Officia, soluta fugiat! Quae, sed
                            nisi?
                        </p>
                        <p className="mb-2 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odit eius fugiat nesciunt dolor molestias,
                            blanditiis rem, at suscipit provident est, explicabo
                            velit error quod? Officia, soluta fugiat! Quae, sed
                            nisi?
                        </p>
                    </div>
                    <div className="bg-white p-5 rounded shadow-lg w-full max-w-md">
                        <form onSubmit={handleSubmit(login)}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Email"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none                     focus-border-sky-500 h-11"
                                    {...register("email", { required: true })}
                                />
                                {errors.password && <span className="text-red-500 text">Bạn phải nhập vào email</span>}
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Mật khẩu"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none                    focus-border-sky-500 h-11"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className="text-red-500 text-xs">Bạn phải nhập vào mật khẩu</span>}
                            </div>
                            <div className="mb-2">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white hover:bg-blue-700 py-1.5 shadow-button rounded-md"
                                >
                                    Đăng nhập
                                </button>
                            </div>
                            <p className="text-gray-700 mb-2 text-xs">
                                <a href="/" className="text-blue-700">
                                    Quên mật khẩu
                                </a>
                            </p>
                            <div className="description text-xs text-gray-700">
                                Chào mừng bạn đến với hệ thống bất động sản version 1.0 của KP
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
