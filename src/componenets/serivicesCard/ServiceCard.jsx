import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ image, title, description, price, buttonText }) => {
    return (
        <div className="foundation-card">
            
            <div className="foundation-card-content">
                <h3 className="foundation-card-title">{title}</h3>
                <p className="foundation-card-description">{description}</p>
                <p className="foundation-card-price">{price}</p>
                <button className="foundation-card-button">{buttonText}</button>
            </div>
            <img src={image} alt={title} className="foundation-card-image" />
        </div>
    );
};

export default ServiceCard ;
