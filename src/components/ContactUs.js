import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 60px 30px;
  background-color: #f9f9f9;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: #07250c;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const MapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Map = styled.iframe`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  height: 400px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

const ContactDetails = styled.div`
  flex: 1;
  min-width: 300px;
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const DetailItem = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 10px;

  & span {
    font-weight: bold;
    color: #3a7e1b;
  }
`;

const ContactUs = () => {
  return (
    <ContactContainer>
      <Title>Contact Us</Title>

      <MapContainer>
        <Map 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.425473557775!2d86.93212999999999!3d21.498124999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1e1a23a7e5fdef%3A0xc1fda07fbf4afc8d!2sAkatpur%2C%20Balasore%2C%20Odisha%20756745!5e0!3m2!1sen!2sin!4v1697361808694!5m2!1sen!2sin" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></Map>

        <ContactDetails>
          <DetailItem>
            <span>Address:</span> AT- Akatpur, PO- Sunhat, Balasore, India
          </DetailItem>
          <DetailItem>
            <span>Email:</span> sagarpanigrahi306@gmail.com
          </DetailItem>
          <DetailItem>
            <span>Phone:</span> +91 77880 78024
          </DetailItem>
          <DetailItem>
            <span>Working Hours:</span> Monday - Friday, 9:00 AM - 6:00 PM
          </DetailItem>
        </ContactDetails>
      </MapContainer>
    </ContactContainer>
  );
};

export default ContactUs;