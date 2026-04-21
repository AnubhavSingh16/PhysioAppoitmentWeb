import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../Context/myContext";
import Footer from "../components/Footer/Footer";

function useInView(threshold = 0.1) {
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

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "02:00 PM",
  "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
  "04:30 PM", "05:00 PM",
];

const services = [
  "Sports Physiotherapy",
  "Advanced Spine Clinic",
  "Orthopedic Physiotherapy",
  "Dry Needling & Acupuncture",
  "Neurological Rehabilitation",
  "Yoga, Pilates & Aerobics",
  "General Consultation",
];

const BookAppointment = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const { setPatients, setIsPatientCreated } = useContext(MyContext);
  const navigate  = useNavigate();
  const [step,    setStep]    = useState(1);
  const [focused, setFocused] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "", phone: "", email: "",
    date: "", time: "", service: "", reason: "",
  });
  const [errors, setErrors] = useState({});

  const [heroRef, heroIn]   = useInView(0.05);
  const [formRef, formIn]   = useInView(0.05);

  const validate = (name, value) => {
    if (name === "name" && value && !/^[a-zA-Z\s]+$/.test(value))
      return "Name must contain letters only.";
    if (name === "phone" && value && !/^\d{7,15}$/.test(value))
      return "Enter a valid phone number.";
    if (name === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Enter a valid email address.";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
  };

  const canProceedStep1 = formData.name && !errors.name && formData.phone && !errors.phone;
  const canProceedStep2 = formData.date && formData.time && formData.service;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setPatients(prev => [{ ...formData }, ...prev]);
      setIsPatientCreated(true);
      setLoading(false);
      navigate("/confirmation-appointment");
    }, 1000);
  };

  const inputStyle = (field) => ({
    width: "100%", padding: "13px 16px",
    borderRadius: 12, fontSize: 15,
    border: `1.5px solid ${errors[field] ? "#f43f5e" : focused === field ? "#7c3aed" : "#e5e7eb"}`,
    background: errors[field] ? "#fff1f2" : focused === field ? "#faf5ff" : "#f9fafb",
    color: "#111827", outline: "none",
    transition: "border-color 0.2s, background 0.2s",
    fontFamily: "'DM Sans', sans-serif",
    boxSizing: "border-box",
  });

  const labelStyle = {
    fontSize: 12, fontWeight: 600, color: "#6b7280",
    letterSpacing: "0.06em", textTransform: "uppercase",
    display: "block", marginBottom: 7,
  };

  const steps = [
    { num: 1, label: "Personal Info" },
    { num: 2, label: "Schedule"      },
    { num: 3, label: "Confirm"       },
  ];

  const infoItems = [
    { icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z", accent:"#7c3aed", light:"#f5f3ff", title:"Free Consultation", sub:"First visit assessment at no charge" },
    { icon: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z", accent:"#0ea5e9", light:"#e0f2fe", title:"Same-Day Slots", sub:"Available for urgent bookings" },
    { icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z", accent:"#10b981", light:"#ecfdf5", title:"Expert Therapists", sub:"Certified & experienced specialists" },
    { icon: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z", accent:"#f59e0b", light:"#fffbeb", title:"24/7 Support", sub:"Emergency helpline always open" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        .appt-page { font-family:'DM Sans',sans-serif; }
        .appt-page h1,.appt-page h2 { font-family:'DM Serif Display',serif; }
        @keyframes float-a { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes slideUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .float-a { animation:float-a 6s ease-in-out infinite; }
        .slide-up { animation:slideUp 0.4s cubic-bezier(0.22,1,0.36,1) forwards; }
        input[type="date"]::-webkit-calendar-picker-indicator { opacity:0.5; cursor:pointer; }
        input[type="time"]::-webkit-calendar-picker-indicator { opacity:0.5; cursor:pointer; }
      `}</style>

      <div className="appt-page" style={{ background:"#f8f7ff", minHeight:"100vh" }}>

        <div ref={heroRef} style={{
          background:"linear-gradient(135deg,#4f1d96 0%,#6d28d9 40%,#3b82f6 100%)",
          padding:"72px 24px 100px",
          position:"relative", overflow:"hidden", textAlign:"center",
        }}>
          <div className="float-a" style={{ position:"absolute",top:20,right:"8%",width:100,height:100,borderRadius:24,background:"rgba(255,255,255,0.07)",transform:"rotate(15deg)" }} />
          <div style={{ position:"absolute",top:-80,left:-80,width:280,height:280,borderRadius:"50%",background:"rgba(255,255,255,0.05)" }} />
          <div style={{ position:"absolute",bottom:-60,right:-40,width:200,height:200,borderRadius:"50%",background:"rgba(59,130,246,0.18)" }} />

          <div style={{
            position:"relative",zIndex:1,
            opacity: heroIn?1:0, transform: heroIn?"translateY(0)":"translateY(28px)",
            transition:"opacity 0.8s ease,transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}>
            <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,0.12)",backdropFilter:"blur(8px)",borderRadius:50,padding:"7px 18px",marginBottom:20,border:"1px solid rgba(255,255,255,0.2)" }}>
              <span style={{ width:8,height:8,borderRadius:"50%",background:"#4ade80",display:"inline-block" }} />
              <span style={{ color:"rgba(255,255,255,0.85)",fontSize:13,fontWeight:500 }}>Accepting appointments</span>
            </div>
            <h1 style={{ color:"#fff",fontSize:"clamp(36px,5vw,62px)",margin:"0 0 16px",lineHeight:1.1,fontWeight:400 }}>
              Book an <em style={{ fontStyle:"italic" }}>Appointment</em>
            </h1>
            <p style={{ color:"rgba(255,255,255,0.70)",fontSize:17,maxWidth:480,margin:"0 auto",lineHeight:1.7,fontWeight:300 }}>
              Fill in your details below and we'll confirm your session within the hour.
            </p>
          </div>

          <svg viewBox="0 0 1440 65" style={{ position:"absolute",bottom:-1,left:0,width:"100%",display:"block" }}>
            <path d="M0,32 C360,65 1080,0 1440,32 L1440,65 L0,65 Z" fill="#f8f7ff"/>
          </svg>
        </div>

        <div style={{ maxWidth:1100,margin:"0 auto",padding:"60px 24px 80px",display:"grid",gridTemplateColumns:"1fr 340px",gap:40,alignItems:"start" }}>

          <div ref={formRef} style={{
            background:"#fff",borderRadius:28,
            boxShadow:"0 16px 60px rgba(109,40,217,0.11)",
            border:"1.5px solid #ede9fe",overflow:"hidden",
            opacity:formIn?1:0,transform:formIn?"translateY(0)":"translateY(30px)",
            transition:"opacity 0.7s ease,transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          }}>

            <div style={{ background:"linear-gradient(135deg,#4f1d96,#6d28d9)",padding:"28px 36px" }}>
              <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:0 }}>
                {steps.map((s,i) => (
                  <React.Fragment key={s.num}>
                    <div style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:8 }}>
                      <div style={{
                        width:40,height:40,borderRadius:"50%",
                        background: step>s.num ? "#4ade80" : step===s.num ? "#fff" : "rgba(255,255,255,0.15)",
                        display:"flex",alignItems:"center",justifyContent:"center",
                        border: step===s.num ? "none" : step>s.num ? "none" : "1.5px solid rgba(255,255,255,0.3)",
                        transition:"background 0.3s",
                      }}>
                        {step > s.num
                          ? <svg width={18} height={18} viewBox="0 0 24 24" fill="#166534"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                          : <span style={{ fontSize:15,fontWeight:700,color:step===s.num?"#6d28d9":"rgba(255,255,255,0.6)" }}>{s.num}</span>
                        }
                      </div>
                      <span style={{ fontSize:11,color:step===s.num?"#fff":"rgba(255,255,255,0.5)",fontWeight:step===s.num?600:400,whiteSpace:"nowrap" }}>{s.label}</span>
                    </div>
                    {i < steps.length-1 && (
                      <div style={{ flex:1,height:2,background:step>s.num?"#4ade80":"rgba(255,255,255,0.2)",margin:"0 10px 20px",transition:"background 0.4s" }} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ padding:"36px" }}>

              {step === 1 && (
                <div className="slide-up" style={{ display:"flex",flexDirection:"column",gap:22 }}>
                  <div>
                    <h2 style={{ fontSize:24,color:"#1e1b4b",margin:"0 0 6px",fontWeight:400 }}>Personal Information</h2>
                    <p style={{ fontSize:14,color:"#9ca3af",margin:0,fontWeight:300 }}>Let us know who we're booking for.</p>
                  </div>

                  <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:18 }}>
                    <div>
                      <label style={labelStyle}>Full Name <span style={{ color:"#f43f5e" }}>*</span></label>
                      <input name="name" type="text" placeholder="e.g. Rahul Sharma" value={formData.name}
                        onChange={handleChange} onFocus={()=>setFocused("name")} onBlur={()=>setFocused("")}
                        required style={inputStyle("name")} />
                      {errors.name && <p style={{ fontSize:12,color:"#f43f5e",margin:"5px 0 0" }}>{errors.name}</p>}
                    </div>
                    <div>
                      <label style={labelStyle}>Phone Number <span style={{ color:"#f43f5e" }}>*</span></label>
                      <input name="phone" type="tel" placeholder="+91 00000 00000" value={formData.phone}
                        onChange={handleChange} onFocus={()=>setFocused("phone")} onBlur={()=>setFocused("")}
                        required style={inputStyle("phone")} />
                      {errors.phone && <p style={{ fontSize:12,color:"#f43f5e",margin:"5px 0 0" }}>{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input name="email" type="email" placeholder="you@email.com" value={formData.email}
                      onChange={handleChange} onFocus={()=>setFocused("email")} onBlur={()=>setFocused("")}
                      style={inputStyle("email")} />
                    {errors.email && <p style={{ fontSize:12,color:"#f43f5e",margin:"5px 0 0" }}>{errors.email}</p>}
                  </div>

                  <button type="button" disabled={!canProceedStep1} onClick={() => setStep(2)}
                    style={{
                      background: canProceedStep1 ? "linear-gradient(135deg,#7c3aed,#3b82f6)" : "#e5e7eb",
                      color: canProceedStep1 ? "#fff" : "#9ca3af",
                      border:"none",borderRadius:12,padding:"14px 28px",
                      fontSize:15,fontWeight:600,cursor:canProceedStep1?"pointer":"not-allowed",
                      display:"flex",alignItems:"center",justifyContent:"center",gap:8,
                      boxShadow:canProceedStep1?"0 8px 24px rgba(124,58,237,0.28)":"none",
                      transition:"background 0.2s,box-shadow 0.2s",
                      fontFamily:"'DM Sans',sans-serif",
                    }}>
                    Continue to Schedule
                    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="slide-up" style={{ display:"flex",flexDirection:"column",gap:22 }}>
                  <div>
                    <h2 style={{ fontSize:24,color:"#1e1b4b",margin:"0 0 6px",fontWeight:400 }}>Schedule Your Session</h2>
                    <p style={{ fontSize:14,color:"#9ca3af",margin:0,fontWeight:300 }}>Pick your preferred date, time, and service.</p>
                  </div>

                  <div>
                    <label style={labelStyle}>Service Required <span style={{ color:"#f43f5e" }}>*</span></label>
                    <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:10 }}>
                      {services.map(s => (
                        <button type="button" key={s} onClick={() => setFormData(prev => ({...prev, service:s}))}
                          style={{
                            padding:"10px 14px",borderRadius:10,fontSize:13,textAlign:"left",
                            border:`1.5px solid ${formData.service===s?"#7c3aed":"#e5e7eb"}`,
                            background:formData.service===s?"#f5f3ff":"#f9fafb",
                            color:formData.service===s?"#7c3aed":"#4b5563",
                            cursor:"pointer",fontWeight:formData.service===s?600:400,
                            transition:"all 0.18s",fontFamily:"'DM Sans',sans-serif",
                          }}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:18 }}>
                    <div>
                      <label style={labelStyle}>Preferred Date <span style={{ color:"#f43f5e" }}>*</span></label>
                      <input name="date" type="date" value={formData.date}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={handleChange} onFocus={()=>setFocused("date")} onBlur={()=>setFocused("")}
                        required style={inputStyle("date")} />
                    </div>
                    <div>
                      <label style={labelStyle}>Preferred Time <span style={{ color:"#f43f5e" }}>*</span></label>
                      <div style={{ display:"flex",flexWrap:"wrap",gap:7,marginTop:2 }}>
                        {timeSlots.slice(0,6).map(t => (
                          <button type="button" key={t} onClick={()=>setFormData(prev=>({...prev,time:t}))}
                            style={{
                              padding:"7px 12px",borderRadius:8,fontSize:12,
                              border:`1.5px solid ${formData.time===t?"#7c3aed":"#e5e7eb"}`,
                              background:formData.time===t?"#7c3aed":"#f9fafb",
                              color:formData.time===t?"#fff":"#4b5563",
                              cursor:"pointer",fontWeight:500,
                              transition:"all 0.18s",fontFamily:"'DM Sans',sans-serif",
                            }}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>All Available Slots</label>
                    <div style={{ display:"flex",flexWrap:"wrap",gap:8 }}>
                      {timeSlots.map(t => (
                        <button type="button" key={t} onClick={()=>setFormData(prev=>({...prev,time:t}))}
                          style={{
                            padding:"8px 14px",borderRadius:8,fontSize:13,
                            border:`1.5px solid ${formData.time===t?"#7c3aed":"#e5e7eb"}`,
                            background:formData.time===t?"#7c3aed":"#f9fafb",
                            color:formData.time===t?"#fff":"#4b5563",
                            cursor:"pointer",fontWeight:500,
                            transition:"all 0.18s",fontFamily:"'DM Sans',sans-serif",
                          }}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Reason / Additional Notes</label>
                    <textarea name="reason" placeholder="Describe your condition or any specific concerns..." rows={3}
                      value={formData.reason} onChange={handleChange}
                      onFocus={()=>setFocused("reason")} onBlur={()=>setFocused("")}
                      style={{ ...inputStyle("reason"), resize:"vertical", minHeight:90 }} />
                  </div>

                  <div style={{ display:"flex",gap:12 }}>
                    <button type="button" onClick={()=>setStep(1)}
                      style={{ flex:1,background:"transparent",color:"#6b7280",border:"1.5px solid #e5e7eb",borderRadius:12,padding:"13px",fontSize:15,fontWeight:500,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",transition:"border-color 0.2s" }}
                      onMouseEnter={e=>e.currentTarget.style.borderColor="#7c3aed"}
                      onMouseLeave={e=>e.currentTarget.style.borderColor="#e5e7eb"}>
                      ? Back
                    </button>
                    <button type="button" disabled={!canProceedStep2} onClick={()=>setStep(3)}
                      style={{
                        flex:3,background:canProceedStep2?"linear-gradient(135deg,#7c3aed,#3b82f6)":"#e5e7eb",
                        color:canProceedStep2?"#fff":"#9ca3af",border:"none",borderRadius:12,
                        padding:"13px 28px",fontSize:15,fontWeight:600,
                        cursor:canProceedStep2?"pointer":"not-allowed",
                        display:"flex",alignItems:"center",justifyContent:"center",gap:8,
                        boxShadow:canProceedStep2?"0 8px 24px rgba(124,58,237,0.28)":"none",
                        fontFamily:"'DM Sans',sans-serif",
                      }}>
                      Review & Confirm
                      <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="slide-up" style={{ display:"flex",flexDirection:"column",gap:22 }}>
                  <div>
                    <h2 style={{ fontSize:24,color:"#1e1b4b",margin:"0 0 6px",fontWeight:400 }}>Review & Confirm</h2>
                    <p style={{ fontSize:14,color:"#9ca3af",margin:0,fontWeight:300 }}>Please check your details before submitting.</p>
                  </div>

                  <div style={{ background:"#f8f7ff",borderRadius:16,padding:"24px",border:"1.5px solid #ede9fe" }}>
                    {[
                      { label:"Full Name",    value:formData.name    },
                      { label:"Phone",        value:formData.phone   },
                      { label:"Email",        value:formData.email || "—" },
                      { label:"Service",      value:formData.service },
                      { label:"Date",         value:formData.date    },
                      { label:"Time",         value:formData.time    },
                      { label:"Notes",        value:formData.reason || "—" },
                    ].map((row,i) => (
                      <div key={i} style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:i<6?"1px solid #ede9fe":"none" }}>
                        <span style={{ fontSize:12,fontWeight:600,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.06em" }}>{row.label}</span>
                        <span style={{ fontSize:14,fontWeight:500,color:"#1e1b4b",textAlign:"right",maxWidth:"60%" }}>{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize:13,color:"#9ca3af",lineHeight:1.6,margin:0,fontWeight:300 }}>
                    By confirming, you agree to our appointment policy. We'll contact you to confirm your slot within 1 hour.
                  </p>

                  <div style={{ display:"flex",gap:12 }}>
                    <button type="button" onClick={()=>setStep(2)}
                      style={{ flex:1,background:"transparent",color:"#6b7280",border:"1.5px solid #e5e7eb",borderRadius:12,padding:"13px",fontSize:15,fontWeight:500,cursor:"pointer",fontFamily:"'DM Sans',sans-serif" }}
                      onMouseEnter={e=>e.currentTarget.style.borderColor="#7c3aed"}
                      onMouseLeave={e=>e.currentTarget.style.borderColor="#e5e7eb"}>
                      ? Back
                    </button>
                    <button type="submit" disabled={loading}
                      style={{
                        flex:3,background:loading?"#a78bfa":"linear-gradient(135deg,#7c3aed,#3b82f6)",
                        color:"#fff",border:"none",borderRadius:12,padding:"14px 28px",
                        fontSize:15,fontWeight:600,cursor:loading?"not-allowed":"pointer",
                        display:"flex",alignItems:"center",justifyContent:"center",gap:10,
                        boxShadow:"0 8px 24px rgba(124,58,237,0.28)",
                        fontFamily:"'DM Sans',sans-serif",transition:"box-shadow 0.2s",
                      }}>
                      {loading ? (
                        <>
                          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" style={{ animation:"spin 0.8s linear infinite" }}>
                            <circle cx="12" cy="12" r="10" strokeOpacity="0.3"/>
                            <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/>
                          </svg>
                          Booking…
                        </>
                      ) : (
                        <>
                          Confirm Appointment
                          <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div style={{ display:"flex",flexDirection:"column",gap:16 }}>
            {infoItems.map((item,i) => (
              <div key={i} style={{
                background:"#fff",borderRadius:16,padding:"20px",
                boxShadow:"0 4px 20px rgba(109,40,217,0.08)",
                border:`1.5px solid ${item.light}`,
                display:"flex",alignItems:"center",gap:14,
                opacity:formIn?1:0,transform:formIn?"translateY(0)":"translateY(20px)",
                transition:`opacity 0.6s ease ${0.1+i*0.1}s,transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1+i*0.1}s`,
              }}>
                <div style={{ width:46,height:46,borderRadius:13,background:item.light,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                  <svg width={22} height={22} viewBox="0 0 24 24" fill={item.accent}><path d={item.icon}/></svg>
                </div>
                <div>
                  <p style={{ fontSize:14,fontWeight:600,color:"#1e1b4b",margin:0 }}>{item.title}</p>
                  <p style={{ fontSize:12,color:"#9ca3af",margin:0,marginTop:3 }}>{item.sub}</p>
                </div>
              </div>
            ))}

            <div style={{ borderRadius:20,overflow:"hidden",boxShadow:"0 12px 40px rgba(109,40,217,0.12)",border:"1.5px solid #ede9fe",marginTop:4 }}>
              <img src="./appointment.jpg" alt="Doctor appointment" style={{ width:"100%",display:"block",objectFit:"cover",aspectRatio:"4/3" }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      <Footer />
    </>
  );
};

export default BookAppointment;
