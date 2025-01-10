// VideoPlayer.tsx
import React, { useRef, useEffect, useState } from 'react';

interface VideoPlayerProps {
  videoSrc: string;
  imageSrc1: string;
  imageSrc2: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, imageSrc1, imageSrc2 }) => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [audioPermission, setAudioPermission] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const askForAudioPermission = async () => {
      try {
        if (videoRef1.current) {
          await videoRef1.current.play();
          setAudioPermission(true);
        }
      } catch (err) {
        setAudioPermission(false);
      }
    };

    askForAudioPermission();
  }, []);

  useEffect(() => {
    if (videoRef1.current && videoRef2.current) {
      setTimeout(() => {
        videoRef1.current?.play();
        videoRef2.current?.play();
      }, 2000);

      if (audioPermission !== null) {
        videoRef1.current.muted = !audioPermission;
        videoRef2.current.muted = true;
      }
    }
  }, [audioPermission]);

  return (
    <div className="relative w-full overflow-hidden">
      <video
        ref={videoRef1}
        className="object-fill w-full h-[594px]"
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-semibold uppercase">
        Portfolio
      </div>




      <div className="w-full h-[594px] relative">
        <img src={imageSrc1} alt="Portfolio" className="object-fill w-full h-[594px]" />
      </div>

      <div className="w-full h-[594px] relative">
        <img src={imageSrc2} alt="Portfolio" className="object-fill w-full h-[594px]" />
      </div>







      <video
        ref={videoRef2}
        className="object-fill w-full h-[594px]"
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isSmallScreen && (
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(0, 0, 0, 0)' }}
          onMouseEnter={() => {
            videoRef1.current?.play();
          }}
        ></div>
      )}
    </div>
  );
};

export default VideoPlayer;
