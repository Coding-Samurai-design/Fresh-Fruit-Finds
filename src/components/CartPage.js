import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';

const CartContainer = styled.div`
  min-height: 100vh;
  padding: 50px 20px;
  background-color: #07250c;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.3rem;
  }
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #001f07;
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  img {
    width: 100px;
    border-radius: 10px;
    margin-right: 15px;
  }

  h3 {
    font-size: 1.5rem;
    flex: 1;
  }

  p {
    font-size: 1.2rem;
    color: #7ed957;
    margin-right: 20px;
  }
`;

const Button = styled.button`
  background-color: #7ed957;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #5da23a;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const CheckoutButton = styled(Button)`
  margin-top: 20px;
  padding: 12px 25px;
  font-size: 1.1rem;
`;

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate(); 

  const handleCheckout = () => {
    navigate('/buy-now', { state: { products: cartItems } });
  };

  return (
    <CartContainer>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
          </CartItem>
        ))
      )}
      {cartItems.length > 0 && (
        <CheckoutButton onClick={handleCheckout}>
          Proceed to Checkout
        </CheckoutButton>
      )}
    </CartContainer>
  );
};

export default CartPage;