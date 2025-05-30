

import React from 'react';
import { FaFileAlt, FaCalendarCheck, FaChartBar, FaShieldAlt } from 'react-icons/fa';

export default function WelComePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-4  bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 drop-shadow-lg">
          Welcome to Your Trusted Partner
        </h1>
        <p className="mt-5 text-2xl text-blue-700 font-semibold tracking-wide">
          Expert in <span className="text-blue-900 underline underline-offset-4 decoration-blue-400">Bookkeeping</span>
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl p-3 w-full">
        {/* Card 1 */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-blue-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col items-start animate-fadeInUp">
          <div className="flex items-center gap-4 mb-4">
            <FaFileAlt className="text-blue-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-700">Financial Records</h3>
          </div>
          <p className="text-gray-600 text-base">We simplify processes for individuals and startups.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-blue-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col items-start animate-fadeInUp delay-100">
          <div className="flex items-center gap-4 mb-4">
            <FaCalendarCheck className="text-blue-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-700">Timely Filings</h3>
          </div>
          <p className="text-gray-600 text-base">Never miss important deadlines again.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-blue-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col items-start animate-fadeInUp delay-200">
          <div className="flex items-center gap-4 mb-4">
            <FaChartBar className="text-blue-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-700">Clear Reports</h3>
          </div>
          <p className="text-gray-600 text-base">Stay informed about your financial health.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-blue-100 hover:scale-105 hover:shadow-xl  transition-all duration-300 ease-in-out flex flex-col items-start animate-fadeInUp delay-300">
          <div className="flex items-center gap-4 mb-4">
            <FaShieldAlt className="text-blue-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-700">Full Compliance</h3>
          </div>
          <p className="text-gray-600 text-base">We handle all regulatory requirements.</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-14 p-2">
        <button className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white px-8 py-2.5 rounded-full text-xl font-bold shadow-lg hover:from-blue-800 hover:to-blue-500 hover:scale-105  hover:cursor-pointer transition-all duration-300 ease-in-out ring-2 ring-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Explore Our Services
        </button>
      </div>
    </div>
  );
}
