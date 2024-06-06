import React from 'react'
import './typesHome.css'
import house1 from "../../Assets/useful4.png"
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
      image: house1,

      title: ' Кирпич ',
      description: '  Эстетика , Устойчивость к погоде , Долговечность , Прочность ,  Преимущества      ',
      link: 's#'
    },
    {
      id: 3,
      image: house1,

      title: 'Каркасные дома',
      description: '        Преимущества , Быстрое строительство , Экономичность , Гибкость дизайна , Энергоэффективность  ',
      link: 's#'
    }
  ];
  const TypesHome = () => {
  const navigate = useNavigate()
  const {typehomeurl} = useSelector((state) => state.typelink)
  console.log(typehomeurl);
  return (
    <div>
      <div className='type__home'>
         <div className="containerr">
      {cards.map(card => (
        <div className="card" key={card.id} onClick={()=>navigate(`/construction-in${typehomeurl}-` + card.link)}>
          <img src={card.image} alt={`House Image ${card.id}`} />
          <div className="card-content">
            <p className="date">{card.date}</p>
            <h3>{card.title}</h3>
            <p>{card.description}</p>

          </div>
        </div>
      ))}
    </div>
    </div>
    <House/>
    <CardContainer/>
    </div>

  )
}

export default TypesHome
