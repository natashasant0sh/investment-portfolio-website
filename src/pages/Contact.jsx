import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const Background = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #053B50;
  background-image: linear-gradient(to bottom right, #053B50, 85%, #32C6DA);
  background-repeat: no-repeat;
`;

const CommonNavbar = styled.div`
  border-bottom: 1px solid #ccc;
  background: #053B50;
`;

const ButtonLink = styled.a`
  display: inline-block;
  background-color: #32C6DA;
  padding: 10px 20px;
  color: #053B50;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Contact = () => {
  return (
    <div>
      <CommonNavbar>
        <Navbar />
      </CommonNavbar>
      <Background>
        <div className='w-[620px] text-center'>
          <h1 className='text-[#6499E9] text-4xl font-bold font-outfit p-2'>
            Contact Us
          </h1>
          <div className='mt-3 text-white text-0.3rem font-roboto-mono'>
            <p>
              We'd love to hear from you! Feel free to reach out using the provided contact information.
            </p>
          </div>

          {/* Button links to LinkedIn and WhatsApp */}
          <div className='mt-3'>
          <ButtonLink
              href='mailto:nehanair.mail@gmail.com' 
              target='_blank'
              rel='noopener noreferrer'
            >
              Email
            </ButtonLink>
            <ButtonLink
              href='https://wa.me/+919980377603'
              target='_blank'
              rel='noopener noreferrer'
            >
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      </Background>
    </div>
  );
};

export default Contact;
