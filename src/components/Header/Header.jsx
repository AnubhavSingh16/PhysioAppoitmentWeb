import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const StatCard = ({ value, label }) => (
  <div className="flex flex-col items-start sm:items-start">
    <span className="text-2xl sm:text-3xl font-extrabold text-purple-700">{value}</span>
    <span className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] text-gray-400 uppercase mt-1">{label}</span>
  </div>
);

const ICONS = [
  {
    color: "text-rose-500", bg: "bg-rose-50", border: "border-rose-200",
    glow: "rgba(244,63,94,0.28)", accent: "#f43f5e", accentLight: "#fff1f2",
    cardLabel: "Cardiac Rehab", cardValue: "Heart Health",
    cardSub: "Specialised cardiac physiotherapy",
    svg: (size = 20) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
  },
  {
    color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-200",
    glow: "rgba(16,185,129,0.28)", accent: "#10b981", accentLight: "#ecfdf5",
    cardLabel: "Vital Monitoring", cardValue: "Live Pulse",
    cardSub: "Real-time recovery tracking",
    svg: (size = 20) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200",
    glow: "rgba(59,130,246,0.28)", accent: "#3b82f6", accentLight: "#eff6ff",
    cardLabel: "Treatment Plan", cardValue: "First Aid Ready",
    cardSub: "Instant care when you need it",
    svg: (size = 20) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 8h-4V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"/>
      </svg>
    ),
  },
  {
    color: "text-violet-500", bg: "bg-violet-50", border: "border-violet-200",
    glow: "rgba(139,92,246,0.28)", accent: "#7c3aed", accentLight: "#f5f3ff",
    cardLabel: "Patient Safety", cardValue: "Fully Certified",
    cardSub: "100% trusted & verified experts",
    svg: (size = 20) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-200",
    glow: "rgba(245,158,11,0.28)", accent: "#f59e0b", accentLight: "#fffbeb",
    cardLabel: "Appointments", cardValue: "Book Today",
    cardSub: "Same-day slots available now",
    svg: (size = 20) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
];

const TOTAL   = ICONS.length;
const PHOTO   = 380;   // photo diameter
const ORBIT_R = PHOTO / 2 + 42; // orbit radius = just outside the photo edge
const SPEED   = 0.00028; // rad/ms
const ICON_SZ = 50;

// Icons travel only the TOP semicircle: angles from π (left) → 0 (right) going through -π/2 (top)
// We map progress t ∈ [0,1] → angle from π down to 0 (i.e. π - π*t)
// Icons are spread evenly across the top half and oscillate back and forth (ping-pong)
// Actually: let them orbit the FULL circle but we only SHOW them when in top half (sin < 0)
// Better UX: let them do a true semicircle sweep, reversing at ends — pendulum style

// For a smoother look: full circle orbit, but icons on the BOTTOM half are hidden (opacity=0, scaled down)
// Only the top half (sin(angle) < 0) is visible — this creates the "upper semicircle" effect naturally

function InfoCard({ activeIdx }) {
  const [shownIdx,  setShownIdx]  = useState(activeIdx);
  const [animState, setAnimState] = useState("visible");
  const timerRef   = useRef(null);
  const pendingRef = useRef(activeIdx);

  useEffect(() => {
    if (activeIdx === shownIdx) return;
    pendingRef.current = activeIdx;
    if (animState === "exiting") return;
    clearTimeout(timerRef.current);
    setAnimState("exiting");
    timerRef.current = setTimeout(() => {
      setShownIdx(pendingRef.current);
      setAnimState("entering");
      timerRef.current = setTimeout(() => setAnimState("visible"), 320);
    }, 220);
    return () => clearTimeout(timerRef.current);
  }, [activeIdx]);

  const icon = ICONS[shownIdx];
  const cardStyle = {
    transform:
      animState === "exiting"  ? "translateY(30px) scale(0.80)" :
      animState === "entering" ? "translateY(-5px) scale(1.02)" :
                                  "translateY(0) scale(1)",
    opacity: animState === "exiting" ? 0 : 1,
    transition:
      animState === "exiting"
        ? "transform 0.20s ease-in, opacity 0.20s ease-in"
        : "transform 0.32s cubic-bezier(0.32,1,0.36,1), opacity 0.28s ease-out",
  };

  return (
    <div style={{
      background: "#fff",
      borderRadius: 18,
      padding: "14px 20px",
      display: "flex",
      alignItems: "center",
      gap: 14,
      border: `1.5px solid ${icon.accent}30`,
      boxShadow: `0 8px 32px ${icon.glow}, 0 2px 10px rgba(0,0,0,0.06)`,
      minWidth: "min(250px, calc(100vw - 40px))",
      width: "100%",
      maxWidth: 320,
      ...cardStyle,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: "50%",
        background: icon.accentLight,
        border: `1.5px solid ${icon.accent}35`,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, color: icon.accent,
      }}>
        {icon.svg(20)}
      </div>
      <div>
        <p style={{ fontSize: 10, color: "#9ca3af", fontWeight: 600, margin: 0, marginBottom: 2, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {icon.cardLabel}
        </p>
        <p style={{ fontSize: 15, color: "#111827", fontWeight: 700, margin: 0, lineHeight: 1.25 }}>
          {icon.cardValue}
        </p>
        <p style={{ fontSize: 12, color: "#6b7280", margin: 0, marginTop: 2 }}>
          {icon.cardSub}
        </p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [visible,       setVisible]       = useState(false);
  const [activeIdx,     setActiveIdx]     = useState(0);
  const [iconPositions, setIconPositions] = useState(
    Array.from({ length: TOTAL }, () => ({ x: 0, y: 0, scale: 0.6, opacity: 0, zIndex: 4, isFront: false }))
  );

  const t0Ref      = useRef(null);
  const rafRef     = useRef(null);
  const prevActive = useRef(-1);

  // Stage: wide enough for orbit on sides, tall enough for photo + card below
  const CARD_H  = 90;  // space reserved below photo for card
  const STAGE_W = (ORBIT_R + ICON_SZ) * 2 + 8;
  const STAGE_H = PHOTO + CARD_H + ICON_SZ + 20; // top overflow for icons above photo
  // Photo centered horizontally, vertically offset so icons have room above
  const cx = STAGE_W / 2;
  // cy = center of photo circle. Icons above photo need ORBIT_R space above cy
  // So cy must be at least ORBIT_R + ICON_SZ/2 from top
  const cy = ORBIT_R + ICON_SZ / 2 + 10;

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const ORBIT_PERIOD = 16000; // ms for one full revolution — slow and smooth

    const tick = (ts) => {
      if (!t0Ref.current) t0Ref.current = ts;
      const elapsed = ts - t0Ref.current;

      // Full 360° orbit. Icons spread evenly around the circle.
      // angle = 0 → right, -π/2 → top, π → left, π/2 → bottom
      // Top half  = sin(angle) < 0  → visible, zIndex above photo
      // Bottom half = sin(angle) > 0 → behind photo, zIndex below photo, faded out

      let mostTopIdx = -1;
      let mostTopSin = Infinity; // most negative sin = closest to top-center

      const next = ICONS.map((_, i) => {
        // Each icon starts evenly spaced, all orbit at same speed
        const offset = (i / TOTAL) * Math.PI * 2;
        // Start them at top (-π/2) spread evenly, orbiting counter-clockwise
        const angle  = -Math.PI / 2 + offset + (elapsed / ORBIT_PERIOD) * Math.PI * 2;

        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle); // -1 = top, +1 = bottom

        const x = cx + ORBIT_R * cosA;
        const y = cy + ORBIT_R * sinA;

        const isTopHalf = sinA <= 0;

        // Top half: fully visible, z=25 (above photo z=10)
        // Bottom half: fade out quickly + z=4 (behind photo z=10)
        const opacity = isTopHalf
          ? 0.55 + 0.45 * (-sinA)          // 0.55 at horizon → 1.0 at top
          : Math.max(0, 0.18 * (1 - sinA * 2)); // fades fast as it goes below

        const scale = isTopHalf
          ? 0.75 + 0.30 * (-sinA)          // 0.75 at horizon → 1.05 at top
          : 0.60;

        const zIndex = isTopHalf ? 25 : 4;

        if (sinA < mostTopSin) { mostTopSin = sinA; mostTopIdx = i; }

        return { x, y, scale, opacity, zIndex, isFront: sinA < -0.3 };
      });

      setIconPositions(next);

      if (mostTopIdx !== prevActive.current) {
        prevActive.current = mostTopIdx;
        setActiveIdx(mostTopIdx);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [visible, cx, cy]);

  const totalStageH = cy + PHOTO / 2 + 16;

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center pt-16 sm:pt-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-purple-100 opacity-30 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-100 opacity-40 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-6 sm:mt-10 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full overflow-hidden">

          {/* LEFT */}
          <div className={`flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 sm:space-y-7 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center space-x-2 bg-white border border-purple-200 shadow-sm rounded-full px-4 py-1.5 w-fit">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-sm font-medium text-purple-700">24 hours availability</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              Book Your{" "}
              <span className="relative inline-block text-purple-700">
                Physio's
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 9 C60 3, 120 10, 180 5 C240 0, 280 8, 298 6" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
              <br />Appointment Online!
            </h1>

            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md">
              Find and schedule appointments with top-rated physiotherapists near you.
              Convenient, secure, and hassle-free booking for all your rehabilitation needs.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <Link to="/book-appointment">
                <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 sm:px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-purple-300 hover:scale-105 transition-all duration-200">
                  Book an Appointment
                </button>
              </Link>
              <a href="tel:03007338601" className="flex items-center space-x-3 group rounded-2xl sm:rounded-none border border-purple-100 sm:border-0 p-3 sm:p-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-purple-300 flex items-center justify-center group-hover:bg-purple-50 transition">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.06 3.17a1 1 0 01-.23 1.04l-1.4 1.4a16.06 16.06 0 006.72 6.72l1.4-1.4a1 1 0 011.04-.23l3.17 1.06A1 1 0 0121 16.72V19a2 2 0 01-2 2h-1C9.16 21 3 14.84 3 7V6a1 1 0 010-.28V5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs text-gray-400 font-medium">24H Emergency Contact</p>
                  <p className="text-sm font-semibold text-gray-700">0300-7338601</p>
                </div>
              </a>
            </div>

            <div className="w-full max-w-md lg:max-w-none border-t border-gray-100 pt-6 grid grid-cols-3 gap-4 sm:flex sm:items-center sm:justify-center lg:justify-start sm:gap-10">
              <StatCard value="2k+" label="Treatments" />
              <div className="hidden sm:block w-px h-10 bg-gray-200" />
              <StatCard value="8 yrs" label="Experience" />
              <div className="hidden sm:block w-px h-10 bg-gray-200" />
              <StatCard value="2k+" label="Happy Clients" />
            </div>
          </div>

          {/* RIGHT */}
<div className={`hidden lg:flex relative flex-col justify-center items-center w-full transition-all duration-700 ease-out delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>            <div className="relative flex justify-center w-full h-[350px] sm:h-[440px] lg:h-auto overflow-visible">
              <div className="relative origin-top scale-[0.6] sm:scale-[0.78] lg:scale-100" style={{ width: STAGE_W, height: totalStageH }}>

              {/* SVG: glow + semicircle arc track */}
              <svg
                className="absolute inset-0 pointer-events-none"
                width={STAGE_W} height={totalStageH}
                viewBox={`0 0 ${STAGE_W} ${totalStageH}`}
                style={{ overflow: "visible", width: "100%", height: "100%" }}
              >
                <defs>
                  <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%"  stopColor="#c084fc" stopOpacity="0.38"/>
                    <stop offset="45%" stopColor="#818cf8" stopOpacity="0.18"/>
                    <stop offset="75%" stopColor="#6366f1" stopOpacity="0.07"/>
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="blobA" cx="38%" cy="50%" r="55%">
                    <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.28"/>
                    <stop offset="100%" stopColor="#f0abfc" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="blobB" cx="62%" cy="50%" r="55%">
                    <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.24"/>
                    <stop offset="100%" stopColor="#93c5fd" stopOpacity="0"/>
                  </radialGradient>
                  <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#a855f7" stopOpacity="0.05"/>
                    <stop offset="25%"  stopColor="#818cf8" stopOpacity="0.60"/>
                    <stop offset="50%"  stopColor="#6366f1" stopOpacity="0.80"/>
                    <stop offset="75%"  stopColor="#818cf8" stopOpacity="0.60"/>
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.05"/>
                  </linearGradient>
                </defs>

                {/* Glow blobs centered on photo */}
                <ellipse cx={cx} cy={cy} rx={PHOTO * 0.68} ry={PHOTO * 0.68} fill="url(#blobA)"/>
                <ellipse cx={cx} cy={cy} rx={PHOTO * 0.58} ry={PHOTO * 0.58} fill="url(#blobB)"/>
                <ellipse cx={cx} cy={cy} rx={PHOTO * 0.52} ry={PHOTO * 0.52} fill="url(#haloGrad)"/>

                {/* Full orbit circle track — top half bright, bottom half ghost (behind photo) */}
                <circle
                  cx={cx} cy={cy} r={ORBIT_R}
                  fill="none"
                  stroke="url(#arcGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                  opacity="0.65"
                />
                {/* Bottom half overlay to dim it — same circle, white-ish, clips bottom */}
                <path
                  d={`M ${cx - ORBIT_R} ${cy} A ${ORBIT_R} ${ORBIT_R} 0 0 0 ${cx + ORBIT_R} ${cy}`}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeDasharray="5 4"
                  opacity="0.82"
                />
                {/* Subtle outer ring hint */}
                <circle
                  cx={cx} cy={cy} r={ORBIT_R + 16}
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="0.5"
                  strokeOpacity="0.08"
                />
              </svg>

              {/* Orbit icons */}
              {ICONS.map((icon, i) => {
                const p = iconPositions[i];
                if (p.opacity < 0.01) return null;
                return (
                  <div
                    key={i}
                    className={`absolute flex items-center justify-center rounded-full border ${icon.bg} ${icon.color} ${icon.border}`}
                    style={{
                      width: ICON_SZ, height: ICON_SZ,
                      left: p.x - ICON_SZ / 2,
                      top:  p.y - ICON_SZ / 2,
                      transform: `scale(${p.scale})`,
                      opacity: p.opacity,
                      zIndex: p.zIndex,
                      boxShadow: p.isFront
                        ? `0 4px 20px ${icon.glow}, 0 2px 8px rgba(0,0,0,0.07)`
                        : "none",
                      willChange: "transform, opacity, left, top",
                    }}
                  >
                    {icon.svg(20)}
                  </div>
                );
              })}

              {/* Photo — z=10, icons on top at z=25 */}
              <div
                className="absolute rounded-full overflow-hidden border-[5px] border-white"
                style={{
                  width: PHOTO, height: PHOTO,
                  left: cx - PHOTO / 2,
                  top:  cy - PHOTO / 2,
                  zIndex: 10,
                  background: "linear-gradient(135deg,#ede9fe 0%,#dbeafe 100%)",
                  boxShadow: [
                    "0 0 0 10px rgba(192,132,252,0.10)",
                    "0 0 0 22px rgba(165,85,247,0.05)",
                    "0 35px 80px -12px rgba(139,92,246,0.36)",
                    "0 14px 34px -6px rgba(99,102,241,0.26)",
                  ].join(", "),
                }}
              >
                <img src="./drAboutus.jpg" alt="Doctor" className="w-full h-full object-cover"/>
              </div>

              </div>
            </div>

            {/* Dynamic card — normal flow, below the stage, centred */}
            <div className="w-full flex justify-center px-2 mt-2 sm:mt-0 lg:-mt-[12%]" style={{ zIndex: 30, position: "relative" }}>
              <InfoCard activeIdx={activeIdx} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
