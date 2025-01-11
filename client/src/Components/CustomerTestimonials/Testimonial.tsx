import React from "react";
const Testimonial = ({ text, name, position, image }) => {
	return (
		<div className="testimonial bg-white p-6 rounded-2xl shadow-lg flex flex-col h-full justify-between ">
		  {/* Testimonial Text */}
		  <p className="text-gray-700 text-lg leading-relaxed py-8 font-normal font-">{text}</p>
	
		  {/* Bottom Section: Name, Position, and Image */}
		  <div className="flex justify-between items-end mt-4">
			{/* Name and Position (Left-aligned) */}
			<div>
			  <h3 className="text-1xl font-semibold text-gray-900">{name}</h3>
			  <p className="text-sm text-gray-500 font-light">{position}</p>
			</div>
	
			{/* Image (Right-aligned) */}
			<img
			  src={image}
			  alt={`${name}'s avatar`}
			  className="w-12 h-12 rounded-full object-cover"
			/>
		  </div>
		</div>
	  );
	};
  
	  export default Testimonial;