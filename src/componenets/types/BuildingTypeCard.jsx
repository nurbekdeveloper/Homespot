// src/BuildingTypeCard.js
import React from 'react';
import './BuildingTypeCard.css';

const BuildingTypeCard = ({ image, count, title }) => {
    return (
        <div className="card">
            <div className="badge">{count}</div>
            <img src={image} alt={title} className="card-image" />
            <div className="card-title">{title}</div>
        </div>
    );
};

export default BuildingTypeCard;
