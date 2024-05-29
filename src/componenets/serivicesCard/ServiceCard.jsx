import React, { useState } from 'react';
import './ServiceCard.css';
import Modals from '../appliacation/Modal';

const ServiceCard = ({ image, title, description, price, buttonText }) => {
    const [openModal,setOpenModal] = useState(false)
    return (
        <div className="foundation-card">
      
            <img src={image} alt={title} className="foundation-card-image" />
            <h2>{title}</h2>
        </div>
    );
};

export default ServiceCard ;
