

import React from 'react';
import bgvideo1 from '../../public/bgvideo1.webm';

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden m-0 p-0">
      {/* Background Video */}
      <video
        src={bgvideo1}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-white  text-3xl md:text-7xl font-bold max-w-3xl w-full px-4 py-4 rounded-lg ">
          We care about your business
        </h1>
        <h3 className="text-white text-xl md:text-2xl font-medium max-w-2xl mt-6 px-4">
          We inspire clients to make their most challenging business decisions with confidence.
        </h3>
      </div>

      {/* Optional overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 z-0" />
    </div>
  );
};

export default HeroSection;
