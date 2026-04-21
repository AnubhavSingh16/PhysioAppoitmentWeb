import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function HeaderBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Outer wrapper: full-width, centered, sticky */}
      <div className="fixed top-4 left-0 right-0 z-30 flex justify-center pointer-events-none">
        <header
          className="pointer-events-auto w-[80%] rounded-2xl px-6 py-3 shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.55)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "2px solid rgba(180, 140, 255, 0.45)",
            boxShadow: "0 8px 32px rgba(109, 40, 217, 0.10), 0 1.5px 8px rgba(0,0,0,0.07)",
          }}
        >
          <div className="flex justify-between items-center">
            {/* Left side: Logo */}
            <div className="flex-shrink-0 text-xl sm:text-2xl md:text-2xl flex items-center space-x-2 cursor-default font-semibold tracking-tight text-gray-800">
              <span>YourPhysio</span>
              <FontAwesomeIcon
                icon={faStethoscope}
                className="text-purple-600 text-lg sm:text-xl"
              />
            </div>

            {/* Center: Navigation */}
            <ul className="hidden md:flex flex-grow justify-center space-x-8 text-sm font-medium text-gray-600">
              <li className="relative group cursor-pointer">
                <Link to="/" className="hover:text-purple-700 transition-colors">
                  Home
                </Link>
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-purple-600 opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-200 origin-left rounded-full"></span>
              </li>
              <li className="relative group cursor-pointer">
                <Link to="/contact-us" className="hover:text-purple-700 transition-colors">
                  Contact Us
                </Link>
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-purple-600 opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-200 origin-left rounded-full"></span>
              </li>
              <li className="relative group cursor-pointer">
                <Link to="/about-us" className="hover:text-purple-700 transition-colors">
                  About
                </Link>
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-purple-600 opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-200 origin-left rounded-full"></span>
              </li>
              <li className="relative group cursor-pointer">
                <Link to="/all-services" className="hover:text-purple-700 transition-colors">
                  Services
                </Link>
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-purple-600 opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-200 origin-left rounded-full"></span>
              </li>
              {/* <li className="relative group cursor-pointer">
                <span className="hover:text-purple-700 transition-colors">Services</span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-purple-600 opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-200 origin-left rounded-full"></span>
              </li> */}
            </ul>

            {/* Right side: CTA Button */}
            <div className="hidden md:block">
              <Link to="/book-appointment">
                <button className="bg-gradient-to-r from-purple-600 to-blue-400 text-white px-6 py-2 text-sm rounded-full hover:opacity-90 transition-opacity shadow-md shadow-purple-200">
                  Book Appointment
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className="md:hidden text-gray-700 text-xl"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          {/* Sidebar for mobile */}
          {isOpen && (
            <div className="absolute top-0 right-0 w-1/2 h-screen bg-black bg-opacity-80 z-40 flex flex-col items-center pl-10 pt-20 rounded-r-2xl">
              <button
                onClick={toggleSidebar}
                className="absolute text-xl top-5 right-5 text-white"
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
              <ul className="flex flex-col space-y-6 text-white text-xl">
                <li className="hover:underline">
                  <Link to="/" onClick={toggleSidebar}>Home</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/contact-us" onClick={toggleSidebar}>Contact Us</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/about-us" onClick={toggleSidebar}>About</Link>
                </li>
                <li className="hover:underline">Services</li>
              </ul>
            </div>
          )}
        </header>
      </div>
    </>
  );
}

export default HeaderBar;