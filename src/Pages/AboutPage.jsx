import React, { useEffect, useRef, useState } from "react";

/* ── Intersection Observer hook for scroll-in animations ── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ── Animated counter ── */
function Counter({ to, suffix = "", duration = 1800 }) {
  const [val, setVal] = useState(0);
  const [ref, inView] = useInView(0.3);
  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ── Service card ── */
const iconPaths = [
  // running person (sports)
  "M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z",
  // spine
  "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z",
  // yoga
  "M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7 6h-4v1.5c0 .8-.7 1.5-1.5 1.5S12 11.3 12 10.5V9H8l-3 9h2l1-3h1v6h2v-6h2v6h2v-6h1l1 3h2l-3-9z",
  // bone/orthopedic
  "M19.5 5.5c-.59-.59-1.38-.88-2.17-.88-.78 0-1.57.29-2.17.88L13.5 7.17l-1.83-1.83a3.07 3.07 0 0 0-4.34 0 3.07 3.07 0 0 0 0 4.34L9.16 11.5 4.5 16.17v1.83h1.83l4.67-4.67 1.83 1.83a3.07 3.07 0 0 0 4.34 0 3.07 3.07 0 0 0 0-4.34L15.33 9l1.67-1.67c.29-.29.68-.45 1.08-.45s.79.16 1.08.45c.59.59.59 1.56 0 2.15l1.41 1.41A3.066 3.066 0 0 0 19.5 5.5z",
  // needle/acupuncture
  "M21 6.5l-4-4-9.5 9.5-1.5 5 5-1.5L21 6.5zM5.5 16l-.72 2.22L7 17.5l-1.5-1.5z",
];

const services = [
  { title: "Sports Physiotherapy", desc: "Specialized care for athletes to enhance performance, prevent injuries, and accelerate recovery with science-backed protocols.", icon: iconPaths[0], accent: "#7c3aed", light: "#f5f3ff" },
  { title: "Advanced Spine Clinic", desc: "Comprehensive assessment and precision treatment for spinal disorders using cutting-edge diagnostic techniques.", icon: iconPaths[1], accent: "#0ea5e9", light: "#e0f2fe" },
  { title: "Yoga, Pilates & Aerobics", desc: "Expert-led group classes to build flexibility, core strength, and total-body wellness in a supportive environment.", icon: iconPaths[2], accent: "#10b981", light: "#ecfdf5" },
  { title: "Orthopedic Physiotherapy", desc: "Targeted rehabilitation from orthopedic surgeries and injuries, restoring full mobility and confident movement.", icon: iconPaths[3], accent: "#f59e0b", light: "#fffbeb" },
  { title: "Dry Needling & Acupuncture", desc: "Precision needle therapy targeting trigger points to eliminate chronic pain and accelerate muscle recovery.", icon: iconPaths[4], accent: "#f43f5e", light: "#fff1f2" },
];

const stats = [
  { value: 2000, suffix: "+", label: "Patients Treated" },
  { value: 13, suffix: " yrs", label: "Of Excellence" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 5, suffix: "", label: "Specialisations" },
];

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s`,
        background: hovered ? service.accent : "#fff",
        borderRadius: 20,
        padding: "32px 28px",
        boxShadow: hovered
          ? `0 20px 60px ${service.accent}40`
          : "0 4px 24px rgba(0,0,0,0.07)",
        transition2: "background 0.3s, box-shadow 0.3s",
        cursor: "default",
        border: `1.5px solid ${hovered ? service.accent : "#f3f4f6"}`,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circle */}
      <div style={{
        position: "absolute", top: -30, right: -30,
        width: 120, height: 120, borderRadius: "50%",
        background: hovered ? "rgba(255,255,255,0.08)" : service.light,
        transition: "background 0.3s",
      }} />
      {/* Icon */}
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: hovered ? "rgba(255,255,255,0.18)" : service.light,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 0.3s",
        flexShrink: 0,
      }}>
        <svg width={26} height={26} viewBox="0 0 24 24" fill={hovered ? "#fff" : service.accent}>
          <path d={service.icon}/>
        </svg>
      </div>
      <h3 style={{
        fontSize: 18, fontWeight: 700,
        color: hovered ? "#fff" : "#111827",
        margin: 0, lineHeight: 1.3,
        transition: "color 0.3s",
      }}>{service.title}</h3>
      <p style={{
        fontSize: 14, lineHeight: 1.7,
        color: hovered ? "rgba(255,255,255,0.85)" : "#6b7280",
        margin: 0, transition: "color 0.3s",
      }}>{service.desc}</p>
    </div>
  );
}

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [heroRef, heroIn] = useInView(0.05);
  const [welcomeRef, welcomeIn] = useInView(0.1);
  const [whoRef, whoIn] = useInView(0.1);
  const [statsRef, statsIn] = useInView(0.15);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        .about-page { font-family: 'DM Sans', sans-serif; }
        .about-page h1, .about-page h2 { font-family: 'DM Serif Display', serif; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.4} 100%{transform:scale(1.4);opacity:0} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        .float-anim { animation: float 5s ease-in-out infinite; }
        .pulse-ring { animation: pulse-ring 2s ease-out infinite; }
        @media (max-width: 768px) {
          .about-welcome,
          .about-story {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            margin-top: 56px !important;
            padding: 0 16px !important;
          }
          .about-welcome-image,
          .about-story-image {
            order: 1;
            max-width: 360px;
            width: 100%;
            margin: 0 auto;
          }
          .about-welcome-text,
          .about-story-text {
            order: 2;
            text-align: center;
          }
          .about-welcome-accent,
          .about-story-accent {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .about-story-point {
            justify-content: center;
            text-align: left;
          }
        }
      `}</style>

      <div className="about-page" style={{ background: "#f8f7ff", minHeight: "100vh" }}>

        {/* ── HERO BANNER ── */}
        <div ref={heroRef} style={{
          background: "linear-gradient(135deg, #4f1d96 0%, #6d28d9 40%, #3b82f6 100%)",
          padding: "80px 24px 100px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}>
          {/* Decorative blobs */}
          <div style={{ position:"absolute", top:-80, left:-80, width:300, height:300, borderRadius:"50%", background:"rgba(255,255,255,0.06)" }} />
          <div style={{ position:"absolute", bottom:-60, right:-60, width:240, height:240, borderRadius:"50%", background:"rgba(255,255,255,0.05)" }} />
          <div style={{ position:"absolute", top:"30%", right:"10%", width:160, height:160, borderRadius:"50%", background:"rgba(59,130,246,0.25)" }} className="float-anim" />

          <div style={{
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}>
            <p style={{ color:"rgba(255,255,255,0.65)", fontSize:13, fontWeight:600, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:16 }}>
              Est. 2011 · Delhi, India
            </p>
            <h1 style={{ color:"#fff", fontSize:"clamp(42px,6vw,72px)", margin:"0 0 20px", lineHeight:1.1, fontWeight:400 }}>
              About <em style={{ fontStyle:"italic" }}>YourPhysio</em>
            </h1>
            <p style={{ color:"rgba(255,255,255,0.75)", fontSize:18, maxWidth:540, margin:"0 auto", lineHeight:1.7, fontFamily:"'DM Sans', sans-serif", fontWeight:300 }}>
              A decade of restoring movement, rebuilding confidence, and reimagining rehabilitation.
            </p>
          </div>

          {/* Wave divider */}
          <svg viewBox="0 0 1440 60" style={{ position:"absolute", bottom:-1, left:0, width:"100%", display:"block" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8f7ff"/>
          </svg>
        </div>



        {/* ── WELCOME SECTION ── */}
        <div ref={welcomeRef} className="about-welcome" style={{ maxWidth:1100, margin:"80px auto 0", padding:"0 24px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
          {/* Image */}
          <div className="about-welcome-image" style={{
            position:"relative",
            opacity: welcomeIn ? 1 : 0,
            transform: welcomeIn ? "translateX(0)" : "translateX(-40px)",
            transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}>
            {/* Decorative ring */}
            <div style={{ position:"absolute", inset:-16, borderRadius:999, border:"2px dashed #ddd6fe", zIndex:0 }} />
            <div style={{ position:"absolute", inset:-32, borderRadius:999, border:"1px solid #ede9fe", zIndex:0 }} className="pulse-ring" />
            <img src="./docr.jpg" alt="Doctor" style={{
              width:"100%", aspectRatio:"1/1", objectFit:"cover",
              borderRadius:"50%",
              border:"6px solid #fff",
              boxShadow:"0 30px 80px rgba(109,40,217,0.20)",
              position:"relative", zIndex:1,
              display:"block",
            }} />
            {/* Floating badge */}
            <div style={{
              position:"absolute", bottom:20, right:-10, zIndex:5,
              background:"#fff", borderRadius:14, padding:"12px 18px",
              boxShadow:"0 8px 32px rgba(109,40,217,0.18)",
              display:"flex", alignItems:"center", gap:10,
              border:"1.5px solid #ede9fe",
            }}>
              <div style={{ width:36, height:36, borderRadius:"50%", background:"#7c3aed", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg width={18} height={18} viewBox="0 0 24 24" fill="#fff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
              </div>
              <div>
                <div style={{ fontSize:11, color:"#9ca3af", fontWeight:500 }}>Recognised since</div>
                <div style={{ fontSize:16, fontWeight:700, color:"#111827" }}>2011</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="about-welcome-text" style={{
            opacity: welcomeIn ? 1 : 0,
            transform: welcomeIn ? "translateX(0)" : "translateX(40px)",
            transition: "opacity 0.8s ease 0.15s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s",
          }}>
            <p style={{ fontSize:12, fontWeight:600, color:"#7c3aed", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:12 }}>Welcome to</p>
            <h2 style={{ fontSize:"clamp(28px,3.5vw,44px)", color:"#1e1b4b", lineHeight:1.2, margin:"0 0 20px", fontWeight:400 }}>
              Physio Adviser India
            </h2>
            <div className="about-welcome-accent" style={{ width:48, height:4, borderRadius:4, background:"linear-gradient(90deg,#7c3aed,#3b82f6)", marginBottom:24 }} />
            <p style={{ color:"#4b5563", fontSize:16, lineHeight:1.85, margin:"0 0 20px", fontWeight:300 }}>
              Visitors to Physio Adviser India can expect a clean, comfortable, and professional environment. Our team of highly skilled therapists are experts in physiotherapy, occupational therapy, and speech therapy services.
            </p>
            <p style={{ color:"#4b5563", fontSize:16, lineHeight:1.85, margin:0, fontWeight:300 }}>
              We offer a wide range of resources to help our clients reach their fullest potential. If you are looking for a comprehensive therapy centre, Physio Adviser India is your answer.
            </p>
          </div>
        </div>

        {/* ── WHO ARE WE — alternate layout ── */}
        <div ref={whoRef} className="about-story" style={{ maxWidth:1100, margin:"100px auto 0", padding:"0 24px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
          {/* Text first on this row */}
          <div className="about-story-text" style={{
            opacity: whoIn ? 1 : 0,
            transform: whoIn ? "translateX(0)" : "translateX(-40px)",
            transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}>
            <p style={{ fontSize:12, fontWeight:600, color:"#0ea5e9", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:12 }}>Our Story</p>
            <h2 style={{ fontSize:"clamp(28px,3.5vw,44px)", color:"#1e1b4b", lineHeight:1.2, margin:"0 0 20px", fontWeight:400 }}>
              Who Are We?
            </h2>
            <div className="about-story-accent" style={{ width:48, height:4, borderRadius:4, background:"linear-gradient(90deg,#0ea5e9,#10b981)", marginBottom:24 }} />
            <p style={{ color:"#4b5563", fontSize:16, lineHeight:1.85, margin:"0 0 20px", fontWeight:300 }}>
              Physio Adviser India is a team of highly qualified physiotherapists in Delhi, delivering the highest standards of care since 2011. Our state-of-the-art facilities specialise in Neurology, Orthopaedics, and Sports Physiotherapy.
            </p>
            <p style={{ color:"#4b5563", fontSize:16, lineHeight:1.85, margin:"0 0 28px", fontWeight:300 }}>
              With a comprehensive approach to rehabilitation, we ensure our patients return to daily life swiftly, confidently, and stronger than before.
            </p>
            {/* Bullet pills */}
            {["State-of-the-art facilities", "Personalised care plans", "Expert multidisciplinary team"].map((pt, i) => (
              <div key={i} className="about-story-point" style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                <div style={{ width:22, height:22, borderRadius:"50%", background:"#e0f2fe", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <svg width={12} height={12} viewBox="0 0 24 24" fill="#0ea5e9"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                </div>
                <span style={{ fontSize:15, color:"#374151", fontWeight:400 }}>{pt}</span>
              </div>
            ))}
          </div>

          {/* Image with clipped shape */}
          <div className="about-story-image" style={{
            opacity: whoIn ? 1 : 0,
            transform: whoIn ? "translateX(0)" : "translateX(40px)",
            transition: "opacity 0.8s ease 0.15s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s",
            position: "relative",
          }}>
            <div style={{
              background: "linear-gradient(135deg,#e0f2fe,#dbeafe)",
              borderRadius: 32,
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(14,165,233,0.18)",
              aspectRatio: "4/3",
            }}>
              <img src="./sec3.jpg" alt="Clinic" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
            </div>
            {/* Accent corner decor */}
            <div style={{ position:"absolute", bottom:-16, left:-16, width:80, height:80, borderRadius:20, background:"linear-gradient(135deg,#7c3aed,#3b82f6)", opacity:0.15, zIndex:-1 }} />
            <div style={{ position:"absolute", top:-16, right:-16, width:60, height:60, borderRadius:"50%", background:"#0ea5e9", opacity:0.12, zIndex:-1 }} />
          </div>
        </div>

        {/* ── SERVICES ── */}
        <div style={{ maxWidth:1100, margin:"100px auto 0", padding:"0 24px" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <p style={{ fontSize:12, fontWeight:600, color:"#7c3aed", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:12 }}>What We Offer</p>
            <h2 style={{ fontSize:"clamp(28px,3.5vw,48px)", color:"#1e1b4b", margin:"0 0 16px", fontWeight:400 }}>
              Services We Provide
            </h2>
            <p style={{ color:"#6b7280", fontSize:16, maxWidth:500, margin:"0 auto", lineHeight:1.7, fontWeight:300 }}>
              Comprehensive physiotherapy solutions tailored to every stage of your recovery journey.
            </p>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px,1fr))", gap:24 }}>
            {services.map((s, i) => <ServiceCard key={i} service={s} index={i} />)}
          </div>
        </div>

        {/* ── CTA SECTION ── */}
        <div style={{
          margin: "100px 24px 0",
          background: "linear-gradient(135deg, #4f1d96 0%, #6d28d9 50%, #3b82f6 100%)",
          borderRadius: 32,
          maxWidth: 1100,
          marginLeft: "auto",
          marginRight: "auto",
          padding: "72px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          marginTop: 100,
        }}>
          <div style={{ position:"absolute", top:-60, right:-60, width:260, height:260, borderRadius:"50%", background:"rgba(255,255,255,0.06)" }} />
          <div style={{ position:"absolute", bottom:-40, left:-40, width:180, height:180, borderRadius:"50%", background:"rgba(255,255,255,0.05)" }} />
          <p style={{ color:"rgba(255,255,255,0.65)", fontSize:12, fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:16, position:"relative" }}>
            Take the First Step
          </p>
          <h2 style={{ color:"#fff", fontSize:"clamp(28px,3.5vw,48px)", margin:"0 0 16px", fontWeight:400, position:"relative" }}>
            Ready to Start Your Journey?
          </h2>
          <p style={{ color:"rgba(255,255,255,0.72)", fontSize:17, maxWidth:480, margin:"0 auto 36px", lineHeight:1.7, fontWeight:300, position:"relative" }}>
            Schedule an appointment with our expert physiotherapists today and take the first step toward lasting recovery.
          </p>
          <button
            style={{
              background:"#fff",
              color:"#6d28d9",
              border:"none",
              borderRadius:50,
              padding:"16px 44px",
              fontSize:16,
              fontWeight:600,
              cursor:"pointer",
              boxShadow:"0 8px 32px rgba(0,0,0,0.18)",
              transition:"transform 0.2s, box-shadow 0.2s",
              position:"relative",
              fontFamily:"'DM Sans', sans-serif",
            }}
            onMouseEnter={e => { e.target.style.transform="scale(1.04)"; e.target.style.boxShadow="0 12px 40px rgba(0,0,0,0.25)"; }}
            onMouseLeave={e => { e.target.style.transform="scale(1)"; e.target.style.boxShadow="0 8px 32px rgba(0,0,0,0.18)"; }}
          >
            Book an Appointment
          </button>
        </div>

        {/* Bottom spacing */}
        <div style={{ height: 80 }} />
      </div>
    </>
  );
}
