import React from 'react';
import './Styles/Home.css';
import HomeHero from '../Components/HomeHero/HomeHero.tsx';
import CustomerTestimonials from '../Components/CustomerTestimonials/CustomerTestimonials.tsx';


const Home = () => {
  return (
    <div className=" justify-center items-center ">
      <HomeHero />
      <div className="h"></div>
      <CustomerTestimonials />
    </div>
  );
};

export default Home;