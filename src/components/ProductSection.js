import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';
import productImage1 from '../assets/360_F_468108626_wpL1hcDkE4g12mPPnbVxx8rCnWpHYKmV.jpg';
import productImage2 from '../assets/aa17525d6461817943c4d58c8e93da670425748a.jpg';
import productImage3 from '../assets/Green-Bell-Pepper-hero@2x.png';
import productImage4 from '../assets/orange-1117645_1280.jpg';
import productImage5 from '../assets/red-apple-fruit-half-green-leaf-isolated-white-ripe-background-apples-clipping-path-98166062.webp';
import productImage6 from '../assets/fresh-juicy-sliced-watermelon-fruit-with-water-splash-isolated-on-background-healthy-fruit-ai-generative-photo.jpg';
import productImage7 from '../assets/carrot-head.png';
import productImage8 from '../assets/ripe-bananas.jpg';
import productImage9 from '../assets/sweet_corn_pic_7C4E17FD8CCFA.jpg';
import productImage10 from '../assets/pexels-julia-nagy-568948-1327838.jpg';
import productImage11 from '../assets/cucumber-seeds-malaysia-t103m_900x.webp';
import productImage12 from '../assets/104607360.webp';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props => (props.isVisible ? 'scale(1)' : 'scale(0.8)')};
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

const ModalMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #333;
`;

const CloseButton = styled.button`
  background-color: #7ed957;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5da23a;
  }
`;

const ProductSectionContainer = styled.div`
  padding: 100px 20px;
  background-color: #07250c;
  color: #fff;
  text-align: center;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 30px;

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
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 15px;
    object-fit: cover;
    max-height: 200px;
  }

  h3 {
    font-size: 1.7rem;
    margin-bottom: 10px;
  }

  span {
    font-size: 1.3rem;
    font-weight: bold;
    color: #7ed957;
    display: block;
    margin-bottom: 20px;
  }
`;

const BuyButton = styled.button`
  background-color: #7ed957;
  color: #fff;
  border: none;
  padding: 12px 25px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  margin-right: 10px;

  &:hover {
    background-color: #5da23a;
  }
`;

const AddToCartButton = styled(BuyButton)`
  background-color: #3ba73b;

  &:hover {
    background-color: #2d8a2d;
  }
`;

const products = [
  { id: 1, title: 'Green Broccoli', price: 'RS 80.00', image: productImage1 },
  { id: 2, title: 'Purple Onion', price: 'Rs 60.00', image: productImage2 },
  { id: 3, title: 'Green Bell Pepper', price: 'Rs 18.00', image: productImage3 },
  { id: 4, title: 'Fresh Oranges', price: 'Rs 120.00', image: productImage4 },
  { id: 5, title: 'Red Apples', price: 'Rs 150.00', image: productImage5 },
  { id: 6, title: 'Juicy Watermelon', price: 'Rs 200.00', image: productImage6 },
  { id: 7, title: 'Carrot', price: 'Rs 20.00', image: productImage7 },
  { id: 8, title: 'Ripe Bananas', price: 'Rs 80.00', image: productImage8 },
  { id: 9, title: 'Sweet Corn', price: 'Rs 40.00', image: productImage9 },
  { id: 10, title: 'Tomatoes', price: 'Rs 20.00', image: productImage10 },
  { id: 11, title: 'Cucumber', price: 'Rs 80.00', image: productImage11 },
  { id: 12, title: 'Grapes', price: 'Rs 220.00', image: productImage12 },
];

const ProductSection = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleBuyNow = (selectedProduct) => {
    navigate('/buy-now', { state: { products: [selectedProduct] } });
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setModalMessage(`${product.title} added to cart!`);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ProductSectionContainer>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <span>{product.price}</span>
            <BuyButton onClick={() => handleBuyNow(product)}>Buy Now</BuyButton>
            <AddToCartButton onClick={() => handleAddToCart(product)}>Add to Cart</AddToCartButton>
          </ProductCard>
        ))}
      </ProductGrid>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent isVisible={isModalOpen}>
            <ModalMessage>{modalMessage}</ModalMessage>
            <CloseButton onClick={closeModal}>OK</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </ProductSectionContainer>
  );
};

export default ProductSection;
