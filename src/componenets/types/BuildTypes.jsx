// src/BuildingTypes.js
import React from 'react';
import BuildingTypeCard from './BuildingTypeCard';
import './BuildingTypeCard.css';
import houseImg from '../../Assets/img1.png';
import bathImg from '../../Assets/img2.png';
import garageImg from '../../Assets/img3.png';
import shedImg from '../../Assets/img4.png';
import commercialImg from '../../Assets/img5.png';
import { useNavigate } from 'react-router-dom';

const buildingTypes = [
    { image: houseImg, count: 358, title: 'Дома' , url:'/home' },
    { image: bathImg, count: 178, title: 'Тини хаус',  url:'/baths'},
    { image: garageImg, count: 152, title: 'Бани' , url:'/garages'},
    { image: shedImg, count: 152, title: 'Гаражи/Навесы', url:'/awnings' },
    { image: commercialImg, count: 205, title: 'Комм. объекты', url:'/communal-objects' },
];

const BuildingTypes = (url ) => {
    const navigate = useNavigate()
    return (
    <div>
                    <h3 className='title'>Добро пожаловать на наш сайт!</h3>
        <p  className='title-welcome'> Мы предлагаем широкий спектр строительных услуг, помогая вам воплотить мечты о собственном доме в реальность. С более чем 15-летним опытом работы в Швеции и России, мы гарантируем высокое качество и надежность каждого проекта.</p>
        {/* <h2 className='title'>Типы строений</h2> */}
            <div className="building-types" >

            {buildingTypes.map((type, index) => (
                <BuildingTypeCard
                    key={index}
                    image={type.image}
                    count={type.count}
                    title={type.title}
                    url={type.url}
                />
            ))}
        </div>
    </div>
    );
};

export default BuildingTypes;
