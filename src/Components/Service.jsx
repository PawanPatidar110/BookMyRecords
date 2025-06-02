import React from 'react';
import {
  FaUserTie,
  FaFileInvoiceDollar,
  FaRegBuilding,
  FaClipboardCheck,
} from 'react-icons/fa';

export default function Service() {
  const services = [
    {
      icon: FaUserTie,
      title: 'Account Outsourcing',
      desc: 'Outsource your accounting and focus on growing your business. We handle everything from bookkeeping to compliance and financial reporting.',
    },
    {
      icon: FaFileInvoiceDollar,
      title: 'Taxation Services',
      desc: 'Accurate and timely filing of business and personal taxes, minimizing liabilities while ensuring complete tax law compliance.',
    },
    {
      icon: FaRegBuilding,
      title: 'Business Registration',
      desc: 'From business structure selection to document submission, we make registration simple and compliant from the start.',
    },
    {
      icon: FaClipboardCheck,
      title: 'GST Registration',
      desc: 'Full-service GST setup and registration support so you can remain focused on operations while we handle compliance.',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-100 via-white to-blue-200 py-16 px-6 md:px-12">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div
          className="inline-flex items-center px-4 py-1 bg-white text-yellow-500 font-semibold rounded-full shadow mb-4"
          aria-label="Section Highlight"
        >
          <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2" />
          HIGHLIGHT
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          OUR SERVICES
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          At Book My Records, we simplify finance—offering expert services from GST and business registration to tax filing and planning, so you can focus on growth while we handle compliance.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map(({ icon: Icon, title, desc }, index) => (
          <article
            key={index}
            className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <header className="flex items-center gap-4 mb-3">
              <Icon className="text-3xl text-indigo-500" />
              <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            </header>
            <p className="text-gray-600">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}





// import React from 'react';
// import { FaUserTie, FaFileInvoiceDollar, FaRegBuilding, FaClipboardCheck } from 'react-icons/fa';

// export default function Service() {
//   const services = [
//     {
//       icon: <FaUserTie className="text-3xl text-indigo-500" />,
//       title: 'Account Outsourcing',
//       desc: 'Outsource your accounting and focus on growing your business. We handle everything from bookkeeping to compliance and financial reporting.',
//     },
//     {
//       icon: <FaFileInvoiceDollar className="text-3xl text-indigo-500" />,
//       title: 'Taxation Services',
//       desc: 'Accurate and timely filing of business and personal taxes, minimizing liabilities while ensuring complete tax law compliance.',
//     },
//     {
//       icon: <FaRegBuilding className="text-3xl text-indigo-500" />,
//       title: 'Business Registration',
//       desc: 'From business structure selection to document submission, we make registration simple and compliant from the start.',
//     },
//     {
//       icon: <FaClipboardCheck className="text-3xl text-indigo-500" />,
//       title: 'GST Registration',
//       desc: 'Full-service GST setup and registration support so you can remain focused on operations while we handle compliance.',
//     },
//   ];

//   return (
//     <section className="bg-gradient-to-br from-blue-100 via-white to-blue-200 py-16 px-6 md:px-12">
//       {/* Highlight Tag */}
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <div className="inline-flex items-center px-4 py-1 bg-white text-yellow-500 font-semibold rounded-full shadow-md mb-4">
//           <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
//           HIGHLIGHT
//         </div>
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">OUR SERVICES</h2>
//         <p className="text-gray-700 text-lg max-w-3xl mx-auto">
//           At Book My Records, we simplify finance—offering expert services from GST and business registration to tax filing and planning, so you can focus on growth while we handle compliance.
//         </p>
//       </div>

//       {/* Services Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1"
//           >
//             <div className="flex items-center gap-4 mb-3">
//               {service.icon}
//               <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
//             </div>
//             <p className="text-gray-600">{service.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
