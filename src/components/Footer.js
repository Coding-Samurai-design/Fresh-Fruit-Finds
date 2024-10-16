import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #07250c;  
  color: #7ed957;  /* Green color for text */
  padding: 20px 0;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterLinks = styled.div`
  margin: 10px 0;

  a {
    color: #7ed957;  /* Green color for links */
    margin: 0 10px;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      color: #fff;  /* White color on hover */
    }
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  margin: 5px 0;
  color: #7ed957;  /* Green color for text */
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/contact-us">Contact Us</a>
        </FooterLinks>
        <FooterText>&copy; {new Date().getFullYear()} Fresh Field Find. All Rights Reserved.</FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;