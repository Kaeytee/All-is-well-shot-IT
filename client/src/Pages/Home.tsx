import React from 'react';
import './Styles/Home.css';
import CustomerTestimonials from '../Components/CustomerTestimonials/CustomerTestimonials.tsx';
import homeImage1 from '../Assets/homeImage1.png';
import homeImage2 from '../Assets/homeImage2.png';
import homeImage3 from '../Assets/homeImage3.png';
import homeImage4 from '../Assets/homeImage4.png';
import homeImage5 from '../Assets/homeImage5.png';
import homeImage6 from '../Assets/homeImage6.png';

const Home = () => {
  return (
    <div className=" justify-center items-center ">
      <div className="gallery flex flex-col flex-1   overflow-hidden  bg-gray-500">
        <div className="topdiv flex justify-evenly">

        <img src={homeImage1} alt="homeImage1" className="image1 -translate-x-44 translate-y-36 " />
        <img src={homeImage2} alt="homeImage2" className="image2 -translate-x-72 -translate-y-6" />
        <img src={homeImage3} alt="homeImage3" className="image3 -translate-x-96 -translate-y-48" />
        </div>
        <div className="downdiv flex justify-evenly">

        <img src={homeImage4} alt="homeImage4" className="image4 translate-x-36 " />
        <img src={homeImage5} alt="homeImage5" className="image5  translate-x-24 -translate-y-48" />
        <img src={homeImage6} alt="homeImage6" className="image6  translate-x-9 -translate-y-96" />
        </div>
      </div>
      <CustomerTestimonials />
    </div>
  );
};

export default Home;