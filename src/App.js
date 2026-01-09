import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import all page components
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServicesDelivery from './pages/ServicesDelivery';
import ServicesDropOff from './pages/ServicesDropOff';
import ServicesSelfService from './pages/ServicesSelfService';
import ServicesCommercial from './pages/ServicesCommercial';
import OrderNow from './pages/OrderNow';
import Shop from './pages/Shop';
import Company from './pages/Company';
import Policies from './pages/Policies';
import More from './pages/More';
import SignIn from './pages/SignIn';
import PickupAndDelivery from './pages/PickupAndDelivery';
import ContactUs from './pages/ContactUs';
import Location from './pages/Location';

function App() {
  // Only use basename in production (GitHub Pages), not in development
  // GitHub Pages URL: https://AyomideCommunity.github.io/laundromat-co
  const basename = process.env.NODE_ENV === 'production' ? '/laundromat-co' : undefined;
  
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/delivery" element={<ServicesDelivery />} />
        <Route path="/services/drop-off" element={<ServicesDropOff />} />
        <Route path="/services/self-service" element={<ServicesSelfService />} />
        <Route path="/services/commercial" element={<ServicesCommercial />} />
        <Route path="/order-now" element={<OrderNow />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/company" element={<Company />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/more" element={<More />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/pickup-and-delivery" element={<PickupAndDelivery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;
