import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent; /* Fully transparent background */
  padding: 15px 30px;
  position: fixed; /* Fixes navbar at the top */
  width: 100%;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
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
`;

const CartIcon = styled.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
    margin-left: 5px;
    background: #5fa941;
    color: white;
    padding: 2px 6px;
    border-radius: 50%;
    display: inline-block;
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
