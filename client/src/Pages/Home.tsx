import React from "react";
import "./Styles/Home.css";
import HomeHero from "../Components/HomeHero/HomeHero.tsx";
import CustomerTestimonials from "../Components/CustomerTestimonials/CustomerTestimonials.tsx";
import WhatWeStandFor from "../Components/WhatWeStandFor/WhatWeStandFor.tsx";

const Home = () => {
  return (
    <div className="justify-center items-center space-y-12">
      <HomeHero />
      <WhatWeStandFor/>
      <hr />
      <div className="pb-20"> {/* Add padding below */}
        <CustomerTestimonials />
      </div>
    </div>
  );
};

export default Home;
