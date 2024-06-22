// File: src/components/CommercialBuilding.js

import React, { useEffect } from 'react';
import './Home.css';
import houseImage from '../../Assets/houses.png';

import { useLocation, useParams } from 'react-router-dom';

const OurPortfolio = [
  { id: 1, name: "Glass House 25A", type: "Баня", technology: "Клееный брус", dimensions: "100x100x100", price: "1 000 000 Р", image: houseImage },
  { id: 1, name: "Glass House 25A", type: "Баня", technology: "Клееный брус", dimensions: "100x100x100", price: "1 000 000 Р", image: houseImage },
  { id: 1, name: "Glass House 25A", type: "Баня", technology: "Клееный брус", dimensions: "100x100x100", price: "1 000 000 Р", image: houseImage },
  { id: 1, name: "Glass House 25A", type: "Баня", technology: "Клееный брус", dimensions: "100x100x100", price: "1 000 000 Р", image: houseImage },
  { id: 1, name: "Glass House 25A", type: "Баня", technology: "Клееный брус", dimensions: "100x100x100", price: "1 000 000 Р", image: houseImage },
  { id: 1, name: "Glass House 25A", type: "Баня", technology: "Клееный брус", dimensions: "100x100x100", price: "1 000 000 Р", image: houseImage },

];
const PersonalProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const {slug}= useParams()
  console.log(slug);

  const filterHome = OurPortfolio.find(c=>c.url === slug)


  return (
<>

    <div className="house-grid-container">

      <div className="house-grid">
        {OurPortfolio.map(house => (
          <div key={house.id} className="house-card">
            <img src={house.image} alt={house.name} className="house-image" />
            <div className="house-info">
              <h2>{house.name}</h2>
              {house.type && <p>Тип: {house.type}</p>}
              {house.technology && <p>Технология: {house.technology}</p>}
              {house.dimensions && <p>Габариты: {house.dimensions}</p>}
              {house.price && <p className="price">{house.price}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <span>...</span>
        <button>15</button>
      </div>
      <button className="filter-button">Расширенный фильтр</button>
    </div>

</>

  );
}

export default PersonalProject ;
