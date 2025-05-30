

import React from 'react'
import Service from '../Components/Service'
import ServiceImage from '../../public/service.webp'

const ServicePage = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-center gap-10 md:my-10">
        <div className="flex-1 w-full">
          <img
            src={ServiceImage}
            alt="Team at work"
            className="
              rounded-xl shadow-lg 
              w-full md:w-[70%] 
              mx-auto 
              object-cover h-64 
              border border-gray-700
            "
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-center text-center md:text-center text-gray-700 mx-auto px-4 md:px-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Book My Records</h2>
          <p className="w-full md:w-[65%] text-justify md:text-justify text-gray-700">
            At Book My Records, we aim to redefine the experience of managing your financial and legal responsibilities.
            Our platform offers transparency, support, and professionalism that helps individuals and businesses grow.
          </p>
        </div>
      </div>

      <Service />
    </>
  )
}

export default ServicePage;
