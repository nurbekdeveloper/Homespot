import React from 'react'
import './SendInfo.css'
const SendInfo = () => {
  return (
    <div>

<div className="contact-form-container">
      <div className="contact-form-image">
        <img src="path-to-your-image.png" alt="Contact Us" />
      </div>
      <div className="contact-form-content">
        <h2>Оставьте ваши контакты и с вами свяжутся в ближайшее время</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group form-checkbox">
            <input type="checkbox" id="consent" name="consent" required />
            <label htmlFor="consent">Даю согласие на обработку персональных данных</label>
          </div>
          <button type="submit">ОСТАВИТЬ ЗАЯВКУ</button>
        </form>
      </div>
    </div>



    </div>
  )
}

export default SendInfo