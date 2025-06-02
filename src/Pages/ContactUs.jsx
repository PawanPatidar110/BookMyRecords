// import React, { useState } from "react";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

// const ContactUs = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     alert("Message sent!");
//     setForm({ name: "", email: "", subject: "", message: "" });
//   };

//   return (
//     <div className="min-h-fit flex items-center justify-center bg-gray-100 py-20 px-4">
//       <div className="w-full max-w-4xl bg-gray-600 rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
//         {/* Contact Info */}
//         <div className="md:w-1/2 w-full bg-gray-600 text-gray-200 p-8 flex flex-col justify-between">
//           <div>
//             <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
//             <p className="mb-8 text-gray-400">
//               We're open for any suggestion or just to have a chat.
//             </p>
//             <ul className="space-y-6 text-gray-300">
//               <li className="flex items-start gap-4">
//                 <FaMapMarkerAlt className="text-orange-400 mt-1" />
//                 <span>
//                   <span className="font-semibold text-white">Address:</span> 198 West 21th Street, Suite 721, New York NY 10016
//                 </span>
//               </li>
//               <li className="flex items-center gap-4">
//                 <FaPhoneAlt className="text-orange-400" />
//                 <span>
//                   <span className="font-semibold text-white">Phone:</span> +1235 2355 98
//                 </span>
//               </li>
//               <li className="flex items-center gap-4">
//                 <FaEnvelope className="text-orange-400" />
//                 <span>
//                   <span className="font-semibold text-white">Email:</span> info@yoursite.com
//                 </span>
//               </li>
//               <li className="flex items-center gap-4">
//                 <FaGlobe className="text-orange-400" />
//                 <span>
//                   <span className="font-semibold text-white">Website:</span> yoursite.com
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>
//         {/* Form */}
//         <div className="md:w-1/2 w-full p-8">
//           <h2 className="text-white text-2xl font-bold mb-8">Write us</h2>
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="Name"
//                 required
//                 className="w-full pl-2 rounded-sm bg-transparent border-b border-gray-400 text-gray-200 py-2 px-0 focus:outline-none focus:border-orange-500 placeholder-gray-400"
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="Email"
//                 required
//                 className="w-full pl-2 rounded-sm bg-transparent border-b border-gray-400 text-gray-200 py-2 px-0 focus:outline-none focus:border-orange-500 placeholder-gray-400"
//               />
//             </div>
//             <div>
//               <input
//                 type="text"
//                 name="subject"
//                 value={form.subject}
//                 onChange={handleChange}
//                 placeholder="Subject"
//                 required
//                 className="w-full pl-2 rounded-sm bg-transparent border-b border-gray-400 text-gray-200 py-2 px-0 focus:outline-none focus:border-orange-500 placeholder-gray-400"
//               />
//             </div>
//             <div>
//               <textarea
//                 name="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 placeholder="Message"
//                 rows={4}
//                 required
//                 className="w-full pl-2 bg-transparent rounded-sm  border border-gray-400 text-gray-200 py-2 px-0 focus:outline-none focus:border-orange-500 placeholder-gray-400 resize-none"
//               />
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="bg-orange-500 hover:bg-orange-600 hover:cursor-pointer text-white font-semibold px-6 py-2 rounded shadow mt-4 transition-colors duration-200"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-fit flex items-center justify-center  bg-gradient-to-br from-blue-50 via-white to-blue-200  py-20 px-4">
      <div className="w-full max-w-4xl bg-gray-600 rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

        {/* Contact Info */}
        <div className="md:w-1/2 w-full bg-gray-600 text-gray-200 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
            <p className="mb-8 text-gray-400">
              We're open for any suggestion or just to have a chat.
            </p>
            <ul className="space-y-6 text-gray-300">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-orange-400 mt-1" />
                <span>
                  <span className="font-semibold text-white">Address: </span>
                  Book My Records Office
                  Indore, MP
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-orange-400" />
                <span>
                  <span className="font-semibold text-white">Phone:</span> +91 93028 21652
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-orange-400" />
                <span>
                  <span className="font-semibold text-white">Email: </span>info@bookmyrecords.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Formspark Form */}
        <div className="md:w-1/2 w-full p-8">
          <h2 className="text-white text-2xl font-bold mb-8">Write us</h2>
          <form
            action="https://submit-form.com/SNWSMHaQf" // ← Replace with your Formspark URL
            method="POST"
            className="space-y-6"
          >
            {/* Honeypot (anti-spam) */}
            <input type="text" name="_honey" style={{ display: "none" }} />

            {/* Optional Redirect after submission */}
            {/* <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you" /> */}

            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full pl-2 rounded-sm bg-transparent border-b border-gray-400 text-gray-200 py-2 px-0 focus:outline-none focus:border-orange-500 placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full pl-2 rounded-sm bg-transparent border-b border-gray-400 text-gray-200 py-2 px-0 focus:outline-none focus:border-orange-500 placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full pl-2 rounded-sm bg-transparent border-b border-gray-400 text-gray-200 py-2 px-0 focus:outline-none focus:border-orange-500 placeholder-gray-400"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                required
                className="w-full pl-2 bg-transparent rounded-sm border border-gray-400 text-gray-200 py-2 px-0 focus:outline-none focus:border-orange-500 placeholder-gray-400 resize-none"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 hover:cursor-pointer text-white font-semibold px-6 py-2 rounded shadow mt-4 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
