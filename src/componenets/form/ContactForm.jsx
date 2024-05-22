// src/ContactForm.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #b2d235;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;

  @media (min-width: 768px) {
    max-width: none;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: #82a923;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #6a8923;
  }
`;

const Description = styled.div`
  margin: 2rem 0;
  color: white;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    margin: 0 2rem;
  }
`;

const ContactForm = () => {
  return (
    <Container>
      <Form>
        <Input type="text" placeholder="Имя" />
        <Input type="email" placeholder="Электронная почта" />
        <Input type="tel" placeholder="Телефон" />
        <Textarea placeholder="Сообщение" rows="4" />
        <Button>Отправить</Button>
      </Form>
      <Description>
        <h2>Расчёт стоимости по вашему проекту</h2>
        <p>
          Мы считаем большим заблуждением, когда клиенты выбирают архитектурную студию по стоимости проектирования. В частном жилом строительстве есть правило: стоимость проекта составляет 5-10% от стоимости его реализации.
        </p>
        <p>
          Не откладывайте с реализацией своих задумок, обращайтесь прямо сейчас!
        </p>
      </Description>
    </Container>
  );
};

export default ContactForm;
