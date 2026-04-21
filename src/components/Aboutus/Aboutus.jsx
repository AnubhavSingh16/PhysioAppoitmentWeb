import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenNib,
  faHeartbeat,
  faSyringe,
  faPills,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import "./Aboutus.css";

function Aboutus() {
  const words = ["Welcome", "to", "YourPhysio", "India"];
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBeforeDelete = 1500;

    let timeout;

    const handleTyping = () => {
      if (!isDeleting) {
        const fullLine = words.join(" ");
        setDisplayedText((prev) => fullLine.slice(0, prev.length + 1));

        if (displayedText === fullLine) {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        }
      } else {
        setDisplayedText((prev) => prev.slice(0, -1));

        if (displayedText === "") {
          setIsDeleting(false);
        }
      }
    };

    timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, words]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-8 my-10 lg:py-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full gap-10">
        {/* Text Section */}
        <div className="font-light md:mr-8 mb-8 md:mb-0 text-center md:text-left pr-10">

          <h1 className="text-3xl lg:text-4xl md:text-3xl font-semibold mb-6 text-center text-gray-800 ">
            {displayedText}
            <span>
              <FontAwesomeIcon
                className="text-3xl text-blue-600 pl-1"
                icon={faPenNib}
              />
            </span>
          </h1>
          <p className="text-lg max-w-xl text-center text-black">
            Visitors to Physio Adviser India can expect to find a clean,
            comfortable, and professional environment. Our team of highly
            skilled therapists are experts in providing physiotherapy,
            occupational therapy, and speech therapy services. In addition to
            our Therapy Services, we offer a wide range of amenities and
            resources to help our clients reach their fullest potential. If you
            are looking for a comprehensive therapy center that can provide you
            with everything you need to improve your health, we invite you to
            come and visit us at Physio Adviser India.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center md:gap-8 sm:gap-2 pt-4">
            <button className="hover:animate-shake text-white bg-gradient-to-tr from-blue-500 to-purple-400 rounded-full mt-4 p-2 px-16 font-light border-2  transition duration-300 w-full sm:w-auto">
              Contact us
            </button>
            <button className="hover:animate-shake text-white bg-gradient-to-tr from-blue-500 to-purple-400 rounded-full mt-4 p-2 px-20 font-light border-2  transition duration-300 w-full sm:w-auto">
              Enquiry
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          <div className="relative aspect-square w-[350px] sm:w-[300px] md:w-[350px] lg:w-[400px] bg-gradient-to-tr from-blue-500 to-purple-400 shadow-lg shadow-blue-500 rounded-full overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="absolute w-full h-full rounded-full border border-transparent animate-spin-slow">
                <FontAwesomeIcon
                  icon={faStethoscope}
                  className="absolute text-slate-700 text-lg md:text-3xl top-0 left-1/2 transform -translate-x-1/2"
                />
                <FontAwesomeIcon
                  icon={faHeartbeat}
                  className="absolute text-slate-700 text-lg md:text-3xl right-0 top-1/2 transform -translate-y-1/2"
                />
                <FontAwesomeIcon
                  icon={faSyringe}
                  className="absolute text-slate-700 text-lg md:text-3xl bottom-0 left-1/2 transform -translate-x-1/2"
                />
                <FontAwesomeIcon
                  icon={faPills}
                  className="absolute text-slate-700 text-lg md:text-3xl left-0 top-1/2 transform -translate-y-1/2"
                />
              </div>
            </div>
            <img
              src="./drAboutus.jpg"
              alt="Doctor"
              className="h-5/6 w-5/6 object-cover rounded-full border-2 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
