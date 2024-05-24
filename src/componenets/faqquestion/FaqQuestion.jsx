// src/components/FAQ.js

import React, { useState } from 'react';
import './FaqQuestion.css';

const FaqQuestion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
        <h3>Не нашли нужный ответ?</h3>
        <p>Мы готовы ответить на любой ваш вопрос!</p>
        <form>
          <input type="text" placeholder="Имя" required />
          <input type="email" placeholder="Электронная почта" required />
          <input type="tel" placeholder="Телефон" />
          <textarea placeholder="Сообщение" required></textarea>
          <input type="file" />
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default FaqQuestion;
