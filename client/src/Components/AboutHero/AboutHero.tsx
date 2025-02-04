import React from 'react';
import './AboutHero.css';
import about from '../../Assets/About.png';

const AboutHero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
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

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <div className="mb-8 sm:mb-12">
          <p className="text-center text-xl leading-relaxed text-gray-800 sm:text-2xl md:text-3xl">
            A team of exceptional visual storytellers who capture the essence and emotion of any occasion.
          </p>
        </div>
        <hr className="my-8" />
        
        <div className="space-y-6 text-gray-600">
          <p className="text-lg leading-relaxed">
            With each video we create, we become gatekeepers of cherished memories. Our videography team specializes in capturing not only weddings and traditional weddings, but also corporate events, documentaries, parties, and other celebrations.
          </p>
          <p className="text-lg leading-relaxed">
            We understand the importance of preserving these special moments and strive to capture them in a way that will make them lifetime memories on our screens. From the exchanging of vows to the dance floor antics, we aim to tell a story through our videos, allowing you to relive the joy and emotions of your event for years to come.
          </p>
          <p className="text-lg leading-relaxed">
            We ensure that every frame is carefully crafted to highlight the beauty and significance of each moment captured. We are your dedicated memory keepers, delivering high-quality videos that encapsulate the essence of your special occasion.
          </p>
        </div>
        <hr className="my-8" />

        {/* Services Header */}
        <div className="py-12 sm:py-16">
          <div className="text-center">
            <h2 className="mb-2 text-sm uppercase text-gray-600 sm:text-base">
              WHAT WE ARE BEST AT
            </h2>
            <p className="text-2xl font-normal sm:text-3xl">
              Our Services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;