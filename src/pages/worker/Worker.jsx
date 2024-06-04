// File: src/components/ProfileCard.js

import React from 'react';
import './worker.css';
import personImage from '../../Assets/homepersonal.png';
// Make sure to place the image in the correct path

import image from '../../Assets/profilImg.png';
import Icon from '../../Assets/Icon.webp';
import ProjectOf from '../../componenets/projectvedio/ProjectV';
import ContactForm from '../../componenets/form/ContactForm';


const Worker = () => {

    return (
        <div>

            {/* <div className="profile-card">

                <div className="profile-header">
                    <h1>Денис Сергеев</h1>
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
                    <div className="info-container">
                        <h1>Общая информация</h1>
                        <div className="info-grid">
                            <div>
                            <div className="info-item">
                                <span>Страна</span>
                                <span>Россия</span>
                            </div>
                            <div className="info-item">
                                <span>Языки</span>
                                <span>Русский</span>
                            </div>
                            <div className="info-item">
                                <span>Опыт</span>
                                <span>13 лет</span>
                            </div>
                            </div>
                        <div>
          <div className="info-item">
            <span>Форма занятости</span>
            <span>Индивидуальный предприниматель</span>
          </div>
          <div className="info-item">
            <span>Стайл</span>
            <span>Современная классика, американская классика, современный стиль, контемпорари</span>
          </div>
        </div>
      </div>
    </div>
            </div> */}
            <div className="design-studio-container">
                <div className="description-section">
                    <p>
                    Наше проектирование домов основано на богатом опыте практикующих строителей. Мы понимаем важность экономической эффективности и избегаем неоправданных затрат. Наша команда проектировщиков и инженеров тщательно анализирует все конструктивные решения, чтобы обеспечить их практичность и доступность. Мы избегаем сложных и дорогих элементов, которые часто включаются в проекты без учета их реальной стоимости. Наш подход позволяет вам получить качественный и надежный дом без переплат за ненужные архитектурные излишества.
                    </p>
                </div>
                <div className="image-section">
                    <img src={image} alt="Interior Design" />
                </div>
            </div>
            <div className="design-studio-container">
            <div className="image-section">
                    <img src={image} alt="Interior Design" />
                </div>
                <div className="description-section">
                  <h1>
                  Состав проектной документации
                  </h1>
                  <h3>Архитектурное решение (АР)</h3>
                    <p>
                    АР — альбом архитектурных решений, который подходит для возведения небольших типовых строений со стандартными инженерными решениями. Он включает в себя планировочные решения без сложных элементов, таких как эркеры, балконы или большие пролеты. Фундамент в таких проектах — исключительно монолитная плита, а кровля — двускатная или стандартная вальмовая.
                    </p>
                    <h3>Что входит в состав документации:</h3>
                    <ul>
                      <li>•	Титульный лист: Основная информация о проекте, включая название, адрес объекта, данные заказчика и исполнителя, а также перечень всех разделов документации.</li>
                      <li>•	Общие данные: Введение, описание проекта, цели и задачи, нормативные документы и требования, использованные в проектировании, а также общие характеристики здания.</li>
                      <li>•	Схема планировочной организации земельного участка: Детализированная схема участка, включающая размещение здания, инженерных коммуникаций, подъездных путей, зеленых зон и других элементов. Это помогает обеспечить оптимальную организацию пространства и удобство эксплуатации.</li>

                    </ul>
                    <p>Кроме этого, проектная документация может включать дополнительные разделы в зависимости от конкретных требований и особенностей проекта.</p>
                    <button>Заказать</button>
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

    <ContactForm/>



    </div>



    );
}

export default Worker;
