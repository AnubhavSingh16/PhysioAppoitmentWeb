// // import React from 'react';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// // import 'swiper/css';
// // import 'swiper/css/pagination';
// // import 'swiper/css/navigation';
// // import './services.css'; // Import your custom CSS for styling

// // function Services() {
// //   const services = [
// //     {
// //       image: './service4.jpg',
// //       title: 'Physiotherapy',
// //       description:
// //         'Physiotherapy can be an important part of the treatment and management of chronic pain. It can help to reduce pain, improve function and range of motion.',
// //     },
// //     {
// //       image: './service1.jpg',
// //       title: 'Chiropractic Therapy',
// //       description:
// //         'Chiropractic therapy focuses on the diagnosis and treatment of mechanical disorders of the musculoskeletal system.',
// //     },
// //     {
// //       image: './service2.jpg',
// //       title: 'Osteopathy Services',
// //       description:
// //         'Osteopathy treats and prevents health problems by movement, stretching, and manipulation of the musculoskeletal system.',
// //     },
// //     {
// //       image: './service4.jpg',
// //       title: 'Physiotherapy',
// //       description:
// //         'Physiotherapy can be an important part of the treatment and management of chronic pain. It can help to reduce pain, improve function and range of motion.',
// //     },
// //     {
// //       image: './service1.jpg',
// //       title: 'Chiropractic Therapy',
// //       description:
// //         'Chiropractic therapy focuses on the diagnosis and treatment of mechanical disorders of the musculoskeletal system.',
// //     },
// //   ];

// //   return (
// //     <div className="services-wrapper mt-8 mb-10 py-4">
// //       <h1 className="text-4xl md:text-5xl text-center font-light mb-6 py-2">
// //         Our Services
// //       </h1>

// //       {/* Container for Swiper and Navigation */}
// //       <div className=" swiper-container relative flex items-center justify-between max-w-md md:max-w-5xl lg:max-w-7xl mx-auto ">
// //         {/* Left/Prev button (hidden on small screens) */}
// //         <div className="swiper-button-prev custom-prev hidden md:flex"></div>

// //         {/* Swiper for Services Cards */}
// //         <Swiper
// //           breakpoints={{
// //             640: { slidesPerView: 1 }, 
// //             768: { slidesPerView: 2 }, 
// //             1024: { slidesPerView: 3 }, 
// //           }}
// //           spaceBetween={20} 
// //           loop={true}
// //           autoplay={{
// //             delay: 5000,
// //             disableOnInteraction: false,
// //           }}
// //           pagination={{
// //             clickable: true,
// //           }}
// //           navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }} 
// //           modules={[Autoplay, Pagination, Navigation]}
// //           className="w-full"
// //         >
// //           {services.map((service, index) => (
// //             <SwiperSlide key={index}>
// //               <div className="mt-4 mb-4 service-slide flex flex-col items-center text-center w-full h-full p-4 box-border hover:bg-blue-100 transition-all duration-300">
// //                 <img
// //                   className="h-56 w-full md:h-64 object-cover rounded-lg border-blue-500 border-2 shadow-lg"
// //                   src={service.image}
// //                   alt={service.title}
// //                 />
// //                 <div className="mt-5 flex-grow">
// //                   <h2 className="text-lg md:text-xl font-semibold">
// //                     {service.title}
// //                   </h2>
// //                   <p className="mt-2 text-gray-600 text-sm md:text-base h-20 md:h-32">
// //                     {service.description}
// //                   </p>
// //                 </div>
// //               </div>
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>

// //         {/* Right/Next button (hidden on small screens) */}
// //         <div className="swiper-button-next custom-next hidden md:flex"></div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Services;


// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import './services.css';

// const services = [
//   {
//     image: './service4.jpg',
//     title: 'Physiotherapy',
//     tags: ['Assess', 'Treat', 'Recover'],
//     description:
//       'Physiotherapy helps reduce chronic pain, improve function and range of motion through targeted movement and rehabilitation techniques.',
//     accent: '#a855f7',
//   },
//   {
//     image: './service1.jpg',
//     title: 'Chiropractic Therapy',
//     tags: ['Align', 'Adjust', 'Heal'],
//     description:
//       'Chiropractic therapy focuses on the diagnosis and treatment of mechanical disorders of the musculoskeletal system.',
//     accent: '#818cf8',
//   },
//   {
//     image: './service2.jpg',
//     title: 'Osteopathy Services',
//     tags: ['Stretch', 'Mobilise', 'Balance'],
//     description:
//       'Osteopathy treats and prevents health problems by movement, stretching, and manipulation of the musculoskeletal system.',
//     accent: '#c084fc',
//   },
//   {
//     image: './service4.jpg',
//     title: 'Sports Rehab',
//     tags: ['Perform', 'Recover', 'Strengthen'],
//     description:
//       'Specialised sports rehabilitation programmes designed to get athletes back to peak performance quickly and safely.',
//     accent: '#a855f7',
//   },
//   {
//     image: './service1.jpg',
//     title: 'Dry Needling',
//     tags: ['Trigger', 'Release', 'Relieve'],
//     description:
//       'Dry needling targets myofascial trigger points to relieve muscle tension, reduce pain and restore movement.',
//     accent: '#818cf8',
//   },
// ];

// // Which slides are "featured" (taller, centered) — center every 3rd
// const isFeatured = (index) => index % 3 === 1;

// function Services() {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <section className="services-section">
//       {/* Ambient glow blobs */}
//       <div className="glow-blob glow-left" />
//       <div className="glow-blob glow-right" />

//       {/* Header */}
//       <div className="services-header">
//         <h2 className="services-title">Our Services</h2>
//         <div className="services-title-line" />
//         <p className="services-subtitle">
//           Expert care across a full spectrum of physiotherapy disciplines
//         </p>
//       </div>

//       {/* Swiper */}
//       <div className="swiper-outer">
//         <button ref={prevRef} className="nav-btn nav-prev" aria-label="Previous">
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <Swiper
//           breakpoints={{
//             0:    { slidesPerView: 1 },
//             640:  { slidesPerView: 1.4 },
//             768:  { slidesPerView: 2.2 },
//             1024: { slidesPerView: 3 },
//           }}
//           spaceBetween={24}
//           centeredSlides={true}
//           loop={true}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           pagination={{ clickable: true, el: '.custom-pagination' }}
//           navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
//           onSwiper={(swiper) => {
//             // Re-init navigation after refs are set
//             setTimeout(() => {
//               if (swiper.params?.navigation) {
//                 swiper.params.navigation.prevEl = prevRef.current;
//                 swiper.params.navigation.nextEl = nextRef.current;
//                 swiper.navigation.init();
//                 swiper.navigation.update();
//               }
//             });
//           }}
//           modules={[Autoplay, Pagination, Navigation]}
//           className="services-swiper"
//         >
//           {services.map((service, index) => (
//             <SwiperSlide key={index} className={isFeatured(index) ? 'featured-slide' : ''}>
//               <div
//                 className={`service-card ${isFeatured(index) ? 'service-card--featured' : ''}`}
//                 style={{ '--accent': service.accent }}
//               >
//                 {/* Image area */}
//                 <div className="card-image-wrap">
//                   <img src={service.image} alt={service.title} className="card-image" />
//                   <div className="card-image-overlay" />
//                   {/* Tags row */}
//                   <div className="card-tags">
//                     {service.tags.map((tag, i) => (
//                       <span key={i} className="card-tag">{tag}</span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="card-body">
//                   <h3 className="card-title">{service.title}</h3>
//                   <p className="card-desc">{service.description}</p>
//                   <button className="card-cta">
//                     Learn More
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>
//                 </div>

//                 {/* Glow border on hover */}
//                 <div className="card-glow-border" />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <button ref={nextRef} className="nav-btn nav-next" aria-label="Next">
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>

//       {/* Pagination */}
//       <div className="custom-pagination" />
//     </section>
//   );
// }

// export default Services;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './services.css';

const services = [
  {
    image: './service4.jpg',
    title: 'Physiotherapy',
    tags: ['Assess', 'Treat', 'Recover'],
    description:
      'Physiotherapy helps reduce chronic pain, improve function and range of motion through targeted movement and rehabilitation techniques.',
    accent: '#a855f7',
  },
  {
    image: './service1.jpg',
    title: 'Chiropractic Therapy',
    tags: ['Align', 'Adjust', 'Heal'],
    description:
      'Chiropractic therapy focuses on the diagnosis and treatment of mechanical disorders of the musculoskeletal system.',
    accent: '#818cf8',
  },
  {
    image: './service2.jpg',
    title: 'Osteopathy Services',
    tags: ['Stretch', 'Mobilise', 'Balance'],
    description:
      'Osteopathy treats and prevents health problems by movement, stretching, and manipulation of the musculoskeletal system.',
    accent: '#c084fc',
  },
  {
    image: './service4.jpg',
    title: 'Sports Rehab',
    tags: ['Perform', 'Recover', 'Strengthen'],
    description:
      'Specialised sports rehabilitation programmes designed to get athletes back to peak performance quickly and safely.',
    accent: '#a855f7',
  },
  {
    image: './service1.jpg',
    title: 'Dry Needling',
    tags: ['Trigger', 'Release', 'Relieve'],
    description:
      'Dry needling targets myofascial trigger points to relieve muscle tension, reduce pain and restore movement.',
    accent: '#818cf8',
  },
];

function Services() {
  return (
    <section className="services-section ">
      <div className="glow-blob glow-left" />
      <div className="glow-blob glow-right" />

      <div className="services-header">
        <h2 className="services-title">Our Services</h2>
        <div className="services-title-line" />
        <p className="services-subtitle">
          Expert care across a full spectrum of physiotherapy disciplines
        </p>
      </div>

      <div className="swiper-outer">
        <Swiper
          centeredSlides
          loop
          speed={600}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          modules={[Autoplay, Pagination]}
          className="services-swiper"
          breakpoints={{
            0:    { slidesPerView: 1,   spaceBetween: 16 },
            640:  { slidesPerView: 1.6, spaceBetween: 24 },
            900:  { slidesPerView: 2.5, spaceBetween: 28 },
            1100: { slidesPerView: 3,   spaceBetween: 36 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-card" style={{ '--accent': service.accent }}>
                <div className="card-image-wrap">
                  <img src={service.image} alt={service.title} className="card-image" />
                  <div className="card-image-overlay" />
                  <div className="card-tags">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="card-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-desc">{service.description}</p>
                  <button className="card-cta">
                    Learn More
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="card-glow-border" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom-pagination" />
    </section>
  );
}

export default Services;