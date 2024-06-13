import React from 'react'
import './typesHome.css'
import house1 from "../../Assets/house1.jpg"
import house2 from "../../Assets/house2.jpg"
import house3 from "../../Assets/house3.jpg"
import House from '../../pages/houses/Houses';
import CardContainer from '../project/CardContainer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const cards = [
    {
      id: 1,
      image: house1,
      title: 'Газобетон',
      description: 'Легкость , Теплоизоляция , Звукоизоляция, Простота обработки ,  Экологичность ',
      link: 's#'
    },
    {
      id: 2,
      image: house2,
      title: ' Кирпич ',
      description: '  Эстетика , Устойчивость к погоде , Долговечность , Прочность ,  Преимущества      ',
      link: 's#'
    },
    {
      id: 3,
      image: house3,
      title: 'Каркасные дома',
      description: '        Преимущества , Быстрое строительство , Экономичность , Гибкость дизайна , Энергоэффективность  ',
      link: 's#'
    }
];

const TypesHome = () => {
  const navigate = useNavigate();
  const { typehomeurl } = useSelector((state) => state.typelink);

  return (
    <div>
      <div className='type__home'>
        <div className="containerr">
          {cards.map(card => (
            <div className="card" key={card.id} onClick={() => navigate(`/construction-in${typehomeurl}-` + card.link)}>
              <img className='houseimg' src={card.image} alt={`"Наши специалисты по, строительству домов, строительству бань, строительству навесов, строительству tiny houses, и предоставлению, ремонтных услуг, работают над очередным проектом. Высокое качество, строительства домов, строительство бань, строительство навесов, и строительство tiny houses, гарантировано. Обращайтесь за, ремонтными услугами, строительством домов, и строительством бань, к нам!"`} />
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <House />
      <CardContainer />
    </div>
  )
}

export default TypesHome;
