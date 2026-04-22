import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer/Footer";

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

function ContactusPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm]       = useState({ name: "", email: "", phone: "", message: "" });
  const [focused, setFocused] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent]       = useState(false);

  const [heroRef,  heroIn]  = useInView(0.05);
  const [leftRef,  leftIn]  = useInView(0.1);
  const [rightRef, rightIn] = useInView(0.1);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 900);
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "14px 18px",
    borderRadius: 12,
    border: `1.5px solid ${focused === field ? "#7c3aed" : "#e5e7eb"}`,
    background: focused === field ? "#faf5ff" : "#f9fafb",
    fontSize: 15,
    color: "#111827",
    outline: "none",
    transition: "border-color 0.2s, background 0.2s",
    fontFamily: "'DM Sans', sans-serif",
    boxSizing: "border-box",
  });

  const contactCards = [
    {
      icon: (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="#7c3aed">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      label: "Call Us Directly",
      value: "+91-000000",
      accent: "#7c3aed", light: "#f5f3ff",
    },
    {
      icon: (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="#0ea5e9">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      label: "Email Us At",
      value: "mail@admin.com",
      accent: "#0ea5e9", light: "#e0f2fe",
    },
    {
      icon: (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="#10b981">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      label: "Visit Us At",
      value: "Delhi, India",
      accent: "#10b981", light: "#ecfdf5",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        .contact-page { font-family: 'DM Sans', sans-serif; }
        .contact-page h1, .contact-page h2 { font-family: 'DM Serif Display', serif; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes checkPop { 0%{transform:scale(0)} 70%{transform:scale(1.2)} 100%{transform:scale(1)} }
        .float-blob { animation: float 5s ease-in-out infinite; }
        .check-pop { animation: checkPop 0.4s cubic-bezier(0.22,1,0.36,1) forwards; }
        @media (max-width: 900px) {
          .contact-main {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .contact-info {
            order: 1;
            text-align: center;
          }
          .contact-info-accent {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .contact-card {
            text-align: left;
          }
          .contact-form {
            order: 2;
          }
        }
        @media (max-width: 640px) {
          .contact-hero {
            padding: 74px 16px 88px !important;
          }
          .contact-main {
            margin-top: 40px !important;
            padding: 0 16px !important;
          }
          .contact-info {
            padding: 0 4px;
          }
          .contact-form {
            padding: 26px 18px !important;
            border-radius: 20px !important;
          }
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div className="contact-page" style={{ background: "#f8f7ff", minHeight: "100vh" }}>

        {/* ── HERO ── */}
        <div ref={heroRef} className="contact-hero" style={{
          background: "linear-gradient(135deg, #4f1d96 0%, #6d28d9 40%, #3b82f6 100%)",
          padding: "80px 24px 100px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}>
          <div style={{ position:"absolute", top:-80, left:-80, width:280, height:280, borderRadius:"50%", background:"rgba(255,255,255,0.06)" }} />
          <div style={{ position:"absolute", bottom:-60, right:-60, width:220, height:220, borderRadius:"50%", background:"rgba(255,255,255,0.05)" }} />
          <div style={{ position:"absolute", top:"25%", right:"8%", width:140, height:140, borderRadius:"50%", background:"rgba(59,130,246,0.22)" }} className="float-blob" />
          <div style={{ position:"absolute", bottom:"20%", left:"6%", width:90, height:90, borderRadius:"50%", background:"rgba(167,139,250,0.20)" }} className="float-blob" style2={{ animationDelay:"1.5s" }} />

          <div style={{
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)",
            position: "relative", zIndex: 1,
          }}>
            <p style={{ color:"rgba(255,255,255,0.60)", fontSize:12, fontWeight:600, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:16 }}>
              We're here for you
            </p>
            <h1 style={{ color:"#fff", fontSize:"clamp(36px,5vw,64px)", margin:"0 0 18px", lineHeight:1.1, fontWeight:400 }}>
              Get in <em style={{ fontStyle:"italic" }}>Touch</em>
            </h1>
            <p style={{ color:"rgba(255,255,255,0.72)", fontSize:17, maxWidth:500, margin:"0 auto", lineHeight:1.7, fontWeight:300 }}>
              We understand our patients may have questions. We're always here — feel free to reach out anytime.
            </p>
          </div>

          <svg viewBox="0 0 1440 60" style={{ position:"absolute", bottom:-1, left:0, width:"100%", display:"block" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8f7ff"/>
          </svg>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="contact-main" style={{ maxWidth:1100, margin:"60px auto 0", padding:"0 24px", display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:48, alignItems:"start" }}>

          {/* ── LEFT: contact info ── */}
          <div ref={leftRef} className="contact-info" style={{
            opacity: leftIn ? 1 : 0,
            transform: leftIn ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          }}>
            <p style={{ fontSize:12, fontWeight:600, color:"#7c3aed", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:10 }}>Contact Info</p>
            <h2 style={{ fontSize:"clamp(26px,3vw,38px)", color:"#1e1b4b", margin:"0 0 14px", fontWeight:400, lineHeight:1.2 }}>
              Let's Start a Conversation
            </h2>
            <div className="contact-info-accent" style={{ width:44, height:4, borderRadius:4, background:"linear-gradient(90deg,#7c3aed,#3b82f6)", marginBottom:28 }} />
            <p style={{ color:"#6b7280", fontSize:15, lineHeight:1.8, marginBottom:36, fontWeight:300 }}>
              Whether you have questions about treatments, want to book a session, or simply need guidance — our team is ready to help you every step of the way.
            </p>

            {/* Contact cards */}
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              {contactCards.map((card, i) => (
                <div key={i} className="contact-card" style={{
                  background:"#fff",
                  borderRadius:16,
                  padding:"20px 22px",
                  display:"flex",
                  alignItems:"center",
                  gap:18,
                  boxShadow:"0 4px 20px rgba(109,40,217,0.08)",
                  border:`1.5px solid ${card.light}`,
                  opacity: leftIn ? 1 : 0,
                  transform: leftIn ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${0.1 + i * 0.12}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.12}s`,
                  cursor:"default",
                }}>
                  <div style={{
                    width:50, height:50, borderRadius:14,
                    background:card.light,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    flexShrink:0,
                  }}>
                    {card.icon}
                  </div>
                  <div>
                    <p style={{ fontSize:11, color:"#9ca3af", fontWeight:600, margin:0, marginBottom:4, letterSpacing:"0.06em", textTransform:"uppercase" }}>{card.label}</p>
                    <p style={{ fontSize:16, fontWeight:600, color:"#111827", margin:0 }}>{card.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Info blurb */}
            <div style={{
              marginTop:28,
              background:"linear-gradient(135deg,#f5f3ff,#ede9fe)",
              borderRadius:16, padding:"20px 22px",
              border:"1.5px solid #ddd6fe",
            }}>
              <div style={{ display:"flex", gap:12, alignItems:"flex-start", marginBottom:14 }}>
                <div style={{ width:20, height:20, borderRadius:"50%", background:"#7c3aed", display:"flex", alignItems:"center", justifyContent:"center", marginTop:2, flexShrink:0 }}>
                  <svg width={10} height={10} viewBox="0 0 24 24" fill="#fff"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                </div>
                <p style={{ fontSize:14, color:"#4c1d95", lineHeight:1.7, margin:0, fontWeight:400 }}>
                  We understand our patients may face challenges — we're here for you.
                </p>
              </div>
              <div style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                <div style={{ width:20, height:20, borderRadius:"50%", background:"#7c3aed", display:"flex", alignItems:"center", justifyContent:"center", marginTop:2, flexShrink:0 }}>
                  <svg width={10} height={10} viewBox="0 0 24 24" fill="#fff"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                </div>
                <p style={{ fontSize:14, color:"#4c1d95", lineHeight:1.7, margin:0, fontWeight:400 }}>
                  Feel free to contact us anytime — we'll resolve your queries as soon as possible.
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div ref={rightRef} className="contact-form" style={{
            opacity: rightIn ? 1 : 0,
            transform: rightIn ? "translateX(0)" : "translateX(30px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s",
            background:"#fff",
            borderRadius:24,
            padding:"40px 36px",
            boxShadow:"0 16px 60px rgba(109,40,217,0.12)",
            border:"1.5px solid #ede9fe",
            position:"relative",
            overflow:"hidden",
          }}>
            {/* Decorative corner blob */}
            <div style={{ position:"absolute", top:-40, right:-40, width:160, height:160, borderRadius:"50%", background:"linear-gradient(135deg,#ede9fe,#dbeafe)", opacity:0.6 }} />

            <div style={{ position:"relative", zIndex:1 }}>
              <p style={{ fontSize:12, fontWeight:600, color:"#7c3aed", letterSpacing:"0.12em", textTransform:"uppercase", margin:"0 0 8px" }}>Send a Message</p>
              <h2 style={{ fontSize:"clamp(22px,2.5vw,32px)", color:"#1e1b4b", margin:"0 0 8px", fontWeight:400 }}>
                Reach Us Directly
              </h2>
              <p style={{ color:"#9ca3af", fontSize:14, margin:"0 0 28px", lineHeight:1.6, fontWeight:300 }}>
                We'll get back to you as soon as possible.
              </p>

              {/* Success state */}
              {sent && (
                <div style={{
                  background:"#ecfdf5", border:"1.5px solid #6ee7b7",
                  borderRadius:12, padding:"16px 20px",
                  display:"flex", alignItems:"center", gap:12, marginBottom:24,
                }}>
                  <div style={{ width:32, height:32, borderRadius:"50%", background:"#10b981", display:"flex", alignItems:"center", justifyContent:"center" }} className="check-pop">
                    <svg width={16} height={16} viewBox="0 0 24 24" fill="#fff"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                  </div>
                  <div>
                    <p style={{ fontSize:14, fontWeight:600, color:"#065f46", margin:0 }}>Message sent!</p>
                    <p style={{ fontSize:13, color:"#059669", margin:0 }}>We'll get back to you shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:16 }}>
                {/* Name */}
                <div>
                  <label style={{ fontSize:12, fontWeight:600, color:"#6b7280", letterSpacing:"0.06em", textTransform:"uppercase", display:"block", marginBottom:6 }}>Your Name *</label>
                  <input
                    name="name" type="text" placeholder="e.g. Rahul Sharma"
                    value={form.name} onChange={handleChange}
                    onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
                    required style={inputStyle("name")}
                  />
                </div>

                {/* Phone + Email row */}
                <div className="contact-form-row" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                  <div>
                    <label style={{ fontSize:12, fontWeight:600, color:"#6b7280", letterSpacing:"0.06em", textTransform:"uppercase", display:"block", marginBottom:6 }}>Phone *</label>
                    <input
                      name="phone" type="tel" placeholder="+91 00000 00000"
                      value={form.phone} onChange={handleChange}
                      onFocus={() => setFocused("phone")} onBlur={() => setFocused("")}
                      required style={inputStyle("phone")}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize:12, fontWeight:600, color:"#6b7280", letterSpacing:"0.06em", textTransform:"uppercase", display:"block", marginBottom:6 }}>Email *</label>
                    <input
                      name="email" type="email" placeholder="you@email.com"
                      value={form.email} onChange={handleChange}
                      onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
                      required style={inputStyle("email")}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ fontSize:12, fontWeight:600, color:"#6b7280", letterSpacing:"0.06em", textTransform:"uppercase", display:"block", marginBottom:6 }}>Message</label>
                  <textarea
                    name="message" placeholder="Tell us how we can help you..."
                    value={form.message} onChange={handleChange}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
                    rows={4}
                    style={{ ...inputStyle("message"), resize:"vertical", minHeight:110 }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: loading ? "#a78bfa" : "linear-gradient(135deg,#7c3aed,#3b82f6)",
                    color:"#fff",
                    border:"none",
                    borderRadius:12,
                    padding:"15px 28px",
                    fontSize:15,
                    fontWeight:600,
                    cursor: loading ? "not-allowed" : "pointer",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    gap:10,
                    boxShadow: loading ? "none" : "0 8px 24px rgba(124,58,237,0.30)",
                    transition:"transform 0.2s, box-shadow 0.2s",
                    fontFamily:"'DM Sans', sans-serif",
                  }}
                  onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform="scale(1.02)"; e.currentTarget.style.boxShadow="0 12px 32px rgba(124,58,237,0.40)"; }}}
                  onMouseLeave={e => { e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="0 8px 24px rgba(124,58,237,0.30)"; }}
                >
                  {loading ? (
                    <>
                      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" style={{ animation:"spin 0.8s linear infinite" }}>
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.3"/>
                        <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width={18} height={18} viewBox="0 0 24 24" fill="#fff">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div style={{ height:80 }} />
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <Footer />
    </>
  );
}

export default ContactusPage;
