import React from "react";
import "./WhatWeStandFor.css";
import hero from "../../Assets/hero.png";
import hero2 from "../../Assets/hero2.png";
import { Link } from "react-router-dom";

const WhatWeStandFor = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="text-center px-4">
        <div className="topSec h-80 flex flex-col items-center justify-center">
          <h1 className="text-lg text-gray-600 mb-4">What we stand for</h1>
          <p className="format text-3xl font-medium leading-relaxed">
            Capturing the essence and emotions of every occasion with our unique
            and creative approach.
          </p>
        </div>
      </div>

      {/* Two Child Divs */}
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-6 px-4">
        {/* Left Section */}
        <div className="flex-1 text-center lg:text-center">
          <h1 className="text-lg text-gray-600 items-center mb-10">About Us</h1>
          <p className="text-3xl items-center font-normal mb-6">Who Are we</p>
          <p className="text text-lg text-gray-600 mb-6 leading-relaxed">
            We are a team of videographers who work closely with clients and
            brands to craft memorable experiences that reflect your values and
            objectives. Trust our team to tell your unique story with excellence
            and passion.
          </p>

          <Link
            to="/about"
            className="bg-black text-white hover:bg-gray-500 px-12 py-3 rounded-lg active:bg-gray-700 uppercase font-semibold"
          >
            About Us
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <img src={hero} alt="Hero" className="heroimg rounded-lg" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-6 px-4 py-32">
        {/* Left Section */}
        <div className="flex-1">
          <img
            src={hero2}
            alt="Portfolio"
            className="heroimg rounded-lg w-full"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 text-center lg:text-center">
          <h1 className="text-lg text-gray-600 items-center mb-10">
            Our Services
          </h1>
          <p className="text-3xl items-center font-normal mb-6">What we do</p>
          <p className="text text-lg text-gray-600 mb-6 leading-relaxed">
            Our team of professionals help you preserve every precious moment of
            your celebrations, showcase the success and impact of companies,
            tell captivating stories with documentaries, capture the energetic
            atmosphere and fun-filled memories at parties, and elevate your
            footage with aerial perspectives.
          </p>
          <Link
            to="/portfolio"
            className="bg-black text-white hover:bg-gray-500 px-12 py-3 rounded-lg active:bg-gray-700 uppercase font-semibold"
          >
            Our Works
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatWeStandFor;
