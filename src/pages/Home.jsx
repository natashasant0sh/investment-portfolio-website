import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const Background = styled.div`
height: 100vh;
background: #053B50;
background-image: linear-gradient(to bottom right,#053B50,85%, #32C6DA );
background-repeat: no-repeat;
`;

const NavbarWrapper = styled.div`
  border-bottom: 1px solid #ccc; 
`;


const Home = () => {
  return (
    <Background>
    <div>
        <NavbarWrapper>
            <Navbar />
        </NavbarWrapper>
      
    </div>
    </Background>
  );
};

export default Home;