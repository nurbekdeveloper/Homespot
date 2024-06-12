import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <img src="/path-to-your-logo.png" alt="DOMOSBOR Logo" className="footer-logo" />
          <p>ООО «Основа»</p>
          <p>ИНН: 7814791026</p>
          <p>ОРГН: 1217800076240</p>
          <p>Сервис DOMOSBOR</p>
        </div>

        <div className="footer-section">
          <h4>Сервис</h4>
          <Link to="/">Главная</Link>
          <Link to="/construction">Строительство</Link>
          <Link to="/services">Наши Услуги</Link>
          <Link to="/design">Проектирование</Link>
          <Link to="/services"></Link>
        </div>
        <div className="footer-section">
          <h4>Наши  сервиса</h4>
          <Link to="/about">О Нас</Link>
          <Link to="/project">Наши Работы</Link>
          <Link to="/contact">Контакты</Link>
        </div>
        <div className="footer-section">
          <h4>Типы строений</h4>
          <Link to="/homes">Дома</Link>
          <Link to="/baths">Бани</Link>
          <Link to="/garages">Гаражи</Link>
          <Link to="/canopies">Навесы</Link>
          <Link to="/commercial">Коммерческие объекты</Link>
        </div>
        <div className="footer-section contact-section">
          <h4>DOMOSBOR - Магазин</h4>
          <h4>DOMOSBOR - Форум</h4>
          <p>8 (800) 301-50-51</p>
          <p><a href="mailto:info@domosbor.ru">info@domosbor.ru</a></p>
          <p>Санкт-Петербург, Московский пр., 212, офис 3035</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-media">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaTiktok /></a>
        </div>
        <p>Политика конфиденциальности</p>
        <p>© 2022 DOMOSBOR. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
