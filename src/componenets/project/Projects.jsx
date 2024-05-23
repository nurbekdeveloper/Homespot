import React from 'react';
import Card from './Card';
import './Project.css';
import useful1 from '../../Assets/useful1.png'
import useful2 from '../../Assets/useful2.png'
import useful3 from '../../Assets/useful3.png'
import useful4 from '../../Assets/useful5.png'
import useful5 from '../../Assets/useful5.png'

const projects = [
  {
    image: useful1,
    title: 'Kontio Laaksolahti',
    type: 'дом',
    technology: 'Клееный брус',
    dimensions: '100x100x100',
    price: '1 000 000 ₽'
  },
  {
    image:useful2,
    title: 'Glass House 25A',
    type: 'дом',
    technology: 'Клееный брус',
    dimensions: '100x100x100',
    price: '1 000 000 ₽'
  },
  {
    image: useful3,
    title: 'Г-69',
    type: 'дом',
    technology: 'Клееный брус',
    dimensions: '100x100x100',
    price: '1 000 000 ₽'
  },
  {
    image: useful4,
    title: 'H-49',
    type: 'дом',
    technology: 'Клееный брус',
    dimensions: '100x100x100',
    price: '1 000 000 ₽'
  },
  {
    image: useful5,
    title: 'База отдыха Сибирь',
    type: 'дом',
    technology: 'Клееный брус',
    dimensions: '100x100x100',
    price: '1 000 000 ₽'
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects-title">Проекты каркасных домов</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
      <button className="projects-button">Все проекты</button>
    </div>
  );
};

export default Projects;
