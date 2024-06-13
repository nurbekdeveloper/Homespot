import React from 'react';
import './typesOfbeton.css';
import { foundations } from '../../componenets/data/foundation.db';

import { useNavigate, useParams } from 'react-router-dom';
import CardContainer from '../../componenets/project/CardContainer';
import ContactForm from '../../componenets/form/ContactForm';

const FoundationCard = ({ title, price, description, imageUrl,nickname }) => {
  const navigate = useNavigate()
  return (
    <div className="foundation-card" onClick={()=>navigate(`/services/data/${nickname}`)}>
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



const TypesOfBeton = () => {
    const {slug}= useParams()

    const filterFoundation = foundations.filter(c=>c.url === slug)
  return (
    <div>
          <div className="App">
      <header className="App-header">
        <h1>Виды фундаментов</h1>
      </header>
      <div className="foundation-types">
        {filterFoundation.map((foundation, index) => (
          <FoundationCard
            key={index}
            nickname={foundation.nicname}
            title={foundation.title}
            price={foundation.price}
            description={foundation.description}
            imageUrl={foundation.imageUrl}
          />
        ))}
      </div>
    </div>
        <CardContainer/>
        <ContactForm/>
    </div>
  );
};

export default TypesOfBeton;
