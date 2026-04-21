// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Appointment() {
//   const navigate = useNavigate();

//   const handleNavigation = () => {
//     navigate("/book-appointment"); 
//   };

//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center m-4 mt-10 mb-14 h-auto lg:py-16">
//       <div className="img md:mr-14 mb-6 md:mb-0 w-full md:w-auto flex justify-center">
//         <img
//           src="./appointment.jpg"
//           alt="Appointment"
//           className="max-w-full h-auto object-cover "
//         />
//       </div>
//       <div className="text-center mx-4">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 ">
//           We are here for you, <br /> Book your session now
//         </h1>

//         <button
//           onClick={handleNavigation}
//           className="bg-gradient-to-tr from-blue-500 to-purple-400  text-white p-3 mt-4 shadow-black rounded-3xl shadow-lg hover:shadow-purple-300 hover:shadow-xl transition-all duration-500 ease-in-out font-light pl-6 pr-6 animate-bounce"
//         >
//           Schedule Appointment
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Appointment;

import React from "react";
import { useNavigate } from "react-router-dom";

function Appointment() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-center items-center m-4 mt-10 mb-14 h-auto lg:py-16 bg-[#3f1457] rounded-3xl px-8 py-12 shadow-xl shadow-purple-200">

      {/* Image */}
      <div className="md:mr-14 mb-6 md:mb-0 w-full md:w-auto flex justify-center">
        <img
          src="./appointment.jpg"
          alt="Appointment"
          className="max-w-full h-auto object-cover rounded-2xl shadow-lg shadow-black/20"
        />
      </div>

      {/* Text */}
      <div className="text-center mx-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 font-bold text-white leading-snug">
          We are here for you, <br />
          <span className="text-purple-100">Book your session now</span>
        </h1>
        <p className="text-white/70 text-sm md:text-base mb-6 max-w-xs mx-auto">
          Quick, easy booking for your personalised physiotherapy session.
        </p>
        <button
          onClick={() => navigate("/book-appointment")}
          className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Schedule Appointment
        </button>
      </div>

    </div>
  );
}

export default Appointment;




// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function useInView(threshold = 0.15) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
//       { threshold }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// export default function Appointment() {
//   const navigate = useNavigate();
//   const [ref, inView] = useInView(0.1);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
//         .appt-cta { font-family:'DM Sans',sans-serif; }
//         .appt-cta h2 { font-family:'DM Serif Display',serif; }
//         @keyframes apptFloat {
//           0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)}
//         }
//         @keyframes apptPulse {
//           0%,100%{opacity:0.5;transform:scale(1)}
//           50%{opacity:1;transform:scale(1.08)}
//         }
//         @keyframes apptOrbit {
//           from{transform:rotate(0deg) translateX(58px) rotate(0deg)}
//           to  {transform:rotate(360deg) translateX(58px) rotate(-360deg)}
//         }
//         @keyframes apptOrbit2 {
//           from{transform:rotate(180deg) translateX(80px) rotate(-180deg)}
//           to  {transform:rotate(540deg) translateX(80px) rotate(-540deg)}
//         }
//         @keyframes apptOrbit3 {
//           from{transform:rotate(90deg) translateX(100px) rotate(-90deg)}
//           to  {transform:rotate(450deg) translateX(100px) rotate(-450deg)}
//         }
//         .orb1 { animation:apptOrbit  7s linear infinite; }
//         .orb2 { animation:apptOrbit2 11s linear infinite; }
//         .orb3 { animation:apptOrbit3 15s linear infinite; }
//         .appt-illus { animation:apptFloat 5s ease-in-out infinite; }
//         .appt-cta-btn {
//           background:linear-gradient(135deg,#7c3aed,#4f46e5);
//           color:#fff; border:none; border-radius:50px;
//           padding:16px 40px; font-size:16px; font-weight:600;
//           cursor:pointer; font-family:'DM Sans',sans-serif;
//           box-shadow:0 8px 28px rgba(124,58,237,0.32);
//           display:inline-flex; align-items:center; gap:10px;
//           transition:transform 0.2s,box-shadow 0.2s;
//         }
//         .appt-cta-btn:hover {
//           transform:scale(1.04) translateY(-2px);
//           box-shadow:0 14px 38px rgba(124,58,237,0.42);
//         }
//         .appt-secondary-btn {
//           background:transparent;
//           color:#7c3aed; border:1.5px solid #c4b5fd;
//           border-radius:50px; padding:15px 32px;
//           font-size:15px; font-weight:500;
//           cursor:pointer; font-family:'DM Sans',sans-serif;
//           display:inline-flex; align-items:center; gap:8px;
//           transition:all 0.2s;
//         }
//         .appt-secondary-btn:hover {
//           background:#f5f3ff; border-color:#7c3aed;
//         }
//       `}</style>

//       <div className="appt-cta" style={{ padding:"12px 24px 60px" }}>
//         <div
//           ref={ref}
//           style={{
//             maxWidth:1100, margin:"0 auto",
//             background:"linear-gradient(135deg,#f8f7ff 0%,#ede9fe 40%,#e0e7ff 100%)",
//             borderRadius:32,
//             border:"1.5px solid #ddd6fe",
//             boxShadow:"0 20px 80px rgba(124,58,237,0.12), 0 4px 16px rgba(0,0,0,0.04)",
//             padding:"64px 56px",
//             display:"grid",
//             gridTemplateColumns:"1fr 1fr",
//             gap:56,
//             alignItems:"center",
//             position:"relative",
//             overflow:"hidden",
//             opacity: inView ? 1 : 0,
//             transform: inView ? "translateY(0)" : "translateY(36px)",
//             transition:"opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)",
//           }}
//         >
//           {/* Decorative corner blobs */}
//           <div style={{ position:"absolute",top:-60,right:-60,width:220,height:220,borderRadius:"50%",background:"rgba(124,58,237,0.07)",pointerEvents:"none" }} />
//           <div style={{ position:"absolute",bottom:-40,left:280,width:160,height:160,borderRadius:"50%",background:"rgba(99,102,241,0.06)",pointerEvents:"none" }} />

//           {/* ── LEFT: Custom SVG Illustration ── */}
//           <div style={{ display:"flex", justifyContent:"center", alignItems:"center", position:"relative" }}>

//             {/* Orbit ring container */}
//             <div style={{ position:"relative", width:260, height:260, display:"flex", alignItems:"center", justifyContent:"center" }}>

//               {/* Dashed orbit rings */}
//               <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none" }} viewBox="0 0 260 260">
//                 <circle cx="130" cy="130" r="56"  fill="none" stroke="#c4b5fd" strokeWidth="1.2" strokeDasharray="5 5" opacity="0.6"/>
//                 <circle cx="130" cy="130" r="78"  fill="none" stroke="#a5b4fc" strokeWidth="1"   strokeDasharray="4 7" opacity="0.4"/>
//                 <circle cx="130" cy="130" r="98"  fill="none" stroke="#c4b5fd" strokeWidth="0.8" strokeDasharray="3 9" opacity="0.3"/>
//               </svg>

//               {/* Orbiting icon pills */}
//               <div style={{ position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center" }}>
//                 {/* Heart */}
//                 <div className="orb1" style={{ position:"absolute",width:36,height:36,borderRadius:"50%",background:"#fff",boxShadow:"0 4px 16px rgba(244,63,94,0.22)",display:"flex",alignItems:"center",justifyContent:"center",border:"1.5px solid #fecdd3" }}>
//                   <svg width={16} height={16} viewBox="0 0 24 24" fill="#f43f5e"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
//                 </div>
//                 {/* Pulse */}
//                 <div className="orb2" style={{ position:"absolute",width:36,height:36,borderRadius:"50%",background:"#fff",boxShadow:"0 4px 16px rgba(16,185,129,0.22)",display:"flex",alignItems:"center",justifyContent:"center",border:"1.5px solid #a7f3d0" }}>
//                   <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
//                 </div>
//                 {/* Clock/time */}
//                 <div className="orb3" style={{ position:"absolute",width:36,height:36,borderRadius:"50%",background:"#fff",boxShadow:"0 4px 16px rgba(245,158,11,0.22)",display:"flex",alignItems:"center",justifyContent:"center",border:"1.5px solid #fde68a" }}>
//                   <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
//                 </div>
//               </div>

//               {/* Central illustration card */}
//               <div className="appt-illus" style={{
//                 width:180, height:180,
//                 background:"#fff",
//                 borderRadius:"50%",
//                 boxShadow:"0 20px 60px rgba(124,58,237,0.18), 0 4px 20px rgba(0,0,0,0.06)",
//                 border:"4px solid #fff",
//                 display:"flex",
//                 alignItems:"center",
//                 justifyContent:"center",
//                 position:"relative",
//                 zIndex:2,
//                 overflow:"hidden",
//               }}>
//                 {/* Custom SVG doctor/physio illustration */}
//                 <svg viewBox="0 0 160 160" width="160" height="160" xmlns="http://www.w3.org/2000/svg">
//                   {/* Background gradient */}
//                   <defs>
//                     <radialGradient id="bgG" cx="50%" cy="50%" r="50%">
//                       <stop offset="0%"   stopColor="#f5f3ff"/>
//                       <stop offset="100%" stopColor="#ede9fe"/>
//                     </radialGradient>
//                     <linearGradient id="skinG" x1="0%" y1="0%" x2="100%" y2="100%">
//                       <stop offset="0%" stopColor="#fcd9b6"/>
//                       <stop offset="100%" stopColor="#f8c49a"/>
//                     </linearGradient>
//                     <linearGradient id="coatG" x1="0%" y1="0%" x2="0%" y2="100%">
//                       <stop offset="0%" stopColor="#ffffff"/>
//                       <stop offset="100%" stopColor="#f0eeff"/>
//                     </linearGradient>
//                     <linearGradient id="scrubG" x1="0%" y1="0%" x2="100%" y2="100%">
//                       <stop offset="0%" stopColor="#7c3aed"/>
//                       <stop offset="100%" stopColor="#4f46e5"/>
//                     </linearGradient>
//                   </defs>

//                   {/* BG circle */}
//                   <circle cx="80" cy="80" r="80" fill="url(#bgG)"/>

//                   {/* Body / scrubs */}
//                   <ellipse cx="80" cy="115" rx="32" ry="28" fill="url(#scrubG)"/>

//                   {/* White coat */}
//                   <path d="M52 110 Q48 90 55 80 L80 85 L105 80 Q112 90 108 110 Z" fill="url(#coatG)" opacity="0.95"/>

//                   {/* Coat lapels */}
//                   <path d="M80 85 L70 105 L65 112" stroke="#ddd6fe" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
//                   <path d="M80 85 L90 105 L95 112" stroke="#ddd6fe" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

//                   {/* Neck */}
//                   <rect x="74" y="60" width="12" height="14" rx="5" fill="url(#skinG)"/>

//                   {/* Head */}
//                   <ellipse cx="80" cy="50" rx="20" ry="22" fill="url(#skinG)"/>

//                   {/* Hair */}
//                   <path d="M60 44 Q62 26 80 26 Q98 26 100 44 Q96 32 80 32 Q64 32 60 44Z" fill="#4c2b06"/>

//                   {/* Eyes */}
//                   <circle cx="73" cy="48" r="2.2" fill="#1e1b4b"/>
//                   <circle cx="87" cy="48" r="2.2" fill="#1e1b4b"/>
//                   <circle cx="73.8" cy="47.2" r="0.7" fill="#fff"/>
//                   <circle cx="87.8" cy="47.2" r="0.7" fill="#fff"/>

//                   {/* Smile */}
//                   <path d="M74 55 Q80 60 86 55" stroke="#c97b4b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

//                   {/* Stethoscope */}
//                   <path d="M68 80 Q60 85 58 92 Q56 100 62 103 Q68 106 70 100 Q72 94 80 90" stroke="#7c3aed" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
//                   <circle cx="62" cy="103" r="4" fill="#7c3aed" opacity="0.9"/>
//                   <circle cx="80" cy="90"  r="3" fill="#c4b5fd"/>

//                   {/* Clipboard */}
//                   <rect x="84" y="78" width="24" height="30" rx="4" fill="#fff" stroke="#ddd6fe" strokeWidth="1.5"/>
//                   <rect x="87" y="74" width="18" height="6"  rx="2" fill="#c4b5fd"/>
//                   <line x1="88" y1="90" x2="104" y2="90" stroke="#ddd6fe" strokeWidth="1.5"/>
//                   <line x1="88" y1="95" x2="104" y2="95" stroke="#ddd6fe" strokeWidth="1.5"/>
//                   <line x1="88" y1="100" x2="98"  y2="100" stroke="#ddd6fe" strokeWidth="1.5"/>

//                   {/* Cross on coat pocket */}
//                   <rect x="74" y="90" width="4" height="10" rx="1.5" fill="#7c3aed" opacity="0.5"/>
//                   <rect x="71" y="93" width="10" height="4"  rx="1.5" fill="#7c3aed" opacity="0.5"/>

//                   {/* Subtle ground shadow */}
//                   <ellipse cx="80" cy="138" rx="28" ry="6" fill="#7c3aed" opacity="0.06"/>
//                 </svg>
//               </div>
//             </div>

//             {/* Floating stat cards */}
//             <div style={{ position:"absolute",top:10,right:0,background:"#fff",borderRadius:14,padding:"10px 16px",boxShadow:"0 6px 24px rgba(124,58,237,0.14)",border:"1.5px solid #ede9fe",display:"flex",alignItems:"center",gap:10 }}>
//               <div style={{ width:32,height:32,borderRadius:9,background:"#ecfdf5",display:"flex",alignItems:"center",justifyContent:"center" }}>
//                 <svg width={16} height={16} viewBox="0 0 24 24" fill="#10b981"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
//               </div>
//               <div>
//                 <p style={{ fontSize:11,color:"#9ca3af",margin:0,fontWeight:500 }}>Recovery Rate</p>
//                 <p style={{ fontSize:15,color:"#10b981",fontWeight:700,margin:0 }}>98% Success</p>
//               </div>
//             </div>

//             <div style={{ position:"absolute",bottom:16,left:0,background:"#fff",borderRadius:14,padding:"10px 16px",boxShadow:"0 6px 24px rgba(124,58,237,0.14)",border:"1.5px solid #ede9fe",display:"flex",alignItems:"center",gap:10 }}>
//               <div style={{ width:32,height:32,borderRadius:9,background:"#f5f3ff",display:"flex",alignItems:"center",justifyContent:"center" }}>
//                 <svg width={16} height={16} viewBox="0 0 24 24" fill="#7c3aed"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>
//               </div>
//               <div>
//                 <p style={{ fontSize:11,color:"#9ca3af",margin:0,fontWeight:500 }}>Next Available</p>
//                 <p style={{ fontSize:15,color:"#7c3aed",fontWeight:700,margin:0 }}>Today, 3:00 PM</p>
//               </div>
//             </div>
//           </div>

//           {/* ── RIGHT: Text content ── */}
//           <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
//             <div>
//               <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"#fff",border:"1.5px solid #ddd6fe",borderRadius:50,padding:"6px 16px",marginBottom:18 }}>
//                 <span style={{ width:8,height:8,borderRadius:"50%",background:"#a855f7",boxShadow:"0 0 6px #a855f7",animation:"apptPulse 2s infinite",display:"inline-block" }} />
//                 <span style={{ fontSize:12,fontWeight:600,color:"#7c3aed",letterSpacing:"0.07em",textTransform:"uppercase" }}>Available Now</span>
//               </div>

//               <h2 style={{ fontSize:"clamp(28px,3.2vw,44px)",color:"#1e1b4b",margin:"0 0 14px",lineHeight:1.2,fontWeight:400 }}>
//                 We're Here for You —{" "}
//                 <em style={{ fontStyle:"italic",color:"#7c3aed" }}>Book Your Session</em> Today
//               </h2>

//               <div style={{ width:44,height:4,borderRadius:4,background:"linear-gradient(90deg,#7c3aed,#4f46e5,#60a5fa)",marginBottom:18 }} />

//               <p style={{ fontSize:16,color:"#6b7280",lineHeight:1.85,margin:0,fontWeight:300 }}>
//                 Skip the wait. Our certified physiotherapists are ready to build a personalised recovery plan around your schedule and goals.
//               </p>
//             </div>

//             {/* Feature bullets */}
//             <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
//               {[
//                 { text:"Same-day appointments available",     accent:"#7c3aed", light:"#f5f3ff" },
//                 { text:"Personalised treatment plans",        accent:"#10b981", light:"#ecfdf5" },
//                 { text:"Expert certified physiotherapists",   accent:"#0ea5e9", light:"#e0f2fe" },
//               ].map((b,i) => (
//                 <div key={i} style={{ display:"flex",alignItems:"center",gap:12 }}>
//                   <div style={{ width:28,height:28,borderRadius:8,background:b.light,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:`1px solid ${b.accent}20` }}>
//                     <svg width={13} height={13} viewBox="0 0 24 24" fill={b.accent}><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
//                   </div>
//                   <span style={{ fontSize:15,color:"#374151",fontWeight:400 }}>{b.text}</span>
//                 </div>
//               ))}
//             </div>

//             {/* CTA buttons */}
//             <div style={{ display:"flex",gap:14,flexWrap:"wrap",marginTop:4 }}>
//               <button className="appt-cta-btn" onClick={() => navigate("/book-appointment")}>
//                 Schedule Appointment
//                 <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
//                 </svg>
//               </button>
//               <button className="appt-secondary-btn" onClick={() => navigate("/contact-us")}>
//                 <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
//                 </svg>
//                 Call Us First
//               </button>
//             </div>

//             {/* Trust note */}
//             <p style={{ fontSize:12,color:"#c4b5fd",margin:0,fontWeight:400 }}>
//               ✓ No commitment required &nbsp;·&nbsp; ✓ Free first consultation &nbsp;·&nbsp; ✓ Cancel anytime
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }