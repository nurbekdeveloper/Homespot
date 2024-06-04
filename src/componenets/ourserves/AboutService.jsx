// src/ServiceDescription.js
import React from 'react';
import styled from 'styled-components';
import serviceImage from '../../Assets/ourserves.png'; // Make sure to update the path to your image

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap :30px;
  background-color: #fff;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TextSection = styled.div`
  flex: 1;
  margin-right: 2rem;
  color: #333;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  button {
    padding: 0.75rem 1.5rem;
    background-color: #82a923;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #6a8923;
    }
  }

  @media (min-width: 768px) {
    margin-right: 2rem;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;

const AboutService= () => {
  return (
    <Container>
      <TextSection>
        <h1>О Нас</h1>
        <p>
        Наша строительная компания ШВЕД СТАНДАРТ специализируется на выполнении проектов любой сложности и масштаба с использованием инновационных технологий и материалов. Мы работаем с шведской компанией, что позволяет нам предоставлять качественные услуги и гарантировать высокий уровень профессионализма.
        </p>
        <p>
        ШВЕД СТАНДАР оказывает широкий спектр услуг, в том числе строительство жилых и коммерческих объектов, реконструкция зданий, а также выполнение отделочных работ. Наши специалисты имеют большой опыт работы в данной сфере и постоянно совершенствуют свои навыки, чтобы предоставлять клиентам лучшие решения.
        </p>
        <p>
        ШВЕД СТАНДАР осуществляет проекты с учетом всех требований и пожеланий заказчика, стремясь к достижению идеального результата. Мы уделяем особое внимание качеству исполнения работ и срокам их выполнения, что позволяет нам оставаться лидерами на рынке строительных услуг.
        </p>
        <p>
        <p>
        Сотрудничество с нашей компанией  ШВЕД СТАНДАР – это надежное и ответственное решение для тех, кто ценит качество и профессионализм. Мы гарантируем индивидуальный подход к каждому проекту и обеспечиваем полную прозрачность договорных отношений.
        </p>
        </p>
        <p>
        Если вам требуется надежный партнер для реализации строительных проектов, обратитесь к нам.  ШВЕД СТАНДАР готов предложить вам лучшие решения и выполнить работу в срок с соблюдением всех необходимых требований и стандартов. С нами ваш проект будет реализован на высшем уровне!
        </p>
        <button>Подробнее</button>
      </TextSection>
      <ImageSection>
        <img src={serviceImage} alt="Service Description" />
      </ImageSection>
    </Container>
  );
};

export default AboutService;
