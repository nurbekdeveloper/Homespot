// src/HouseGrid.js
import React, { useEffect, useState } from 'react';

import './houses.css';
import houseImage from '../../Assets/houses.png'; // Ensure the images are in the src folder
import { useNavigate, useParams } from 'react-router-dom';
import FaqQuestion from '../../componenets/faqquestion/FaqQuestion';
import { housedb } from '../../componenets/data/homes.db';







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
const House= ({url,data=houses}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [openModal,setOpenModal] = useState(false)
  const navigate = useNavigate()
  const {slug}= useParams()

    const filterhouse = housedb.filter(c=>c.url === slug)
  return (


    <div>
        <div className="house-grid-container">
      <div className="house-grid" >
        {data.map(house => (
          <div key={house.id} className="house-card"  onClick={()=>navigate('/services'+ url)}>
            <img src={house.image} alt={house.name} className="house-image" />
            <div className="house-info">
              {/* <h2>{filterhouse.}</h2> */}
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
    </div>
  );
};

export default House;
