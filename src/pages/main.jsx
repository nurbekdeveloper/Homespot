import BuildingTypes from '../componenets/types/BuildTypes'

import Header from '../componenets/header/Header'
import ContactForm from '../componenets/form/ContactForm'

import AboutService from '../componenets/ourserves/AboutService'
import Footer from '../componenets/footer/Footer'

import Navbar from '../componenets/navbar/Navbar'
import Technology from '../componenets/technology/Technology'
import UsefulLinks from '../componenets/usefulLinks/UsefulLinks'



function Main() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutService/>
      <ContactForm/>
      <Technology/>
      <BuildingTypes/>
      <UsefulLinks/>
      <Footer/>




    </div>
  )
}

export default Main