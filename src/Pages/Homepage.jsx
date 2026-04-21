import React from 'react'
import Header from '../components/Header/Header'
import Labelitem from '../components/Labelitem/Labelitem'
import Offer from '../components/Offer/Offer'
import Services from '../components/Services/Services'
import Care from '../components/Care/Care'
import Testimonial from '../components/Testimonials/Testimonials'
import Appoinment from '../components/Appointment/Appoinment'
import Footer from '../components/Footer/Footer'
import Aboutus from '../components/Aboutus/Aboutus'
import { useEffect } from "react";

function Homepage() {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <>
      <Header/>
      {/* <Aboutus/> */}
      <Offer/>
      <Services/>
      <Care/>
      <Testimonial/>
      <Appoinment/>
      <Footer/>
    </>
  )
}

export default Homepage