import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, obs?: string) => void;
  removeFromCart: (internalId: string) => void;
  updateQuantity: (internalId: string, delta: number) => void;
  updateObservation: (internalId: string, text: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  total: number;
  itemsCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('mestre-pizzas-cart');
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        // Migration: Ensure all items have internalId if loaded from older version
        const migrated = parsed.map((item: any) => ({
          ...item,
          internalId: item.internalId || `${item.id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        }));
        setCart(migrated);
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save to local storage whenever cart changes
  useEffect(() => {
    localStorage.setItem('mestre-pizzas-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity: number, obs?: string) => {
    setCart((prev) => {
      // Check if exact item exists (same product ID AND same observation)
      // This groups identical items together
      const existingIndex = prev.findIndex((item) => item.id === product.id && (item.observation || '') === (obs || ''));

      if (existingIndex > -1) {
        const newCart = [...prev];
        newCart[existingIndex] = {
          ...newCart[existingIndex],
          quantity: newCart[existingIndex].quantity + quantity
        };
        return newCart;
      }

      // Add new item with unique internalId
      const newItem: CartItem = {
        ...product,
        internalId: `${product.id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        quantity,
        observation: obs || ''
      };
      return [...prev, newItem];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (internalId: string) => {
    setCart((prev) => prev.filter((item) => item.internalId !== internalId));
  };

  const updateQuantity = (internalId: string, delta: number) => {
    setCart((prev) => 
      prev.map((item) => {
        if (item.internalId === internalId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const updateObservation = (internalId: string, text: string) => {
    setCart((prev) => 
      prev.map((item) => 
        item.internalId === internalId ? { ...item, observation: text } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const itemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      updateObservation,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      total,
      itemsCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};