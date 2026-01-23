export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'combos' | 'tradicionais' | 'doces' | 'bebidas';
  image?: string;
  isPromo?: boolean;
}

export interface CartItem extends Product {
  internalId: string; // Unique identifier for the cart entry
  quantity: number;
  observation?: string;
}

export interface OrderDetails {
  customerName: string;
  address: string;
  district: string;
  paymentMethod: string;
  generalObservation: string;
}

export const PAYMENT_METHODS = [
  'Pix',
  'Cartão de Crédito (Maquininha)',
  'Cartão de Débito (Maquininha)',
  'Dinheiro (Precisa de troco?)'
];