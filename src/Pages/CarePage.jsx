import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

const CarePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const careDetails = [
    {
      title: "Patient-Centered Assessment",
      description:
        "Every patient’s journey begins with a thorough assessment to understand their unique needs, pain points, and goals.",
      imgSrc: "./service1.jpg",
    },
    {
      title: "Targeted Treatment Plans",
      description:
        "Our treatments range from manual therapy to therapeutic exercises, designed to address specific areas of concern and promote healing.",
      imgSrc: "./service2.jpg",
    },
    {
      title: "Pain Management and Mobility Restoration",
      description:
        "We specialize in alleviating pain, improving joint mobility, and restoring strength through evidence-based techniques.",
      imgSrc: "./service3.jpg",
    },
    {
      title: "Education and Preventative Care",
      description:
        "Beyond immediate recovery, we educate patients on preventing re-injury and maintaining long-term wellness.",
      imgSrc: "./service4.jpg",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-tr from-purple-400 to-blue-300 pb-12 pt-6 px-4 sm:px-6 md:px-10 lg:px-20 sm:pb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-6 sm:mb-8">
          Our Care
        </h1>

        <div className="flex flex-col md:flex-row items-center mb-10 sm:mb-14 max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-4 sm:p-6">
          <div className="md:w-1/2 order-1 md:order-2 relative flex justify-center w-full">
            <div className="absolute top-8 bg-gradient-to-b from-purple-300 to-transparent rounded-full w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 -z-10" />
            <img
              src="./careimg.jpg"
              alt="Physiotherapy Care"
              className="w-full max-w-xs sm:max-w-sm md:w-4/5 h-auto rounded-xl"
            />
          </div>
          <div className="md:w-1/2 order-2 md:order-1 text-base sm:text-lg text-gray-800 md:pr-8 mt-6 md:mt-0 text-left px-2 py-4 sm:p-6">
            <p className="mb-6 leading-relaxed text-base sm:text-lg md:text-xl">
              At <strong>YourPhysio</strong>, our mission is to support you on
              your journey to optimal health and wellness through personalized
              physiotherapy care. We are dedicated to understanding each patient's
              unique needs and providing targeted treatments to help you move
              better, feel better, and live better.
            </p>
            <Link to="/book-appointment">
            <button className="mt-2 sm:mt-4 w-full sm:w-auto text-sm sm:text-base px-5 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-700 focus:outline-none transition duration-200 shadow-lg transform hover:scale-105">
              Book Appointment
            </button>
            </Link>
          </div>
        </div>

        {/* Care Details Grid */}
        <div className="bg-gray-100 py-8 sm:py-10 px-3 sm:px-4 rounded-2xl">
          <div className="grid gap-6 sm:gap-8 gap-y-8 sm:gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {careDetails.map((care, index) => (
              <div
                key={index}
                className="bg-gradient-to-tr from-purple-50 to-blue-50 shadow-md rounded-xl p-4 sm:p-6 hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out"
              >
                <img
                  src={care.imgSrc}
                  alt={care.title}
                  className="w-full h-44 sm:h-48 object-cover rounded-lg mb-4 shadow-lg"
                />
                <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3">
                  {care.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{care.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CarePage;
