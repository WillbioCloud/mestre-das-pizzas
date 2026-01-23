import React from 'react';
import { Instagram, Facebook, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-brown text-brand-cream pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col items-start">
             <Link to="/" className="mb-4 block">
                <img 
                  src="logo.png" 
                  alt="Mestre das Pizzas" 
                  className="h-24 w-auto object-contain drop-shadow-sm hover:opacity-90 transition-opacity" 
                />
            </Link>
            <p className="text-sm text-brand-cream/70 mb-4">
              Pizza quentinha, sabor de verdade. Ingredientes selecionados e massa artesanal para você e sua família.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-yellow transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-brand-yellow transition-colors"><Facebook className="h-6 w-6" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-yellow">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/cardapio" className="hover:text-white transition-colors">Cardápio Completo</Link></li>
              <li><Link to="/cardapio" className="hover:text-white transition-colors">Promoções</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Área de Entrega</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-yellow">Atendimento</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-brand-yellow shrink-0" />
                <span>
                  Seg - Dom: 18h às 23:30h<br />
                  <span className="text-xs text-brand-cream/60">Tempo médio de entrega: 50min</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-yellow shrink-0" />
                <span>
                  Rua das Pizzas, 123 - Centro<br />
                  Cidade/UF
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-cream/10 pt-6 mt-6 text-center text-xs text-brand-cream/40">
          <p>Adicionais: Tomate, cebola e milho não serão cobrados.</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Mestre das Pizzas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;