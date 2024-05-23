import React from 'react';
import './Frame.css';
import frameImage from '../../Assets/technology1.png'; // Update the path to your image file

const Frame = () => {
  return (
    <div className="frame-page">
      <div className="breadcrumb">
        <span>Главная</span> / <span className="highlight">Каркасные</span>
      </div>
      <h1 className="title">Каркасные</h1>
      <div className="content">
        <img src={frameImage} alt="Каркас" className="frame-image" />
        <div className="description">
          <h2>Основа конструкции – каркас.</h2>
          <p>
            Остов дома исполняется из несущих, конструктивных элементов,
            которые позволяют стоять дому вне зависимости от материалов,
            которые его наполняют и укрывают.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frame;
