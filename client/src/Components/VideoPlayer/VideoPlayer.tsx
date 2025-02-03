import React, { useRef, useEffect, useState } from "react";

interface VideoPlayerProps {
  videoSrc: string;
  imageSrc1: string;
  imageSrc2: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSrc,
  imageSrc1,
  imageSrc2,
}) => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [audioPermission, setAudioPermission] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const askForAudioPermission = async () => {
      try {
        if (videoRef1.current) {
          await videoRef1.current.play();
          setAudioPermission(false);
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
    <div className="relative w-4/5 mx-auto overflow-hidden">
      {/* Video */}
      <div className="relative w-full h-[700px]">
        {/* Video */}
        <video
          ref={videoRef1}
          className="object-fill w-full h-full"
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered "PORTFOLIO" Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-5xl font-semibold uppercase z-10">
            Portfolio
          </div>
        </div>
      </div>


      {/* Other Content */}
      <div className="py-16">
        <div className="flex-1 text-center lg:text-center">
          <h1 className="text-3xl text-gray-600 items-center mb-2 ">Traditional Marriage</h1>

        </div>

        <div className="w-full h-[594px] relative py-16">
          <img
            src={imageSrc1}
            alt="Portfolio"
            className="object-fill w-full h-[594px]"
          />
        </div>
      </div>

      <div className="py-12">
        <div className="flex-1 text-center lg:text-center">
          <h1 className="text-3xl text-gray-600 items-center mb-2 ">White Weddings</h1>


          <div className="w-full h-[594px] relative py-6">
            <img
              src={imageSrc2}
              alt="Portfolio"
              className="object-fill w-full h-[594px]"
            />
          </div>
        
      </div>
      {/* pre - weddings  */}

      <div className="py-12">
        <div className="flex-1 text-center lg:text-center">
          <h1 className="text-3xl text-gray-600 items-center mb-2 ">Pre-Weddings</h1>


          <div className="w-full h-[594px] relative py-6">
            <img
              src={imageSrc2}
              alt="Portfolio"
              className="object-fill w-full h-[594px]"
            />
          </div>
        </div>
       
      </div>
      {/* Coperate servcies */}
      <div className="py-12">
        <div className="flex-1 text-center lg:text-center">
          <h1 className="text-3xl text-gray-600 items-center mb-2 ">Coperate Services</h1>


          <div className="w-full h-[594px] relative py-6">
            <img
              src={imageSrc2}
              alt="Portfolio"
              className="object-fill w-full h-[594px]"
            />
          </div>
        </div>
      </div>



      <div className="py-12">
        <div className="flex-1 text-center lg:text-center">
          <h1 className="text-3xl text-gray-600 items-center mb-2 ">Parties / Celebrations</h1>


          <div className="w-full h-[700px] relative py-6">
            <video
              ref={videoRef2}
              className="object-fill w-full h-[700px]"
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </div>

      {!isSmallScreen && (
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0, 0, 0, 0)" }}
          onMouseEnter={() => {
            videoRef1.current?.play();
          }}
        ></div>
      )}
    </div>
    </div >
  );
};

export default VideoPlayer;
