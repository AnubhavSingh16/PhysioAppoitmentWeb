import React from 'react';
import './services.css';

const services = [
  {
    image: './service4.jpg',
    title: 'Physiotherapy',
    description:
      'Personalised treatment plans to reduce pain, improve movement, and support long-term recovery.',
  },
  {
    image: './service1.jpg',
    title: 'Chiropractic Therapy',
    description:
      'Gentle hands-on care focused on mobility, alignment, and day-to-day physical comfort.',
  },
  {
    image: './service2.jpg',
    title: 'Osteopathy Services',
    description:
      'Whole-body treatment that helps ease tension, restore balance, and improve movement quality.',
  },
  {
    image: './service4.jpg',
    title: 'Sports Rehab',
    description:
      'Recovery-focused support to rebuild strength, confidence, and performance after injury.',
  },
  {
    image: './service1.jpg',
    title: 'Dry Needling',
    description:
      'Targeted therapy to release tight muscles, ease pain, and improve functional movement.',
  },
];

const scrollingServices = [...services, ...services];

function Services() {
  return (
    <section className="services-section">
      <div className="services-header">
        <span className="services-kicker">Our Services</span>
        <h2 className="services-title">Simple, focused care for every stage of recovery.</h2>
        <p className="services-subtitle">
          A calm overview of the treatments we offer, designed to feel easy to scan and easy to trust.
        </p>
      </div>

      <div className="services-marquee">
        <div className="services-track">
          {scrollingServices.map((service, index) => (
            <article className="service-card" key={`${service.title}-${index}`}>
              <div className="card-image-wrap">
                <img src={service.image} alt={service.title} className="card-image" />
              </div>
              <div className="card-body">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
