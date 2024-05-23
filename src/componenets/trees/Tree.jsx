import React from 'react';
import './Tree.css'; // Import the CSS file
import treeImage from '../../Assets/Tree.png'; // Adjust the path as necessary

const AdvantageItem = ({ number, title, description }) => {
  return (
    <div className="advantage-item">
      <div className="advantage-number">{number}</div>
      <div className="advantage-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Tree = () => {
  return (
    <div className="advantages-container">
      <div className="advantages-content">
        <h2>Наши преимущества</h2>
        <div className="advantages-list">
          <AdvantageItem number="1" title="Ассортимент" description="Дополнения из самых разных пород древесины." />
          <AdvantageItem number="2" title="Точность" description="Автоматизированное производство исключает ошибки в конструкции." />
          <AdvantageItem number="3" title="Доступность" description="Приемлемые цены и прозрачная оплата." />
          <AdvantageItem number="4" title="Коммуникация" description="Обеспечиваем возможность общения со участниками процесса напрямую." />
          <AdvantageItem number="5" title="Гарантия" description="Гарантируем высокое качество всех выполненных работ." />
        </div>
      </div>
      <div className="tree-container">
        <img src={treeImage} alt="Trees" className="tree-image" />
      </div>
    </div>
  );
};

export default Tree;
