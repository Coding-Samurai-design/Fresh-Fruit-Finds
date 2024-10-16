import React from 'react';
import styled from 'styled-components';

const PrivacyPolicyContainer = styled.div`
  padding: 60px 30px;
  background-color: #f9f9f9;
  color: #333;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  max-width: 1200px;
  margin: 0 auto;

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
  color: #07250c;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 40px;
  color: #3a7e1b;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const List = styled.ul`
  padding-left: 20px;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyContainer>
      <Title>Privacy Policy</Title>
      
      <Paragraph>
        At Fresh Feild Finds, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website.
      </Paragraph>
      
      <SectionTitle>1. Information We Collect</SectionTitle>
      <Paragraph>
        We may collect personal information that you voluntarily provide to us, including:
      </Paragraph>
      <List>
        <ListItem>Your name, email address, and contact details</ListItem>
        <ListItem>Information related to your inquiries or requests</ListItem>
        <ListItem>Website usage data collected through cookies</ListItem>
      </List>

      <SectionTitle>2. How We Use Your Information</SectionTitle>
      <Paragraph>
        We use your personal information to provide you with our services and to improve your experience on our website. This may include:
      </Paragraph>
      <List>
        <ListItem>Responding to your inquiries or requests</ListItem>
        <ListItem>Sending you updates or promotional content (if you’ve subscribed)</ListItem>
        <ListItem>Improving our website and services</ListItem>
      </List>

      <SectionTitle>3. Data Protection</SectionTitle>
      <Paragraph>
        We take appropriate measures to protect your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of transmitting data over the internet is completely secure.
      </Paragraph>

      <SectionTitle>4. Your Rights</SectionTitle>
      <Paragraph>
        You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact us at [contact email].
      </Paragraph>

      <SectionTitle>5. Cookies</SectionTitle>
      <Paragraph>
        Our website uses cookies to enhance your browsing experience. You can choose to accept or decline cookies by modifying your browser settings.
      </Paragraph>

      <SectionTitle>6. Changes to This Policy</SectionTitle>
      <Paragraph>
        We may update this Privacy Policy from time to time. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
      </Paragraph>

      <SectionTitle>7. Contact Us</SectionTitle>
      <Paragraph>
        If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at sagarpanigrahi306@gmail.com.
      </Paragraph>
    </PrivacyPolicyContainer>
  );
};

export default PrivacyPolicy;
