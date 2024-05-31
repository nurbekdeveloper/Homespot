import React from 'react';
import './typesOfbeton.css';
import Beton from '../../Assets/beton.webp'
import { useParams } from 'react-router-dom';

const FoundationCard = ({ title, price, description, imageUrl }) => {
  return (
    <div className="foundation-card">
      <img src={imageUrl} alt={title} className="foundation-image" />
      <div className="foundation-content">
        <h2>{title}</h2>
        <p className="price">{price}</p>
        <p>{description}</p>
        <button className="order-button">Заказать</button>
      </div>
    </div>
  );
};

const foundations = [
  {
    title: 'Ленточный фундамент',
    price: 'от 12 500 ₽ / куб.м',
    description: 'Ленточный фундамент — замкнутый контур из единой армированной железобетонной балки, заложенный по периметру здания и под несущими стенами, и передающий нагрузку здания подлежащему грунту. На нем строят как легкие дома, так тяжелые монолитные дома, и каменные коттеджи: несущая способность зависит от ширины, высоты ленты и типа грунта.',
    imageUrl: Beton
    // url:
  },
  {
    title: 'Монолитная плита',
    price: 'от 10 900 ₽ / куб.м',
    url:"monolitnaya-plita",
    description: 'Данный тип фундамента считается одним из самых надёжных...',
    imageUrl: Beton
  },
  {
    title: 'Свайно-ростверковый фундамент',
    price: 'от 10 500 ₽ / м.п.',
    description: 'Это фундамент, состоящий из системы вертикальных свай...',
    imageUrl: Beton
  },
  {
    title: 'Сборно-блочный фундамент',
    price: 'рассчитывается индивидуально',
    description: 'Это сборный полый фундамент из специальных железобетонных блоков...',
    imageUrl: Beton
  },
  {
    title: 'Свайно-винтовой фундамент',
    price: 'рассчитывается индивидуально',
    description: 'Основание данного типа выполняется в виде винтовых свай...',
    imageUrl: Beton
  },
  {
    title: 'Комбинированный фундамент',
    price: 'рассчитывается индивидуально',
    description: 'Такой тип фундамента представляет собой объединение нескольких видов...',
    imageUrl: Beton
  },
];

const TypesOfBeton = () => {
    const {slug}= useParams()
  
    const filterFoundation = foundations.filter(c=>c.url === slug)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Виды фундаментов</h1>
      </header>
      <div className="foundation-types">
        {filterFoundation.map((foundation, index) => (
          <FoundationCard
            key={index}
            title={foundation.title}
            price={foundation.price}
            description={foundation.description}
            imageUrl={foundation.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default TypesOfBeton;
