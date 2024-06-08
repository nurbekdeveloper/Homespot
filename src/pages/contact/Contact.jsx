import React, { useEffect } from 'react'

import Modal from '../../componenets/appliacation/Modal'
import Partner from '../../componenets/partneer/Partner'

import "./contact.css"
import AboutService from '../../componenets/ourserves/AboutService'


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
                    <p>г. Владимир, Большая,<br /> Нижегородская улица, 27</p>
                </div>
                <div className="contact-item">
                    <i className="fa fa-envelope"></i>
                    <p>info@swedstandard.ru</p>
                </div>
                <div className="contact-item">
                    <i className="fa fa-phone"></i>
                    <p>+7(920) 926 07 07</p>
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
                <iframe src="https://yandex.uz/map-widget/v1/?ll=40.470595%2C56.146894&mode=whatshere&whatshere%5Bpoint%5D=40.426434%2C56.136111&whatshere%5Bzoom%5D=17&z=13.1" width="560" height="400" frameborder="1" allowfullscreen="true" ></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
