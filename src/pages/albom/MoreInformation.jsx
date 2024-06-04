import React, { useState } from "react";
import "./MoreInformation.css";
import ContactForm from "../../componenets/form/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import mainImg from "../../Assets/maincrouselimg.png";
import carousel1 from "../../Assets/2carousel.png";
import carousel2 from "../../Assets/2carousel.png";
import vector from '../../Assets/Vector.png'
function MoreInformation() {



  const additionalInfo = [
    {  label: "Спальня" },
    {  label: "Кухня" },
    {  label: "Кабинет" },
    {  label: "Библиотека" },
    { label: "Сауна" },
    {  label: "Цокольный этаж" },
    { label: "Котельная" },
    { label: "Тех. помещения" },
    { label: "Винный погреб" },
    {  label: "Бильярд" },
    {  label: "Бассейн" },
    {  label: "Спортзал" },
    {  label: "Кинозал" },
    {  label: "Камин" },
    { label: "Зимний сад" },
    { label: "Энергия" },
    {  label: "Второй свет" },
    {  label: "Лифт" },
    { label: "Гараж" },
    { label: "Навес" },
    {  label: "Веранда" },
    { label: "Крыльцо" },
    {  label: "Балкон" },
    { label: "Тёплые полы" },
  ];
  const imgs = [
    { id: 0, value: mainImg },
    { id: 1, value: carousel1 },
    { id: 2, value: carousel2 },
  ];
  const [wordData, setWordData] = useState(imgs[0]);
  const [val, setVal] = useState(0);

  const handleClick = (index) => {
    setVal(index);
    setWordData(imgs[index]);
  };

  const handleNext = () => {
    const index = val < imgs.length - 1 ? val + 1 : val;
    setVal(index);
    setWordData(imgs[index]);
  };

  const handlePrevious = () => {
    const index = val > 0 ? val - 1 : val;
    setVal(index);
    setWordData(imgs[index]);
  };

  return (
    <div className="main-carousel">
      <div className="carousel-informations">
        <div className="main-1">
          <img src={wordData.value} height="300" width="500" alt="Main" />
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
        <div className="carousel-info">
          <h1>Kontio Laaksolahti</h1>
          <div className="details">
            <div className="detail-item">
              <span className="label">Тип строения</span>
              <span className="value">Дом</span>
            </div>
            <div className="detail-item">
              <span className="label">Стиль</span>
              <span className="value">Скандинавский</span>
            </div>
            <div className="detail-item">
              <span className="label">Технология</span>
              <span className="value">Клееный брус</span>
            </div>
            <div className="detail-item">
              <span className="label">Габаритные размеры</span>
              <span className="value">100x100x100</span>
            </div>
            <div className="detail-item">
              <span className="label">Общая площадь</span>
              <span className="value">150 м²</span>
            </div>
            <div className="detail-item">
              <span className="label">Этажность</span>
              <span className="value">Двухэтажный</span>
            </div>
            <div className="detail-item">
              <span className="label">Количество комнат</span>
              <span className="value">4</span>
            </div>
            <div className="detail-item">
              <span className="label">Количество санузлов</span>
              <span className="value">2</span>
            </div>
          </div>
          <div className="price">от 15 000 000 ₽</div>
        </div>
      </div>
      <div className="project-description-container">
      <div className="project-header">
        <h1>Описание проекта</h1>
        <p>
          Собственный деревянный дом — это жильё, в котором всё создано с
          учётом наших потребностей и предпочтений. Частный водозабор,
          возможность самостоятельного производства тепла при наличии
          имеющихся дополнительных источников (печь, гелио и иные новейшие
          технологии и разработки в области ветряных электростанций и
          биогаза) — всё это даёт реальную независимость и экономию денег.
        </p>
        <p>
          А ещё дом из дерева — это экологическая безопасность, долговечность,
          положительный внешний вид и необъяснимое очарование. Только
          представьте, как приятно обитать на собственной территории! Можно
          прогуливаться по саду, подуть в зимние игры, покататься, играть
          вместе, приятно пошататься всему в главная.
        </p>
      </div>

      <div className="info-container">
            <h2 className="info-title">Общая информация</h2>
            <div className="info-columns">
                <div className="info-column">
                    <div className="info-item">
                        <span className="info-label">Страна</span>
                        <span className="info-dots"></span>
                        <span className="info-value">Россия</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Производитель</span>
                        <span className="info-dots"></span>
                        <span className="info-value">Skobex Technologies</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Сезонность</span>
                        <span className="info-dots"></span>
                        <span className="info-value">Постоянное проживание</span>
                    </div>
                </div>
                <div className="info-column">
                    <div className="info-item">
                        <span className="info-label">Форма здания</span>
                        <span className="info-dots"></span>
                        <span className="info-value">Квадрат</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Форма кровли</span>
                        <span className="info-dots"></span>
                        <span className="info-value">Односкатная</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Жилая площадь</span>
                        <span className="info-dots"></span>
                        <span className="info-value">100 м²</span>
                    </div>
                </div>
            </div>
        </div>

      <div className="additional-info">
        <h2>Дополнительная информация</h2>
        <div className="additional-info-grid">
          {additionalInfo.map((info, index) => (
            <div key={index} className="additional-info-item">
             <img  className="vector" src={vector} alt="" />
              <span>{info.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
          <ContactForm/>
    </div>
  );
}

export default MoreInformation;
