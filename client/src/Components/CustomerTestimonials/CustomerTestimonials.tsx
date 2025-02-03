import React from "react";
import "./CustomerTestimonials.css";
import Testimonials from "../../Assets/CustomerTestimonials";
import Testimonial from "./Testimonial.tsx";
const CustomerTestimonials = () => {
  return (
    <div className="w-full mx-auto">
  
      <p className="text-3xl text-center py-8">Customer Testimonials</p>
      <div className="testimonials bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              position={testimonial.position}
              image={testimonial.Image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
