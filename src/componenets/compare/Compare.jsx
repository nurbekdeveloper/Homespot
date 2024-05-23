import React from 'react';
import './compare.css';

const prosLeft = [
  "Экологичность", "Воздухообмен", "Микроклимат", 
  "Хорошая теплоизоляция", "Хорошая шумоизоляция", 
  "Незначительный вес из за сушки"
];

const prosRight = [
  "Не требует отделки", "Простота сборки", "Эстетичность", 
  "Хорошая геометрия", "Прочность выше чем у массива", 
  "Минимальная усадка"
];

const cons = [
  "Высокая стоимость", "Требует бетонного фундамента", 
  "Несоблюдение технологии на производстве", 
  "Невозможность проследить качество внутренних ламелей", 
  "Необходимость защиты от гниения и насекомых"
];

const Compare = () => {
  return (
    <div className="pros-and-cons">
      <h2 className="title">Плюсы и минусы каркасных домов</h2>
      <div className="content">
        <div className="pros">
          <h3>Плюсы</h3>
          <div className="pros-columns">
            <ul className="pros-column">
              {prosLeft.map((item, index) => (
                <li key={index} className="pros-item">
                  <span className="icon">✔️</span>
                  <span className="text">{item}</span>
                </li>
              ))}
            </ul>
            <ul className="pros-column">
              {prosRight.map((item, index) => (
                <li key={index} className="pros-item">
                  <span className="icon">✔️</span>
                  <span className="text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cons">
          <h3>Минусы</h3>
          <ul>
            {cons.map((item, index) => (
              <li key={index} className="cons-item">
                <span className="icon">❌</span>
                <span className="text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Compare;
