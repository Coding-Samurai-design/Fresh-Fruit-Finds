import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Fixed typo
import styled from 'styled-components';
import { useCart } from '../context/CartContext'; // Import useCart from CartContext

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0B6623; 
  padding: 15px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; 
    width: 100%;
  }
`;

const NavLinkStyled = styled(NavLink)` // Changed NavLink naming for better readability
  margin: 0 15px;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    color: #5fa941;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 10px 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  position: absolute;
  left: 15px; 
  
  span {
    height: 3px;
    width: 25px;
    background-color: white;
    margin: 4px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart(); // Access cart items from context

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Hamburger onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <NavLinks isOpen={isOpen}>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/explore">Explore</NavLinkStyled>
        <NavLinkStyled to="/categories">Categories</NavLinkStyled>
        <NavLinkStyled to="/organic">Organic</NavLinkStyled>
        <NavLinkStyled to="/products">Products</NavLinkStyled>
        <NavLinkStyled to="/cart">
          <span>🛒 {cartItems.length}</span> {/* Cart icon with item count */}
        </NavLinkStyled>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
