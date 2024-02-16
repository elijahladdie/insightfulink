import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
interface UserFormData {
    username: string;
    password: string;
    user_fullnames: string;
    access_level: number;
    subscription_status: string;
}
const Login: React.FC = () => {

    const [formData, setFormData] = useState<UserFormData>({
        username: "",
        password: "",
        user_fullnames: "",
        access_level: 0,
        subscription_status: "inactive",
    });
    const [isLogin, setIsLogin] = useState(true);

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    //**register */
    const handleSubmit = async () => {
        try{

            const { data } = await axios.post(`http://localhost:5000/user/register`, formData)
            if (data.message) {
                toast.success(data.message);
            } else if (data.error) {
                toast.error(data.error);
            }
        }catch(err){

            console.log(err)
        }
    };
    const handleLogin = async () => {
        const { username, password } = formData;

        // Client-side validation
        if (username.trim() === "" || password.trim() === "") {
            return toast.error("Please provide both username and password.");
        }

        try {
            const response = await axios.post(`http://localhost:5000/user/login`, {
                username,
                password
            });

            const { data } = response;

            if (response) {
                toast.success(data.message);
                setTimeout(() => {
                    window.location.href = "/dashboard"
                }, 1000)
            }
            // Display success message

            // Store data in localStorage
            localStorage.setItem("access_info", JSON.stringify(data));
        } catch (error) {
            // Handle errors
            console.error("Error occurred:", error);

            toast.error("Incorrect username or password");

        }


    };

    return (
        <div className="h-[90vh] flex   items-center justify-center flex-col">
            <h1 className="text-custom-tomato text-[19px] p-2 capitalize py-3">
                <ToastContainer position="top-center" className="w-40" />
                Welcome {isLogin ? "back Login" : "sign up"}
            </h1>
            <div
                className=" rounded-md text-sm space-y-4 p-3 min-w-96"

            >
                <div className="w-full">
                    <label>Username</label>
                    <br />
                    <input
                        type="text"
                        required
                        placeholder="Enter username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="block w-full outline-none rounded-md px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                    />
                </div>
                <div className="w-full">
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        required
                        placeholder="Enter password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="block w-full outline-none rounded-md border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                    />
                </div>
                {!isLogin &&
                    <div className="w-full">
                        <label>Full Name</label>
                        <br />
                        <input
                            type="text"
                            required
                            placeholder="Enter full names"
                            name="user_fullnames"
                            value={formData.user_fullnames}
                            onChange={handleInputChange}
                            className="block w-full outline-none rounded-md border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                        />
                    </div>
                }



                <div className="flex justify-between flex-end items-center gap-4">{
                    isLogin ? (
                        // 
                        <>
                            <button
                                type="submit"
                                onClick={handleLogin}
                                className="bg-custom-tomato shadow text-white text-center shadow-lg rounded-md py-2 w-full"

                            >
                                Login
                            </button>
                            <p>or</p>
                            <button
                                type="submit"
                                className="text-custom-tomato shadow-lg  rounded-md py-2 w-full"
                                onClick={() => setIsLogin(false)}
                            >
                                Register
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className="bg-custom-tomato shadow text-white text-center shadow-lg rounded-md py-2 w-full"
                            >
                                Register
                            </button>
                            <p>or</p>
                            <button
                                type="submit"
                                className="text-custom-tomato shadow-lg  rounded-md py-2 w-full"
                                onClick={() => setIsLogin(true)}
                            >
                                Login
                            </button>
                        </>
                    )
                }
                </div>
            </div>
        </div>

    );
};

export default Login;
