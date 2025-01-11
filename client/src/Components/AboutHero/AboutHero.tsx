import React from 'react'
import './AboutHero.css';
import about from '../../Assets/About.png';

const AboutHero = () => {
  return (
	<div className="relative w-full overflow-hidden">
	{/* Background Image */}
	<div className="relative w-full h-[594px] overflow-hidden">
	  <img
		src={about}
		alt="About Us Background"
		className="about-image w-full h-full object-cover transform transition-transform duration-500 "
	  />
	  {/* Text Overlay */}
	  <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none">
		<h1 className="text-white text-4xl md:text-5xl font-bold ">
		  About Us
		</h1>
	  </div>
	</div>
	<div className="h-[220px] w-[820px] mx-auto flex justify-center items-center mb-11">
		<p className="text-2xl text-center" style={{fontWeight: "400", fontSize: "36px", lineHeight: "1.6"}}>A team of exceptional visual storytellers who capture the essence and emotion of any occasion.</p>
	  </div>
	  <hr />
      
      <div className="w-[977px] mx-auto p-4 flex flex-col text-center justify-center ">
        <p className="normal-line-height py-2" style={{ lineHeight: "2.3", fontSize: "18px", fontWeight: "400" }}>
          With each video we create, we become gatekeepers of cherished memories. Our videography team specializes in capturing not only weddings and traditional weddings, but also corporate events, documentaries, parties, and other celebrations.
          <br /></p>
        <p className="normal-line-height py-4" style={{ lineHeight: "2.3", fontSize: "18px", fontWeight: "400" }}>
          We understand the importance of preserving these special moments and strive to capture them in a way that will make them lifetime memories on our screens. From the exchanging of vows to the dance floor antics, we aim to tell a story through our videos, allowing you to relive the joy and emotions of your event for years to come.
        </p>
        <br />
        <p className="normal-line-height py-4" style={{ lineHeight: "2.3", fontSize: "18px", fontWeight: "400" }}>
          We ensure that every frame is carefully crafted to highlight the beauty and significance of each moment captured. We are your dedicated memory keepers, delivering high-quality videos that encapsulate the essence of your special occasion.
        </p>

      </div>
      <hr />

      {/* services */}
      {/* Top Section */}
      <div className="text-center px-4">
        <div className="topSec h-80 flex flex-col items-center justify-center">
          <h1 className="text-lg text-gray-600 mb-1 uppercase">WHAT WE ARE BEST AT</h1>
          <p className="format text-3xl font-normal leading-relaxed">
            Our Services
          </p>
        </div>
      </div>
	  </div>
	  
  )
}

export default AboutHero