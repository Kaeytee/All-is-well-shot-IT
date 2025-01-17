import React from 'react';
import ServiceGrid from '../Components/ServiceGrid/ServiceGrid.tsx';
import AboutHero from '../Components/AboutHero/AboutHero.tsx';
const About = () => {
  return (
    <div className="w-4/5 mx-auto">
      <AboutHero />
      <div className="w-full">


      <ServiceGrid />
      </div>
    </div>
  );
};

export default About;