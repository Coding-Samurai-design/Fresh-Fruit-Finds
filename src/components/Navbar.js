import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const NavLink = styled(Link)`
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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/organic">Organic</NavLink>
        <NavLink to="/products">Products</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
