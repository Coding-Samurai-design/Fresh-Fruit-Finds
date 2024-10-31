import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { QRCodeCanvas } from 'qrcode.react';
import Modal from 'react-modal';
import styled from 'styled-components';

const BuyNowPageContainer = styled.div`
  padding: 80px 20px;
  background-color: #07250c;
  color: #fff;
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
  background-color: #001f07;
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
  margin-top: 20px;
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

  input,
  textarea {
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
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 400px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;


const ModalContent = styled.div`
  background: #07250c;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  color: #fff;
  text-align: center;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
`;


const ModalButton = styled.button`
  background: linear-gradient(135deg, #7ed957, #5da23a);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 15px;

  &:hover {
    background: linear-gradient(135deg, #5da23a, #7ed957);
    transform: scale(1.05);
  }
`;

const MAX_UPI_AMOUNT = 100000;

const BuyNowPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { products = [] } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    message: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [productNames, setProductNames] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    const calculatedTotal = products.reduce((acc, product) => {
      let price = product.price.replace(/[^0-9.]/g, '');
      price = parseFloat(price);
      if (isNaN(price)) price = 0;
      return acc + price;
    }, 0);

    setTotalPrice(calculatedTotal);
    const names = products.map((product) => product.title).join(', ');
    setProductNames(names);
  }, [products]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateUPILink = (amount) => {
    const finalAmount = amount > MAX_UPI_AMOUNT ? '' : amount;
    return `upi://pay?pa=7788078024@axl&pn=Your Name&mc=0000&am=${finalAmount}&cu=INR&mode=02&purpose=00`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (totalPrice > MAX_UPI_AMOUNT) {
      alert(
        `UPI payment is limited to amounts up to INR ${MAX_UPI_AMOUNT}. Please select Cash on Delivery or split the payment.`
      );
      return;
    }

    emailjs
      .send(
        'service_uxox1dk',
        'template_ohb7uve',
        {
          product_name: productNames,
          name: formData.name,
          email: formData.email,
          address: formData.address,
          phone: formData.phone,
          message: formData.message,
          payment_status: paymentMethod === 'upi' ? 'Paid via UPI' : 'Pending - Cash on Delivery',
          total_price: totalPrice,
          to_email: formData.email
        },
        'aDNtWgyBA_304wJQ_'
      )
      .then(() => {
        setModalMessage('Purchase confirmed! Check your email for details.');
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setModalMessage('Failed to send email. Please try again.');
        setIsModalOpen(true);
      });
  };
  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/ThankYouPage'); 
  };

  const handlePaymentOption = (option) => {
    setPaymentMethod(option);
  };

  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products selected.</div>;
  }

  return (
    <BuyNowPageContainer>
      <h1>Buy Your Products Now</h1>
      <ProductSummary>
        <h2>Order Summary</h2>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
          </div>
        ))}
        <h3>Total: <span>{totalPrice}</span></h3>
        
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
            <BuyButton
              type="button"
              onClick={() => handlePaymentOption('cash')}
            >
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
              value={generateUPILink(totalPrice)}
              size={300}
              level="H"
            />
          </div>
        )}
      </ProductSummary>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            padding: '0',
            border: 'none',
            borderRadius: '15px',
          },
        }}
      >
         <ModalContent>
          <h2>{modalMessage}</h2>
          <ModalButton onClick={closeModal}>OK</ModalButton>
        </ModalContent>
      </Modal>
    </BuyNowPageContainer>
  );
};

export default BuyNowPage;
