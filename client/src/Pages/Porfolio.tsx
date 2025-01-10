// Portfolio.tsx
import React from 'react';
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer.tsx';
import video from '../Assets/Portfolio.mp4';
import image from '../Assets/Portfolio_image1.png'; // Replace with your image path
import image2 from '../Assets/portfolio_image2.png'; // Replace with your image path
const Portfolio = () => {
  return (
    <div>
      <VideoPlayer
        videoSrc={video}
        imageSrc1={image}
        imageSrc2={image2}
      />
    </div>
  );
};

export default Portfolio;
