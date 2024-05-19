import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul className="navbar__menu">
          <li className="navbar__item"><a href="/">ГЛАВНАЯ</a></li>
          <li className="navbar__item"><a href="/services">СТРОИТЕЛЬСТВО ДОМОВ</a></li>
          <li className="navbar__item"><a href="/our-services">НАШИ УСЛУГИ</a></li>
          <li className="navbar__item"><a href="/design">ПРОЕКТИРОВАНИЕ</a></li>
          <li className="navbar__item"><a href="/about">О НАС</a></li>
          <li className="navbar__item"><a href="/contact">КОНТАКТЫ</a></li>
        </ul>
        <button className="navbar__button">ОСТАВИТЬ ЗАЯВКУ</button>
      </div>
    </nav>
  );
}

export default Navbar;
