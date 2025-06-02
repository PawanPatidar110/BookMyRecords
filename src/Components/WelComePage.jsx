import React from 'react';
import { FaFileAlt, FaCalendarCheck, FaChartBar, FaShieldAlt } from 'react-icons/fa';

// Service card data
const services = [
  {
    icon: <FaFileAlt className="text-blue-500 text-3xl" />,
    title: 'Financial Records',
    description: 'We simplify processes for individuals and startups.',
  },
  {
    icon: <FaCalendarCheck className="text-blue-500 text-3xl" />,
    title: 'Timely Filings',
    description: 'Never miss important deadlines again.',
  },
  {
    icon: <FaChartBar className="text-blue-500 text-3xl" />,
    title: 'Clear Reports',
    description: 'Stay informed about your financial health.',
  },
  {
    icon: <FaShieldAlt className="text-blue-500 text-3xl" />,
    title: 'Full Compliance',
    description: 'We handle all regulatory requirements.',
  },
];

// Reusable card component
const ServiceCard = ({ icon, title, description, delay }) => (
  <div
    className={`bg-white shadow-xl rounded-2xl p-8 border border-blue-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col items-start animate-fadeInUp`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center gap-4 mb-4">
      {icon}
      <h3 className="text-xl font-bold text-gray-700">{title}</h3>
    </div>
    <p className="text-gray-600 text-base">{description}</p>
  </div>
);

export default function WelcomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 drop-shadow-lg">
          Welcome to Your Trusted Partner
        </h1>
        <p className="mt-5 text-2xl text-blue-700 font-semibold tracking-wide">
          Expert in{' '}
          <span className="text-blue-900 underline underline-offset-4 decoration-blue-400">
            Bookkeeping
          </span>
        </p>
      </header>

      {/* Services Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl w-full p-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} delay={index * 100} />
        ))}
      </section>

      {/* CTA Button */}
      <div className="mt-14 p-2">
        <button className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white px-8 py-2.5 rounded-full text-xl font-bold shadow-lg hover:from-blue-800 hover:to-blue-500 hover:scale-105 transition-all duration-300 ease-in-out ring-2 ring-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Explore Our Services
        </button>
      </div>
    </main>
  );
}
