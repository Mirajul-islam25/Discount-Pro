// import React, { useState } from "react";

// import { useLoaderData, useParams } from "react-router-dom";
// import "./Details.css"

// const Details = () => {
//     const { id } = useParams();
//     // console.log(id)
//     const adventures = useLoaderData();
//     // console.log(adventures)
//     const adventure = adventures.find((item) => parseInt(item.id) === Number(id));
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const {
//         title,
//         image,
//         category,
//         shortDescription,
//         cost,
//         bookingAvailability,
//         location,
//         duration,
//         adventureLevel,
//         includedItems,
//         ecoFriendlyFeatures,
//         maxGroupSize,
//         specialInstructions,
//     } = adventure;

//     const handleExpertTalk = () => {
//         const currentHour = new Date().getHours();
//         if (currentHour >= 10 && currentHour <= 20) {
//             window.open("https://meet.google.com/", "_blank");
//         } else {
//             setIsModalOpen(true);
//         }
//     };

//     return (
//         <div className="bgImg">
//             <div className="bg-sky-200/70 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-8 px-6 md:px-16">
//                 <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">

//                     <img src={image} alt={title} className="w-full h-80 object-cover" />

//                     <div className="p-8">
//                         <h1 className="text-4xl font-bold text-cyan-700 mb-4">{title}</h1>
//                         <h3 className="text-xl font-medium text-gray-600 mb-2">{category}</h3>
//                         <p className="text-gray-600 mb-6">{shortDescription}</p>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                             <div>
//                                 <h4 className="font-bold text-gray-700">Location:</h4>
//                                 <p className="text-gray-600">{location}</p>
//                             </div>
//                             <div>
//                                 <h4 className="font-bold text-gray-700">Duration:</h4>
//                                 <p className="text-gray-600">{duration}</p>
//                             </div>
//                             <div>
//                                 <h4 className="font-bold text-gray-700">Cost:</h4>
//                                 <p className="text-gray-600">${cost}</p>
//                             </div>
//                             <div>
//                                 <h4 className="font-bold text-gray-700">Adventure Level:</h4>
//                                 <p className="text-gray-600">{adventureLevel}</p>
//                             </div>
//                             <div>
//                                 <h4 className="font-bold text-gray-700">Max Group Size:</h4>
//                                 <p className="text-gray-600">{maxGroupSize} people</p>
//                             </div>
//                             <div>
//                                 <h4 className="font-bold text-gray-700">Booking Availability:</h4>
//                                 <p
//                                     className={`font-semibold ${bookingAvailability ? "text-green-600" : "text-red-600"
//                                         }`}
//                                 >
//                                     {bookingAvailability ? "Available" : "Not Available"}
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="mb-6">
//                             <h4 className="font-bold text-gray-700">Included Items:</h4>
//                             <ul className="list-disc pl-5 text-gray-600">
//                                 {includedItems.map((item, index) => (
//                                     <li key={index}>{item}</li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <div className="mb-6">
//                             <h4 className="font-bold text-gray-700">Eco-Friendly Features:</h4>
//                             <ul className="list-disc pl-5 text-gray-600">
//                                 {ecoFriendlyFeatures.map((feature, index) => (
//                                     <li key={index}>{feature}</li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <div className="mb-6">
//                             <h4 className="font-bold text-gray-700">Special Instructions:</h4>
//                             <ul className="list-disc pl-5 text-gray-600">
//                                 {specialInstructions.map((instruction, index) => (
//                                     <li key={index}>{instruction}</li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <button
//                             onClick={handleExpertTalk}
//                             className="bg-cyan-700 text-white py-2 px-6 rounded-md hover:bg-cyan-800 transition"
//                         >
//                             Talk with Expert
//                         </button>
//                     </div>
//                 </div>

//                 {isModalOpen && (
//                     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//                         <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//                             <h2 className="text-xl font-bold text-cyan-700 mb-4">Consultation Time</h2>
//                             <p className="text-gray-600 mb-6">
//                                 Our experts are available between <strong>10:00 AM</strong> and <strong>8:00 PM</strong>.
//                                 Please visit us during this time for assistance.
//                             </p>
//                             <button
//                                 onClick={() => setIsModalOpen(false)}
//                                 className="bg-cyan-700 text-white py-2 px-4 rounded-md hover:bg-cyan-800 transition"
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Details;
