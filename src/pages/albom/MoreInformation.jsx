import React, { useState } from "react";
import carousel1 from "../../Assets/1crousel.png";
import carousel2 from "../../Assets/2carousel.png";
import carousel3 from "../../Assets/3carousel.png";
import freeImg from "../../Assets/freeimg.jpg";

import {
  FaShieldAlt,
  FaUserTie,
  FaHandshake,
  FaHardHat,
  FaTag,
  FaUsers,
  FaCalendarAlt,
  FaTasks,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import CardContainer from "../../componenets/project/CardContainer";
import ContactForm from "../../componenets/form/ContactForm";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./MoreInformation.css";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { changeModal } from "../../pages/redux/slice/modal.slice";

function MoreInformation() {
  const dispatch = useDispatch();

  const imgs = [
    { id: 0, value: carousel3 },
    { id: 1, value: carousel1 },
    { id: 2, value: carousel2 },
  ];

  const [wordData, setWordData] = useState(imgs[0]);
  const [val, setVal] = useState(0);

  const handleClick = (index) => {
    setVal(index);
    setWordData(imgs[index]);
  };
  return (
    <div className="main-carousel">
      <div className="carousel-informations">
        <div className="main-1">
          <img src={wordData.value} alt="Main" />
          <div className="flex_row">
            {imgs.map((data, i) => (
              <div className="thumbnail" key={i}>
                <img
                  className={wordData.id === i ? "clicked" : ""}
                  src={data.value}
                  alt={`Thumbnail ${i}`}
                  onClick={() => handleClick(i)}
                />
              </div>

            ))}
          </div>
        </div>
        <div className="construction-cost">
          <h1 className="font-semibold  text-2xl">
            Стоимость строительства дома
          </h1>

          <div className="cost">9 045 283 руб.</div>
          <div className="note">Без учета устройства террасы</div>
          <div className="details">
            <div className="detail">
              <span className="icon">🏠</span> 165.7 м<sup>2</sup>
            </div>
            <div className="detail">
              <span className="icon">🛏️</span> 3
            </div>
            <div className="detail">
              <span className="icon">🏢</span> 1 этаж
            </div>
          </div>
          <div className="article">Артикул: 000432</div>
          <div className="specifications">
            <h2>Спецификация</h2>
            <ul className="label-items">
              <li className="label-item">
                Фундамент – монолитная ж/б плита 300 мм, с разводкой системы
                канализации, водопровода.
              </li>
              <li className="label-item">
                Стены на выбор: камень керамический Porotherm 2/NF красный
                250*120*140 М-150, толщина стен 380мм или керамический блок
                Porotherm Thermo 380, (250*380*219), марка–М100.
              </li>
              <li className="label-item">
                Потолки – 1-й этаж 3м, 2-ой этаж 2.75м.
              </li>
              <li className="label-item">
                Перекрытие – по деревянным балкам с обработкой огне–биозащитой.
              </li>
              <li className="label-item">
                Перегородки на выбор: 120мм, красный керамический кирпич М-150
                или 120мм, керамический блок Porotherm 12, марка М-100.
              </li>
              <li className="label-item">
                Кровля – плоская мембранного типа с утеплением и внутренним
                организованным водоотводом системой.
              </li>
            </ul>
          </div>
          <div className="buttons">
            <button
              onClick={() => dispatch(changeModal(true))}
              className="consultation bg-[#65a30d]"
            >
              Получить консультацию
            </button>
          </div>
        </div>
      </div>

      <div className="info-section">
        <section className="header-icon">
          <h2 className="font-semibold  text-2xl">
            Что еще входит в стоимость
          </h2>
          <div className="features">
            <div className="feature">
              <FaShieldAlt size={50} />
              <p>5 лет гарантии</p>
            </div>
            <div className="feature">
              <FaUserTie size={50} />
              <p>Персональный менеджер</p>
            </div>
            <div className="feature">
              <FaHandshake size={50} />
              <p>Сопровождение заказчика</p>
            </div>
            <div className="feature">
              <FaHardHat size={50} />
              <p>Технический надзор</p>
            </div>
          </div>
        </section>

        <div>
        <h2 className="font-semibold  mb-[100px] text-2xl">Дополнительные услуги</h2>
          <div className="extra-usluge">

            <div className="extra-usluge-element">
              <section className="additional-services">
                <h3 className="font-semibold  text-xl">Варианты фасадов</h3>
                <ul className="text-left flex items-center flex-col">
                  <li className="text-left">Облицовочный кирпич</li>
                  <li className="text-left">Декоративная штукатурка</li>
                  <li className="text-left">Комбинированная отделка фасада</li>
                </ul>
                <a href="#">Стоимость по запросу</a>
              </section>
              <section className="house-finishing">
                <h2 className="font-semibold  text-2xl">
                  Предчистовая отделка дома
                </h2>
                <p>
                  Штукатурка стен, полусухая стяжка пола, электрика, сантехника,
                  отопление
                </p>
                <p className="price">цена от 9 900 ₽/кв.м.</p>
              </section>
            </div>
            <img src={freeImg} alt="salom " />
          </div>
        </div>

        <section className="reasons-to-trust  mt-[40px] ">
          <h2 className="font-semibold   mb-[100px]  text-2xl">Почему с нами надежно?</h2>
          <div className="trust-features">
            <div className="trust-feature">
              <FaTag size={50} />
              <p>Фиксированная цена</p>
              <p>
                Стоимость строительства не меняется после заключения договора
              </p>
            </div>
            <div className="trust-feature">
              <FaUsers size={50} />
              <p>Квалифицированный персонал</p>
              <p>
                В нашей компании только профильные специалисты, что гарантирует
                качество выполненных работ
              </p>
            </div>
            <div className="trust-feature">
              <FaCalendarAlt size={50} />
              <p>10 лет на рынке</p>
              <p>Знакомы со всеми тонкостями и нюансами строительного рынка</p>
            </div>
            <div className="trust-feature">
              <FaTasks size={50} />
              <p>Поэтапная оплата</p>
              <p>
                Вы платите за фактически выполненный этап работ, после приемки
                этапа и подписания акта выполненных работ
              </p>
            </div>
          </div>
        </section>

        <div className="contact-buttons">
          <button className="telegram">
            <FaTelegramPlane size={20} /> НАПИСАТЬ В TELEGRAM
          </button>
          <button className="whatsapp bg-[green]">
            <FaWhatsapp size={20} /> НАПИСАТЬ В WHATSAPP
          </button>
        </div>
      </div>

      <CardContainer />
      <ContactForm />
    </div>
  );
}

export default MoreInformation;
