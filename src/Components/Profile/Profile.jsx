import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import UsePageTitle from '../UsePageTitle/UsePageTitle';
const Profile = () => {
    UsePageTitle('My Profile');
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleUpdateProfile = () => {
        navigate('/update-profile');
    };

    if (!user) {
        return (
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
                    <h2 className="text-3xl text-red-600 font-bold mb-4">User Not Logged In</h2>
                    <p className="text-lg text-gray-700">Please log in to view your profile.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-3xl text-sky-600 font-bold mb-4">Welcome, {user.displayName}!</h2>

                <div className="flex flex-col items-center">
                    <img
                        src={user.photoURL || 'https://via.placeholder.com/150'}
                        alt="Profile"
                        className="w-32 h-32 rounded-full mb-4"
                    />
                    <p className="text-lg text-gray-700 mb-2">Name: {user.displayName}</p>
                    <p className="text-lg text-gray-700 mb-2">Email: {user.email}</p>
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={handleUpdateProfile}
                        className="bg-sky-600 text-white py-2 px-4 rounded w-full hover:bg-sky-700 transition"
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
