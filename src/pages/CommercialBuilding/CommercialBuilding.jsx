// File: src/components/CommercialBuilding.js

import React, { useEffect } from 'react';
import './CommercialBuilding.css';
import houseImage from '../../Assets/houses.png';

import { fundamentt } from '../../componenets/data/Data';
import { useParams } from 'react-router-dom';
const houses = [
  { id: 1, name: "Glass House 25A", type: "Баня", technology: "Клееный брус", dimensions: "100x100x100", price: "1 000 000 Р", image: houseImage },
  { id: 2, name: "Kontio Laaksolahti", image: houseImage },
  { id: 3, name: "Г-69", image: houseImage },
  { id: 4, name: "Н-49", image: houseImage },
  { id: 5, name: "База отдыха сибирь", image: houseImage },
  { id: 6, name: "Glass House 25A", image: houseImage },
  { id: 7, name: "Kontio Laaksolahti", image: houseImage },
  { id: 8, name: "Г-69", image: houseImage },
];
const CommercialBuilding = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const {slug} = useParams()
  
  const filterBuild = fundamentt.find(c=>c.url === slug)


  return (
<>
<div className="commercial-building">
      <div className="breadcrumb">
        Главная / Построить коммерческий объект
      </div>
      <h1 className="title">
       {filterBuild?.title}
      </h1>
      <div className="content">
        <div className="text">
          <p>
            <strong>Собственный деревянный дом</strong> 
            — это жильё, в котором всё сделано с учётом личных потребностей и предпочтений. Чистый воздух, возможность самостоятельного планирования участка (при желании можно дополнительно возвести баню, гараж, навес и иное необходимое сооружение) и возможность выращивания овощей и фруктов — всё это вы получаете в частном доме.
          </p>
          <p>
            <strong>А ещё дом из дерева</strong> долговечность, неповторимый внешний вид и необыкновенные впечатления. Только представьте, как приятно отдыхать на собственной территории! Можно приготовить мясо, поиграть в активные игры, позагорать или просто почитать книгу в гамаке
          </p>
        </div>
        <div className="image">
          <img src={filterBuild.img} alt="Commercial Building" />
        </div>
      </div>
    </div>
    <div className="house-grid-container">
     
      <div className="house-grid">
        {houses.map(house => (
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

export default CommercialBuilding;
