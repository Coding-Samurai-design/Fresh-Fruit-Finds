import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import fruitImage from '../assets/pexels-pixabay-51312.jpg';
import vegetableImage from '../assets/images.jpg';
import juiceImage from '../assets/a-front-view-fresh-fruit-cocktails-with-fresh-fruit-slices-ice-cooling-on-blue-drink-juice-co-free-photo.jpg';


const CategoriesContainer = styled.div`
  background: linear-gradient(45deg, #001f07, #004d1a);
  padding: 80px 30px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 15px;
  }
`;

const CategoriesHeader = styled.h2`
  text-align: center;
  color: #fff;
  margin-bottom: 50px;
  font-size: 2.5rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

const smoothSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const smoothSlideOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

const CategoriesGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  position: relative;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

const CategoryCard = styled.div`
  background-color: #07250c;
  color: #fff;
  width: 30%;
  padding: 20px;
  text-align: center;
  border-radius: 15px;
  animation: ${({ isVisible }) => (isVisible ? smoothSlideIn : smoothSlideOut)} 0.8s ease-in-out;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100px;
    margin-bottom: 20px;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    width: 80%;
    img {
      width: 80px;
    }

    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    img {
      width: 70px;
    }

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #48c774;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  z-index: 1;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #36a85f;
    transform: scale(1.1);
  }

  ${({ direction }) => (direction === 'prev' ? 'left: 10px;' : 'right: 10px;')};

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 6px 12px;
  }
`;


const categoriesData = [
  {
    image: fruitImage,
    title: 'Fresh Fruits',
    description: 'Enjoy a variety of organic fruits, picked fresh just for you.',
  },
  {
    image: vegetableImage,
    title: 'Vegetables',
    description: 'Farm-fresh vegetables grown naturally for a healthy life.',
  },
  {
    image: juiceImage,
    title: 'Fruit Juice',
    description: 'Delicious and nutritious juice made from fresh fruits.',
  },
];

const CategoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % categoriesData.length);
        setIsVisible(true);
      }, 800);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % categoriesData.length);
      setIsVisible(true);
    }, 800);
  };

  const handlePrev = () => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + categoriesData.length) % categoriesData.length);
      setIsVisible(true);
    }, 800);
  };

  const { image, title, description } = categoriesData[activeIndex];

  return (
    <CategoriesContainer>
      <CategoriesHeader>What We're Offering</CategoriesHeader>
      <CategoriesGrid>
        <NavButton direction="prev" onClick={handlePrev}>
          &#8249;
        </NavButton>
        <CategoryCard isVisible={isVisible}>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </CategoryCard>
        <NavButton direction="next" onClick={handleNext}>
          &#8250;
        </NavButton>
      </CategoriesGrid>
    </CategoriesContainer>
  );
};

export default CategoriesSection;