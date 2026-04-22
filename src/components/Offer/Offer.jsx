// import React from "react";
// import "./Offer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// function Offer() {
//   return (
//     <div className="lg:py-20 flex flex-col md:flex-row items-center p-10 space-y-6 md:space-y-0 md:space-x-6 justify-center">
//       {/* Image Section */}
//       <div className="flex justify-end md:order-1 order-2 mt-6 md:mt-0 w-full md:w-1/2 pr-5">
//         <img
//           className="w-auto lg:h-96 sm:h-80 md:h-72 border-blue-400 shadow-lg shadow-blue-400"
//           src="/sec1.jpg"
//           alt="Offer Image"
//         />
//       </div>

//       {/* Text Section */}
//       <div className="w-full md:w-1/2 text-left font-light md:order-2 order-1 mt-6 md:mt-0 p-4">
//         <h1 className="text-3xl md:text-5xl font-light mb-4">What We Offer?</h1>
//         <p className="text-base md:text-lg mb-4">
//           We are the Best Physiotherapy, Chiropractic, and Osteopathy Service
//           Provider in Delhi-NCR.
//           <br />
//           PhysioAdviserIndia introduced the concept of 'Advance Physiotherapy
//           and Rehabilitation.'
//         </p>

//         <div className="space-y-2">
//           {[
//             "Sports Physiotherapy",
//             "Advanced Spine Clinic",
//             "Yoga, Pilates, Aerobics",
//             "Orthopedic Physiotherapy",
//             "Dry Needling / Acupuncture",
//           ].map((service, index) => (
//             <div key={index} className="flex items-center animate-bounce">
//               <FontAwesomeIcon
//                 icon={faCheckCircle}
//                 className="mr-2 text-blue-600 "
//               />
//               {service}
//             </div>
//           ))}
//         </div>

//         {/* Call to Action button */}
//         <div className="mt-4">
//           <Link to="/all-offers">
//             <button className="bg-blue-500 text-white rounded-full py-2 px-6 font-light border-2 border-transparent hover:bg-white hover:border-blue-600 hover:text-black transition duration-300">
//               Details
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Offer;


import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const services = [
  "Sports Physiotherapy",
  "Advanced Spine Clinic",
  "Yoga, Pilates, Aerobics",
  "Orthopedic Physiotherapy",
  "Dry Needling / Acupuncture",
];

function Offer() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-14 px-4 sm:px-6 lg:px-20 sm:py-16 lg:py-20"
    >
      {/* Background blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-purple-100 opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-blue-100 opacity-40 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-14">

        {/* ── IMAGE SIDE ── */}
        <div
          className={`w-full md:w-1/2 flex justify-center transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="relative">
            {/* Decorative frame behind image */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-purple-300 border-dashed z-0" />
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-purple-100 to-blue-100 z-0" />

            <img
              src="/sec1.jpg"
              alt="Physiotherapy Service"
              className="relative z-10 w-full max-w-xs sm:max-w-sm lg:max-w-md h-64 sm:h-80 lg:h-96 object-cover rounded-3xl shadow-2xl shadow-purple-200"
            />

            {/* Floating badge */}
            <div className="absolute z-20 -bottom-4 right-2 sm:-bottom-5 sm:-right-5 bg-white rounded-2xl shadow-xl px-4 py-2.5 sm:px-5 sm:py-3 flex items-center space-x-3 border border-purple-50 max-w-[220px] sm:max-w-none">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white text-base sm:text-lg font-bold shadow">
                #1
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Rated</p>
                <p className="text-sm font-bold text-gray-800">Delhi-NCR Physio</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── TEXT SIDE ── */}
        <div
          className={`w-full md:w-1/2 transition-all duration-700 ease-out delay-200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          {/* Section label */}
          <div className="inline-flex items-center space-x-2 bg-white border border-purple-200 shadow-sm rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm font-medium text-purple-700">Our Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
            What We{" "}
            <span className="relative inline-block text-purple-700">
              Offer?
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 140 8" fill="none">
                <path d="M2 6 C30 2, 70 7, 138 3" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
            We are the <span className="text-purple-700 font-semibold">Best Physiotherapy, Chiropractic, and Osteopathy</span> Service
            Provider in Delhi-NCR — pioneers of{" "}
            <em>Advance Physiotherapy and Rehabilitation.</em>
          </p>

          {/* Services list */}
          <ul className="space-y-3 mb-8 sm:mb-10">
            {services.map((service, index) => (
              <li
                key={index}
                className={`flex items-start sm:items-center gap-3 bg-white rounded-xl px-4 py-3 sm:px-5 shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-md hover:border-purple-200 hover:-translate-y-0.5`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-purple-600 text-lg flex-shrink-0"
                />
                <span className="text-gray-700 font-medium text-sm lg:text-base leading-snug">{service}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link to="/all-offers">
            <button className="inline-flex w-full justify-center sm:w-auto items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 sm:px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-purple-300 hover:scale-105 transition-all duration-200 group">
              View All Services
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default Offer;
