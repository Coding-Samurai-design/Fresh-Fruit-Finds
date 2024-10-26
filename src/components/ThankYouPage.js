import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #07250c;
  color: #fff;
  text-align: center;
`;

const Message = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const GoBackButton = styled.button`
  background-color: #7ed957;
  color: #fff;
  border: none;
  padding: 12px 25px;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5da23a;
  }
`;

const ThankYouPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/Products'); 
  };

  return (
    <ThankYouContainer>
      <Message>Thank you for purchasing! Visit again.</Message>
      <GoBackButton onClick={goBack}>Go Back to Product Page</GoBackButton>
    </ThankYouContainer>
  );
};

export default ThankYouPage;
