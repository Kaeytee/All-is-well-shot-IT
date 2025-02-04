import React from "react";
import "./WhatWeStandFor.css";
import hero from "../../Assets/hero.png";
import hero2 from "../../Assets/hero2.png";
import { Link } from "react-router-dom";

const WhatWeStandFor = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Top Section */}
      <div className="mx-auto w-full py-8 md:w-4/5 lg:w-3/5 xl:w-2/5">
        <div className="topSec flex h-auto min-h-[200px] flex-col items-center justify-center py-12 sm:min-h-[320px]">
          <h1 className="mb-4 mt-5 text-base uppercase text-gray-600 sm:text-lg">
            What we stand for
          </h1>
          <p className="format text-center text-2xl font-medium leading-relaxed sm:text-3xl md:leading-relaxed">
            Capturing the essence and emotions of every occasion with our unique
            and creative approach.
          </p>
        </div>
      </div>

      {/* Two Column Sections */}
      <div className="flex flex-col items-center gap-12 py-12 lg:flex-row lg:gap-6 lg:py-24">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="max-w-xl lg:mx-0">
            <h1 className="mb-3 text-base uppercase text-gray-600 sm:text-lg">
              About Us
            </h1>
            <p className="mb-4 text-2xl font-normal sm:text-3xl">Who Are We</p>
            <p className="mb-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
              We are a team of videographers who work closely with clients and
              brands to craft memorable experiences that reflect your values and
              objectives. Trust our team to tell your unique story with
              excellence and passion.
            </p>
            <Link
              to="/about"
              className="inline-block rounded-lg bg-black px-8 py-2 text-sm font-semibold uppercase text-white transition-all hover:bg-gray-700 active:bg-gray-800 sm:px-12 sm:py-3"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={hero}
            alt="Hero"
            className="heroimg mx-auto w-full max-w-[600px] rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Reversed Section */}
      <div className="flex flex-col items-center gap-12 py-12 lg:flex-row-reverse lg:gap-6 lg:py-24">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="max-w-xl lg:mx-0">
            <h1 className="mb-3 text-base uppercase text-gray-600 sm:text-lg">
              Our Services
            </h1>
            <p className="mb-4 text-2xl font-normal sm:text-3xl">What We Do</p>
            <p className="mb-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
              Our team of professionals help you preserve every precious moment
              of your celebrations, showcase the success and impact of
              companies, tell captivating stories with documentaries, capture
              the energetic atmosphere and fun-filled memories at parties, and
              elevate your footage with aerial perspectives.
            </p>
            <Link
              to="/portfolio"
              className="inline-block rounded-lg bg-black px-8 py-2 text-sm font-semibold uppercase text-white transition-all hover:bg-gray-700 active:bg-gray-800 sm:px-12 sm:py-3"
            >
              Our Works
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={hero2}
            alt="Portfolio"
            className="heroimg mx-auto w-full max-w-[600px] rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeStandFor;