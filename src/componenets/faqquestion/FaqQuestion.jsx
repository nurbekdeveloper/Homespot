// src/components/FAQ.js

import React, { useState } from 'react';

import emailjs from 'emailjs-com';
import './FaqQuestion.css';

const FaqQuestion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( 'service_1h1wy3c', 'template_k2emazw', e.target, 'QZV_l_vLAqERc79MY')
      .then((result) => {
        console.log(result.text);
        alert('Сообщение отправлено!');
      }, (error) => {
        console.log(error.text);
        alert('Ошибка при отправке сообщения.');
      });

    e.target.reset();
  };

  return (
    <div className="faq-container">
      <div className="faq">
        <div className="faq-question" onClick={() => toggleFAQ(1)}>
          Вопрос 1 ?
        </div>
        {activeIndex === 1 && <div className="faq-answer">Ответ на вопрос 1</div>}
      </div>
      <div className="faq">
        <div className="faq-question" onClick={() => toggleFAQ(2)}>
          Вопрос 2 ?
        </div>
        {activeIndex === 2 && (
          <div className="faq-answer">
            <img src="path/to/your/image.png" alt="FAQ" className="faq-image" />
          </div>
        )}
      </div>
      <div className="faq">
        <div className="faq-question" onClick={() => toggleFAQ(3)}>
          Вопрос 3 ?
        </div>
        {activeIndex === 3 && <div className="faq-answer">Ответ на вопрос 3</div>}
      </div>
      <div className="faq">
        <div className="faq-question" onClick={() => toggleFAQ(4)}>
          Вопрос 4 ?
        </div>
        {activeIndex === 4 && <div className="faq-answer">Ответ на вопрос 4</div>}
      </div>
      <div className="contact-form">
        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Имя" required />
          <input type="email" name="email" placeholder="Электронная почта" required />
          <input type="tel" name="phone" placeholder="Телефон" />
          <textarea name="message" placeholder="Сообщение" required></textarea>

          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default FaqQuestion;
