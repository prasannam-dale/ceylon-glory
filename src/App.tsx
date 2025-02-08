import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import SriLankanSpices from './pages/SriLankanSpices';
import Faq from './pages/Faq';
import InternationalReturnAndRefundPolicy from './pages/InternationalReturnAndRefundPolicy';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sri-lankan-spices" element={<SriLankanSpices />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/international-return-and-refund-policy" element={<InternationalReturnAndRefundPolicy />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:productName" element={<ProductPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;