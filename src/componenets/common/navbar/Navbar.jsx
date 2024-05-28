import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../../Assets/Logo.png'; // Ensure you have the logo image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="main-component">
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="Трест33" />
        </div>
        <div className="header-contact">
          <a href="tel:+74922379114">+7 (4922) 37-91-14</a>
        </div>
        <div className="header-menu-icon">
          <button onClick={() => setMenuOpen(true)}>☰</button>
        </div>
      </header>

      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <button onClick={() => setMenuOpen(false)}>✖</button>
        </div>
        <ul className="menu-list">
          <li>Главная</li>
          <li>Строительство домов</li>
          <li>Коттеджные поселки</li>
          <li>Строительные услуги</li>
          <li>Проектирование</li>
          <li>Наши работы</li>
          <li>Избранное</li>
          <li>О нас</li>
          <li>Ипотека</li>
          <li>Контакты</li>
        </ul>
        <div className="menu-footer">
          <p>Свяжитесь с нами:</p>
          <p>+7 (4922) 37-91-14</p>
          <p>г. Владимир, ул. Мира, д. 155, помещение 1</p>
          <p>info@trest33.ru</p>
          <div className="menu-social">
            <a href="#"><i className="fa fa-telegram"></i></a>
            <a href="#"><i className="fa fa-whatsapp"></i></a>
            <a href="#"><i className="fa fa-vk"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
