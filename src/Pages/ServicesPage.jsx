import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ── Scroll-reveal hook ── */
function useInView(threshold = 0.12) {
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

/* ── Services data ── */
const services = [
  {
    id: 1,
    title: "Sports Physiotherapy",
    tagline: "Peak performance, faster recovery",
    description:
      "Science-backed rehabilitation and performance enhancement for athletes of all levels. From injury prevention protocols to post-competition recovery — we keep you in the game.",
    features: ["Injury prevention", "Performance optimisation", "Strength & conditioning", "Return-to-sport protocols"],
    accent: "#7c3aed", light: "#f5f3ff", mid: "#ddd6fe",
    icon: (
      <svg width={32} height={32} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
      </svg>
    ),
    image: "./service2.jpg",
    stat: "500+", statLabel: "Athletes Treated",
  },
  {
    id: 2,
    title: "Advanced Spine Clinic",
    tagline: "Precision care for your backbone",
    description:
      "Comprehensive assessment and precision treatment for all spinal conditions. Using cutting-edge diagnostic techniques, we create personalised plans that restore your spinal health and freedom of movement.",
    features: ["Postural correction", "Disc rehabilitation", "Manual therapy", "Ergonomic guidance"],
    accent: "#0ea5e9", light: "#e0f2fe", mid: "#bae6fd",
    icon: (
      <svg width={32} height={32} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z"/>
      </svg>
    ),
    image: "./service3.jpg",
    stat: "300+", statLabel: "Spine Cases",
  },
  {
    id: 3,
    title: "Yoga, Pilates & Aerobics",
    tagline: "Move better, feel stronger",
    description:
      "Expert-led group and individual sessions that build flexibility, core strength, and total-body wellness. Our certified instructors tailor every class to your fitness level and goals.",
    features: ["Flexibility training", "Core strength", "Breath work", "Mind-body balance"],
    accent: "#10b981", light: "#ecfdf5", mid: "#a7f3d0",
    icon: (
      <svg width={32} height={32} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7 6h-4v1.5c0 .83-.67 1.5-1.5 1.5S12 11.33 12 10.5V9H8L5 18h2l1-3h1v6h2v-6h2v6h2v-6h1l1 3h2l-3-9z"/>
      </svg>
    ),
    image: "./service4.jpg",
    stat: "50+", statLabel: "Weekly Classes",
  },
  {
    id: 4,
    title: "Orthopedic Physiotherapy",
    tagline: "Restore mobility, rebuild life",
    description:
      "Targeted rehabilitation following orthopaedic surgeries and musculoskeletal injuries. We guide you through every phase of recovery, from acute management to full return of function.",
    features: ["Post-surgical rehab", "Joint mobilisation", "Pain management", "Functional movement"],
    accent: "#f59e0b", light: "#fffbeb", mid: "#fde68a",
    icon: (
      <svg width={32} height={32} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.5 5.5c-1.31-1.31-3.58-1.18-5.02.26L13 7.24l-1.15-1.15A3.54 3.54 0 0 0 9.5 5c-.89 0-1.77.34-2.45 1.02a3.47 3.47 0 0 0 0 4.9l1.18 1.18-4.73 4.73v2.17h2.17l4.73-4.73 1.18 1.18c.68.68 1.57 1.02 2.45 1.02s1.77-.34 2.45-1.02c.68-.68 1.02-1.57 1.02-2.45 0-.88-.34-1.77-1.02-2.45L15.31 9.2l1.48-1.48c.71-.71 1.86-.71 2.56 0 .35.35.54.82.54 1.28s-.19.93-.54 1.28l1.41 1.41A3.47 3.47 0 0 0 21.76 9c0-.9-.34-1.8-1.02-2.46l-.01-.01-.01-.01-.01-.01-.01-.01z"/>
      </svg>
    ),
    image: "./service2.jpg",
    stat: "1k+", statLabel: "Surgeries Supported",
  },
  {
    id: 5,
    title: "Dry Needling & Acupuncture",
    tagline: "Precision relief at trigger points",
    description:
      "Advanced needle therapy targeting myofascial trigger points to eliminate chronic pain, release muscle tension, and accelerate tissue healing with minimal discomfort.",
    features: ["Trigger point release", "Chronic pain relief", "Muscle recovery", "Inflammation reduction"],
    accent: "#f43f5e", light: "#fff1f2", mid: "#fecdd3",
    icon: (
      <svg width={32} height={32} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 6.5l-4-4-9.5 9.5-1.5 5 5-1.5L21 6.5zM5.5 16l-.72 2.22L7 17.5l-1.5-1.5z"/>
      </svg>
    ),
    image: "./service3.jpg",
    stat: "800+", statLabel: "Sessions Completed",
  },
  {
    id: 6,
    title: "Neurological Rehabilitation",
    tagline: "Reconnect, relearn, recover",
    description:
      "Specialised physiotherapy for neurological conditions including stroke, Parkinson's, and spinal cord injuries. We use evidence-based approaches to maximise neuroplasticity and functional independence.",
    features: ["Stroke rehabilitation", "Balance retraining", "Gait analysis", "Motor relearning"],
    accent: "#8b5cf6", light: "#f5f3ff", mid: "#ddd6fe",
    icon: (
      <svg width={32} height={32} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    ),
    image: "./service4.jpg",
    stat: "200+", statLabel: "Neuro Patients",
  },
];

/* ── Process steps ── */
const steps = [
  { num: "01", title: "Book a Consultation", desc: "Schedule online or call us directly — same-day appointments available.", accent: "#7c3aed" },
  { num: "02", title: "Assessment & Diagnosis", desc: "Our experts conduct a thorough evaluation and create your personalised treatment plan.", accent: "#0ea5e9" },
  { num: "03", title: "Treatment & Therapy", desc: "Evidence-based physiotherapy sessions tailored precisely to your condition.", accent: "#10b981" },
  { num: "04", title: "Recovery & Beyond", desc: "We guide you back to full function and equip you to maintain long-term health.", accent: "#f59e0b" },
];

/* ── Service Card ── */
function ServiceCard({ service, index }) {
  const [ref, inView] = useInView(0.08);
  const [hovered, setHovered] = useState(false);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.7s ease ${index * 0.08}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.08}s`,
        background: "#fff",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: hovered
          ? `0 24px 64px ${service.accent}25`
          : "0 4px 24px rgba(0,0,0,0.07)",
        border: `1.5px solid ${hovered ? service.mid : "#f3f4f6"}`,
        transition2: "box-shadow 0.3s, border-color 0.3s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image strip */}
      <div style={{
        height: 200, position: "relative", overflow: "hidden",
        background: `linear-gradient(135deg, ${service.light}, ${service.mid})`,
      }}>
        <img
          src={service.image} alt={service.title}
          style={{
            width: "100%", height: "100%", objectFit: "cover", display: "block",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
            opacity: 0.82,
          }}
        />
        {/* Overlay gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to bottom, transparent 30%, ${service.accent}cc)`,
        }} />
        {/* Stat badge */}
        <div style={{
          position: "absolute", top: 16, right: 16,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(8px)",
          borderRadius: 50, padding: "6px 14px",
          display: "flex", alignItems: "center", gap: 6,
        }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: service.accent, fontFamily: "'DM Serif Display', serif" }}>{service.stat}</span>
          <span style={{ fontSize: 11, color: "#6b7280", fontWeight: 500 }}>{service.statLabel}</span>
        </div>
        {/* Icon */}
        <div style={{
          position: "absolute", bottom: 16, left: 20,
          color: "#fff",
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
        }}>
          {service.icon}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "28px 28px 32px", flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: service.accent, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 6px" }}>
            {service.tagline}
          </p>
          <h3 style={{ fontSize: 22, fontWeight: 400, color: "#1e1b4b", margin: 0, fontFamily: "'DM Serif Display', serif", lineHeight: 1.25 }}>
            {service.title}
          </h3>
        </div>

        <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.75, margin: 0, fontWeight: 300 }}>
          {service.description}
        </p>

        {/* Feature pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
          {service.features.map((f, i) => (
            <span key={i} style={{
              background: service.light,
              color: service.accent,
              fontSize: 12, fontWeight: 500,
              padding: "4px 12px", borderRadius: 50,
              border: `1px solid ${service.mid}`,
            }}>{f}</span>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "auto", paddingTop: 16 }}>
          <Link to="/book-appointment" style={{ textDecoration: "none" }}>
            <button style={{
              background: hovered ? service.accent : "transparent",
              color: hovered ? "#fff" : service.accent,
              border: `1.5px solid ${service.accent}`,
              borderRadius: 50, padding: "10px 24px",
              fontSize: 13, fontWeight: 600, cursor: "pointer",
              transition: "background 0.25s, color 0.25s",
              fontFamily: "'DM Sans', sans-serif",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              Book This Service
              <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Process Step ── */
function StepCard({ step, index }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(30px)",
      transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s`,
      textAlign: "center",
      padding: "0 12px",
    }}>
      {/* Number bubble */}
      <div style={{
        width: 64, height: 64, borderRadius: "50%",
        background: `linear-gradient(135deg, ${step.accent}, ${step.accent}aa)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 18px",
        boxShadow: `0 8px 24px ${step.accent}35`,
      }}>
        <span style={{ color: "#fff", fontSize: 18, fontWeight: 700, fontFamily: "'DM Serif Display', serif" }}>{step.num}</span>
      </div>
      <h4 style={{ fontSize: 17, fontWeight: 600, color: "#1e1b4b", margin: "0 0 10px", fontFamily: "'DM Sans', sans-serif" }}>{step.title}</h4>
      <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.7, margin: 0, fontWeight: 300 }}>{step.desc}</p>
    </div>
  );
}

/* ── Main Page ── */
export default function ServicesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [heroRef,    heroIn]    = useInView(0.05);
  const [processRef, processIn] = useInView(0.1);
  const [ctaRef,     ctaIn]     = useInView(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        .services-page { font-family: 'DM Sans', sans-serif; }
        .services-page h1, .services-page h2, .services-page h3 { font-family: 'DM Serif Display', serif; }
        @keyframes float-a { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-14px) rotate(3deg)} }
        @keyframes float-b { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-8px) rotate(-2deg)} }
        .fa { animation: float-a 6s ease-in-out infinite; }
        .fb { animation: float-b 7s ease-in-out infinite 1s; }
        @media (max-width: 900px) {
          .services-steps-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .services-steps-line {
            display: none !important;
          }
          .services-why-shell {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding: 32px 24px !important;
          }
          .services-why-copy {
            text-align: center;
          }
          .services-why-accent {
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
        @media (max-width: 640px) {
          .services-hero {
            padding: 74px 16px 88px !important;
          }
          .services-section-shell,
          .services-process-shell,
          .services-why-wrap,
          .services-cta-wrap {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .services-steps-grid {
            grid-template-columns: 1fr !important;
            gap: 22px !important;
          }
          .services-why-shell {
            padding: 24px 18px !important;
          }
          .services-why-copy {
            order: 2;
            text-align: center;
          }
          .services-why-points {
            order: 1;
            grid-template-columns: 1fr !important;
          }
          .services-cta-shell {
            padding: 44px 20px !important;
          }
        }
      `}</style>

      <div className="services-page" style={{ background: "#f8f7ff", minHeight: "100vh" }}>

        {/* ── HERO ── */}
        <div ref={heroRef} className="services-hero" style={{
          background: "linear-gradient(135deg, #4f1d96 0%, #6d28d9 40%, #3b82f6 100%)",
          padding: "90px 24px 110px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}>
          {/* Decorative shapes */}
          <div className="fa" style={{ position:"absolute", top:30, left:"8%", width:100, height:100, borderRadius:24, background:"rgba(255,255,255,0.07)", transform:"rotate(15deg)" }} />
          <div className="fb" style={{ position:"absolute", top:60, right:"6%", width:70, height:70, borderRadius:"50%", background:"rgba(59,130,246,0.25)" }} />
          <div className="fa" style={{ position:"absolute", bottom:80, left:"15%", width:50, height:50, borderRadius:12, background:"rgba(167,139,250,0.20)", transform:"rotate(-10deg)" }} />
          <div className="fb" style={{ position:"absolute", bottom:60, right:"12%", width:120, height:120, borderRadius:30, background:"rgba(255,255,255,0.05)", transform:"rotate(20deg)" }} />
          <div style={{ position:"absolute", top:-80, left:-80, width:300, height:300, borderRadius:"50%", background:"rgba(255,255,255,0.05)" }} />

          <div style={{
            position: "relative", zIndex: 1,
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)",
              borderRadius: 50, padding: "8px 20px", marginBottom: 24,
              border: "1px solid rgba(255,255,255,0.2)",
            }}>
              <span style={{ width:8, height:8, borderRadius:"50%", background:"#4ade80", display:"inline-block" }} />
              <span style={{ color:"rgba(255,255,255,0.85)", fontSize:13, fontWeight:500 }}>Accepting new patients</span>
            </div>

            <h1 style={{ color:"#fff", fontSize:"clamp(40px,6vw,72px)", margin:"0 0 20px", lineHeight:1.1, fontWeight:400 }}>
              Our <em style={{ fontStyle:"italic" }}>Services</em>
            </h1>
            <p style={{ color:"rgba(255,255,255,0.72)", fontSize:18, maxWidth:520, margin:"0 auto 36px", lineHeight:1.7, fontWeight:300 }}>
              Comprehensive physiotherapy care spanning sports medicine, orthopaedics, neurology, and wellness — all under one roof.
            </p>

            {/* Quick service pills */}
            <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:10 }}>
              {services.map(s => (
                <span key={s.id} style={{
                  background:"rgba(255,255,255,0.12)",
                  backdropFilter:"blur(6px)",
                  border:"1px solid rgba(255,255,255,0.18)",
                  borderRadius:50, padding:"7px 18px",
                  color:"rgba(255,255,255,0.85)", fontSize:13, fontWeight:400,
                }}>
                  {s.title}
                </span>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 70" style={{ position:"absolute", bottom:-1, left:0, width:"100%", display:"block" }}>
            <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#f8f7ff"/>
          </svg>
        </div>

        {/* ── SERVICE GRID ── */}
        <div className="services-section-shell" style={{ maxWidth:1100, margin:"70px auto 0", padding:"0 24px" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <p style={{ fontSize:12, fontWeight:600, color:"#7c3aed", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:12 }}>What We Offer</p>
            <h2 style={{ fontSize:"clamp(28px,3.5vw,48px)", color:"#1e1b4b", margin:"0 0 16px", fontWeight:400 }}>
              Treatments & Therapies
            </h2>
            <p style={{ color:"#9ca3af", fontSize:16, maxWidth:480, margin:"0 auto", lineHeight:1.7, fontWeight:300 }}>
              Every service is backed by evidence, delivered with care, and tailored to your unique recovery journey.
            </p>
          </div>

          <div className="services-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px,1fr))", gap:28 }}>
            {services.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          </div>
        </div>

        {/* ── HOW IT WORKS ── */}
        <div ref={processRef} className="services-process-shell" style={{ maxWidth:1100, margin:"100px auto 0", padding:"0 24px" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <p style={{ fontSize:12, fontWeight:600, color:"#0ea5e9", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:12 }}>Simple Process</p>
            <h2 style={{ fontSize:"clamp(28px,3.5vw,46px)", color:"#1e1b4b", margin:"0 0 16px", fontWeight:400 }}>
              How It Works
            </h2>
            <p style={{ color:"#9ca3af", fontSize:16, maxWidth:440, margin:"0 auto", lineHeight:1.7, fontWeight:300 }}>
              Getting started is simple. From first contact to full recovery, we're with you every step.
            </p>
          </div>

          {/* Steps row */}
          <div className="services-steps-grid" style={{ position:"relative", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:24 }}>
            {/* Connector line */}
            <div className="services-steps-line" style={{
              position:"absolute", top:32, left:"12.5%", right:"12.5%", height:2,
              background:"linear-gradient(90deg,#7c3aed,#0ea5e9,#10b981,#f59e0b)",
              borderRadius:2, opacity:0.3, zIndex:0,
            }} />
            {steps.map((s, i) => <StepCard key={i} step={s} index={i} />)}
          </div>
        </div>

        {/* ── WHY CHOOSE US strip ── */}
        <div className="services-why-wrap" style={{ maxWidth:1100, margin:"90px auto 0", padding:"0 24px" }}>
          <div className="services-why-shell" style={{
            background:"#fff",
            borderRadius:28,
            padding:"56px 48px",
            boxShadow:"0 8px 40px rgba(109,40,217,0.09)",
            border:"1.5px solid #ede9fe",
            display:"grid",
            gridTemplateColumns:"1fr 1fr",
            gap:48,
            alignItems:"center",
          }}>
            {/* Left */}
            <div className="services-why-copy">
              <p style={{ fontSize:12, fontWeight:600, color:"#7c3aed", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:12 }}>Why Choose Us</p>
              <h2 style={{ fontSize:"clamp(24px,3vw,40px)", color:"#1e1b4b", margin:"0 0 20px", fontWeight:400, lineHeight:1.25 }}>
                Expert care you can trust
              </h2>
              <div className="services-why-accent" style={{ width:44, height:4, borderRadius:4, background:"linear-gradient(90deg,#7c3aed,#3b82f6)", marginBottom:24 }} />
              <p style={{ color:"#6b7280", fontSize:15, lineHeight:1.85, fontWeight:300, margin:0 }}>
                Since 2011, Physio Adviser India has combined clinical excellence with genuine compassion. Every therapist on our team is highly qualified, every treatment plan is evidence-based, and every patient is treated as an individual — not a diagnosis.
              </p>
            </div>
            {/* Right: perks grid */}
            <div className="services-why-points" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
              {[
                { label:"State-of-the-art equipment", accent:"#7c3aed", light:"#f5f3ff" },
                { label:"Personalised treatment plans", accent:"#0ea5e9", light:"#e0f2fe" },
                { label:"Experienced multidisciplinary team", accent:"#10b981", light:"#ecfdf5" },
                { label:"Flexible appointment scheduling", accent:"#f59e0b", light:"#fffbeb" },
                { label:"Evidence-based protocols", accent:"#f43f5e", light:"#fff1f2" },
                { label:"Ongoing aftercare support", accent:"#8b5cf6", light:"#f5f3ff" },
              ].map((p, i) => (
                <div key={i} style={{
                  background:p.light,
                  borderRadius:14,
                  padding:"14px 16px",
                  display:"flex", alignItems:"flex-start", gap:10,
                  border:`1px solid ${p.accent}20`,
                }}>
                  <div style={{ width:22, height:22, borderRadius:"50%", background:p.accent, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>
                    <svg width={11} height={11} viewBox="0 0 24 24" fill="#fff"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                  </div>
                  <span style={{ fontSize:13, color:"#374151", fontWeight:400, lineHeight:1.5 }}>{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div ref={ctaRef} className="services-cta-wrap" style={{
          maxWidth:1100, margin:"80px auto 0", padding:"0 24px",
        }}>
          <div className="services-cta-shell" style={{
            background:"linear-gradient(135deg,#4f1d96 0%,#6d28d9 50%,#3b82f6 100%)",
            borderRadius:32, padding:"72px 48px",
            textAlign:"center", position:"relative", overflow:"hidden",
            opacity: ctaIn ? 1 : 0,
            transform: ctaIn ? "translateY(0)" : "translateY(30px)",
            transition:"opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          }}>
            <div style={{ position:"absolute", top:-60, right:-60, width:240, height:240, borderRadius:"50%", background:"rgba(255,255,255,0.06)" }} />
            <div style={{ position:"absolute", bottom:-40, left:-40, width:180, height:180, borderRadius:"50%", background:"rgba(255,255,255,0.04)" }} />

            <p style={{ color:"rgba(255,255,255,0.60)", fontSize:12, fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:16, position:"relative" }}>Start Today</p>
            <h2 style={{ color:"#fff", fontSize:"clamp(26px,3.5vw,48px)", margin:"0 0 16px", fontWeight:400, position:"relative" }}>
              Ready to Feel Better?
            </h2>
            <p style={{ color:"rgba(255,255,255,0.70)", fontSize:17, maxWidth:460, margin:"0 auto 36px", lineHeight:1.7, fontWeight:300, position:"relative" }}>
              Book your first consultation today. Same-day appointments available for new patients.
            </p>
            <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap", position:"relative" }}>
              <Link to="/book-appointment" style={{ textDecoration:"none" }}>
                <button style={{
                  background:"#fff", color:"#6d28d9",
                  border:"none", borderRadius:50, padding:"16px 44px",
                  fontSize:16, fontWeight:600, cursor:"pointer",
                  boxShadow:"0 8px 32px rgba(0,0,0,0.18)",
                  fontFamily:"'DM Sans', sans-serif",
                  transition:"transform 0.2s, box-shadow 0.2s",
                }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform="scale(1.04)"; e.currentTarget.style.boxShadow="0 12px 40px rgba(0,0,0,0.25)"; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.18)"; }}
                >
                  Book Appointment
                </button>
              </Link>
              <Link to="/contact-us" style={{ textDecoration:"none" }}>
                <button style={{
                  background:"transparent", color:"#fff",
                  border:"1.5px solid rgba(255,255,255,0.45)", borderRadius:50, padding:"15px 36px",
                  fontSize:16, fontWeight:400, cursor:"pointer",
                  fontFamily:"'DM Sans', sans-serif",
                  transition:"background 0.2s, border-color 0.2s",
                }}
                  onMouseEnter={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.7)"; }}
                  onMouseLeave={e=>{ e.currentTarget.style.background="transparent"; e.currentTarget.style.borderColor="rgba(255,255,255,0.45)"; }}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div style={{ height:80 }} />
      </div>
    </>
  );
}
