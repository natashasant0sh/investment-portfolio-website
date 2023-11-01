import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png'

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto; 
  height: 100px;
`;
  
const Logo = styled.img`
  height: 60px; // adjust as needed
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px; // adjust as needed
`;

const NavButtons = styled.div`
  display: flex;
  gap: 20px; // adjust as needed
`;

  const NavLink = styled(Link)`
  color: white; 
  text-decoration: none; 
  font-size: 20px;
  font-family: Roboto Mono;
  font-weight: 400;
`;

const NavButton = styled(Link)`
  color: white; 
  text-decoration: none; 
  font-size: 20px;
  font-family: Roboto Mono;
  font-weight: 400;
  border: 3px #32C6DA solid;
  padding: 10px 20px; 
  border-radius: 23px;
`;

const Navbar = () => {
  return (
    <Navigation>
        <Logo src={logo} alt="Logo" />
        <NavLinks>
            <NavLink to="./pages/Features">Features</NavLink>
            <NavLink to="pages/About">About</NavLink>
            <NavLink to="pages/Contact">Contact</NavLink>
        </NavLinks>
        <NavButtons>
            <NavButton to="pages/Login">Login</NavButton>
            <NavButton to="pages/SignUp">Sign Up</NavButton>
        </NavButtons>
    </Navigation>
  );
};

export default Navbar;

