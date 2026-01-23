import React from 'react';
import { ArrowRight, Clock, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const combos = MENU_ITEMS.filter(item => item.category === 'combos');
  const highlights = MENU_ITEMS.filter(item => item.category === 'tradicionais').slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-brand-brown text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80" 
            alt="Pizza Background" 
            className="w-full h-full object-cover"
           />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <div className="mb-6 inline-block p-3 rounded-full bg-brand-yellow/20 backdrop-blur-sm border border-brand-yellow/50">
            <span className="text-brand-yellow font-bold uppercase tracking-wider text-sm">Entrega em 50 minutos 🛵</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-lg">
            Pizza quentinha, <br/>
            <span className="text-brand-yellow">sabor de verdade</span> 🍕
          </h1>
          <p className="text-xl md:text-2xl text-brand-cream/90 mb-10 max-w-2xl">
            A tradição do forno a lenha direto para sua casa. Aproveite nossos combos exclusivos hoje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/cardapio" 
              className="bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Pedir no WhatsApp <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              to="/cardapio" 
              className="bg-brand-cream hover:bg-white text-brand-brown font-bold py-4 px-8 rounded-full shadow-lg transition-all flex items-center justify-center"
            >
              Ver Cardápio Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Combos Section */}
      <section className="py-16 bg-brand-cream relative pattern-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-brand-brown mb-4">Combos & Promoções</h2>
            <div className="h-1 w-24 bg-brand-red mx-auto rounded-full"></div>
            <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
              Os melhores pedidos para matar sua fome com economia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {combos.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-brown mb-2">As Favoritas da Casa</h2>
              <p className="text-stone-600">Pizzas tradicionais que todo mundo ama.</p>
            </div>
            <Link to="/cardapio" className="text-brand-red font-bold hover:text-brand-brown transition-colors hidden sm:block">
              Ver todas &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
             <Link to="/cardapio" className="text-brand-red font-bold hover:text-brand-brown transition-colors">
              Ver cardápio completo &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-brand-brown text-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-12 text-brand-yellow">Como Pedir</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mb-4 text-brand-brown font-bold text-2xl shadow-lg">1</div>
              <h3 className="text-xl font-bold mb-2">Escolha seus itens</h3>
              <p className="text-brand-cream/70">Navegue pelo cardápio e adicione pizzas, bebidas e combos ao carrinho.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mb-4 text-brand-brown font-bold text-2xl shadow-lg">2</div>
              <h3 className="text-xl font-bold mb-2">Informe os dados</h3>
              <p className="text-brand-cream/70">Preencha seu endereço e forma de pagamento rapidamente.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mb-4 text-brand-brown font-bold text-2xl shadow-lg">3</div>
              <h3 className="text-xl font-bold mb-2">Envie no WhatsApp</h3>
              <p className="text-brand-cream/70">Finalize o pedido e envie a mensagem automática para nossa loja.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-12 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="inline-flex items-center gap-2 text-brand-red mb-4">
              <MapPin className="h-6 w-6" />
              <span className="font-bold uppercase tracking-widest">Área de Entrega</span>
           </div>
           <h3 className="font-serif text-3xl font-bold text-brand-brown mb-4">Entregamos na sua região</h3>
           <p className="text-stone-600 max-w-xl mx-auto">
             Taxa de entrega calculada conforme a região. Informe seu bairro no momento do pedido para confirmarmos o valor da taxa.
           </p>
        </div>
      </section>

    </div>
  );
};

export default Home;