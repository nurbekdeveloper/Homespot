import React, { useState } from "react";
import "./MoreInformation.css";
import ContactForm from "../../componenets/form/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import   uploadedImage  from '../../Assets/005.jpg'

import mainImg from "../../Assets/maincrouselimg.png";
import carousel1 from "../../Assets/2carousel.png";
import carousel2 from "../../Assets/2carousel.png";
import vector from '../../Assets/Vector.png'
import CardContainer from "../../componenets/project/CardContainer";
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
              <span className="label">Технология</span>
              <span className="value">Газобетон</span>
            </div>
            <div className="detail-item">
              <span className="label">Габаритные размеры</span>
              <span className="value">9x9,7</span>
            </div>
            <div className="detail-item">
              <span className="label">Общая площадь</span>
              <span className="value">149.4 м²</span>
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
      <div className="container">
      <h1 className="heading">Строительные характеристики дома</h1>
      <ul className="characteristics">
        <li className="characteristic-item"><strong>Фундамент:</strong> Монолитная железобетонная плита, 300 мм, с разводкой канализации и водопровода.</li>
        <li className="characteristic-item"><strong>Стены:</strong> Газобетонные блоки, 375 мм, D400, армирование каждые 3 ряда.</li>
        <li className="characteristic-item"><strong>Потолки:</strong> Высота 3 м.</li>
        <li className="characteristic-item"><strong>Перегородки:</strong> Газобетонные блоки, 100 мм, D500.</li>
        <li className="characteristic-item"><strong>Перекрытие:</strong> Деревянные балки, огне- и биозащитная обработка.</li>
        <li className="characteristic-item"><strong>Вентиляция:</strong> Естественная для кухни и санузлов, подготовка под котел отопления, вывод через вентиляционные шахты.</li>
        <li className="characteristic-item"><strong>Кровля:</strong> Стропильная система, супердиффузионная мембрана Folder, металлочерепица Grand Line 0.5 мм (Ral 8017).</li>
      </ul>

      <h1 className="heading">Что входит в стоимость</h1>
      <ul className="pricing">
        <li className="pricing-item"><strong>5 лет гарантии:</strong> Мы предоставляем 5-летнюю гарантию на все наши работы, чтобы вы могли быть уверены в их качестве и надежности.</li>
        <li className="pricing-item"><strong>Персональный менеджер:</strong> Каждому клиенту предоставляется персональный менеджер, который будет на связи и поможет решить любые вопросы и задачи на протяжении всего проекта.</li>
        <li className="pricing-item"><strong>Сопровождение заказчика:</strong> Наши специалисты обеспечат полное сопровождение заказчика на всех этапах строительства, начиная от проектирования и заканчивая финальной отделкой.</li>
        <li className="pricing-item"><strong>Технический надзор:</strong> Мы осуществляем тщательный технический надзор на всех этапах строительства, чтобы гарантировать соответствие всех работ высоким стандартам качества.</li>
      </ul>

      <h1 className="heading">Дополнительные услуги</h1>
      <h2 className="subheading">Варианты фасадов</h2>
      <ul className="facade-options">
        <li className="facade-item">Облицовочный кирпич</li>
        <li className="facade-item">Декоративная штукатурка</li>
        <li className="facade-item">Комбинированная отделка фасада</li>
      </ul>
      <p>Стоимость отделки фасада рассчитывается индивидуально и предоставляется по запросу.</p>

      <h2 className="subheading">Предчистовая отделка дома</h2>
      <ul className="pre-finish">
        <li className="pre-finish-item">Штукатурка стен</li>
        <li className="pre-finish-item">Полусухая стяжка пола</li>
        <li className="pre-finish-item">Электромонтажные работы</li>
        <li className="pre-finish-item">Установка сантехники</li>
        <li className="pre-finish-item">Система отопления</li>
      </ul>
      <p>Цена на предчистовую отделку начинается от 8 500 ₽/кв.м.</p>

      <h1 className="heading">Почему с нами надежно?</h1>
      <ul className="why-us">
        <li className="why-us-item"><strong>Гарантированная стоимость:</strong> Цена строительства остается неизменной после подписания договора. Мы обеспечиваем полную прозрачность и отсутствие скрытых расходов.</li>
        <li className="why-us-item"><strong>Профессиональная команда:</strong> Наши сотрудники — это высококвалифицированные специалисты, что обеспечивает высокое качество всех выполненных работ.</li>
        <li className="why-us-item"><strong>Богатый опыт работы:</strong> Шведстандарт имеет более 15 лет опыта в Швеции и более 20 лет в России. Мы успешно работаем на строительном рынке более 10 лет, что позволяет нам решать любые задачи и учитывать все особенности и нюансы отрасли.</li>
        <li className="why-us-item"><strong>Оплата поэтапно:</strong> Вы оплачиваете только завершенные этапы работ, после их приемки и подписания соответствующих актов.</li>
      </ul>
    </div>

    <CardContainer/>
    <ContactForm/>
    </div>
  );
}

export default MoreInformation;
