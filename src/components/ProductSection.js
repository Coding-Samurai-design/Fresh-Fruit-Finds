import React from 'react';
import styled from 'styled-components';
import productImage1 from '../assets/360_F_468108626_wpL1hcDkE4g12mPPnbVxx8rCnWpHYKmV.jpg';
import productImage2 from '../assets/aa17525d6461817943c4d58c8e93da670425748a.jpg';
import productImage3 from '../assets/Green-Bell-Pepper-hero@2x.png';
import productImage4 from '../assets/orange-1117645_1280.jpg';
import productImage5 from '../assets/red-apple-fruit-half-green-leaf-isolated-white-ripe-background-apples-clipping-path-98166062.webp'; 
import productImage6 from '../assets/fresh-juicy-sliced-watermelon-fruit-with-water-splash-isolated-on-background-healthy-fruit-ai-generative-photo.jpg'; 
import productImage7 from '../assets/ripe-bananas.jpg'; 
import productImage8 from '../assets/cucumber-seeds-malaysia-t103m_900x.webp'; 
import productImage9 from '../assets/pexels-julia-nagy-568948-1327838.jpg'; 
import productImage10 from '../assets/20180929_BLP506.avif'; 
import productImage11 from '../assets/104607360.webp'; 
import productImage12 from '../assets/sweet_corn_pic_7C4E17FD8CCFA.jpg'; 

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

const SectionHeader = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
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

  p {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
    color: #7ed957;
  }
`;

const products = [
  {
    id: 1,
    title: 'Green Broccoli',
    price: '$8.00',
    image: productImage1,
  },
  {
    id: 2,
    title: 'Purple Onion',
    price: '$10.00',
    image: productImage2,
  },
  {
    id: 3,
    title: 'Green Bell Pepper',
    price: '$18.00',
    image: productImage3,
  },
  {
    id: 4,
    title: 'Fresh Oranges',
    price: '$12.00',
    image: productImage4,
  },
  {
    id: 5,
    title: 'Red Apples',
    price: '$15.00',
    image: productImage5,
  },
  {
    id: 6,
    title: 'Juicy Watermelon',
    price: '$20.00',
    image: productImage6,
  },
  {
    id: 7,
    title: 'Ripe Bananas',
    price: '$9.00',
    image: productImage7,
  },
  {
    id: 8,
    title: 'Cucumber',
    price: '$6.00',
    image: productImage8,
  },
  {
    id: 9,
    title: 'Tomatoes',
    price: '$7.00',
    image: productImage9,
  },
  {
    id: 10,
    title: 'Carrots',
    price: '$5.00',
    image: productImage10,
  },
  {
    id: 11,
    title: 'Red Grapes',
    price: '$14.00',
    image: productImage11,
  },
  {
    id: 12,
    title: 'Sweet Corn',
    price: '$11.00',
    image: productImage12,
  },
];

const ProductSection = () => {
  return (
    <ProductSectionContainer>
      <SectionHeader>Farm Fresh Products</SectionHeader>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Fresh and organic produce straight from the farm.</p>
            <span>{product.price}</span>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductSectionContainer>
  );
};

export default ProductSection;