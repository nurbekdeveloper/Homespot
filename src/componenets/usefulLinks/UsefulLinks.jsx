import React from 'react';
import './UsefulLinks.css';
import useful1 from '../../Assets/useful1.svg'
import useful2 from '../../Assets/useful2.svg'
import useful3 from '../../Assets/useful3.svg'
import useful4 from '../../Assets/useful5.svg'
import useful5 from '../../Assets/useful5.svg'
function UsefulLinks () {
  return (
    <div className="useful-links">
      <h2>Полезные ссылки</h2>
      <div className="link-sections">
        <div className="link-section">
          <img src={useful1} alt="House 1" />
          <h3>По этажности дома</h3>
          <ul>
            <li>Одноэтажные</li>
            <li>Полутораэтажные</li>
            <li>Двухэтажные</li>
            <li>Трехэтажные</li>
            <li>С мансардным этажом</li>
            <li>С цокольным этажом</li>
          </ul>
        </div>
        <div className="link-section">
          <img src={useful2} alt="House 2" />
          <h3>По стилю дома</h3>
          <ul>
            <li>Лофт</li>
            <li>Хай тек</li>
            <li>Шале</li>
            <li>Барнхаус</li>
            <li>Райта</li>
            <li>Фахверк</li>
            <li>Модерн</li>
          </ul>
        </div>
        <div className="link-section">
          <img src={useful3} alt="House 3" />
          <h3>По форме дома</h3>
          <ul>
            <li>(Г) образная</li>
            <li>(П) образная</li>
            <li>(М) образная</li>
            <li>Квадратная</li>
            <li>Круглая</li>
            <li>Треугольная</li>
            <li>Прямоугольная</li>
            <li>Многоугранная</li>
          </ul>
        </div>
        <div className="link-section">
          <img src={useful4} alt="House 4" />
          <h3>По площади дома</h3>
          <ul>
            <li>До 100 м2</li>
            <li>100-150 м2</li>
            <li>150-200 м2</li>
            <li>200-250 м2</li>
            <li>250-300 м2</li>
            <li>от 300 м2</li>
          </ul>
        </div>
        <div className="link-section">
          <img src={useful5} alt="House 5" />
          <h3>По этажности дома</h3>
          <ul>
            <li>Однокомнатные</li>
            <li>Двухкомнатные</li>
            <li>Трехкомнатные</li>
            <li>Четырехкомнатные</li>
            <li>Пятикомнатные</li>
            <li>Шестикомнатные</li>
            <li>От семи комнат</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinks;
