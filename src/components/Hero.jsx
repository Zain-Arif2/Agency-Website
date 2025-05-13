import React from "react";
import HeroImage from "../assets/Heroimage.png";

const Hero = () => {
  return (
    <section
      className="py-24 px-6 sm:px-8 md:px-12 lg:px-[144px] bg-white"
    >
      <div className="pt-[55px] flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Lessons and insights <br />
            <span className="text-green-600">from 8 years</span>
          </h1>
          <p className="text-gray-600 mb-8 text-base sm:text-lg">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className='bg-[#4CAF4F] py-2 px-5 text-white rounded-md 
                         transition-transform transform hover:scale-105 
                         hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]'>
        Register Now
      </button>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
          <img
            src={HeroImage}
            alt="Hero Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
