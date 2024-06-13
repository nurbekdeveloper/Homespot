// src/Footer.js
import React from 'react';
import './Footer.css';
import logo from '../../../Assets/Logo.png'; // Ensure the logo image is in the src folder
import { Link } from 'react-router-dom';

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

          <p>
            <Link to={"/"}>Главная </Link>
          </p>
          <p>
            <Link to={"/construction"} >Строительство </Link>
          </p>
          <p>
          <Link to={"/servces"}>Наши Услуги</Link>
          </p>
          <p>
            <Link to={"/design"}>Проектирование</Link>
          </p>
        </div>
        <div className="footer-column">

          <p><Link to={"/about"}>О Нас</Link></p>
          <p><Link to={"/project"}>Наши Работы </Link></p>

          <p><Link>Контакты </Link></p>

        </div>


        <div className="footer-column contact-info">
          <h3>Шведстандарт</h3>

          <p>+7(920) 926 07 07</p>
          <a href="tel:88003015051">Заказать обратный звонок</a>
          <a href="mailto:info@swedstandard.ruu">info@swedstandard.ru</a>
          <p>г. Владимир, Большая Нижегородская улица, 27</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          {/* Add your social media icons here */}
        </div>
        <p>Политика конфиденциальности</p>
        <p>© 2022 «Шведстандарт». Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
