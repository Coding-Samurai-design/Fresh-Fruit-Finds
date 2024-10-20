import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
import ProductImage1 from '../assets/orange-1117645_1280.jpg';
import ProductImage2 from '../assets/red-apple-fruit-half-green-leaf-isolated-white-ripe-background-apples-clipping-path-98166062.webp';
import ProductImage3 from '../assets/fresh-juicy-sliced-watermelon-fruit-with-water-splash-isolated-on-background-healthy-fruit-ai-generative-photo.jpg';

const ExploreContainer = styled.div`
  background: linear-gradient(135deg, #07250c, #3a7e1b);
  color: #fff;
  padding: 80px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 15px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #7ed957;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  line-height: 1.6;
  color: #d2e1d6;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  color: #07250c;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    font-size: 1.5rem;
    margin: 15px 0;
  }

  p {
    font-size: 1rem;
    padding: 0 15px;
  }

  button {
    background-color: #7ed957;
    color: #07250c;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin: 20px 0;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #5fa941;
    }
  }
`;

const CallToAction = styled.div`
  margin-top: 60px;
  text-align: center;

  button {
    background-color: #7ed957;
    color: #07250c;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      background-color: #5fa941;
    }
  }
`;

const Explore = () => {
  const navigate = useNavigate(); 

  const handleExploreMore = () => {
    navigate('/products'); 
  };

  return (
    <ExploreContainer>
      <Title>Explore Our Fresh Produce</Title>
      <Description>
        Here you can find all our fresh products and more! Browse through our collection and enjoy the best organic and farm-fresh produce.
      </Description>

      
      <ProductGrid>
        <ProductCard>
          <img src={ProductImage1} alt="Product 1" />
          <h3>Fresh Oranges</h3>
          <p>Delicious fresh produce straight from our farms.</p>
          
        </ProductCard>

        <ProductCard>
          <img src={ProductImage2} alt="Product 2" />
          <h3>Red Apple</h3>
          <p>High-quality organic fruits and vegetables.</p>
          
        </ProductCard>

        <ProductCard>
          <img src={ProductImage3} alt="Product 3" />
          <h3>Juicy Watermelon</h3>
          <p>Get fresh produce delivered to your doorsteps.</p>
          
        </ProductCard>
      </ProductGrid>

     
      <CallToAction>
        <h2>Ready to Order?</h2>
        <button onClick={handleExploreMore}>Explore More Products</button>
      </CallToAction>
    </ExploreContainer>
  );
};

export default Explore;