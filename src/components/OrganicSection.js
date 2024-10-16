import React from 'react';
import styled, { keyframes } from 'styled-components';  
import { Link } from 'react-router-dom';
import farmerImage from '../assets/India_Farming.jpg';


const backgroundGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;  


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

const OrganicContainer = styled.div`
  background: linear-gradient(135deg, #07250c, #3a7e1b);
  background-size: 200% 200%;
  animation: ${backgroundGradient} 8s ease infinite;
  color: #fff;
  padding: 80px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 15px;
  }
`;

const TextContainer = styled.div`
  max-width: 600px;
  text-align: left;
  animation: ${fadeIn} 1s ease;

  h2 {
    font-size: 2.5rem;
    color: #7ed957;
    margin-bottom: 20px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    font-family: 'Poppins', sans-serif;

    @media (max-width: 768px) {
      font-size: 2rem;
      text-align: center;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 20px;
    line-height: 1.6;
    color: #d2e1d6;

    @media (max-width: 768px) {
      font-size: 1rem;
      text-align: center;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  .contact {
    margin-top: 20px;
    font-size: 1.2rem;
    color: #7ed957;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 768px) {
      text-align: center;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  .phone-number {
    color: #fff;
    font-weight: bold;
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  animation: ${fadeIn} 1.5s ease;

  img {
    border-radius: 50%;
    width: 350px;
    height: 350px;
    object-fit: cover;
    border: 5px solid #7ed957;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.6s ease, box-shadow 0.6s ease;

    &:hover {
      transform: scale(1.1) rotate(5deg);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 768px) {
      width: 300px;
      height: 300px;
    }

    @media (max-width: 480px) {
      width: 250px;
      height: 250px;
    }
  }
`;


const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
`;

const IconContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;

  .icon {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    color: #7ed957;
    transition: color 0.3s ease, transform 0.3s ease;
    cursor: pointer;

    p {
      margin-left: 10px;
      font-family: 'Poppins', sans-serif;
    }

    &:hover {
      transform: scale(1.1);
      animation: ${bounce} 0.6s ease;
      color: #dfffb8;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const OrganicSection = () => {
  return (
    <OrganicContainer>
      <TextContainer>
        <h2>Organic & Healthy Fresh Food Provider</h2>
        <p>
          Nourish Your Body with Nature's Best, Organic Goodness in Every Bite and Pure and Wholesome, Just as Nature Intended.
        </p>
        <p>Healthy Food, Happy You!</p>
        <div className="contact">
          <p>How to Order?</p>
          <p className="phone-number">CALL US: +91 77880 78024</p>
        </div>
        <IconContainer>
          <div className="icon">
            <Link to="/fresh-food">
              <p>100% Fresh food</p>
            </Link>
          </div>
          <div className="icon">
            <Link to="/premium-quality">
              <p>Premium quality products</p>
            </Link>
          </div>
          <div className="icon">
            <Link to="/organic-farming">
              <p>Organic farming</p>
            </Link>
          </div>
        </IconContainer>
      </TextContainer>
      <ImageContainer>
        <img src={farmerImage} alt="Farmer with produce" />
      </ImageContainer>
    </OrganicContainer>
  );
};

export default OrganicSection;
