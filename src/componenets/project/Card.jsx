import React from 'react';
import './Card.css';

const Card = ({ image, title, type, technology, dimensions, price }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">Тип: {type}</p>
        <p className="card-text">Технология: {technology}</p>
        <p className="card-text">Габариты: {dimensions}</p>
        <p className="card-price">{price}</p>
      </div>
    </div>
  );
};

export default Card;
