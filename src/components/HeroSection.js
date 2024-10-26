import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import heroBackground from '../assets/453933.jpg';

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

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url(${heroBackground}) center/cover no-repeat;
  padding: 0 50px;
  animation: ${fadeIn} 1.5s ease-in-out;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

const HeroContent = styled.div`
  color: #ffffff;
  text-align: center;
  max-width: 700px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);

  h1 {
    font-size: 3.5rem;

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

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 10px 20px;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
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
      <HeroContent>
        <h1>We Provide Fresh Produce</h1>
        <p>Eat Your Greens for a Healthy Sheen.</p>
        <button onClick={handleExploreClick}>Explore Now</button>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
