import React from 'react';
import './Card.css';

const Card = ({ image, title, technology, dimensions, price }) => {
    return (
        <div className="card-ready">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-technology">Технология: {technology}</p>
                <p className="card-dimensions">Габариты: {dimensions}</p>
                <p className="card-price">{price}</p>
            </div>
        </div>
    );
};

export default Card;
