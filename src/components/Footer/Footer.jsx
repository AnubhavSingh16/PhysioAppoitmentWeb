import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const navLinks = [
  {
    heading: "Company",
    links: [
      { label: "About Us",    to: "/about-us" },
      { label: "Our Team",    to: "/about-us" },
      { label: "Careers",     to: "/" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Sports Physio",   to: "/services" },
      { label: "Spine Clinic",    to: "/services" },
      { label: "Orthopedic",      to: "/services" },
      { label: "Dry Needling",    to: "/services" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Contact Us",       to: "/contact-us" },
      { label: "Book Appointment", to: "/book-appointment" },
      { label: "Privacy Policy",   to: "/" },
      { label: "Terms & Conditions", to: "/" },
    ],
  },
];

const socials = [
  { Icon: FaFacebook,  href: "#", label: "Facebook",  color: "#1877f2" },
  { Icon: FaInstagram, href: "#", label: "Instagram",  color: "#e1306c" },
  { Icon: FaLinkedin,  href: "#", label: "LinkedIn",   color: "#0a66c2" },
  { Icon: FaYoutube,   href: "#", label: "YouTube",    color: "#ff0000" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);

  const handleSub = (e) => {
    e.preventDefault();
    if (email) { setSubbed(true); setEmail(""); }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        .footer-root { font-family:'DM Sans',sans-serif; }
        .footer-root h2 { font-family:'DM Serif Display',serif; }
        .footer-main {
          max-width:1100px;
          margin:0 auto;
          padding:56px 24px 40px;
          display:grid;
          grid-template-columns:1.6fr 1fr 1fr 1fr;
          gap:48px;
        }
        .footer-bottom {
          border-top:1px solid #ede9fe !important;
          padding:18px 24px !important;
          max-width:1100px !important;
          margin:0 auto !important;
          display:flex !important;
          align-items:center !important;
          justify-content:space-between !important;
          flex-wrap:wrap !important;
          gap:12px !important;
        }
        .footer-link {
          font-size:14px; color:#6b7280; text-decoration:none; font-weight:400;
          transition:color 0.18s; display:inline-block; padding:3px 0;
          position:relative;
        }
        .footer-link::after {
          content:''; position:absolute; left:0; bottom:0;
          width:0; height:1px; background:#7c3aed;
          transition:width 0.22s;
        }
        .footer-link:hover { color:#7c3aed; }
        .footer-link:hover::after { width:100%; }
        .social-btn {
          width:40px; height:40px; border-radius:12px;
          display:flex; align-items:center; justify-content:center;
          background:#f4f3ff; border:1.5px solid #ede9fe;
          cursor:pointer; transition:all 0.22s; color:#7c3aed;
          text-decoration:none;
        }
        .social-btn:hover { transform:translateY(-3px); box-shadow:0 6px 18px rgba(124,58,237,0.20); }
        .sub-input {
          flex:1; padding:11px 16px; border-radius:12px 0 0 12px;
          border:1.5px solid #e5e7eb; border-right:none;
          font-size:14px; outline:none; background:#fff;
          font-family:'DM Sans',sans-serif; color:#111827;
          transition:border-color 0.2s;
        }
        .sub-input:focus { border-color:#7c3aed; }
        .sub-btn {
          padding:11px 20px; border-radius:0 12px 12px 0;
          background:linear-gradient(135deg,#7c3aed,#4f46e5);
          color:#fff; border:none; font-size:14px; font-weight:600;
          cursor:pointer; white-space:nowrap; font-family:'DM Sans',sans-serif;
          transition:opacity 0.18s;
        }
        .sub-btn:hover { opacity:0.88; }
        @media (max-width: 900px) {
          .footer-main {
            grid-template-columns:1fr 1fr;
            gap:32px;
          }
        }
        @media (max-width: 640px) {
          .footer-main {
            padding:40px 16px 28px;
            grid-template-columns:1fr;
            gap:28px;
          }
          .footer-bottom {
            padding:16px !important;
            flex-direction:column !important;
            align-items:flex-start !important;
            gap:10px !important;
          }
          .footer-bottom-links {
            display:flex !important;
            flex-wrap:wrap !important;
            gap:12px 16px !important;
          }
        }
      `}</style>

      <footer className="footer-root" style={{
        background:"linear-gradient(180deg,#f4f3ff 0%,#ffffff 100%)",
        borderTop:"1px solid #ede9fe",
      }}>

        {/* ── TOP CTA STRIP ── */}
        {/* <div style={{
          background:"linear-gradient(135deg,#3b0764,#5b21b6,#4f46e5)",
          padding:"40px 24px",
          textAlign:"center",
          position:"relative",
          overflow:"hidden",
        }}>
          <div style={{ position:"absolute",top:-40,left:-40,width:180,height:180,borderRadius:"50%",background:"rgba(255,255,255,0.05)" }} />
          <div style={{ position:"absolute",bottom:-30,right:-30,width:140,height:140,borderRadius:"50%",background:"rgba(96,165,250,0.12)" }} />
          <p style={{ color:"rgba(255,255,255,0.6)",fontSize:12,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",margin:"0 0 8px" }}>
            Stay updated
          </p>
          <h2 style={{ color:"#fff",fontSize:"clamp(20px,2.5vw,30px)",margin:"0 0 20px",fontWeight:400 }}>
            Subscribe to our <em style={{ fontStyle:"italic",color:"#c4b5fd" }}>Newsletter</em>
          </h2>
          {subbed ? (
            <div style={{ display:"inline-flex",alignItems:"center",gap:10,background:"rgba(74,222,128,0.15)",border:"1px solid rgba(74,222,128,0.4)",borderRadius:50,padding:"10px 24px" }}>
              <svg width={16} height={16} viewBox="0 0 24 24" fill="#4ade80"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
              <span style={{ color:"#4ade80",fontSize:14,fontWeight:500 }}>You're subscribed! Thank you.</span>
            </div>
          ) : (
            <form onSubmit={handleSub} style={{ display:"flex",maxWidth:420,margin:"0 auto",position:"relative",zIndex:1 }}>
              <input className="sub-input" type="email" placeholder="your@email.com" value={email} onChange={e=>setEmail(e.target.value)} required />
              <button className="sub-btn" type="submit">Subscribe</button>
            </form>
          )}
        </div> */}

        {/* ── MAIN FOOTER BODY ── */}
        <div className="footer-main">

          {/* Brand column */}
          <div style={{ display:"flex",flexDirection:"column",gap:20 }}>
            {/* Logo */}
            <div style={{ display:"inline-flex",alignItems:"center",gap:10 }}>
              <span style={{ fontSize:26,fontWeight:500,color:"#1e1b4b",fontFamily:"'DM Sans',sans-serif",letterSpacing:"-0.3px" }}>
                YourPhysio
              </span>
              <div style={{ width:36,height:36,borderRadius:10,background:"linear-gradient(135deg,#7c3aed,#4f46e5)",display:"flex",alignItems:"center",justifyContent:"center" }}>
                <FontAwesomeIcon icon={faStethoscope} style={{ color:"#fff",fontSize:16 }} />
              </div>
            </div>

            <p style={{ fontSize:14,color:"#9ca3af",lineHeight:1.8,margin:0,fontWeight:300,maxWidth:260 }}>
              Delhi's trusted physiotherapy centre since 2011. Restoring movement, rebuilding confidence — one patient at a time.
            </p>

            {/* Socials */}
            <div style={{ display:"flex",gap:10,flexWrap:"wrap" }}>
              {socials.map(({ Icon, href, label, color }) => (
                <a key={label} href={href} aria-label={label} className="social-btn"
                  onMouseEnter={e=>{ e.currentTarget.style.background=color; e.currentTarget.style.borderColor=color; e.currentTarget.querySelector("svg").style.color="#fff"; }}
                  onMouseLeave={e=>{ e.currentTarget.style.background="#f4f3ff"; e.currentTarget.style.borderColor="#ede9fe"; e.currentTarget.querySelector("svg").style.color="#7c3aed"; }}>
                  <Icon size={17} style={{ color:"#7c3aed",transition:"color 0.18s" }} />
                </a>
              ))}
            </div>

            {/* Contact quick info */}
            <div style={{ display:"flex",flexDirection:"column",gap:10,marginTop:4 }}>
              {[
                { icon:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z", text:"+91-000000" },
                { icon:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z", text:"mail@yourphysio.com" },
                { icon:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z", text:"Delhi, India" },
              ].map((item,i) => (
                <div key={i} style={{ display:"flex",alignItems:"center",gap:10 }}>
                  <div style={{ width:30,height:30,borderRadius:8,background:"#f4f3ff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="#7c3aed"><path d={item.icon}/></svg>
                  </div>
                  <span style={{ fontSize:13,color:"#6b7280",fontWeight:400 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navLinks.map(col => (
            <div key={col.heading}>
              <h3 style={{ fontSize:13,fontWeight:700,color:"#1e1b4b",letterSpacing:"0.07em",textTransform:"uppercase",margin:"0 0 18px" }}>
                {col.heading}
              </h3>
              <ul style={{ listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:4 }}>
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link to={link.to} className="footer-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="footer-bottom" style={{
          borderTop:"1px solid #ede9fe",
          padding:"18px 24px",
          maxWidth:1100, margin:"0 auto",
          display:"flex", alignItems:"center", justifyContent:"space-between",
          flexWrap:"wrap", gap:12,
        }}>
          <p style={{ fontSize:13,color:"#d1d5db",margin:0,fontWeight:300 }}>
            © {new Date().getFullYear()} YourPhysio. All rights reserved.
          </p>
          <div className="footer-bottom-links" style={{ display:"flex",gap:20 }}>
            {["Privacy Policy","Terms of Service","Cookie Policy"].map(t => (
              <a key={t} href="#" style={{ fontSize:12,color:"#d1d5db",textDecoration:"none",fontWeight:400,transition:"color 0.18s" }}
                onMouseEnter={e=>e.target.style.color="#7c3aed"}
                onMouseLeave={e=>e.target.style.color="#d1d5db"}>
                {t}
              </a>
            ))}
          </div>
          <div style={{ display:"flex",alignItems:"center",gap:6 }}>
            <div style={{ width:6,height:6,borderRadius:"50%",background:"#4ade80",boxShadow:"0 0 6px #4ade80" }} />
            <span style={{ fontSize:12,color:"#9ca3af",fontWeight:400 }}>All systems operational</span>
          </div>
        </div>
      </footer>
    </>
  );
}
