import React, { useEffect } from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const events = [
    {
        id: 1,
        title: "Winter Snow Trek",
        image: "https://i.ibb.co.com/Pm6FTRY/winter.jpg",
        description:
            "Experience the pristine beauty of snow-covered trails this winter.",
        date: "Dec 20, 2024",
    },
    {
        id: 2,
        title: "Spring Forest Expedition",
        image: "https://i.ibb.co.com/TwKnTnM/Spring-Forest-Expedition.jpg",
        description:
            "Explore vibrant springtime flora and fauna in dense forests.",
        date: "March 15, 2025",
    },
    {
        id: 3,
        title: "Summer River Rafting",
        image: "https://i.ibb.co.com/VSnvb40/summer.jpg",
        description:
            "Cool off with thrilling river rafting adventures this summer.",
        date: "July 10, 2025",
    },
];

const EventSpecial = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="py-16">
            <h2
                className="text-3xl font-bold text-center mb-8 "
                data-aos=""
            >
                Upcoming Events & Seasonal Specials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg "
                        data-aos=""
                    >
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <h3 className="text-xl font-semibold mt-4">{event.title}</h3>
                        <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                        <p className="text-sm text-gray-500 mt-2">
                            <strong>Date:</strong> {event.date}
                        </p>
                        <button className="bg-[#59A5D8] text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition duration-300">
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventSpecial;
