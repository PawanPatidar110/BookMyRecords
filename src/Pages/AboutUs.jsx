import React from 'react';

import AboutUs1 from '../../public/aboutUs1.jpg'

const AboutUs = () => {
  return (
    <div className="min-h-screen  text-white px-6 py-16 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center max-w-4xl mb-16">
        <h1 className="text-5xl font-extrabold text-black mb-4">About Us</h1>
        <p className="text-lg text-black">
          Learn more about our mission, our story, and the founder who drives our vision forward at Book My Records.
        </p>
      </div>

      {/* Hero Section with Image */}
      <div className='w-[90%]'>
        
      <div className="w-full flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="flex-1 w-full">
          <img
           src={AboutUs1}
            alt="Team at work"
            className="rounded-xl shadow-lg w-[70%] mx-auto  object-cover h-64 "
          />
        </div>
        <div className="w-[50%] flex flex-col items-center text-center text-gray-700 mx-auto">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">Book My Records</h2>
  <p className=" w-[65%] text-justify text-gray-700">
    At Book My Records, we aim to redefine the experience of managing your financial and legal responsibilities.
    Our platform offers transparency, support, and professionalism that helps individuals and businesses grow.
  </p>
</div>

</div>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-30  w-[80%]">
        
        {/* Mission Card */}
        <div className="bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-xl transition duration-300 border border-gray-700">
          <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
          <ul className="space-y-3 list-disc list-inside text-gray-300">
          At Book My Records, we don't just offer services — we build relationships. Whether you're a freelancer, a small business owner, or launching your first company, our experienced team is here to guide you through financial complexities and regulatory challenges.
We believe that every entrepreneur and professional deserves reliable financial support without the hassle. Our mission is to simplify the accounting and compliance journey, allowing you to focus on what you do best — growing your business.
Thank you for choosing Book My Records. We look forward to being your financial backbone and helping your business stay organized, compliant, and ready for growth.
          </ul>
        </div>

        {/* Founder Card */}
        <div className="bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-xl transition duration-300 border border-gray-700 flex flex-col items-center text-center">
          <img
             src={AboutUs1}
            alt="Founder"
            className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-indigo-500"
          />
          <h4 className="text-xl font-bold text-white">Saket Rathore</h4>
          <p className="text-indigo-400 font-medium mb-2">Founder</p>
          
          <p className="text-gray-300 text-sm mb-2">
       
Saket Rathore is the visionary founder of Book My Records, established with the mission to simplify financial and legal processes for individuals and businesses across India. With a deep understanding of taxation, compliance, and business registration, he has helped numerous clients navigate complex regulations with ease and confidence.

Driven by a passion for transparency and service excellence, Saket believes that every entrepreneur and professional deserves reliable financial support without the hassle. Under his leadership, Book My Records has grown into a trusted platform known for accuracy, efficiency, and client satisfaction.
          </p>
          <a href="mailto:saketrahtore@gmail.com" className="text-indigo-400 text-sm font-semibold hover:underline">
            saketrahtore@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
