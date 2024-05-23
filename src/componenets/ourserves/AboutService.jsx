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
        <h1>О сервисе</h1>
        <p>
          DOMOSBOR — уникальный сервис, который объединяет лучших производителей домокомплектов (частные дома, дачи, бани, гаражи, навесы, коммерческие постройки), архитекторов, дизайнеров, девелоперов, строителей и застройщиков. На нашем официальном сайте можно заказать услуги российских и иностранных компаний. Здесь всё понятно на интуитивном уровне, благодаря чему несложно подобрать для себя подходящее решение и заказать интересующие вас услуги.
        </p>
        <p>
          Сегодня DOMOSBOR — это 30 производителей, 8 технологий деревянного домостроения, 1253 проектных предложений в разных ценовых сегментах от российских и зарубежных производителей. Мы не ограничиваемся одной технологией строительства, а смотрим на все существующие методы строительства деревянных домов. Чему отдать предпочтение? Решать только вам!
        </p>
        <p>
          Выбирайте необходимые вам параметры (географическое положение, окружающий ландшафт) и сравнивайте приглянувшиеся проекты. С нами дом мечты — реальность! Не откладывайте с реализацией своих задумок, обращайтесь прямо сейчас!
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
