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
      <AboutService/>
      <div className="contact-container">
            <div className="contact-info">
                <div className="contact-item">
                    <i className="fa fa-map-marker"></i>
                    <p>1st Floor, Vincent Plaza,<br /> Kuzhithurai, Tamilnadu - 629 163</p>
                </div>
                <div className="contact-item">
                    <i className="fa fa-envelope"></i>
                    <p>sales@smarteyeapps.com<br />support@smarteyeapps.com</p>
                </div>
                <div className="contact-item">
                    <i className="fa fa-phone"></i>
                    <p>+912 344 43434 443<br />+041 3434 44343 43</p>
                </div>
            </div>
            <div className="contact-form-map">
                <div className="contact-form">
                    <h2>Contact Form</h2>
                    <form>
                        <input type="text" placeholder="Enter Full Name" required />
                        <input type="text" placeholder="Enter Mobile Number" required />
                        <input type="email" placeholder="Enter Email Address" required />
                        <textarea placeholder="Enter Your Text" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126742.82431012034!2d77.46854343155663!3d8.178191542003582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b056dfdc76e757d%3A0x621dd4b8fd72f0e2!2sKuzhithurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620282106887!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
