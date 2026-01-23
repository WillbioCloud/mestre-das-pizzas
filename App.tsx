import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import { CartProvider } from './context/CartContext';
import CartSidebar from './components/CartSidebar';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen font-sans bg-brand-cream text-brand-brown">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cardapio" element={<Menu />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
          <CartSidebar />
          <FloatingWhatsApp />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;