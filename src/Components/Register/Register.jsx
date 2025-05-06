import React, { useContext, useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { MdAddAPhoto } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import './Register.css';
import UsePageTitle from '../UsePageTitle/UsePageTitle';

const Register = () => {
    UsePageTitle('Register');
    const { createNewUser, setUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [passwordError, setPasswordError] = useState("");


    const from = location.state?.from?.pathname || "/";

    const validatePassword = (password) => {
        if (!/[A-Z]/.test(password)) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!/[a-z]/.test(password)) {
            return "Password must contain at least one lowercase letter.";
        }
        if (password.length < 6) {
            return "Password must be at least 6 characters long.";
        }
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        const passwordValidationError = validatePassword(password);
        if (passwordValidationError) {
            setPasswordError(passwordValidationError);
            return;
        }
        setPasswordError("");

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate(from, { replace: true });
                    })
                    .catch((error) => {
                        console.error("Profile update error:", error);
                    });
            })
            .catch((error) => {
                console.error("Registration error:", error);
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                setUser(result.user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error("Google sign-in error:", error);
            });
    };

    return (
        <div className="bgImg my-6">
            <div className="bg-sky-200/70 flex justify-center items-center min-h-screen">
                <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                    <h2 className="text-3xl font-bold text-center text-sky-600 mb-6">Join Us Today!</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Name</label>
                            <div className="relative">
                                <FaUser className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="pl-10 p-3 border rounded w-full focus:outline-none focus:ring focus:ring-sky-300"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Profile Picture</label>
                            <div className="relative">
                                <MdAddAPhoto className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    name="photo"
                                    type="text"
                                    placeholder="Enter photo url"
                                    className="pl-10 p-3 border rounded w-full focus:outline-none focus:ring focus:ring-sky-300"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
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
                            <label className="block text-gray-700 font-medium mb-2">Password</label>
                            <div className="relative">
                                <FaLock className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className="pl-10 p-3 border rounded w-full focus:outline-none focus:ring focus:ring-sky-300"
                                    required
                                />
                            </div>
                            {passwordError && (
                                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                            )}
                        </div>

                        <button
                            className="bg-sky-600 text-white py-2 px-4 rounded w-full hover:bg-sky-700 transition"
                        >
                            Register
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
                        Already registered?{" "}
                        <Link to="/login" className="text-sky-600 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
