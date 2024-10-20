import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { QRCodeCanvas } from 'qrcode.react'; // Correct import
import styled from 'styled-components';

const BuyNowPageContainer = styled.div`
  padding: 80px 20px;
  background-color: #f8f8f8;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 60px 15px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
  }
`;

const ProductSummary = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 60%;
  text-align: center;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 15px;
  }

  img {
    width: 100%;
    max-width: 300px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: #7ed957;
  }
`;

const BuyButton = styled.button`
  background-color: #7ed957;
  color: #fff;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5da23a;
  }

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 1rem;
  }
`;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input, textarea {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }

  textarea {
    height: 100px;
  }
`;

const PaymentOptionsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 400px;
`;

const BuyNowPage = () => {
  const location = useLocation();
  const { product } = location.state || { product: null };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    message: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send confirmation email using emailjs
    emailjs.send(
      'service_uxox1dk', // Replace with your EmailJS service ID
      'template_ohb7uve', // Replace with your EmailJS template ID
      {
        product_name: product.title,
        name: formData.name,
        email: formData.email,
        address: formData.address,
        phone: formData.phone,
        message: formData.message,
      },
      'aDNtWgyBA_304wJQ_' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Purchase confirmed! Check your email for details.');

      if (paymentMethod === 'upi') {
        // Redirect to PhonePe for UPI payment
        const upiLink = `upi://pay?pa=7788078024@axl&pn=Sagar Panigrahi&am=500&cu=INR&tn=Payment%20for%20${product.title}`;
        window.location.href = upiLink;
      }
    }).catch((error) => {
      console.log('FAILED...', error);
      alert('Failed to send email. Please try again.');
    });
  };

  const handlePaymentOption = (option) => {
    setPaymentMethod(option);
  };

  if (!product) {
    return <div>No product selected.</div>;
  }

  return (
    <BuyNowPageContainer>
      <h1>Buy Your Product Now</h1>
      <ProductSummary>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>Fresh and organic produce straight from the farm.</p>
        <span>{product.price}</span>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Additional Message"
            value={formData.message}
            onChange={handleChange}
          />
          <PaymentOptionsContainer>
            <BuyButton type="button" onClick={() => handlePaymentOption('cash')}>
              Cash on Delivery
            </BuyButton>
            <BuyButton type="button" onClick={() => handlePaymentOption('upi')}>
              QR Code Scan Pay
            </BuyButton>
          </PaymentOptionsContainer>
          <BuyButton type="submit">Confirm Purchase</BuyButton>
        </Form>

        {paymentMethod === 'upi' && (
          <div>
            <h3>Scan to Pay via UPI</h3>
            <QRCodeCanvas 
              value={`upi://pay?pa=7788078024@axl&pn=Sagar Panigrahi&am=${product.price}&cu=INR&tn=Payment%20for%20${product.title}`} 
              size={256} 
            />
          </div>
        )}
      </ProductSummary>
    </BuyNowPageContainer>
  );
};

export default BuyNowPage;