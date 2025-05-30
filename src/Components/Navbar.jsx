import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoReorderThreeOutline } from 'react-icons/io5';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/service' },
  { label: 'Contact', to: '/contactUs' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleItemClick = () => setIsOpen(false);

  return (
    <div className=" z-20 bg-white w-full shadow-md">
      <nav className="w-[90%] max-w-7xl mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <div className="w-72 text-3xl font-light text-blue-500">BookMyRecords</div>

        {/* Hamburger menu icon - mobile only */}
        <div className="md:hidden">
          <IoReorderThreeOutline
            size={30}
            onClick={toggleMenu}
            className={`cursor-pointer transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            aria-label="Toggle menu"
          />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex md:w-full md:items-center md:justify-between">
          <ul className="flex flex-row justify-center gap-6 text-lg font-medium flex-grow">
            {navLinks.map(({ label, to }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  onClick={handleItemClick}
                  className="block py-1.5 px-2 rounded-md transition-colors duration-200 hover:text-blue-400 hover:bg-gray-800"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>


        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden w-full bg-white shadow-md`}>
        <div className="flex flex-col items-end gap-3 py-4 pr-4">


          <ul className="flex flex-col items-end gap-4 text-base font-semibold pr-2">
            {navLinks.map(({ label, to }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  onClick={handleItemClick}
                  className={({ isActive }) =>
                    `transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-black hover:text-blue-400'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

