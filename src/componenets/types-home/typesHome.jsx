import React from 'react'
import './typesHome.css'
import house1 from "../../Assets/house1.jpg"
import house2 from "../../Assets/house2.jpg"
import house3 from "../../Assets/house3.jpg"
import House from '../../pages/houses/Houses';
import CardContainer from '../project/CardContainer';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import homesss from "../data/homes.db"
import { houses } from "../../componenets/data/homes.db";


const cards = [
    {
      id: 1,
      image: house1,
      title: 'Газобетон',
      description: 'Легкость , Теплоизоляция , Звукоизоляция, Простота обработки ,  Экологичность ',
      link: 'gazabeton'
    },
    {
      id: 2,
      image: house2,
      title: ' Кирпич ',
      description: '  Эстетика , Устойчивость к погоде , Долговечность , Прочность ,  Преимущества      ',
      link: "kirpich"
    },
    {
      id: 3,
      image: house3,
      title: 'Каркасные дома',
      description: '        Преимущества , Быстрое строительство , Экономичность , Гибкость дизайна , Энергоэффективность  ',
      link: 'karkasniy'
    }
];

const TypesHome = () => {
  const navigate = useNavigate();
  const {slug} = useParams()

  // const { typehomeurl } = useSelector((state) => state.typelink);
  const newHouses = houses.filter(x=>x.type === slug)

  return (
    <div>
      <div className='type__home'>
        <div className="containerr">
          {cards.map(card => (
            <div className="card" key={card.id} onClick={() => navigate(`/construction-in/${card.link}`)}>
              <img className='houseimg' src={card.image} alt={`"Наши специалисты по, строительству домов, строительству бань, строительству навесов, строительству tiny houses, и предоставлению, ремонтных услуг, работают над очередным проектом. Высокое качество, строительства домов, строительство бань, строительство навесов, и строительство tiny houses, гарантировано. Обращайтесь за, ремонтными услугами, строительством домов, и строительством бань, к нам!"`} />
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {
        slug === "home" ?  <House /> :  <House data={newHouses}/>
      }

      <CardContainer />
    </div>
  )
}

export default TypesHome;
