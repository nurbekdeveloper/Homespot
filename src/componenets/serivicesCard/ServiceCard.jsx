import React, { useState } from 'react';
import './ServiceCard.css';
import Modals from '../appliacation/Modal';

const ServiceCard = ({ image, title, description, price, buttonText }) => {
    const [openModal,setOpenModal] = useState(false)
    return (
        <div className="foundation-card">
            <Modals open={openModal} setModal2Open={setOpenModal}/>
            <div className="foundation-card-content">
                <h3 className="foundation-card-title">{title}</h3>
                <p className="foundation-card-description">{description}</p>
                <p className="foundation-card-price">{price}</p>
                <button className="foundation-card-button" onClick={()=>setOpenModal(true)}>{buttonText}</button>
            </div>
            <img src={image} alt={title} className="foundation-card-image" />
        </div>
    );
};

export default ServiceCard ;
