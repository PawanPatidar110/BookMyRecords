import React from 'react';
import bgvideo1 from '../../public/bgvideo1.webm';

const HeroSection = () => {
  return (
    <>
      <div className='relative w-screen h-screen overflow-hidden'>
        {/* Background Video */}
        <video
          src={bgvideo1}
          className='absolute top-0 left-0 w-full h-full object-cover'
          autoPlay
          loop
          muted
          playsInline
        >
          <source className='bg-cover bg-center' />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content (optional) */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-screen gap-y-2 overflow-hidden">
          <h1 className="text-white text-center text-4xl w-[50%] md:text-7xl font-bold">
            We care about your business
          </h1>
          <h3 className="text-white text-center text-2xl w-[50%] md:text-3xl font-bold">
            We inspire clients to make their most challenging business decisions with confidence.
          </h3>
        </div>
      </div>
    </>
  );
};

export default HeroSection;


