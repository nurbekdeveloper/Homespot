// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

function Navbar ()  {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    <li className="nav-item"><a href="#home">ГЛАВНАЯ</a></li>
                    <li className="nav-item"><a href="#construction">СТРОИТЕЛЬСТВО ДОМОВ</a></li>
                    <li className="nav-item"><a href="#services">НАШИ УСЛУГИ</a></li>
                    <li className="nav-item"><a href="#design">ПРОЕКТИРОВАНИЕ</a></li>
                    <li className="nav-item"><a href="#about">О НАС</a></li>
                    <li className="nav-item"><a href="#contact">КОНТАКТЫ</a></li>
                </ul>
                <a href="#apply" className="apply-button">ОСТАВИТЬ ЗАЯВКУ</a>
                <div className="menu-icon" onClick={toggleMenu}>
                    ☰
                </div>
            </div>
        </nav>
    );
};

export default Navbar;