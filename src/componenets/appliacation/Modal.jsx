import React from 'react';
import './modal.css';
import quoteImage from '../../Assets/person.png'; // Update the path to your image file

const Modal = () => {
  return (
    <div className="quote-section">
      <div className="quote-form">
        <input type="text" placeholder="Имя" className="quote-input" />
        <input type="email" placeholder="Электронная почта" className="quote-input" />
        <input type="tel" placeholder="Телефон" className="quote-input" />
        <textarea placeholder="Сообщение" className="quote-textarea"></textarea>
        <div className="quote-attach">
          <span>+ Прикрепить файлы</span>
        </div>
        <button className="quote-button">Отправить</button>
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
  );
};

export default Modal;
