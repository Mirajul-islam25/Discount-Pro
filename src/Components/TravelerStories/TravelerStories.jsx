import React, { useEffect } from 'react';
import 'animate.css';
import 'aos/dist/aos.css';
  

const TravelerStories = () => {


  return (
    <div className="bg-sky-200/70 py-10 px-4 text-center">
    <h2 className="text-2xl font-bold mb-2">Never Miss a Deal</h2>
    <p className="text-gray-700 mb-6">
      Subscribe to our newsletter and get personalized deals delivered straight to your inbox.
    </p>
    <div className="flex justify-center items-center gap-2 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Your email address"
        className="input input-bordered w-full"
      />
      <button className="btn bg-teal-600 text-white hover:bg-teal-700">Subscribe</button>
    </div>
  </div>      
  );
};

export default TravelerStories;
