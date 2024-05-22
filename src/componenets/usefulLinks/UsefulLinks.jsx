import React from 'react';
import './UsefulLinks.css';
import useful1 from '../../Assets/useful1.svg'
import useful2 from '../../Assets/useful2.svg'
import useful3 from '../../Assets/useful3.svg'
import useful4 from '../../Assets/useful5.svg'
import useful5 from '../../Assets/useful5.svg'
// src/UsefulLinks.js


const UsefulLinks = () => {
  const linksData = [
    {
      image: useful1,
      title: 'По этажности дома',
      links: ['Одноэтажные', 'Полутораэтажные', 'Двухэтажные', 'Трехэтажные', 'С мансардным этажом', 'С цокольным этажом']
    },
    {
      image: useful2,
      title: 'По стилю дома',
      links: ['Лофт', 'Хай тек', 'Шале', 'Барнхаус', 'Райта', 'Фахверк', 'Модерн']
    },
    {
      image: useful3,
      title: 'По форме дома',
      links: ['(г) образная', '(п) образная', '(т) образная', 'Квадратная', 'Круглая', 'Треугольная', 'Прямоугольная', 'Многоугольная']
    },
    {
      image: useful4,
      title: 'По площади дома',
      links: ['До 100 м2', '100-150 м2', '150-200 м2', '200-250 м2', '250-300 м2', 'от 300 м2']
    },
    {
      image: useful5,
      title: 'По площади дома',
      links: ['До 100 м2', '100-150 м2', '150-200 м2', '200-250 м2', '250-300 м2', 'от 300 м2']
    }
  ];

  return (
    <div className="links-container">
      <h2>Полезные ссылки</h2>
      <div className="links-grid">
        {linksData.map((section, index) => (
          <div className="links-section" key={index}>
            <img src={section.image} alt={section.title} className="section-image" />
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsefulLinks;


