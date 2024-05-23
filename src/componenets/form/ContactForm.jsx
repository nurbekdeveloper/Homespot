// src/ContactForm.js
import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="all">
      <form className="form">
        <input type="text" placeholder="Имя" className="input" />
        <input type="email" placeholder="Электронная почта" className="input" />
        <input type="tel" placeholder="Телефон" className="input" />
        <textarea placeholder="Сообщение" rows="4" className="textarea" />
        <div className="attachment">
          <label htmlFor="file-upload" className="custom-file-upload">
            + Прикрепить файлы
          </label>
          <input id="file-upload" type="file" className="file-input" />
        </div>
        <button type="submit" className="buttonForm">Отправить</button>
      </form>
      <div className="description" >
        <h2>Расчёт стоимости по вашему проекту</h2>
        <p  style={{color:'white'}}>
          Мы считаем большим заблуждением, когда клиенты выбирают архитектурную студию по стоимости проектирования. В частном жилом строительстве есть правило: стоимость проекта составляет 5-10% от стоимости его реализации.
        </p>
        <p  style={{color:'white'}}>
          Не откладывайте с реализацией своих задумок, обращайтесь прямо сейчас!
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
