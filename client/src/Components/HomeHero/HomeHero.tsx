import React from 'react'
import { Link } from 'react-router-dom';
import './HomeHero.css';
import homeImage1 from '../../Assets/homeImage1.png';
import homeImage2 from '../../Assets/homeImage2.png';
import homeImage3 from '../../Assets/homeImage3.png';
import homeImage4 from '../../Assets/homeImage4.png';
import homeImage5 from '../../Assets/homeImage5.png';
import homeImage6 from '../../Assets/homeImage6.png';

const HomeHero = () => {
  return (
	<div className="gallery flex flex-col flex-1 overflow-hidden bg-gray-500 relative">
  <div className="topdiv flex justify-evenly">
    <img src={homeImage1} alt="homeImage1" className="image1 -translate-x-44 translate-y-48" />
    <img src={homeImage2} alt="homeImage2" className="image2 -translate-x-56 -translate-y-2" />
    <img src={homeImage3} alt="homeImage3" className="image3 -translate-x-72 -translate-y-44" />
  </div>
  <div className="downdiv flex justify-evenly">
    <img src={homeImage4} alt="homeImage4" className="image4 translate-x-32 translate-y-10" />
    <img src={homeImage5} alt="homeImage5" className="image5 translate-x-20 -translate-y-36" />
    <img src={homeImage6} alt="homeImage6" className="image6 translate-x-9 -translate-y-80 scale-110" />
  </div>
  <div className="hometext">
    <h1 className="text-6xl font-normal">The Epitomy of Creativity</h1>
    <p className="text-2xl text-neutral-300">Your Moment, Our Focus</p>
    <Link to='/ratecard'>
      <button className="homebutton bg-white text-black hover:bg-gray-500 hover:text-white px-12 py-3 rounded-lg active:bg-gray-700 text-sm uppercase font-medium">
        Rate Card
      </button>
    </Link>
  </div>
</div>

  )
}

export default HomeHero