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

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const initVideo = async () => {
      try {
        if (videoRef1.current) {
          videoRef1.current.muted = true;
          await videoRef1.current.play();
        }
      } catch (err) {
        console.error("Video play failed:", err);
      }
    };
    initVideo();
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Video Section */}
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <video
          ref={videoRef1}
          className="object-cover w-full h-full"
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-semibold uppercase text-white z-10">
            Portfolio
          </h1>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-8 md:space-y-16 py-8 md:py-16">
        {/* Traditional Marriage */}
        <section className="space-y-4 md:space-y-8">
          <h2 className="text-2xl md:text-3xl text-gray-600 text-center">
            Traditional Marriage
          </h2>
          <div className="relative h-[40vh] md:h-[60vh] w-full">
            <img
              src={imageSrc1}
              alt="Traditional Marriage"
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        {/* White Weddings */}
        <section className="space-y-4 md:space-y-8">
          <h2 className="text-2xl md:text-3xl text-gray-600 text-center">
            White Weddings
          </h2>
          <div className="relative h-[40vh] md:h-[60vh] w-full">
            <img
              src={imageSrc2}
              alt="White Weddings"
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        {/* Pre-Weddings */}
        <section className="space-y-4 md:space-y-8">
          <h2 className="text-2xl md:text-3xl text-gray-600 text-center">
            Pre-Weddings
          </h2>
          <div className="relative h-[40vh] md:h-[60vh] w-full">
            <img
              src={imageSrc2}
              alt="Pre-Weddings"
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        {/* Corporate Services */}
        <section className="space-y-4 md:space-y-8">
          <h2 className="text-2xl md:text-3xl text-gray-600 text-center">
            Corporate Services
          </h2>
          <div className="relative h-[40vh] md:h-[60vh] w-full">
            <img
              src={imageSrc2}
              alt="Corporate Services"
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        {/* Parties/Celebrations */}
        <section className="space-y-4 md:space-y-8">
          <h2 className="text-2xl md:text-3xl text-gray-600 text-center">
            Parties / Celebrations
          </h2>
          <div className="relative h-[50vh] md:h-[70vh] w-full">
            <video
              ref={videoRef2}
              className="object-cover w-full h-full"
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VideoPlayer;