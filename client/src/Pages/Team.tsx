import React from 'react';
import './Styles/Home.css';
import teamHead from '../Assets/teamHead11.png';
import team from '../Assets/team';

const Team = () => {
  return (
    <div className="relative w-full mx-auto overflow-hidden lg:w-4/5">
      {/* Background Image */}
      <div className="relative lg:h-[600px] h-[300px] overflow-hidden group sm:h-[400px] md:h-[600px]">
        <img
          src={teamHead}
          alt="Team Background"
          className="w-full  object-cover bg-gray-800 lg:scale-95 lg:grayscale lg:hover:grayscale-0 
                 md:-translate-y-0 lg:-translate-y-8 lg:group-hover:translate-y-[8%] 
                 lg:group-hover:translate-x-[8%] lg:transition-transform lg:duration-500
                 lg:ease-in-out lg:transform lg:group-hover:scale-110"
          style={{ objectPosition: 'bottom', height: '100%' }}
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-3xl text-white md:text-4xl lg:text-5xl font-bold">Team</h1>
        </div>
      </div>

      {/* Team Section Heading */}
      <div className="w-full px-4 mx-auto my-11 md:my-16 lg:w-[820px]">
        <div className="flex flex-col items-center justify-center my-7">
          <h1 className="text-2xl text-center sm:text-3xl lg:text-4xl">Our World-Class Team</h1>
          <p className="mt-4 text-lg text-center md:mt-7">THE ARTISTS</p>
        </div>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 gap-8 px-4 mx-auto mb-16 sm:grid-cols-2 md:gap-16 lg:mb-80 lg:mt-16 lg:max-w-screen-xl">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image Container */}
            <div className="w-full overflow-hidden rounded-lg max-w-[429px] aspect-square">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full transition-transform duration-500 ease-out hover:hover:scale-105"
              />
            </div>
            {/* Name */}
            <h2 className="mt-4 text-xl text-center md:mt-6 md:text-2xl">
              {member.name}
            </h2>
            {/* Position */}
            <p className="mt-2 text-lg text-center text-gray-500 md:text-xl">
              {member.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;