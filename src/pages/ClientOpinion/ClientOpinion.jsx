import React from 'react';
import './ClientOpinion.css';
import house1 from '../../Assets/useful4.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const cards = [
  {
    id: 1,
    image: house1,
    title: '',
    description: 'Легкость Теплоизоляция Звукоизоляция, Простота обработки Экологичность:',
    link: 's#'
  },
  {
    id: 2,
    image: house1,
    title: 'Дом без бани — не дом. 5 образцовых...',
    description: 'Банные процедуры — это ни с чем не сравнимое удовольствие...',
    link: 's#'
  },
  {
    id: 3,
    image: house1,
    title: 'Эстетика пляжного дома',
    description: 'Дом из клееного бруса Вояжа 50 м2',
    link: 's#'
  }
];

const ClientOpinion = () => {
  const navigate = useNavigate();
  const { typehomeurl } = useSelector((state) => state.typelink);

  return (
    <div>
      <h1 className='client-opinion-title'>Отзывы наших клиентов</h1>
      <div className='client-opinion-home'>
        <div className="client-opinion-container">
          {cards.map(card => (
            <div className="client-opinion-card" key={card.id} onClick={() => navigate(`/construction-in${typehomeurl}-` + card.link)}>
              <img src={card.image} alt={`House Image ${card.id}`} />
              <div className="client-opinion-card-content">
                <p className="client-opinion-date">{card.date}</p>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a href={card.link} className="client-opinion-read-more">Читать далее</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientOpinion;
