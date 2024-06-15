import React from 'react';
import './ClientOpinion.css';
import otziv3 from '../../Assets/otziv3.jpg';
import otziv1 from '../../Assets/otziv1.jpg';
import otziv2 from '../../Assets/otiziv2.jpg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const cards = [
  {
    id: 1,
    image: otziv1,
    title: 'Иван Петров',
    description: 'Отличная работа! Строительство дома прошло быстро и качественно. Очень доволен результатом."',
    link: 's#'
  },
  {
    id: 2,
    image: otziv2,
    title: 'Алексей Иванов',
    description: 'Проектирование и строительство коттеджа прошло на высшем уровне. Приятно работать с такими профессионалами.',
    link: 's#'
  },
  {
    id: 3,
    image: otziv3,
    title: 'Ольга Смирнова',
    description: ' "Благодарю за капитальный ремонт. Качество работ на высоте, буду обращаться снова!"',
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

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientOpinion;
