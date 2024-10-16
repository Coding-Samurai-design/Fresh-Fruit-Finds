import React from 'react';
import styled, { keyframes } from 'styled-components';
import premiumImage from '../assets/104607360.webp';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const zoomIn = keyframes`
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
`;


const PremiumContainer = styled.div`
  padding: 100px 50px;
  background: linear-gradient(135deg, #004d40, #00695c);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  animation: ${fadeIn} 1s ease;

  @media (max-width: 768px) {
    padding: 70px 30px;
  }

  @media (max-width: 480px) {
    padding: 50px 20px;
  }
`;


const Header = styled.h1`
  font-size: 3rem;
  color: #ffb74d;
  margin-bottom: 20px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 1s ease;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;


const Description = styled.p`
  font-size: 1.2rem;
  color: #e0f7fa;
  margin-bottom: 40px;
  line-height: 1.6;
  max-width: 800px;
  animation: ${fadeIn} 1.5s ease;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;


const ImageContainer = styled.div`
  animation: ${zoomIn} 1.2s ease;
  margin-top: 30px;

  img {
    width: 100%;
    max-width: 500px;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    transition: transform 0.6s ease;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      max-width: 400px;
    }

    @media (max-width: 480px) {
      max-width: 300px;
    }
  }
`;


const PremiumQuality = () => (
  <PremiumContainer>
    <Header>Premium Quality Products</Header>
    <Description>
      Our premium quality products are designed to deliver the finest performance and longevity.
      Every product undergoes a rigorous quality check to ensure you receive only the best.
    </Description>
    <ImageContainer>
      <img src={premiumImage} alt="Premium Quality Products" />
    </ImageContainer>
  </PremiumContainer>
);

export default PremiumQuality;
