import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import axios from "axios";


const Register = () => {

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
        }
        const { responce } = await axios.post("https://api-fresh-harvest.code-commando.com/api/v1/users/register", userInfo)
        console.log(responce);

        reset();
    }
    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <section className="bg-gray-200">
                <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-semibold text-center text-gray-800">Register</h2>
                            <button
                                onClick={handleGoBack}
                                className="text-gray-500 hover:text-gray-800 text-2xl" >
                                <TfiClose className="text-2xl " />
                            </button>
                        </div>
                        {/* Modal Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Full Name */}
                            <div className="mb-4">
                                <label
                                    htmlFor="fullname"
                                    className="block text-gray-600 font-medium mb-2"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    {...register("name", { required: true })}
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6A1A] focus:border-transparent"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-600 font-medium mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    {...register("email", { required: true })}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6A1A] focus:border-transparent"
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-4 relative">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-600 font-medium mb-2"
                                >
                                    Password
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    {...register("password", { required: true })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6A1A] focus:border-transparent" placeholder="Password" />
                                {/* eye icon setup */}
                                <p className="absolute top-11 right-3 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                                </p>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="text-[#FF6A1A] focus:ring-[#FF6A1A] rounded"
                                    />
                                    <label htmlFor="remember" className="ml-2 text-gray-600">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#" className="text-sm hover:underline">
                                    Forgot Password?
                                </a>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#FF6A1A] hover:bg-orange-600 text-white font-medium py-2 rounded-md transition duration-300"
                            >
                                Register
                            </button>

                            {/* Divider */}
                            <div className="flex items-center my-4">
                                <hr className="w-full border-gray-300" />
                                <span className="px-2 text-gray-500">Or</span>
                                <hr className="w-full border-gray-300" />
                            </div>

                            {/* Already have an account */}
                            <p className="text-center text-gray-600">
                                Already have an account?{" "}
                                <Link to={'/login'} className="text-[#FF6A1A] font-medium hover:underline">
                                    Log in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;