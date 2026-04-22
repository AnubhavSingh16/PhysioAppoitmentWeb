import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Appoinment.css';

const highlights = [
  'Same-day booking support',
  'Personalised recovery plans',
  'Friendly expert guidance',
];

function Appointment() {
  const navigate = useNavigate();

  return (
    <section className="appointment-section">
      <div className="appointment-shell">
        <div className="appointment-visual">
          <div className="appointment-image-card">
            <img
              src="./appointment.jpg"
              alt="Physiotherapy appointment"
              className="appointment-image"
            />
            <div className="appointment-badge appointment-badge--top">
              <span className="appointment-badge-label">Easy Booking</span>
              <strong>Fast and flexible</strong>
            </div>
            <div className="appointment-badge appointment-badge--bottom">
              <span className="appointment-dot" />
              <span>Appointments designed around your schedule</span>
            </div>
          </div>
        </div>

        <div className="appointment-content">
          <span className="appointment-kicker">Book Appointment</span>
          <h2 className="appointment-title">
            Modern care that feels calm, clear, and easy to begin.
          </h2>
          <p className="appointment-copy">
            Start your recovery with a simple booking experience and a treatment plan
            built around your comfort, goals, and routine.
          </p>

          <div className="appointment-highlights">
            {/* {highlights.map((item) => (
              <div className="appointment-highlight" key={item}>
                <span className="appointment-highlight-icon">+</span>
                <span>{item}</span>
              </div>
            ))} */}
          </div>

          <div className="appointment-actions">
            <button
              type="button"
              className="appointment-primary"
              onClick={() => navigate('/book-appointment')}
            >
              Schedule Appointment
            </button>
            <button
              type="button"
              className="appointment-secondary"
              onClick={() => navigate('/contact-us')}
            >
              Contact Clinic
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appointment;
