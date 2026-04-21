import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faDumbbell, faUtensils, faStethoscope } from '@fortawesome/free-solid-svg-icons';

function Labelitem() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const explanations = {
    Relief: "Personalized pain relief solutions for chronic and acute conditions.",
    Recovery: "Structured programs to support rehabilitation and restore function.",
    Prevention: "Guidance on injury prevention through strength and posture training.",
    Wellness: "Holistic approach to enhance overall health and quality of life.",
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="flex justify-evenly items-center mt-4 shadow-xl bg-blue-900">
      {[
        { name: 'Relief', icon: faStethoscope },
        { name: 'Recovery', icon: faDumbbell },
        { name: 'Prevention', icon: faUtensils },
        { name: 'Wellness', icon: faCoffee },
      ].map((item) => (
        <div
          key={item.name}
          className="relative flex flex-col items-center cursor-pointer px-4 py-3 hover:animate-shake "
          onMouseEnter={() => handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="text-white lg:text-2xl sm:text-xl mb-2"
          />
          <div className="font-semibold lg:text-lg sm:text-sm text-white">{item.name}</div>

          {/* Tooltip - hidden on small screens */}
          {hoveredItem === item.name && (
            <div className="hidden sm:block absolute top-full mt-4 p-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-200 text-black shadow-md w-56 text-center ">
              <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-blue-500"></div>
              {explanations[item.name]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Labelitem;
