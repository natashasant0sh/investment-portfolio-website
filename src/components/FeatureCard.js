// FeatureCard.js

import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 500px; /* Set a fixed height to make all boxes the same size */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  color: #053B50;
  font-family: 'Roboto Mono', monospace;
  font-size:120%
  
`;

const Description = styled.p`
  color: #888;
  font-family: 'Roboto Mono', monospace;
  font-size:85%

`;


const ImageContainer = styled.div`
  height: 1000px; /* Set a fixed height for the image container */
  overflow: hidden; /* Hide any overflow */
`;

const Image = styled.img`
  width: 150%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire container, maintaining aspect ratio */
`;

const FeatureCard = ({ image, title, description }) => {
  return (
    <CardContainer>
      <ImageContainer>
        {/* Use the image prop if you have images */}
        {image && <Image src={image} alt={title} />}
      </ImageContainer>

      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default FeatureCard;
