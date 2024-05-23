// src/Projects.js
import React from 'react';
import './project.css';
import projectImage1 from '../../Assets/projectof.png'; // Ensure the images are in the src folder
import projectImage2 from '../../Assets/projectof1.png';
import projectImage3 from '../../Assets/projectof1.png';


const ProjectOf = () => {
  const projects = [
    {
      image: projectImage1,
      title: "Смольный Парк",
      year: 2022,
      description: ""
    },
    {
      image: projectImage2,
      title: "Новая Скандинавия",
      year: 2022,
      description: "Проект в стиле современной классики с сауной."
    },
    {
      image: projectImage3,
      title: "Новая Скандинавия",
      year: 2022,
      description: ""
    }
  ];

  return (
    <div className="projects-container">
      <h1>Проекты Анастасии Вивенцовой</h1>
      <a href="#" className="view-all-projects">Все проекты</a>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <span className="project-year">{project.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectOf;
