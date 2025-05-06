import React from "react";
import Slider from "../Slider/Slider";
import TripCards from "../TripCards/TripCards";
import EventSpecial from "../EventSpecial/EventSpecial";
import TravelerStories from "../TravelerStories/TravelerStories";
import UsePageTitle from "../UsePageTitle/UsePageTitle";

const Home = () => {
  UsePageTitle("Home");
  return (
    <div className="">
      <div className="mb-20">
        <div className="text-center  py-10 rounded-md  mb-6">
          <h2 className="text-4xl font-bold text-teal-600 mb-4">
            Shop Smart, Save More – Discover Bangladesh’s Best Deals!
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Smart Savings, Made Simple Find real-time coupons from top
            Bangladeshi e-commerce sites Tailored deals, personalized just for
            you Shop more, save better — only on Discount Pro
          </p>
        </div>

        <Slider></Slider>
      </div>

      <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
        <TripCards></TripCards>
      </div>
      <div>
        <EventSpecial></EventSpecial>
      </div>
      <div>
        <TravelerStories></TravelerStories>
      </div>
    </div>
  );
};

export default Home;
