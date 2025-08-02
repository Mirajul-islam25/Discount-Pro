import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add(
      "bg-gradient-to-br",
      "from-indigo-900",
      "via-pink-700",
      "to-yellow-500"
    );
    return () => {
      document.body.classList.remove(
        "bg-gradient-to-br",
        "from-indigo-900",
        "via-pink-700",
        "to-yellow-500"
      );
    };
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-pink-700 to-yellow-500 animate-gradient-bg"></div>

      {/* Floating blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay opacity-30 filter blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 bg-pink-400 rounded-full mix-blend-overlay opacity-25 filter blur-2xl animate-float delay-2000"></div>
      <div className="absolute top-1/3 right-[-40px] w-60 h-60 bg-yellow-300 rounded-full mix-blend-overlay opacity-20 filter blur-2xl animate-float-slower"></div>

      {/* Card */}
      <div className="relative z-10 max-w-md w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl text-center flex flex-col items-center gap-4">
        {/* Icon */}
        <div className="flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-2">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff4666"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="inline-block"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <circle cx="12" cy="16" r="1" />
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-1">
          404 - Not Found
        </h2>
        <p className="text-sm text-gray-200 mb-6">
          Oops! The page you’re looking for doesn’t exist or has moved.
        </p>
        <button
          onClick={handleGoHome}
          className="relative inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg overflow-hidden group transition 
            hover:scale-[1.02] focus:outline-none"
          aria-label="Go back to home"
        >
          <span className="flex items-center">
            Go Back to Home
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
          {/* ripple effect */}
          <span className="absolute inset-0 rounded-full opacity-0 group-active:opacity-20 bg-white transition"></span>
        </button>
      </div>

      {/* Tailwind custom animations via inline <style> fallback if not in config */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-bg {
            background-size: 300% 300%;
            animation: gradientShift 20s ease infinite;
          }
          @keyframes float {
            0%,100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-15px) scale(1.03); }
          }
          .animate-float {
            animation: float 12s ease-in-out infinite;
          }
          .animate-float-slow {
            animation: float 16s ease-in-out infinite;
          }
          .animate-float-slower {
            animation: float 20s ease-in-out infinite;
          }
          .delay-2000 {
            animation-delay: 2s;
          }
        `}
      </style>
    </div>
  );
};

export default Error;
