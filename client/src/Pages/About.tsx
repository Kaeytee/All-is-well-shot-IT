import React from 'react';
import about from '../Assets/About.png';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full h-[594px] overflow-hidden">
        <img
          src={about}
          alt="About Us Background"
          className="about-image w-full h-full object-cover transform transition-transform duration-500 hover:scale-125"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none">
          <h1 className="text-white text-4xl md:text-5xl font-bold ">
            About Us
          </h1>
        </div>
      </div>
      <div className="h-[220px] w-[820px] mx-auto flex justify-center items-center ">
          <p className="text-2xl text-center" style={{fontWeight: "500", fontSize: "36px"}}>A team of exceptional visual storytellers who capture the essence and emotion of any occasion.</p>
        </div>
        <hr />
      <div className="w-[977px] mx-auto p-4 flex flex-col text-center justify-center ">
      <p className="normal-line-height py-11" style={{ lineHeight: "2.1", fontSize: "18px", fontWeight: "400" }}>
          With each video we create, we become gatekeepers of cherished memories. Our videography team specializes in capturing not only weddings and traditional weddings, but also corporate events, documentaries, parties, and other celebrations. 
          <br />We understand the importance of preserving these special moments and strive to capture them in a way that will make them lifetime memories on our screens. From the exchanging of vows to the dance floor antics, we aim to tell a story through our videos, allowing you to relive the joy and emotions of your event for years to come.
           <br />We ensure that every frame is carefully crafted to highlight the beauty and significance of each moment captured. We are your dedicated memory keepers, delivering high-quality videos that encapsulate the essence of your special occasion.
        </p>
      </div>


      
    </div>
  );
};

export default About;