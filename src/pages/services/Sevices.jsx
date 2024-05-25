import React from 'react'
import Navbar from '../../componenets/common/navbar/Navbar'
import Header from '../../componenets/header/Header'
import ServiceCardContainer from '../../componenets/serivicesCard/ServiceCardContainer'
import AboutService from '../../componenets/ourserves/AboutService'
import ContactForm from '../../componenets/form/ContactForm'
import Footer from '../../componenets/common/footer/Footer'

function Sevices() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <ServiceCardContainer/>
      <AboutService/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Sevices
