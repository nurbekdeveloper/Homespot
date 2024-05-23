// src/ServicePartners.js
import React from 'react';
import './Partner.css';
import partnerImage from '../../Assets/partner.png'; // Ensure the image is in the src folder

const partners = [
  { name: "Кроссовский Виктор", location: "Санкт-Петербург", category: "Архитекторы" },
  { name: "Кроссовский Виктор", location: "Санкт-Петербург", category: "Архитекторы" },
  { name: "Кроссовский Виктор", location: "Санкт-Петербург", category: "Архитекторы" },
  { name: "Кроссовский Виктор", location: "Санкт-Петербург", category: "Дизайнеры" },
  { name: "Кроссовский Виктор", location: "Санкт-Петербург", category: "Дизайнеры" },
  { name: "Кроссовский Виктор", location: "Санкт-Петербург", category: "Дизайнеры" },
  { name: "Кроссовский Виктор", location: "Санкт-Петербург", category: "Заводы" },
  { name: "Кроссовский Виктор", location: "Санкт-Петербург", category: "Заводы" },
  { name: "Кроссовский Виктор", location: "Санкт-Петербург", category: "Заводы" },
];

const Partner = () => {
  const categories = ["Архитекторы", "Дизайнеры", "Заводы"];
  
  return (
    <div className="partners-container">
      <h1>Партнеры сервиса</h1>
      {categories.map(category => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="partners-grid">
            {partners.filter(partner => partner.category === category).map((partner, index) => (
              <div key={index} className="partner-card">
                <img src={partnerImage} alt={partner.name} className="partner-image" />
                <div className="partner-info">
                  <h3>{partner.name}</h3>
                  <p>{partner.location}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="view-all">Все {category.toLowerCase()}</a>
        </div>
      ))}
      <button className="become-partner">Стать партнером сервиса</button>
    </div>
  );
};

export default Partner;
