import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Search } from 'lucide-react';
import { Product } from '../types';

const Menu: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'combos', label: 'Combos' },
    { id: 'tradicionais', label: 'Pizzas Tradicionais' },
    { id: 'doces', label: 'Pizzas Doces' },
    { id: 'bebidas', label: 'Bebidas' },
  ];

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-brand-cream pattern-bg pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-brown mb-4">Nosso Cardápio</h1>
          <p className="text-stone-600">Escolha o seu sabor favorito.</p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          
          {/* Category Tabs */}
          <div className="flex overflow-x-auto pb-2 w-full md:w-auto gap-2 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-bold transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-brand-red text-white shadow-md' 
                    : 'bg-white text-brand-brown hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Buscar pizza..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Results Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-stone-500 font-serif">Nenhum item encontrado para sua busca.</p>
            <button 
              onClick={() => {setSearchTerm(''); setActiveCategory('todos')}}
              className="mt-4 text-brand-red font-bold hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Menu;