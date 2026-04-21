import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: "The physiotherapy sessions completely transformed my recovery. I was back on my feet in half the expected time.",
    name: "Amardeep Singh",
    role: "Sports Injury Recovery",
    rating: 4,
  },
  {
    text: "Incredibly professional staff. They listened carefully and designed a treatment plan that actually worked for my chronic back pain.",
    name: "Arvinder Singh",
    role: "Chronic Pain Patient",
    rating: 5,
  },
  {
    text: "The team simplified my rehab routine and made it easy to follow at home. The progress has been outstanding.",
    name: "Mandeep",
    role: "Post-Surgery Rehab",
    rating: 4,
  },
  {
    text: "Fast, mobile-friendly booking and incredibly attentive care. Managing my appointments has never been easier.",
    name: "Chetan Sinha",
    role: "Osteopathy Patient",
    rating: 4,
  },
  {
    text: "My sessions were structured properly and the results have been consistent and efficient. Highly recommend.",
    name: "Mr. Sunil Khatri",
    role: "Chiropractic Patient",
    rating: 4,
  },
  {
    text: "They focused on my actual goals, not just generic exercises. I'm now performing better than before my injury.",
    name: "Sahil Tuteja",
    role: "Sports Physiotherapy",
    rating: 5,
  },
  {
    text: "A calm, collaborative environment. Every session felt purposeful and I always left feeling better than when I arrived.",
    name: "Akash Chauhan",
    role: "General Physiotherapy",
    rating: 4,
  },
  {
    text: "They aligned my treatment with my lifestyle. Everything now feels like part of one cohesive recovery journey.",
    name: "SK & KD",
    role: "Couples Rehab Program",
    rating: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          size={13}
          className={i < count ? "text-purple-500" : "text-gray-200"}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="marquee-card">
      <span className="quote-mark">💬</span>
      <p className="card-text">{item.text}</p>
      <div className="card-footer">
        <div className="avatar">
          {item.name.charAt(0)}
        </div>
        <div>
          <p className="card-name">{item.name}</p>
          <p className="card-role">{item.role}</p>
          <StarRating count={item.rating} />
        </div>
      </div>
    </div>
  );
}

export default function Testimonial() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="testimonial-section">
      {/* Background blobs */}
      <div className="t-blob t-blob-left" />
      <div className="t-blob t-blob-right" />

      {/* Header */}
      <div className="t-header">
        <div className="t-badge">
          <span className="t-badge-dot" />
          Patient Stories
        </div>
        <h2 className="t-title">
          What Our Clients <span className="t-title-accent">Have to Say</span>
        </h2>
        <p className="t-subtitle">
          Real experiences from real patients on their journey to recovery
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="marquee-wrapper mask-left-right">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="marquee-wrapper mask-left-right" style={{ marginTop: "20px" }}>
        <div className="marquee-track reverse">
          {doubled.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>

      <style>{`
        /* ── SECTION ── */
        .testimonial-section {
          position: relative;
          overflow: hidden;
          
          padding: 80px 0 100px;
        }

        /* ── BLOBS ── */
        .t-blob {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          filter: blur(110px);
          pointer-events: none;
          z-index: 0;
        }
        .t-blob-left {
          background: radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%);
          top: -10%; left: -10%;
        }
        .t-blob-right {
          background: radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%);
          bottom: -10%; right: -10%;
        }

        /* ── HEADER ── */
        .t-header {
          position: relative;
          z-index: 1;
          text-align: center;
          margin-bottom: 52px;
          padding: 0 20px;
        }
        .t-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          border: 1px solid rgba(139,92,246,0.25);
          border-radius: 999px;
          padding: 5px 16px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #7c3aed;
          margin-bottom: 16px;
          box-shadow: 0 2px 12px rgba(139,92,246,0.1);
        }
        .t-badge-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #a855f7;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        .t-title {
          font-size: clamp(1.9rem, 4.5vw, 3rem);
          font-weight: 800;
          color: #1a1a2e;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
          line-height: 1.15;
        }
        .t-title-accent {
          background: linear-gradient(90deg, #7c3aed, #a855f7, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .t-subtitle {
          color: #6b7280;
          font-size: 1rem;
          margin: 0;
        }

        /* ── MARQUEE WRAPPER ── */
        .marquee-wrapper {
          position: relative;
          z-index: 1;
          width: 100%;
          overflow: hidden;
        }
        .mask-left-right {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
        }

        /* ── TRACK ── */
        .marquee-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: scroll-left 35s linear infinite;
          padding: 12px 0;
        }
        .marquee-track.reverse {
          animation: scroll-right 40s linear infinite;
        }
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .marquee-track:hover,
        // .marquee-track.reverse:hover {
        //   animation-play-state: paused;
        // }

        /* ── CARD ── */
        .marquee-card {
          min-width: 320px;
          max-width: 340px;
          background: linear-gradient(145deg, #ffffff 0%, #faf5ff 100%);
          border: 1.5px solid rgba(139,92,246,0.18);
          border-radius: 28px 28px 28px 6px;
          padding: 26px 26px 22px;
          position: relative;
          box-shadow:
            0 4px 24px rgba(139,92,246,0.1),
            0 1px 4px rgba(139,92,246,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: default;
          flex-shrink: 0;
          overflow: hidden;
        }

        /* Soft purple wash in top-right corner */
        .marquee-card::before {
          content: '';
          position: absolute;
          top: -30px; right: -30px;
          width: 100px; height: 100px;
          background: radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        /* Bottom accent line */
        .marquee-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #7c3aed, #a855f7, #818cf8);
          border-radius: 0 0 6px 6px;
        }

        .marquee-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow:
            0 20px 48px rgba(139,92,246,0.2),
            0 4px 12px rgba(139,92,246,0.1);
          border-color: rgba(139,92,246,0.38);
        }

        /* Emoji quote */
        .quote-mark {
          font-size: 2.2rem;
          line-height: 1;
          margin-bottom: 10px;
          display: block;
          filter: drop-shadow(0 2px 4px rgba(124,58,237,0.2));
        }

        .card-text {
          font-size: 0.875rem;
          color: #4b5563;
          line-height: 1.75;
          margin: 0 0 20px;
          position: relative;
          z-index: 1;
        }

        .card-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          border-top: 1px solid rgba(139,92,246,0.1);
          padding-top: 16px;
        }

        .avatar {
          width: 42px; height: 42px;
          border-radius: 14px;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          color: white;
          font-weight: 800;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(124,58,237,0.35);
        }

        .card-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 2px;
        }
        .card-role {
          font-size: 0.72rem;
          color: #a78bfa;
          font-weight: 500;
          margin: 0 0 4px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* ── MOBILE ── */
        @media (max-width: 640px) {
          .marquee-card { min-width: 260px; padding: 20px; }
          .mask-left-right {
            mask-image: none;
            -webkit-mask-image: none;
          }
          .marquee-track { animation-duration: 55s; }
          .marquee-track.reverse { animation-duration: 60s; }
        }
      `}</style>
    </section>
  );
}










// import React from "react";

// const testimonials = [
//   {
//     text: "The physiotherapy sessions completely transformed my recovery. I was back on my feet in half the expected time.",
//     name: "Amardeep Singh",
//     role: "Sports Injury Recovery",
//     rating: 4,
//     initials: "AS",
//     accent: "#7c3aed",
//     light: "#f5f3ff",
//   },
//   {
//     text: "Incredibly professional staff. They listened carefully and designed a treatment plan that actually worked for my chronic back pain.",
//     name: "Arvinder Singh",
//     role: "Chronic Pain Patient",
//     rating: 5,
//     initials: "AV",
//     accent: "#0ea5e9",
//     light: "#e0f2fe",
//   },
//   {
//     text: "The team simplified my rehab routine and made it easy to follow at home. The progress has been outstanding.",
//     name: "Mandeep",
//     role: "Post-Surgery Rehab",
//     rating: 4,
//     initials: "MD",
//     accent: "#10b981",
//     light: "#ecfdf5",
//   },
//   {
//     text: "Fast, mobile-friendly booking and incredibly attentive care. Managing my appointments has never been easier.",
//     name: "Chetan Sinha",
//     role: "Osteopathy Patient",
//     rating: 4,
//     initials: "CS",
//     accent: "#f59e0b",
//     light: "#fffbeb",
//   },
//   {
//     text: "My sessions were structured properly and the results have been consistent and efficient. Highly recommend.",
//     name: "Sunil Khatri",
//     role: "Chiropractic Patient",
//     rating: 4,
//     initials: "SK",
//     accent: "#f43f5e",
//     light: "#fff1f2",
//   },
//   {
//     text: "They focused on my actual goals, not just generic exercises. I'm now performing better than before my injury.",
//     name: "Sahil Tuteja",
//     role: "Sports Physiotherapy",
//     rating: 5,
//     initials: "ST",
//     accent: "#8b5cf6",
//     light: "#f5f3ff",
//   },
//   {
//     text: "A calm, collaborative environment. Every session felt purposeful and I always left feeling better than when I arrived.",
//     name: "Akash Chauhan",
//     role: "General Physiotherapy",
//     rating: 4,
//     initials: "AC",
//     accent: "#0ea5e9",
//     light: "#e0f2fe",
//   },
//   {
//     text: "They aligned my treatment with my lifestyle. Everything now feels like part of one cohesive recovery journey.",
//     name: "SK & KD",
//     role: "Couples Rehab Program",
//     rating: 5,
//     initials: "SK",
//     accent: "#10b981",
//     light: "#ecfdf5",
//   },
// ];

// /* ── Star rating ── */
// function Stars({ count }) {
//   return (
//     <div style={{ display:"flex", gap:3 }}>
//       {Array.from({ length:5 }).map((_,i) => (
//         <svg key={i} width={13} height={13} viewBox="0 0 24 24"
//           fill={i < count ? "#f59e0b" : "#e5e7eb"}>
//           <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
//         </svg>
//       ))}
//     </div>
//   );
// }

// /* ── Single card ── */
// function Card({ item }) {
//   return (
//     <div className="t-card">
//       {/* Large quote SVG instead of emoji */}
//       <svg className="t-quote-svg" width={36} height={28} viewBox="0 0 36 28" fill="none">
//         <path d="M0 28V17.6C0 12.533 1.067 8.4 3.2 5.2 5.333 2 8.8 0 13.6 0L15.2 3.2c-2.667.533-4.8 1.867-6.4 4-1.6 2.133-2.4 4.4-2.4 6.8H12V28H0zm20 0V17.6c0-5.067 1.067-9.2 3.2-12.4C25.333 2 28.8 0 33.6 0L35.2 3.2c-2.667.533-4.8 1.867-6.4 4-1.6 2.133-2.4 4.4-2.4 6.8H32V28H20z"
//           fill={item.accent} fillOpacity="0.18"/>
//       </svg>

//       <p className="t-card-text">{item.text}</p>

//       <div className="t-card-footer">
//         {/* Avatar with gradient initial */}
//         <div className="t-avatar" style={{ background:`linear-gradient(135deg,${item.accent},${item.accent}99)` }}>
//           {item.initials}
//         </div>
//         <div>
//           <p className="t-name">{item.name}</p>
//           <p className="t-role" style={{ color: item.accent }}>{item.role}</p>
//           <Stars count={item.rating} />
//         </div>
//         {/* Verified badge */}
//         <div className="t-verified" style={{ background: item.light, borderColor: `${item.accent}30` }}>
//           <svg width={10} height={10} viewBox="0 0 24 24" fill={item.accent}>
//             <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
//           </svg>
//           <span style={{ color: item.accent }}>Verified</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Testimonial() {
//   const row1 = [...testimonials, ...testimonials];
//   const row2 = [...testimonials.slice(4), ...testimonials.slice(0,4), ...testimonials.slice(4), ...testimonials.slice(0,4)];

//   return (
//     <section className="t-section">

//       {/* ── Background decorative SVG illustration ── */}
//       <div className="t-bg-illustration" aria-hidden="true">
//         {/* Abstract medical/wellness SVG built from shapes */}
//         <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
//           {/* Outer ring */}
//           <circle cx="210" cy="210" r="200" stroke="#7c3aed" strokeOpacity="0.06" strokeWidth="1.5" strokeDasharray="8 6"/>
//           {/* Middle ring */}
//           <circle cx="210" cy="210" r="150" stroke="#818cf8" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="4 8"/>
//           {/* Inner glow */}
//           <circle cx="210" cy="210" r="95" fill="url(#illGrad1)" />
//           {/* Cross / health symbol */}
//           <rect x="190" y="155" width="40" height="110" rx="12" fill="#7c3aed" fillOpacity="0.08"/>
//           <rect x="155" y="190" width="110" height="40" rx="12" fill="#7c3aed" fillOpacity="0.08"/>
//           {/* Pulse line */}
//           <polyline points="100,285 130,285 148,248 166,318 184,260 202,285 230,285 248,240 266,310 284,285 320,285"
//             stroke="#7c3aed" strokeOpacity="0.18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//           {/* Small dot accents */}
//           <circle cx="78"  cy="148" r="5" fill="#a855f7" fillOpacity="0.2"/>
//           <circle cx="342" cy="172" r="7" fill="#60a5fa" fillOpacity="0.22"/>
//           <circle cx="96"  cy="312" r="4" fill="#34d399" fillOpacity="0.22"/>
//           <circle cx="356" cy="298" r="6" fill="#f472b6" fillOpacity="0.18"/>
//           <defs>
//             <radialGradient id="illGrad1" cx="50%" cy="50%" r="50%">
//               <stop offset="0%" stopColor="#a855f7" stopOpacity="0.10"/>
//               <stop offset="100%" stopColor="#818cf8" stopOpacity="0"/>
//             </radialGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Right-side mirror illustration */}
//       <div className="t-bg-illustration t-bg-right" aria-hidden="true">
//         <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
//           <circle cx="160" cy="160" r="150" stroke="#60a5fa" strokeOpacity="0.07" strokeWidth="1.5" strokeDasharray="6 8"/>
//           <circle cx="160" cy="160" r="100" fill="url(#illGrad2)"/>
//           {/* Small heartbeat */}
//           <path d="M70,200 C80,200 88,170 100,200 C112,230 120,160 135,200 C150,240 160,180 175,200"
//             stroke="#60a5fa" strokeOpacity="0.20" strokeWidth="2" fill="none" strokeLinecap="round"/>
//           <circle cx="260" cy="80"  r="6" fill="#a855f7" fillOpacity="0.18"/>
//           <circle cx="50"  cy="250" r="5" fill="#34d399" fillOpacity="0.20"/>
//           <defs>
//             <radialGradient id="illGrad2" cx="50%" cy="50%" r="50%">
//               <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.09"/>
//               <stop offset="100%" stopColor="#60a5fa" stopOpacity="0"/>
//             </radialGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* ── HEADER ── */}
//       <div className="t-header">
//         <div className="t-pill">
//           <span className="t-dot" />
//           Patient Stories
//         </div>
//         <h2 className="t-title">
//           What Our Clients<br/>
//           <span className="t-title-grad">Have to Say</span>
//         </h2>
//         <p className="t-sub">Real experiences from real patients on their path to recovery.</p>

//         {/* Summary row */}
//         <div className="t-summary">
//           {[["500+","Happy Patients"],["4.9","Average Rating"],["8 yrs","Of Excellence"]].map(([val,lab])=>(
//             <div key={lab} className="t-summary-item">
//               <span className="t-sum-val">{val}</span>
//               <span className="t-sum-lab">{lab}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── ROW 1: scrolls left ── */}
//       <div className="t-marquee-wrap t-fade-edges">
//         <div className="t-track t-left">
//           {row1.map((item,i) => <Card key={i} item={item}/>)}
//         </div>
//       </div>

//       {/* ── ROW 2: scrolls right ── */}
//       <div className="t-marquee-wrap t-fade-edges" style={{ marginTop:20 }}>
//         <div className="t-track t-right">
//           {row2.map((item,i) => <Card key={i} item={item}/>)}
//         </div>
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

//         /* ── SECTION ── */
//         .t-section {
//           position:relative;
//           overflow:hidden;
//           background:linear-gradient(180deg, #ffffff 0%, #f8f7ff 40%, #f0eeff 100%);
//           padding:90px 0 100px;
//           font-family:'DM Sans',sans-serif;
//         }

//         /* ── BG ILLUSTRATION ── */
//         .t-bg-illustration {
//           position:absolute;
//           top:-40px; left:-60px;
//           opacity:0.9;
//           pointer-events:none;
//           z-index:0;
//         }
//         .t-bg-right {
//           left:auto; right:-60px;
//           top:auto; bottom:-40px;
//         }

//         /* ── HEADER ── */
//         .t-header {
//           position:relative; z-index:1;
//           text-align:center;
//           padding:0 24px;
//           margin-bottom:56px;
//         }
//         .t-pill {
//           display:inline-flex; align-items:center; gap:8px;
//           background:#fff;
//           border:1.5px solid #ddd6fe;
//           border-radius:999px;
//           padding:6px 18px;
//           font-size:12px; font-weight:600; color:#7c3aed;
//           margin-bottom:18px;
//           box-shadow:0 2px 12px rgba(124,58,237,0.10);
//           letter-spacing:0.05em; text-transform:uppercase;
//         }
//         .t-dot {
//           width:8px; height:8px; border-radius:50%;
//           background:#a855f7;
//           box-shadow:0 0 6px #a855f7;
//           animation:tDotPulse 2s infinite;
//         }
//         @keyframes tDotPulse {
//           0%,100%{opacity:1;transform:scale(1)}
//           50%{opacity:0.55;transform:scale(0.82)}
//         }
//         .t-title {
//           font-family:'DM Serif Display',serif;
//           font-size:clamp(30px,4.5vw,52px);
//           font-weight:400;
//           color:#1e1b4b;
//           margin:0 0 14px;
//           line-height:1.15;
//           letter-spacing:-0.02em;
//         }
//         .t-title-grad {
//           font-style:italic;
//           background:linear-gradient(90deg,#7c3aed,#818cf8,#60a5fa);
//           -webkit-background-clip:text;
//           -webkit-text-fill-color:transparent;
//           background-clip:text;
//         }
//         .t-sub {
//           color:#9ca3af; font-size:16px; margin:0 0 32px; font-weight:300; line-height:1.7;
//         }

//         /* Summary row */
//         .t-summary {
//           display:inline-flex; gap:0;
//           background:#fff;
//           border:1.5px solid #ede9fe;
//           border-radius:20px;
//           overflow:hidden;
//           box-shadow:0 4px 20px rgba(124,58,237,0.08);
//         }
//         .t-summary-item {
//           display:flex; flex-direction:column; align-items:center;
//           padding:16px 32px;
//           border-right:1px solid #ede9fe;
//         }
//         .t-summary-item:last-child { border-right:none; }
//         .t-sum-val {
//           font-family:'DM Serif Display',serif;
//           font-size:26px; font-weight:400; color:#7c3aed; line-height:1;
//         }
//         .t-sum-lab {
//           font-size:11px; color:#9ca3af; font-weight:600;
//           text-transform:uppercase; letter-spacing:0.06em; margin-top:4px;
//         }

//         /* ── MARQUEE ── */
//         .t-marquee-wrap {
//           position:relative; z-index:1;
//           width:100%; overflow:hidden;
//         }
//         .t-fade-edges {
//           mask-image:linear-gradient(to right,transparent 0%,#000 7%,#000 93%,transparent 100%);
//           -webkit-mask-image:linear-gradient(to right,transparent 0%,#000 7%,#000 93%,transparent 100%);
//         }
//         .t-track {
//           display:flex; gap:20px;
//           width:max-content;
//           padding:14px 0;
//         }
//         .t-left  { animation:tScrollL 38s linear infinite; }
//         .t-right { animation:tScrollR 44s linear infinite; }
//         .t-track:hover { animation-play-state:paused; }
//         @keyframes tScrollL {
//           from{transform:translateX(0)}
//           to  {transform:translateX(-50%)}
//         }
//         @keyframes tScrollR {
//           from{transform:translateX(-50%)}
//           to  {transform:translateX(0)}
//         }

//         /* ── CARD ── */
//         .t-card {
//           flex-shrink:0;
//           min-width:310px; max-width:330px;
//           background:#fff;
//           border:1.5px solid #ede9fe;
//           border-radius:24px;
//           padding:26px 24px 22px;
//           position:relative;
//           overflow:hidden;
//           box-shadow:0 4px 20px rgba(124,58,237,0.07), 0 1px 4px rgba(0,0,0,0.04);
//           transition:transform 0.28s cubic-bezier(0.22,1,0.36,1), box-shadow 0.28s, border-color 0.28s;
//           cursor:default;
//         }
//         .t-card::before {
//           content:'';
//           position:absolute; top:0; left:0; right:0; height:3px;
//           background:linear-gradient(90deg,#7c3aed,#818cf8,#60a5fa);
//           border-radius:24px 24px 0 0;
//         }
//         /* Subtle corner wash */
//         .t-card::after {
//           content:'';
//           position:absolute; top:-24px; right:-24px;
//           width:88px; height:88px; border-radius:50%;
//           background:radial-gradient(circle,rgba(168,85,247,0.10) 0%,transparent 72%);
//           pointer-events:none;
//         }
//         .t-card:hover {
//           transform:translateY(-7px) scale(1.015);
//           box-shadow:0 20px 50px rgba(124,58,237,0.15), 0 4px 12px rgba(0,0,0,0.05);
//           border-color:#c4b5fd;
//         }

//         .t-quote-svg {
//           margin-bottom:14px;
//           display:block;
//           opacity:0.85;
//         }
//         .t-card-text {
//           font-size:14px; color:#4b5563;
//           line-height:1.8; margin:0 0 20px;
//           font-weight:300;
//         }
//         .t-card-footer {
//           display:flex; align-items:center; gap:12px;
//           border-top:1px solid #f3f0ff;
//           padding-top:16px;
//           position:relative;
//         }
//         .t-avatar {
//           width:44px; height:44px; border-radius:14px;
//           display:flex; align-items:center; justify-content:center;
//           color:#fff; font-weight:700; font-size:15px;
//           flex-shrink:0;
//           box-shadow:0 4px 12px rgba(124,58,237,0.28);
//           letter-spacing:0.5px;
//         }
//         .t-name {
//           font-size:14px; font-weight:600; color:#1e1b4b; margin:0 0 2px;
//         }
//         .t-role {
//           font-size:11px; font-weight:600; margin:0 0 5px;
//           text-transform:uppercase; letter-spacing:0.06em;
//         }
//         .t-verified {
//           position:absolute; right:0; top:-6px;
//           display:inline-flex; align-items:center; gap:4px;
//           padding:4px 10px; border-radius:50px;
//           border:1px solid;
//           font-size:11px; font-weight:600;
//         }

//         /* ── MOBILE ── */
//         @media(max-width:640px){
//           .t-card{min-width:270px; padding:20px 18px;}
//           .t-fade-edges{mask-image:none;-webkit-mask-image:none;}
//           .t-track{animation-duration:55s;}
//           .t-right{animation-duration:62s;}
//           .t-summary{flex-direction:column;}
//           .t-summary-item{border-right:none;border-bottom:1px solid #ede9fe;padding:12px 24px;}
//           .t-summary-item:last-child{border-bottom:none;}
//           .t-bg-illustration{opacity:0.4;}
//         }
//       `}</style>
//     </section>
//   );
// }