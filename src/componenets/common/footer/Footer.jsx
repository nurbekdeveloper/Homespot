// src/Footer.js
import React from 'react';
import './Footer.css';
import logo from '../../../Assets/Logo.png'; // Ensure the logo image is in the src folder

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <img src={logo} alt="DOMOSBOR" className="footer-logo" />
          <p>ООО «Основа»</p>
          <p>ИНН: 7814791026</p>
          <p>ОРГН: 1217800076240</p>
          <p>Сервис DOMOSBOR</p>
        </div>
        <div className="footer-column">
          <h3>Типы строений</h3>
          <p>Дома</p>
          <p>Бани</p>
          <p>Гаражи</p>
          <p>Навесы</p>
          <p>Коммерческие объекты</p>
        </div>
        <div className="footer-column">
          <h3>Сервис</h3>
          <p>О сервисе</p>
          <p>Галерея</p>
          <p>Блог</p>
          <p>Отзывы</p>
          <p>Услуги</p>
        </div>
        <div className="footer-column">
          <h3>Информация</h3>
          <p>Оплата</p>
          <p>Документы</p>
          <p>Контакты</p>
          <p>Сотрудничество</p>
        </div>
        <div className="footer-column">
          <h3>Партнеры сервиса</h3>
          <p>Архитекторы</p>
          <p>Дизайнеры</p>
          <p>Заводы</p>
        </div>
        <div className="footer-column contact-info">
          <h3>DOMOSBOR - Магазин</h3>
          <h3>DOMOSBOR - Форум</h3>
          <p>8 (800) 301-50-51</p>
          <a href="tel:88003015051">Заказать обратный звонок</a>
          <a href="mailto:info@domosbor.ru">info@domosbor.ru</a>
          <p>Санкт-Петербург, Московский пр. 212, офис 3035</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          {/* Add your social media icons here */}
        </div>
        <p>Политика конфиденциальности</p>
        <p>© 2022 «DOMOSBOR». Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
