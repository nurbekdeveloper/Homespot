import React, { useEffect } from 'react'

import Modal from '../../componenets/appliacation/Modal'
import Partner from '../../componenets/partneer/Partner'

import "./contact.css"
import AboutService from '../../componenets/ourserves/AboutService'
import ContactForm from '../../componenets/form/ContactForm'

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <ContactForm/>
        <Partner/>
    </div>
  )
}

export default Contact
