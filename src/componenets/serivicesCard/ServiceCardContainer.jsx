import React from 'react';
import FoundationCard from './ServiceCard';
import './ServiceCardContainer.css';

const cardData = [
    {
        image: 'path/to/image1.jpg',
        title: 'Ленточный фундамент',
        description: 'Подходит для строительства домов...',
        price: 'от 12 500 Р / куб.метр',
        buttonText: 'Заказать'
    },
    {
        image: 'path/to/image2.jpg',
        title: 'Монолитная плита',
        description: 'Для домов с несколькими этажами...',
        price: 'от 10 900 Р / куб.метр',
        buttonText: 'Заказать'
    },
    {
        image: 'path/to/image3.jpg',
        title: 'Свайно-ростверковый фундамент',
        description: 'Для сложных грунтов...',
        price: 'от 10 500 Р / п.м.',
        buttonText: 'Заказать'
    },
    {
        image: 'path/to/image4.jpg',
        title: 'Сборно-блочный фундамент',
        description: 'Расчитывается индивидуально...',
        price: 'рассчитывается индивидуально',
        buttonText: 'Заказать'
    },
    {
        image: 'path/to/image5.jpg',
        title: 'Свайно-винтовой фундамент',
        description: 'Расчитывается индивидуально...',
        price: 'рассчитывается индивидуально',
        buttonText: 'Заказать'
    },
    {
        image: 'path/to/image6.jpg',
        title: 'Комбинированный фундамент',
        description: 'Расчитывается индивидуально...',
        price: 'рассчитывается индивидуально',
        buttonText: 'Заказать'
    }
];

const ServiceCardContainer = () => {
    return (
        <div className="foundation-card-container">
            {cardData.map((card, index) => (
                <FoundationCard
                    key={index}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    price={card.price}
                    buttonText={card.buttonText}
                />
            ))}
        </div>
    );
};

export default ServiceCardContainer;
