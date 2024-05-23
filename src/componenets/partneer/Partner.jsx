import React from 'react';
import './Partners.css'; // Import the CSS file
import partnerImage from './path-to-partner-image.png'; // Adjust the path as necessary

const PartnerCard = ({ name, location, image }) => {
  return (
    <div className="partner-card">
      <img src={image} alt={name} className="partner-image" />
      <div className="partner-info">
        <h3>{name}</h3>
        <p>{location}</p>
      </div>
    </div>
  );
};

const PartnerCategory = ({ category, partners }) => {
  return (
    <div className="partner-category">
      <div className="category-header">
        <h2>{category}</h2>
        <a href="#all" className="view-all">Все {category.toLowerCase()}</a>
      </div>
      <div className="partners-list">
        {partners.map((partner, index) => (
          <PartnerCard key={index} {...partner} />
        ))}
      </div>
    </div>
  );
};

const Partners = () => {
  const partnerData = [
    {
      category: 'Архитекторы',
      partners: [
        { name: 'Кроссовский Виктор', location: 'Санкт-Петербург', image: partnerImage },
        { name: 'Кроссовский Виктор', location: 'Санкт-Петербург', image: partnerImage },
        { name: 'Кроссовский Виктор', location: 'Санкт-Петербург', image: partnerImage },
      ],
    },
    {
      category: 'Дизайнеры',
      partners: [
        { name: 'Кроссовский Виктор', location: 'Санкт-Петербург', image: partnerImage },
        { name: 'Кроссовский Виктор', location: 'Санкт-Петербург', image: partnerImage },
        { name: 'Кроссовский Виктор', location: 'Санкт-Петербург', image: partnerImage },
      ],
    },
    {
      category: 'Заводы',
      partners: [
        { name: 'Кроссовский Виктор', location: 'Санкт-Петербург', image: partnerImage },
        { name: 'Кроссовский Виктор', location: 'Санкт-Петербург', image: partnerImage },
        { name: 'Кроссовский Виктор', location: 'Санкт-Петербург', image: partnerImage },
      ],
    },
  ];

  return (
    <div className="partners-container">
      <h1>Партнеры сервиса</h1>
      {partnerData.map((data, index) => (
        <PartnerCategory key={index} {...data} />
      ))}
      <button className="join-partner-button">Стать партнером сервиса</button>
    </div>
  );
};

export default Partners;
