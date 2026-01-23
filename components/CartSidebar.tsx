import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag, Send, Edit3 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OrderDetails, PAYMENT_METHODS } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

const CartSidebar: React.FC = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    removeFromCart, 
    updateQuantity, 
    updateObservation,
    total 
  } = useCart();
  
  const [details, setDetails] = useState<OrderDetails>({
    customerName: '',
    address: '',
    district: '',
    paymentMethod: 'Pix',
    generalObservation: ''
  });

  if (!isCartOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) return;

    // Build the message
    let message = `*Olá! Quero fazer um pedido na Mestre das Pizzas* 🍕\n\n`;
    message += `*Nome:* ${details.customerName}\n`;
    message += `*Endereço:* ${details.address}\n`;
    message += `*Bairro:* ${details.district}\n`;
    message += `--------------------------------\n`;
    message += `*ITENS DO PEDIDO:*\n`;
    
    cart.forEach(item => {
      message += `✅ ${item.quantity}x ${item.name}`;
      if (item.observation) message += `\n   _(Obs: ${item.observation})_`;
      message += `\n   R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });

    message += `--------------------------------\n`;
    message += `*TOTAL: R$ ${total.toFixed(2).replace('.', ',')}*\n`;
    message += `*Pagamento:* ${details.paymentMethod}\n`;
    if (details.generalObservation) {
      message += `*Obs. Gerais:* ${details.generalObservation}\n`;
    }

    // Encode and redirect
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
      
      <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
        <div className="h-full flex flex-col bg-white shadow-2xl w-full">
          
          {/* Header */}
          <div className="px-4 py-6 bg-brand-red text-white sm:px-6 flex items-center justify-between shadow-md relative z-10">
            <h2 className="text-xl font-bold flex items-center gap-2 font-serif">
              <ShoppingBag className="h-6 w-6" /> 
              Seu Pedido
            </h2>
            <button onClick={() => setIsCartOpen(false)} className="text-white hover:text-brand-yellow transition-colors rounded-full p-1 hover:bg-brand-red/80">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 sm:px-6 space-y-6 bg-stone-50">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                <div className="bg-stone-200 p-6 rounded-full">
                  <ShoppingBag className="h-12 w-12 text-stone-400" />
                </div>
                <p className="text-lg font-medium text-stone-600">Sua bandeja está vazia.</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-brand-red font-bold hover:underline"
                >
                  Voltar ao cardápio
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li key={item.internalId} className="bg-white p-4 rounded-lg shadow-sm border border-stone-200 flex flex-col gap-3">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-brand-brown leading-tight">{item.name}</h3>
                          <p className="text-xs text-stone-500 uppercase tracking-wide mt-1">{item.category === 'tradicionais' ? 'Pizza Tradicional' : item.category}</p>
                        </div>
                        <p className="text-base font-bold text-brand-red ml-4 whitespace-nowrap">
                          R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                        </p>
                      </div>

                      {/* Item Observation Input */}
                      <div className="flex items-center gap-2 text-sm text-stone-600 bg-stone-50 p-2 rounded-md">
                        <Edit3 className="h-4 w-4 text-stone-400 shrink-0" />
                        <input 
                          type="text" 
                          placeholder="Alguma observação? (ex: sem cebola)"
                          className="w-full bg-transparent border-none focus:ring-0 text-sm placeholder-stone-400 text-brand-brown"
                          value={item.observation || ''}
                          onChange={(e) => updateObservation(item.internalId, e.target.value)}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                        <div className="flex items-center border border-stone-300 rounded-md bg-white">
                          <button 
                            onClick={() => updateQuantity(item.internalId, -1)}
                            className="p-1.5 hover:bg-stone-100 text-stone-600 transition-colors"
                            aria-label="Diminuir quantidade"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-3 font-bold text-brand-brown text-sm min-w-[2rem] text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.internalId, 1)}
                            className="p-1.5 hover:bg-stone-100 text-stone-600 transition-colors"
                            aria-label="Aumentar quantidade"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.internalId)}
                          className="text-red-500 hover:text-red-700 text-xs font-bold uppercase tracking-wider hover:underline"
                        >
                          Remover
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Customer Details Form */}
                <div className="bg-white p-5 rounded-lg shadow-sm border border-stone-200">
                  <h3 className="font-serif font-bold text-lg mb-4 text-brand-brown flex items-center gap-2">
                    <span className="w-1 h-6 bg-brand-yellow rounded-full block"></span>
                    Dados da Entrega
                  </h3>
                  <form id="checkout-form" onSubmit={handleCheckout} className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-1">Seu Nome *</label>
                      <input 
                        type="text" 
                        required 
                        className="block w-full rounded-md border-stone-300 shadow-sm focus:border-brand-red focus:ring focus:ring-brand-red/20 border p-2.5 text-sm"
                        placeholder="Como podemos te chamar?"
                        value={details.customerName}
                        onChange={e => setDetails({...details, customerName: e.target.value})}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                        <label className="block text-sm font-bold text-stone-700 mb-1">Bairro *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="Seu bairro"
                          className="block w-full rounded-md border-stone-300 shadow-sm focus:border-brand-red focus:ring focus:ring-brand-red/20 border p-2.5 text-sm"
                          value={details.district}
                          onChange={e => setDetails({...details, district: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-stone-700 mb-1">Pagamento *</label>
                        <select 
                          className="block w-full rounded-md border-stone-300 shadow-sm focus:border-brand-red focus:ring focus:ring-brand-red/20 border p-2.5 text-sm bg-white"
                          value={details.paymentMethod}
                          onChange={e => setDetails({...details, paymentMethod: e.target.value})}
                        >
                          {PAYMENT_METHODS.map(method => (
                            <option key={method} value={method}>{method}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-1">Endereço Completo *</label>
                      <textarea 
                        required 
                        rows={2}
                        placeholder="Rua, Número, Complemento..."
                        className="block w-full rounded-md border-stone-300 shadow-sm focus:border-brand-red focus:ring focus:ring-brand-red/20 border p-2.5 text-sm"
                        value={details.address}
                        onChange={e => setDetails({...details, address: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-stone-700 mb-1">Observações Gerais</label>
                      <textarea 
                        rows={2}
                        placeholder="Ex: Tocar a campainha, deixar na portaria..."
                        className="block w-full rounded-md border-stone-300 shadow-sm focus:border-brand-red focus:ring focus:ring-brand-red/20 border p-2.5 text-sm"
                        value={details.generalObservation}
                        onChange={e => setDetails({...details, generalObservation: e.target.value})}
                      />
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>

          {/* Footer / Checkout Button */}
          {cart.length > 0 && (
            <div className="border-t border-stone-200 px-6 py-6 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-20">
              <div className="flex justify-between items-end mb-4">
                <p className="text-sm font-medium text-stone-500">Total do Pedido</p>
                <p className="text-2xl text-brand-red font-black font-serif">R$ {total.toFixed(2).replace('.', ',')}</p>
              </div>
              <p className="text-[10px] text-stone-400 mb-4 text-center">
                * Taxa de entrega calculada pelo atendente.
              </p>
              <button
                type="submit"
                form="checkout-form"
                className="w-full flex justify-center items-center gap-2 rounded-full border border-transparent bg-green-600 px-6 py-4 text-base font-bold text-white shadow-lg hover:bg-green-700 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Finalizar Pedido no WhatsApp</span>
                <Send className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;