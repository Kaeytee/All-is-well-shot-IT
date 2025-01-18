import React from "react";
import "./Styles/Home.css";
import HomeHero from "../Components/HomeHero/HomeHero.tsx";
import CustomerTestimonials from "../Components/CustomerTestimonials/CustomerTestimonials.tsx";
import WhatWeStandFor from "../Components/WhatWeStandFor/WhatWeStandFor.tsx";

const Home = () => {
  return (
    <div className="">

      <div className="justify-center items-center space-y-12  mx-auto">
        <div className="w-4/5 mx-auto">
          <HomeHero />
        </div>
        <WhatWeStandFor />
        <hr />
      </div>
      <div className="pb-20 w-full">
        <CustomerTestimonials />
      </div>
    </div>
  );
};

export default Home;
