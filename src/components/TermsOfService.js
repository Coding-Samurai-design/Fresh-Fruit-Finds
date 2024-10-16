import React from 'react';
import styled from 'styled-components';

const TermsContainer = styled.div`
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

const TermsOfService = () => {
  return (
    <TermsContainer>
      <Title>Terms of Service</Title>

      <Paragraph>
        Welcome to Fresh Feild Finds! These terms of service outline the rules and regulations for the use of our website.
      </Paragraph>

      <SectionTitle>1. Acceptance of Terms</SectionTitle>
      <Paragraph>
        By accessing or using our website, you agree to comply with and be bound by these terms. If you disagree with any part of these terms, you may not access the website.
      </Paragraph>

      <SectionTitle>2. Changes to Terms</SectionTitle>
      <Paragraph>
        We reserve the right to modify these terms at any time. You are responsible for reviewing these terms regularly. Continued use of the website constitutes acceptance of any changes.
      </Paragraph>

      <SectionTitle>3. Use of the Website</SectionTitle>
      <Paragraph>
        You agree to use the website only for lawful purposes and in accordance with these terms. You may not:
      </Paragraph>
      <List>
        <ListItem>Engage in any illegal or unauthorized activities on the website.</ListItem>
        <ListItem>Attempt to gain unauthorized access to the website, servers, or databases.</ListItem>
        <ListItem>Use the website to distribute viruses or malware.</ListItem>
      </List>

      <SectionTitle>4. Intellectual Property Rights</SectionTitle>
      <Paragraph>
        The content, design, and graphics on this website are the intellectual property of Fresh Feild Finds and are protected by copyright laws. You may not reproduce, distribute, or modify any content without our prior written consent.
      </Paragraph>

      <SectionTitle>5. Limitation of Liability</SectionTitle>
      <Paragraph>
        We are not liable for any damages or losses arising from your use of the website or inability to access the website. This includes, but is not limited to, direct, indirect, incidental, or consequential damages.
      </Paragraph>

      <SectionTitle>6. User Accounts</SectionTitle>
      <Paragraph>
        If you create an account on our website, you are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account.
      </Paragraph>

      <SectionTitle>7. Termination</SectionTitle>
      <Paragraph>
        We reserve the right to terminate or suspend your access to the website at our discretion, without notice, for any violation of these terms.
      </Paragraph>

      <SectionTitle>8. Governing Law</SectionTitle>
      <Paragraph>
        These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Your Jurisdiction.
      </Paragraph>

      <SectionTitle>9. Contact Information</SectionTitle>
      <Paragraph>
        If you have any questions or concerns about these terms, please contact us at sagarpanigrahi306@gmail.com.
      </Paragraph>
    </TermsContainer>
  );
};

export default TermsOfService;
