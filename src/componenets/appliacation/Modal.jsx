import React, { useState } from 'react';
import './modal.css';
import quoteImage from '../../Assets/person.png'; // Update the path to your image file
import { Button, Modal } from 'antd';
const Modals = (props) => {
  const {open,setModal2Open} = props

  return (
    <>
      <Modal
        title="Vertically centered modal dialog"
        width={1000}
        centered
        open={open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <div className="quote-section">
      <div className="quote-form">
        <input type="text" placeholder="Имя" className="quote-input" />
        <input type="email" placeholder="Электронная почта" className="quote-input" />
        <input type="tel" placeholder="Телефон" className="quote-input" />
        <textarea placeholder="Сообщение" className="quote-textarea"></textarea>
        <div className="quote-attach">
          <span>+ Прикрепить файлы</span>
        </div>
        <button className="quote-button" onClick={() => setModal2Open(false)}>Отправить</button>
        <div className="quote-icons">
          <span>📧</span>
          <span>📱</span>
          <span>📞</span>
        </div>
      </div>
      <div className="quote-image">
        <img src={quoteImage} alt="Project Quote" />
      </div>
    </div>
      </Modal>
  
    
      </>
  );
};

export default Modals;
