import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import productImage1 from '../assets/360_F_468108626_wpL1hcDkE4g12mPPnbVxx8rCnWpHYKmV.jpg';
import productImage2 from '../assets/aa17525d6461817943c4d58c8e93da670425748a.jpg';
import productImage3 from '../assets/Green-Bell-Pepper-hero@2x.png';
import productImage4 from '../assets/orange-1117645_1280.jpg';
import productImage5 from '../assets/red-apple-fruit-half-green-leaf-isolated-white-ripe-background-apples-clipping-path-98166062.webp';
import productImage6 from '../assets/fresh-juicy-sliced-watermelon-fruit-with-water-splash-isolated-on-background-healthy-fruit-ai-generative-photo.jpg';

const ProductSectionContainer = styled.div`
  padding: 80px 20px;
  background-color: #07250c;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 15px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); 
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr); 
  }
`;

const ProductCard = styled.div`
  background-color: #001f07;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
    color: #7ed957;
  }
`;

const BuyButton = styled.button`
  background-color: #7ed957;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5da23a;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
`;

const products = [
  {
    id: 1,
    title: 'Green Broccoli',
    price: 'RS 80.00',
    image: productImage1,
  },
  {
    id: 2,
    title: 'Purple Onion',
    price: 'Rs 60.00',
    image: productImage2,
  },
  {
    id: 3,
    title: 'Green Bell Pepper',
    price: 'Rs 18.00',
    image: productImage3,
  },
  {
    id: 4,
    title: 'Fresh Oranges',
    price: 'Rs 120.00',
    image: productImage4,
  },
  {
    id: 5,
    title: 'Red Apples',
    price: 'Rs v150.00',
    image: productImage5,
  },
  {
    id: 6,
    title: 'Juicy Watermelon',
    price: 'Rs 200.00',
    image: productImage6,
  },
];

const ProductSection = () => {
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    console.log(product); // Debugging product data
    navigate('/buy-now', { state: { product } });
  };

  return (
    <ProductSectionContainer>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <span>{product.price}</span>
            <BuyButton onClick={() => handleBuyNow(product)}>
              Buy Now
            </BuyButton>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductSectionContainer>
  );
};

export default ProductSection;
