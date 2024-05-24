import React from 'react';
import Card from './Card';
import './CardContainer.css';
import useful1 from '../../Assets/useful1.png'
import useful2 from '../../Assets/useful2.png'
import useful3 from '../../Assets/useful3.png'
import useful4 from '../../Assets/useful4.png'
import useful5 from '../../Assets/useful5.png'

const cardData = [
    {
        image: useful1,
        title: 'Kontio Laaksolahti',
        technology: 'Клееный брус',
        dimensions: '10x10x10',
        price: '1 000 000 Р'
    },
    {
        image: useful2,
        title: 'Glass House 25A',
        technology: 'Клееный брус',
        dimensions: '10x10x10',
        price: '1 000 000 Р'
    },
    {
        image: useful3,
        title: 'F-69',
        technology: 'Клееный брус',
        dimensions: '10x10x10',
        price: '1 000 000 Р'
    },
    {
        image: useful4,
        title: 'H-49',
        technology: 'Клееный брус',
        dimensions: '10x10x10',
        price: '1 000 000 Р'
    },
    {
        image: useful5,
        title: 'База отдыха Сибирь',
        technology: 'Клееный брус',
        dimensions: '10x10x10',
        price: '1 000 000 Р'
    }
];

const CardContainer = () => {
    return (
        <div className="card-container">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    technology={card.technology}
                    dimensions={card.dimensions}
                    price={card.price}
                />
            ))}
        </div>
    );
};

export default CardContainer;
