import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2); 
  backdrop-filter: blur(10px); 
  padding: 15px 30px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  @media (max-width: 768px) {
    padding: 10px 15px;
    justify-content: space-between;
  }
`;


const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
    width: 100%;
    justify-content: center; 
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 5px; 
  }
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #5fa941;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #5fa941;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    visibility: visible;
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const CartIcon = styled.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  position: relative;

  span {
    font-size: 0.8rem;
    margin-left: 5px;
    background: #5fa941;
    color: white;
    padding: 2px 5px;
    border-radius: 50%;
    position: absolute;
    top: -8px;
    right: -10px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <Nav>
      <NavLinks>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/explore">Explore</NavLinkStyled>
        <NavLinkStyled to="/categories">Categories</NavLinkStyled>
        <NavLinkStyled to="/organic">Organic</NavLinkStyled>
        <NavLinkStyled to="/products">Products</NavLinkStyled>
        <NavLinkStyled to="/cart">
          <CartIcon>🛒 <span>{cartItems.length}</span></CartIcon>
        </NavLinkStyled>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
