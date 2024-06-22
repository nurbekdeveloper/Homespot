// src/HouseGrid.js
import React, { useEffect } from "react";




import CardContainer from "../../componenets/project/CardContainer";
import { useNavigate, useParams } from "react-router-dom";
import { houses } from "../../componenets/data/homes.db";

const AllHouseType = () => {
  const navigate = useNavigate();
  const {slug} = useParams()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const newData = houses.filter(x=>x.type === slug)
  return (
    <div>
      <div className="house-grid-container">
        <div className="house-grid">
          {newData.map((house) => (
            <div
              key={house.id}
              className="house-card"
              onClick={() => navigate(`/moreinformation/${house.url}`)}
            >
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

      <CardContainer />
    </div>
  );
};

export default AllHouseType;
