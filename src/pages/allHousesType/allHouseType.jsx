// src/HouseGrid.js
import React, { useEffect } from 'react';
import houseImage from '../../Assets/houses.png';
import house001 from '../../Assets/001.jpg';
import house002 from '../../Assets/002.jpg';

import house003 from '../../Assets/003.jpg';
import house004 from '../../Assets/004.jpg';
import house005 from '../../Assets/005.jpg';
import house006 from '../../Assets/006.jpg';
// Ensure the images are in the src folder

import FaqQuestion from '../../componenets/faqquestion/FaqQuestion';
import CardContainer from '../../componenets/project/CardContainer';
import { useNavigate } from 'react-router-dom';
const houses = [
  { id: 1,
     name: "Glass House 25A",
      type: "Баня",
      technology: "Клееный брус",
      dimensions: "100x100x100",
      price: "1 000 000 Р",
      image: house001 },
  {
    id: 2,
    name: "Glass House 25A",
    image: house002 ,
    type: "Баня",
      technology: "Клееный брус",
      dimensions: "100x100x100",
      price: "1 000 000 Р",
    url:'kontio-laaksolahti'
  },
  {
    id: 3,
    name: "Glass House 25A",
    image: house003  ,
     url :'g-69'
  },
  {
     id: 4,
     name: "Glass House 25A",
       image: house004 ,
         url:'h-64'
    },
  {
    id: 5,
    name: "Glass House 25A",
      image: house005,
      url:'sibir-dam-olish-markazi'
   },

  { id: 6,
     name: "Glass House 25A",
     image: houseImage ,
     img1 :house006,
     url :'glass-house-25'
    },

  { id: 7,
    name: "Kontio Laaksolahti",
     image: houseImage ,
     url : 'kontio-laaksolahti'
    },
  {
    id: 8,
    name: "Г-69",
     image: houseImage ,
     url :'g-69 '},
];
const AllHouseType= () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>

        <div className="house-grid-container">

      <div className="house-grid">
        {houses.map(house => (
          <div key={house.id} className="house-card" onClick={()=>navigate(`/moreinformation/${house.url}`)}>
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

   <CardContainer/>



    </div>
  );
};

export default AllHouseType;
