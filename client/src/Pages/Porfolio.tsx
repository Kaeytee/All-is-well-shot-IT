import React from 'react';
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer.tsx';
import video from '../Assets/Portfolio.mp4';
import image from '../Assets/Portfolio_image1.png';
import image2 from '../Assets/portfolio_image2.png';

const Portfolio = () => {
  return (
    <div className="mx-auto w-full md:w-11/12 lg:w-4/5">
      <VideoPlayer
        videoSrc={video}
        imageSrc1={image}
        imageSrc2={image2}
      />
    </div>
  );
};

export default Portfolio;