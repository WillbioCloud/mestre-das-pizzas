import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-stone-200 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {product.isPromo && (
          <span className="absolute top-0 right-0 bg-brand-yellow text-brand-brown text-xs font-bold px-3 py-1 m-2 rounded-full shadow-md z-10">
            PROMOÇÃO
          </span>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-bold text-brand-brown leading-tight">{product.name}</h3>
        </div>
        
        <p className="text-stone-600 text-sm mb-4 flex-grow">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
          <span className="text-2xl font-bold text-brand-red">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          
          <button 
            onClick={() => addToCart(product, 1)}
            className="bg-brand-red hover:bg-brand-brown text-white p-2 rounded-full shadow-md transition-colors flex items-center gap-1 px-4"
            aria-label={`Adicionar ${product.name} ao carrinho`}
          >
            <span className="text-sm font-bold">Adicionar</span>
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;