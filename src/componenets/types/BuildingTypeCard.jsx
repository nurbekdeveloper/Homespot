// src/BuildingTypeCard.js
import React from 'react';
import './BuildingTypeCard.css';
import { useNavigate } from 'react-router-dom';

const BuildingTypeCard = ({ image, count, title,url }) => {
    const navigate = useNavigate()
    return (
        <div className="cardb" onClick={()=>navigate('/construction'+ url)}>
            <div className="badge">{count}</div>
            <img src={image} alt={title} className="card-image" />
            <div className="card-title">{title}</div>
        </div>
    );
};

export default BuildingTypeCard;
