import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();


    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
                <h2 className="text-4xl text-red-600 font-bold mb-4">404 - Not Found</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Oops! The page you are looking for does not exist.
                </p>
                <button
                    onClick={handleGoHome}
                    className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition"
                >
                    Go Back to Home
                </button>
            </div>
        </div>
    );
};

export default Error;

