import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth"; 
import { AuthContext } from "../../provider/AuthProvider";

import UsePageTitle from '../UsePageTitle/UsePageTitle';
const ForgetPassword = () => {
    UsePageTitle('Forget Password');
    const location = useLocation();
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext)

    const [email, setEmail] = useState("");

    useEffect(() => {
        if (location?.state?.email) {
            setEmail(location.state.email);
        }
    }, [location]);

    const handleResetPassword = (e) => {
        e.preventDefault();

        if (!email) {
            alert("Please enter your email address.");
            return;
        }

       
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset email sent. Redirecting to Gmail...");
                window.location.href = "https://mail.google.com/";
            })
            .catch((error) => {
                console.error("Error resetting password:", error.message);
                alert("Failed to send reset email. Please try again later.");
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 shadow-lg rounded-lg w-96">
                <h2 className="text-2xl font-semibold text-center text-sky-600 mb-4">
                    Reset Password
                </h2>
                <form onSubmit={handleResetPassword}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="p-3 border rounded w-full focus:outline-none focus:ring focus:ring-sky-300"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-sky-600 text-white py-2 px-4 rounded w-full hover:bg-sky-700 transition"
                    >
                        Reset Password
                    </button>
                </form>
                <button
                    onClick={() => navigate("/login")}
                    className="mt-4 text-sm text-sky-600 underline hover:text-sky-700"
                >
                    Back to Login
                </button>
            </div>
        </div>
    );
};

export default ForgetPassword;
