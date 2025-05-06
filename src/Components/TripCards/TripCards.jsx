import React, { useEffect, useState } from 'react';
import HomeCard from '../HomeCard/HomeCard';

const TripCards = () => {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setTrips(data))
    }, [])
    return (
        <div>
            <div>
                <div className="text-center my-8">
                    <h1 className="text-4xl font-bold text-cyan-700">
                        ❄️ Experience With EarthQuest ❄️
                    </h1>
                    <p className="text-lg text-gray-600 mt-4">
                        Embrace the thrill of discovery with eco-friendly journeys across breathtaking landscapes. Let nature guide your path to unforgettable experiences!
                    </p>
                </div>

            </div>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 items-center'>
                {
                    trips.map(trip => <HomeCard key={trip.id} trip={trip}></HomeCard>)
                }
            </div>
        </div>
    );
};

export default TripCards;