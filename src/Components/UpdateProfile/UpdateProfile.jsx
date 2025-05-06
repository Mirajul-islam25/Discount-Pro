import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import UsePageTitle from '../UsePageTitle/UsePageTitle';

const UpdateProfile = () => {
    UsePageTitle('Update-Profile');
    const { user, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const [error, setError] = useState('');

    useEffect(() => {
        // If no user is logged in, redirect to login page
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    // Handling form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate fields (e.g., make sure the URL is not empty)
        if (!photoURL) {
            setError('Photo URL cannot be empty');
            return;
        }

        // Call the update profile method from the context
        updateUserProfile({ displayName: name, photoURL })
            .then(() => {
                // Navigate the user to the MyProfile page after update
                navigate('/Profile');
            })
            .catch((err) => {
                setError('Failed to update profile. Please try again.');
                console.error(err);
            });
    };

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-3xl font-bold text-center text-sky-600 mb-6">Update Profile</h2>
                
                {/* Error handling */}
                {error && (
                    <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="pl-4 p-3 border rounded w-full focus:outline-none focus:ring focus:ring-sky-300"
                            required
                        />
                    </div>

                    {/* Photo URL Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Profile Photo URL</label>
                        <input
                            type="text"
                            name="photoURL"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            className="pl-4 p-3 border rounded w-full focus:outline-none focus:ring focus:ring-sky-300"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-sky-600 text-white py-2 px-4 rounded w-full hover:bg-sky-700 transition"
                    >
                        Update Information
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
