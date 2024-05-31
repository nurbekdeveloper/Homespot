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
      date: '09.10.2022',
      title: '7 лучших пород древесины для...',
      description: 'Деревянное домостроение — это тип современного строительства, при котором вс...',
      link: 's#'
    },
    {
      id: 2,
      image: house1,
      date: '09.10.2022',
      title: 'Дом без бани — не дом. 5 образцовых...',
      description: 'Банные процедуры — это ни с чем не сравнимое удовольствие...',
      link: 's#'
    },
    {
      id: 3,
      image: house1,
      date: '09.10.2022',
      title: 'Эстетика пляжного дома',
      description: 'Дом из клееного бруса Вояжа 50 м2',
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
            <a href={card.link} className="read-more">Читать далее</a>
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
