// src/BuildingTypes.js
import React from 'react';
import BuildingTypeCard from './BuildingTypeCard';
import './BuildingTypeCard.css';
import houseImg from '../../Assets/img1.svg';
import bathImg from '../../Assets/img2.svg';
import garageImg from '../../Assets/img3.svg';
import shedImg from '../../Assets/img4.svg';
import commercialImg from '../../Assets/img5.svg';

const buildingTypes = [
    { image: houseImg, count: 358, title: 'Дома' },
    { image: bathImg, count: 178, title: 'Бани' },
    { image: garageImg, count: 152, title: 'Гаражи' },
    { image: shedImg, count: 152, title: 'Навесы' },
    { image: commercialImg, count: 205, title: 'Комм. объекты' },
];

const BuildingTypes = () => {
    return (
    <div>
        <h2 className='title'>Типы строений</h2>
            <div className="building-types">
            
            {buildingTypes.map((type, index) => (
                <BuildingTypeCard 
                    key={index} 
                    image={type.image} 
                    count={type.count} 
                    title={type.title} 
                />
            ))}
        </div>
    </div>
    );
};

export default BuildingTypes;
