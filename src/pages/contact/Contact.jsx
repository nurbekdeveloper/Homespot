import React from 'react'
import Navbar from '../../componenets/common/navbar/Navbar'
import Modal from '../../componenets/appliacation/Modal'
import Partner from '../../componenets/partneer/Partner'

import "./contact.css"
import AboutService from '../../componenets/ourserves/AboutService'
import Footer from '../../componenets/common/footer/Footer'
function Contact() {
  return (
    <div>
        <div className="nav">   <Navbar/></div>
        <div className="containerr">
        <Modal/>
        <AboutService/>
        <Partner/>
        <Footer/>
        </div>
      
    </div>
  )
}

export default Contact
