import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0B6623;
  padding: 15px 30px;
  position: relative;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    color: #5fa941;
  }

  @media (max-width: 768px) {
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
          <span>🛒 {cartItems.length}</span>
        </NavLinkStyled>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
