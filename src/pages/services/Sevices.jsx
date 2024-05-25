import React from 'react';
import './FoundationCard.css';

const FoundationCard = ({ image, title, description, price, buttonText }) => {
    return (
        <div className="foundation-card">
            <img src={image} alt={title} className="foundation-card-image" />
            <div className="foundation-card-content">
                <h3 className="foundation-card-title">{title}</h3>
                <p className="foundation-card-description">{description}</p>
                <p className="foundation-card-price">{price}</p>
                <button className="foundation-card-button">{buttonText}</button>
            </div>
        </div>
    );
};

export default FoundationCard;
