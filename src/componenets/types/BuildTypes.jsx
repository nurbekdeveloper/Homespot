// src/BuildingTypes.js
import React from 'react';
import BuildingTypeCard from './BuildingTypeCard';
import './BuildingTypeCard.css';
import houseImg from '../../Assets/img1.png';
import bathImg from '../../Assets/img2.png';
import garageImg from '../../Assets/img3.png';
import shedImg from '../../Assets/img4.png';
import commercialImg from '../../Assets/img5.png';

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
