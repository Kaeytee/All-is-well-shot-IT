import React from 'react';
import './Styles/Home.css';
import teamHead from '../Assets/teamHead11.png';
import team from '../Assets/team';



const Team = () => {
  return (
<div className="relative w-4/5 mx-auto overflow-hidden">
      {/* Background Image */}
      <div className="relative h-[600px] overflow-hidden group">
        <img
          src={teamHead}
          alt="About Us Background"
          className="w-full scale-95  object-cover transition-transform duration-500 ease-in-out grayscale-[100%] transform group-hover:scale-110 group-hover:-translate-y-[5%] group-hover:translate-x-[8%] -translate-y-48 hover:filter-none bg-gray-800 hover:bg-white"
          style={{ objectPosition: 'bottom' }}
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Team</h1>
        </div>
      </div>

      {/* Team Section Heading */}
      <div className="h-[220px] w-[820px] mx-auto flex justify-center items-center mb-11">
        <div className="flex flex-col justify-center items-center my-7">
          <h1 className="text-4xl ">Our World-Class Team</h1>
          <p className="text-lg text-center mt-7">THE ARTISTS</p>
        </div>
      </div>

 {/* Team Members */}
 <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-16 px-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-80 mt-16">
  {team.map((member, index) => (
    <div key={index} className="flex flex-col items-center">
      {/* Image Container */}
      <div className="w-[429px] h-[484px] overflow-hidden rounded-lg">
        <img
          src={member.image}
          alt="Team Member"
          className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.2] hover:translate-y-20"
        />
      </div>
      {/* Name */}
      <h2 className="font-poppins text-[25px] font-normal leading-normal mt-6 text-center">
        {member.name}
      </h2>
      {/* Position */}
      <p className="text-[20px] font-light text-gray-500 leading-normal text-center mt-3">
        {member.position}
      </p>
    </div>
  ))}
</div>


    </div>
  );
};
export default Team;