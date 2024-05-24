// File: src/components/ProfileCard.js

import React from 'react';
import './worker.css';
import personImage from '../../Assets/personal.png';
// Make sure to place the image in the correct path
import Navbar from '../../componenets/common/navbar/Navbar';
import image from '../../Assets/profilImg.png';
import Icon from '../../Assets/Icon.webp';
import { icon } from '@fortawesome/fontawesome-svg-core';
import ProjectOf from '../../componenets/projectvedio/ProjectV';
import ContactForm from '../../componenets/form/ContactForm';
import Footer from '../../componenets/common/footer/Footer';

const Worker = () => {
    return (
        <div>
         <Navbar/>
            <div className="profile-card">
                <nav className="breadcrumb">
                    <a href="#">Главная</a> / <a href="#">Архитектор</a> / <a href="#">Анастасия Вивенцова</a>
                </nav>
                <div className="profile-header">
                    <h1>Анастасия Вивенцова</h1>
                </div>
                <div className="profile-content">
                    <img src={personImage} alt="Анастасия Вивенцова" className="profile-image" />
                    <div className="profile-details">
                        <p><strong>Основатель, дизайнер</strong></p>
                        <p>Санкт-Петербург</p>
                        <p><a href="http://www.ссылкавместофайла.рф" target="_blank" rel="noopener noreferrer">www.ссылкавместофайла.рф</a></p>
                        <p>Телефон: +7 800 000 00 00</p>
                        <p>Email: <a href="mailto:diz@diz.ru">diz@diz.ru</a></p>
                        <div className="social-media">
                            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">Telegram</a>
                            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                            <a href="https://viber.com" target="_blank" rel="noopener noreferrer">Viber</a>
                            <a href="https://vk.com" target="_blank" rel="noopener noreferrer">VK</a>
                        </div>
                        <button className="consultation-button">Консультация</button>
                    </div>
                </div>
                <div className="general-info-container">
                    <h1>Общая информация</h1>
                    <div className="info-columns">
                        <div className="info-column">
                            <div className="info-item">
                                <span>Страна  .............................................................................................</span>
                                <span>Россия</span>
                            </div>
                            <div className="info-item">
                                <span>Языки  .............................................................................................</span>
                                <span>Русский</span>
                            </div>
                            <div className="info-item">
                                <span>Опыт ...................................................................................................</span>
                                <span>13 лет</span>
                            </div>
                        </div>
                        <div className="info-column">
                            <div className="info-item">
                                <span>Форма занятости </span>
                                <span>........................................................................................Индивидуальный предприниматель</span>
                            </div>
                            <div className="info-item">
                                <span>Стайл  </span>
                                <span>.............................................................................................Современная классика, американская классика, современный стиль, контемпорари</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="design-studio-container">
                <div className="description-section">
                    <p>
                        Дизайн Студия Анастасии Вивенцовой занимается разработкой дизайн-проектов интерьеров, а также реализацией проектов под ключ и комплектацией всеми материалами и мебелью. Основатель студии Анастасия Вивенцова - дважды дипломированный специалист с красным дипломом международного образца, по специальностям Архитектура (СпАСК’09) и Дизайн Среды (СпбГУ’14)".
                    </p>
                </div>
                <div className="image-section">
                    <img src={image} alt="Interior Design" />
                </div>
            </div>
            <div className="awards-container">
      <div className="awards-column">
        <div className="award-item">
          <img src={Icon} alt="Award" className="award-icon" />
          <p>Финалист и лауреат интерьерных премий, таких как PINWIN и MODERN HOME Professional Design Award.</p>
        </div>
        <div className="award-item">
          <img src={Icon} alt="Award" className="award-icon" />
          <p>Публикации в печатных изданиях ДОМа и ИНТЕРЬЕРЫ, а также в учебном пособии для архитекторов и дизайнеров ИРГТУ (Иркутского Государственного Технического Университета).</p>
        </div>
      </div>
      <div className="awards-column">
        <div className="award-item">
          <img src={Icon} alt="Award" className="award-icon" />
          <p>В составе судейства Professional Design Award.</p>
        </div>
        <div className="award-item">
          <img src={Icon} alt="Award" className="award-icon" />
          <p>Частый гость Главного Петербургского Телеканала 78.</p>
        </div>
        <div className="award-item">
          <img src={Icon} alt="Award" className="award-icon" />
          <p>Best of Houzz design 2019-2022 по версии houzz.ru.</p>
        </div>
      </div>
    </div>
    <ProjectOf/>
    <div className="containerr">
    <ContactForm/>
    <Footer/>
    </div>


    </div>



    );
}

export default Worker;
