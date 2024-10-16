import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
import heroBackground from '../assets/one_seed_fruits.png';
import logo from '../assets/FRESH_FIELD_FINDS-removebg-preview.png';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${heroBackground}) center/cover no-repeat;
  padding: 0 50px;
  animation: ${fadeIn} 1.5s ease-in-out;

  @media (max-width: 1200px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    height: auto;
    background-size: cover;
  }

  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 150px;
  height: auto;

  @media (max-width: 768px) {
    width: 120px;
    top: 10px;
    left: 10px;
  }

  @media (max-width: 480px) {
    width: 100px;
    top: 8px;
    left: 8px;
  }
`;

const HeroContent = styled.div`
  color: #D0F0C0;
  text-align: center;
  max-width: 700px;
  margin-top: 100px;
  animation: ${fadeIn} 1s ease-in-out;

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 20px;

    @media (max-width: 1024px) {
      font-size: 3rem;
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.3rem;
    margin: 20px 0;

    @media (max-width: 1024px) {
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  button {
    padding: 15px 30px;
    background-color: #7ed957;
    border: none;
    border-radius: 50px;
    font-size: 1.2rem;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    animation: ${pulse} 1.5s infinite;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 1024px) {
      font-size: 1.1rem;
      padding: 12px 25px;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 10px 20px;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      padding: 8px 18px;
    }
  }
`;

const HeroSection = () => {
  const navigate = useNavigate(); 

  const handleExploreClick = () => {
    navigate('/explore'); 
  };

  return (
    <HeroContainer>
      <Logo src={logo} alt="Logo" />
      <HeroContent>
        <h1>We Provide Fresh Produce</h1>
        <p>Eat Your Greens for a Healthy Sheen.</p>
        <p>Juicy and Delicious: Fruits for Every Occasion.</p>
        <button onClick={handleExploreClick}>Explore Now</button>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
