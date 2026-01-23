import React, { useState } from 'react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { WHATSAPP_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, itemsCount } = useCart();
  const location = useLocation();

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path ? 'text-brand-yellow font-bold' : 'text-brand-cream hover:text-brand-yellow';

  return (
    <nav className="bg-brand-red text-brand-cream shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
                <img 
                  src="logo.png" 
                  alt="Mestre das Pizzas" 
                  className="h-16 w-auto object-contain drop-shadow-md transform transition-transform duration-300 group-hover:scale-105" 
                />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={`${isActive('/')} transition-colors`}>Home</Link>
            <Link to="/cardapio" className={`${isActive('/cardapio')} transition-colors`}>Cardápio</Link>
            <Link to="/contato" className={`${isActive('/contato')} transition-colors`}>Contato</Link>
            
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`} 
              target="_blank" 
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-bold shadow-md transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <span>Pedir no WhatsApp</span>
            </a>

            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-brand-red/80 rounded-full transition-colors"
            >
              <ShoppingBag className="h-7 w-7" />
              {itemsCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-yellow text-brand-brown text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {itemsCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center space-x-4">
             <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2"
            >
              <ShoppingBag className="h-6 w-6" />
              {itemsCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-yellow text-brand-brown text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {itemsCount}
                </span>
              )}
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-brand-cream hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-brown/95 backdrop-blur-sm border-t border-brand-red/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-red"
            >
              Home
            </Link>
            <Link 
              to="/cardapio" 
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-red"
            >
              Cardápio
            </Link>
            <Link 
              to="/contato" 
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-red"
            >
              Contato
            </Link>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="block px-3 py-2 mt-4 text-center rounded-md text-base font-bold bg-green-600 text-white shadow-sm"
            >
              Pedir agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;