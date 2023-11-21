import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import FeatureCard from '../components/FeatureCard';
import AddImage from '../assets/money1.png'; // Update with your actual image path
import DelImage from '../assets/money2.png';
import VisImage from '../assets/money3.png';

const Background = styled.div`
  height: 100vh;
  background: #053B50;
  background-image: linear-gradient(to bottom right, #053B50, 85%, #32C6DA);
  background-repeat: no-repeat;
`;

const NavbarWrapper = styled.div`
  border-bottom: 1px solid #ccc; 
`;

const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
`;

const Features = () => {
  return (
    <Background>
      <div>
        <NavbarWrapper>
          <Navbar />
        </NavbarWrapper>

        <FeaturesWrapper>
          <FeatureCard
            image={AddImage}
            title="Add a New Transaction"
            description="Record your latest investment or financial transaction easily with our intuitive interface."
          />

          <FeatureCard
            image={DelImage}
            title="Delete Transaction"
            description="Remove unwanted or incorrect transactions effortlessly with just a few clicks."
          />

          <FeatureCard
            image={VisImage}
            title="Visualize and Analyze Investments"
            description="Gain insights into your investment portfolio with interactive visualizations and powerful analytical tools."
          />
        </FeaturesWrapper>
      </div>
    </Background>
  );
};

export default Features;
