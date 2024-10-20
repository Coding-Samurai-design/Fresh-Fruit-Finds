import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import OrganicSection from './components/OrganicSection';
import CategoriesSection from './components/CategoriesSection';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ContactUs from './components/ContactUs';
import Explore from './components/Explore';
import FreshFood from './components/FreshFood';
import PremiumQuality from './components/PremiumQuality';
import OrganicFarming from './components/OrganicFarming';
import BuyNowPage from './components/BuyNowPage'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/categories" element={<CategoriesSection />} />
          <Route path="/organic" element={<OrganicSection />} />
          <Route path="/products" element={<ProductSection />} />
          <Route path="/fresh-food" element={<FreshFood />} />
          <Route path="/premium-quality" element={<PremiumQuality />} />
          <Route path="/organic-farming" element={<OrganicFarming />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/buy-now" element={<BuyNowPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
