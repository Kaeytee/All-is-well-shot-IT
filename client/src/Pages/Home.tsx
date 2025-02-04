import React from "react";
import "./Styles/Home.css";
import HomeHero from "../Components/HomeHero/HomeHero.tsx";
import CustomerTestimonials from "../Components/CustomerTestimonials/CustomerTestimonials.tsx";
import WhatWeStandFor from "../Components/WhatWeStandFor/WhatWeStandFor.tsx";

const Home = () => {
  return (
    <div className="relative z-10">
      {/* Main Content Container */}
      <div className="mx-auto space-y-8 px-4 sm:px-6 md:space-y-12 md:px-8 lg:px-16">
        
        {/* Hero Section */}
        <div className="hero mx-auto w-full md:w-11/12 lg:w-4/5">
          <HomeHero />
        </div>

        {/* What We Stand For Section */}
        <div className="md:mt-6">
          <WhatWeStandFor />
        </div>

        {/* Divider */}
        <hr className="mx-auto my-6 w-11/12 border-gray-200 md:my-8" />

        {/* Testimonials Section */}
        <div className="pb-12 w-full sm:pb-16 md:pb-20">
          <CustomerTestimonials />
        </div>
      </div>
    </div>
  );
};

export default Home;