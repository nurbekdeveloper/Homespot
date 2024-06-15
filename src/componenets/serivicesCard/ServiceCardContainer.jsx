import React from 'react';
import FoundationCard from './ServiceCard';
import './ServiceCardContainer.css';
import fundament1 from "../../Assets/fundament1.jpg"


import fundament2 from "../../Assets/fundament2.jpg"
import fundament3 from "../../Assets/fundament3.jpg"
import fundament4 from "../../Assets/fundament4.jpg"
const cardData = [
    {
        image: fundament3,
        title: 'Монтаж фундамента',
        description: 'Такой тип фундамента представляет собой замкнутый контур из единой армированной железобетонной балки, заложенный по периметру здания и под несущими стенами, и передающий нагрузку здания подлежащему грунту. На нем строят как легкие дома, так тяжелые монолитные дома, и каменные коттеджи: несущая способность зависит от ширины, высоты ленты и типа грунта.',
        price: 'от 12 500 Р / куб.метр',
        buttonText: 'Заказать',
        url:"/lentochiy-fundament"
    },
    {
        image: fundament2,
        title: 'Кровельные работы',
        description: 'Такой тип фундамента представляет собой замкнутый контур из единой армированной железобетонной балки, заложенный по периметру здания и под несущими стенами, и передающий нагрузку здания подлежащему грунту. На нем строят как легкие дома, так тяжелые монолитные дома, и каменные коттеджи: несущая способность зависит от ширины, высоты ленты и типа грунта.',
        price: 'от 10 900 Р / куб.метр',
        buttonText: 'Заказать',
        url:"/monolitnaya-plita"

    },

    {
        image: fundament4,
        title: 'Наружная Отделка Дома',
        description: 'Такой тип фундамента представляет собой замкнутый контур из единой армированной железобетонной балки, заложенный по периметру здания и под несущими стенами, и передающий нагрузку здания подлежащему грунту. На нем строят как легкие дома, так тяжелые монолитные дома, и каменные коттеджи: несущая способность зависит от ширины, высоты ленты и типа грунта.',
        price: 'рассчитывается индивидуально',
        buttonText: 'Заказать',
        url:"/Sborno-blochniy-fundament"

    },
    {
        image: fundament1,
        title: 'Внутренняя Отделка Дома',
        description: 'Такой тип фундамента представляет собой замкнутый контур из единой армированной железобетонной балки, заложенный по периметру здания и под несущими стенами, и передающий нагрузку здания подлежащему грунту. На нем строят как легкие дома, так тяжелые монолитные дома, и каменные коттеджи: несущая способность зависит от ширины, высоты ленты и типа грунта.',
        price: 'от 10 500 Р / п.м.',
        buttonText: 'Заказать',
        url:"/svayno-rostverkoviy-fundament"

    },

];

const ServiceCardContainer = () => {
    return (
        <div className="foundation-card-container">
            {cardData.map((card, index) => (
                <FoundationCard
                    url={card.url}
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
