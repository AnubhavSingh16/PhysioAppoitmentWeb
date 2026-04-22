import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboard,
  faStethoscope,
  faChartLine,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cards = [
  {
    icon: faClipboard,
    color: "#7c3aed",
    bg: "#f3e8ff",
    title: "Personalized Treatment",
    desc: "Receive a fully individualized treatment plan tailored to your unique needs and health goals.",
  },
  {
    icon: faStethoscope,
    color: "#6d28d9",
    bg: "#ede9fe",
    title: "Experienced Staff",
    desc: "Our highly trained professionals are here to help you achieve lasting health outcomes.",
  },
  {
    icon: faChartLine,
    color: "#7c3aed",
    bg: "#f3e8ff",
    title: "Practitioners Network",
    desc: "We collaborate with your health practitioners for comprehensive, integrated care.",
  },
  {
    icon: faTrophy,
    color: "#6d28d9",
    bg: "#ede9fe",
    title: "Therapy Goals",
    desc: "Setting clear, achievable milestones ensures measurable success and satisfaction.",
  },
];

function Care() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 px-6 md:px-16"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-purple-100 opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-blue-100 opacity-40 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-16">

        {/* ── HERO BANNER ── */}
        <div
          className={`relative w-full rounded-3xl overflow-hidden transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('./backg4.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-purple-800/75 to-blue-900/70" />

          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full border border-white/10" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border border-white/10" />
          <div className="absolute top-6 right-24 w-3 h-3 rounded-full bg-purple-300 opacity-60" />
          <div className="absolute bottom-10 left-20 w-2 h-2 rounded-full bg-blue-300 opacity-60" />

          {/* Content */}
          <div className="relative z-10 px-8 py-14 md:px-16 md:py-16 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-300 animate-pulse" />
              <span className="text-white/90 text-sm font-medium tracking-wide">
                Our Commitment
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5 tracking-tight">
              We Care About You &{" "}
              <span className="text-purple-200">Your Health</span>
            </h2>
            <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Our mission is to ensure your well-being by providing top-notch care,
              personalized treatment plans, and a network of experienced professionals
              dedicated to your health and happiness.
            </p>
            <Link to="/care">
              <button className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-purple-300 hover:scale-105 transition-all duration-200 text-sm tracking-wide">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {/* ── FEATURE CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl p-7 border border-purple-100 shadow-sm hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-400 rounded-t-2xl" />

              {/* Hover bg glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-purple-50/0 group-hover:from-purple-50/60 group-hover:to-blue-50/40 transition-all duration-300 rounded-2xl pointer-events-none" />

              <div className="relative z-10 flex items-start gap-5">
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-13 h-13 rounded-2xl flex items-center justify-center p-3.5 shadow-sm"
                  style={{ backgroundColor: card.bg }}
                >
                  <FontAwesomeIcon
                    icon={card.icon}
                    style={{ color: card.color }}
                    className="text-xl"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5 group-hover:text-purple-700 transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Care;