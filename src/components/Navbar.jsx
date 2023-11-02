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
  @import url('https://fonts.googleapis.com/css2?family=PT+Serif&family=Roboto+Mono:wght@300&display=swap');
  color: white; 
  text-decoration: none; 
  font-size: 20px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
`;

const NavButton = styled(Link)`
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&family=Roboto+Mono:wght@300&display=swap');
  color: white; 
  text-decoration: none; 
  font-size: 20px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  border: 3px #32C6DA solid;
  padding: 10px 20px; 
  border-radius: 25px;
  &:hover{
    background-color: rgba(128,128,128,0.5);
  }
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

