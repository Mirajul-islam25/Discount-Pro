import React, { useEffect } from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import UsePageTitle from '../UsePageTitle/UsePageTitle';


const HomeCard = ({ trip }) => {
    UsePageTitle('Adventure-Details');

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    return (
        <div
            className=" bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            data-aos="fade-up"
        >

            <div className="relative w-full h-48">
                <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover"
                />
            </div>


            <div className="p-4 animate__animated animate__fadeIn">

                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {trip.title}
                </h2>


                <ul className="text-sm text-gray-600 mb-4 list-disc pl-5">
                    {trip.ecoFriendlyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>


                <Link to={`Adventure-Details/${trip.id}`} className="bg-[#59A5D8] text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                    Explore Now
                </Link>
            </div>
        </div>

    );
};

export default HomeCard;
