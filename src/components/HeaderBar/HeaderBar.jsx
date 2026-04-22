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
      <style>{`
        @media (max-width: 767px) {
          .site-header-shell {
            top: 10px;
            padding-left: 12px;
            padding-right: 12px;
          }
          .site-header {
            border-radius: 18px !important;
            padding: 12px 14px !important;
          }
          .site-header-brand {
            font-size: 0.98rem !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1080px) {
          .site-header-shell {
            padding-left: 18px;
            padding-right: 18px;
          }
          .site-header {
            padding-left: 18px !important;
            padding-right: 18px !important;
          }
          .site-header-nav {
            gap: 22px !important;
            font-size: 13px !important;
          }
        }
      `}</style>

      {isOpen && (
        <button
          type="button"
          aria-label="Close mobile menu overlay"
          onClick={toggleSidebar}
          className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-[2px] md:hidden"
        />
      )}

      {/* Outer wrapper: full-width, centered, sticky */}
      <div className="site-header-shell fixed top-3 left-0 right-0 z-40 flex justify-center px-3 sm:top-4 sm:px-4 pointer-events-none">
        <header
          className="site-header pointer-events-auto relative w-full max-w-[1100px] rounded-2xl px-4 py-3 shadow-lg sm:px-5 md:px-6"
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
            <div className="site-header-brand flex-shrink-0 text-base sm:text-xl md:text-2xl flex items-center space-x-2 cursor-default font-semibold tracking-tight text-gray-800">
              <span>YourPhysio</span>
              <FontAwesomeIcon
                icon={faStethoscope}
                className="text-purple-600 text-base sm:text-xl"
              />
            </div>

            {/* Center: Navigation */}
            <ul className="site-header-nav hidden lg:flex flex-grow justify-center gap-8 text-sm font-medium text-gray-600">
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
            <div className="hidden lg:block">
              <Link to="/book-appointment">
                <button className="bg-gradient-to-r from-purple-600 to-blue-400 text-white px-6 py-2 text-sm rounded-full hover:opacity-90 transition-opacity shadow-md shadow-purple-200">
                  Book Appointment
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-purple-200 bg-white/70 text-gray-700 text-lg"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>

          {/* Sidebar for mobile */}
          {isOpen && (
            <div className="absolute left-0 right-0 top-[calc(100%+0.75rem)] rounded-2xl border border-purple-200 bg-white/95 p-4 shadow-2xl backdrop-blur lg:hidden">
              <ul className="flex flex-col gap-2 text-gray-800">
                <li>
                  <Link to="/" onClick={toggleSidebar} className="block rounded-xl px-4 py-3 text-base font-medium hover:bg-purple-50">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" onClick={toggleSidebar} className="block rounded-xl px-4 py-3 text-base font-medium hover:bg-purple-50">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" onClick={toggleSidebar} className="block rounded-xl px-4 py-3 text-base font-medium hover:bg-purple-50">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/all-services" onClick={toggleSidebar} className="block rounded-xl px-4 py-3 text-base font-medium hover:bg-purple-50">
                    Services
                  </Link>
                </li>
              </ul>

              <Link to="/book-appointment" onClick={toggleSidebar} className="mt-4 block">
                <button className="w-full rounded-full bg-gradient-to-r from-purple-600 to-blue-400 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-purple-200">
                  Book Appointment
                </button>
              </Link>
            </div>
          )}
        </header>
      </div>
    </>
  );
}

export default HeaderBar;
