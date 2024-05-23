import React from 'react'
import Navbar from '../../componenets/common/navbar/Navbar'
import AboutService from '../../componenets/ourserves/AboutService'
import Partner from '../../componenets/partneer/Partner'
import Footer from '../../componenets/common/footer/Footer'

function About() {
  return (
    <div>
      <Navbar/>
      <AboutService/>
      <Partner/>
      <Footer/>

    </div>
  )
}

export default About