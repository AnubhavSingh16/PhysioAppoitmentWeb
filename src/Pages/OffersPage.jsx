// OffersPage.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

const offers = [
  {
    title: "Sports Physiotherapy",
    description:
      "Specialized care for athletes to enhance performance and recovery.",
    explanation:
      "Our sports physiotherapy focuses on injury prevention, rehabilitation, and performance enhancement tailored specifically for athletes of all levels.",
  },
  {
    title: "Advanced Spine Clinic",
    description: "Comprehensive assessment and treatment for spinal disorders.",
    explanation:
      "We offer advanced diagnostic techniques and personalized treatment plans to address various spinal conditions, ensuring optimal spinal health.",
  },
  {
    title: "Yoga, Pilates, Aerobics",
    description:
      "Group classes to improve flexibility, strength, and overall wellness.",
    explanation:
      "Join our fitness classes led by qualified instructors to boost your physical and mental well-being through various exercise modalities.",
  },
  {
    title: "Orthopedic Physiotherapy",
    description:
      "Focused rehabilitation for orthopedic injuries and surgeries.",
    explanation:
      "Our orthopedic physiotherapy program aids in the recovery process from surgeries and injuries, restoring mobility and function.",
  },
  {
    title: "Dry Needling / Acupuncture",
    description: "Innovative techniques for pain relief and muscle recovery.",
    explanation:
      "Utilizing dry needling and acupuncture, we target trigger points to alleviate pain and promote healing effectively.",
  },
];

function OffersPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  return (
    <>
      <div className="bg-gray-50">
        {" "}
        {/* Light gray background */}
        <div className="relative mb-10">
          <img
            src="./sec1.jpg"
            alt="hero background"
            className="w-full h-64 md:h-96 object-cover opacity-50"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white p-4">
            <p className="mt-4 max-w-2xl text-2xl sm:text-3xl md:text-4xl leading-tight">
              Explore our specialized offers designed to improve your health and
              well-being.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-default">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105 duration-300 border-2 border-blue-300"
              >
                <div className="p-5 sm:p-6 bg-white h-full flex flex-col justify-between min-h-[320px] sm:min-h-[350px]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-gray-700 p-1 text-base sm:text-lg">
                      {offer.description}
                    </p>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                      {offer.explanation}
                    </p>
                  </div>
                  <Link to="/book-appointment">
                    <button className="bg-blue-600 text-white rounded-full px-6 py-3 font-semibold transition duration-300 hover:bg-blue-700 w-full shadow-md hover:shadow-lg">
                      Get Appointment
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Contact Us Section */}
        <div className="bg-blue-300 p-5 sm:p-6 rounded-lg mb-10 shadow-black mx-4 sm:mx-6 lg:mx-10">
          <div className="flex flex-col gap-5 md:flex-row md:justify-around md:items-center">
            <div className="flex items-start space-x-4">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="text-black text-4xl sm:text-5xl animate-pulse"
              />

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-1">
                  Have any doubts?
                </h2>
                <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
                  Contact us for any queries or to learn more about our
                  services. We are here to help you!
                </p>
              </div>
            </div>

            <Link to="/contact-us">
              <button className="bg-blue-800 text-white rounded-3xl px-8 sm:px-14 py-3 font-semibold transition duration-800 hover:bg-blue-700 w-full md:w-auto">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OffersPage;
