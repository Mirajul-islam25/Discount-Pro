import React, { useContext, useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./Login.css";
import UsePageTitle from "../UsePageTitle/UsePageTitle";

const Login = () => {
    UsePageTitle("Login");
    const { userLogin, setUser, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(from, { replace: true });
            })
            .catch((err) => {
                setError({ ...error, login: err.code });
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(from, { replace: true });
            })
            .catch((err) => {
                setError({ ...error, google: err.message });
            });
    };

    const handleForgetPassword = () => {
        const email = document.querySelector('input[name="email"]').value; // Fetch email input value
        navigate("/forget-password", { state: { email } });
    };

    return (
        <div className="bgImg my-5">
            <div className="bg-sky-200/70 flex justify-center items-center min-h-screen">
                <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                    <h2 className="text-3xl font-bold text-center text-cyan-600 mb-6">
                        Welcome Back!
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="pl-10 p-3 border rounded w-full focus:outline-none focus:ring focus:ring-sky-300"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <FaLock className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="pl-10 p-3 border rounded w-full focus:outline-none focus:ring focus:ring-sky-300"
                                    required
                                />
                                {error.login && (
                                    <label className="label text-sm text-red-400">
                                        {error.login}
                                    </label>
                                )}
                            </div>
                            <p
                                onClick={handleForgetPassword}
                                className="text-sm text-cyan-600 mt-2 hover:underline cursor-pointer"
                            >
                                Forgot your password?
                            </p>
                        </div>

                        <button className="bg-cyan-600 text-white py-2 px-4 rounded w-full hover:bg-cyan-700 transition">
                            Login
                        </button>
                    </form>

                    <div className="divider">OR</div>

                    <button
                        onClick={handleGoogleLogin}
                        className="bg-white text-black border border-gray-300 py-2 px-4 rounded w-full hover:bg-gray-100 flex items-center justify-center gap-2"
                    >
                        <FcGoogle className="text-xl" /> Continue with Google
                    </button>

                    <p className="text-center text-sm mt-4">
                        New to DiscountPro?{" "}
                        <Link to="/register" className="text-cyan-600 hover:underline">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
