import React from 'react';
import ServiceGrid from '../Components/ServiceGrid/ServiceGrid.tsx';
import AboutHero from '../Components/AboutHero/AboutHero.tsx';

const About = () => {
  return (
    <div className="mx-auto w-full md:w-11/12 lg:w-4/5">
      <div className="relative lg:h-[600px] h-[300px] overflow-hidden group sm:h-[400px] md:h-[600px]">
        <AboutHero />
      </div>
      
      <div className="w-full">
        <ServiceGrid />
      </div>
    </div>
  );
};

export default About;