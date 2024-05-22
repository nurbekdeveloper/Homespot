import React from 'react';
import './Technology.css';
import img1 from '../../Assets/technology1.svg'
import img2 from '../../Assets/technology2.svg'
import img3 from '../../Assets/technology3.svg'
import img4 from '../../Assets/technology4.svg'
import img5 from '../../Assets/technology5.svg'
import img6 from '../../Assets/technology6.svg'
import img7 from '../../Assets/technology7.svg'
import img8 from '../../Assets/technology8.svg'
const technologies = [
  { name: "Клееный брус", imgSrc:  img1 },
  { name: "Лафет", imgSrc:  img2 },
  { name: "Фахверковые", imgSrc:  img3},
  { name: "Рубленное бревно", imgSrc:  img4 },
  { name: "Каркасные", imgSrc:  img5 },
  { name: "CLT-панели", imgSrc:  img6 },
  { name: "Панельно-каркасные", imgSrc: img7 },
  { name: "Kelo (Kelo)", imgSrc:  img8 }
];

const ConstructionTechnologies = () => {
  return (
    <div className="tech-container">
      <h2>Технологии строительства</h2>
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div className="tech-item" key={index}>
            <img src={tech.imgSrc} alt={tech.name} className="tech-image"/>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConstructionTechnologies;
