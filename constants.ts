import { Product } from './types';

// Placeholder number - User needs to replace this
export const WHATSAPP_NUMBER = "5564999999999"; 

export const MENU_ITEMS: Product[] = [
  // Combos & Promoções
  {
    id: 'combo-familia',
    name: 'Combo Família',
    description: '2 pizzas grandes de sal + 1 refrigerante de 2 litros (Coca-Cola, Fanta ou Guaraná Antárctica).',
    price: 99.00,
    category: 'combos',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80',
    isPromo: true
  },
  {
    id: 'combo-casal',
    name: 'Combo Casal',
    description: '1 pizza grande de sal + 1 pizza grande doce + 1 refrigerante de 2 litros.',
    price: 91.00,
    category: 'combos',
    image: 'https://images.unsplash.com/photo-1574126154517-d1e0d89e7344?w=500&q=80',
    isPromo: true
  },
  {
    id: 'promo-dia',
    name: 'Promoção do Dia',
    description: 'Consultar sabor do dia. Todos os dias temos um sabor especial.',
    price: 42.00,
    category: 'combos',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=80',
    isPromo: true
  },

  // Pizzas Tradicionais - R$ 46,99
  {
    id: 'calabresa',
    name: 'Calabresa',
    description: 'Molho de tomate, calabresa fatiada, queijo mussarela, cebola, azeitona e orégano.',
    price: 46.99,
    category: 'tradicionais',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&q=80'
  },
  {
    id: 'mussarela',
    name: 'Mussarela',
    description: 'Molho de tomate, queijo mussarela, azeitona e orégano.',
    price: 46.99,
    category: 'tradicionais',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&q=80'
  },
  {
    id: 'frango-cheddar',
    name: 'Frango com Cheddar',
    description: 'Molho de tomate, frango desfiado temperado, queijo cheddar, queijo mussarela, azeitona e orégano.',
    price: 46.99,
    category: 'tradicionais',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80'
  },
  {
    id: 'frango-catupiry',
    name: 'Frango com Catupiry',
    description: 'Molho de tomate, frango desfiado temperado, catupiry, queijo mussarela, cebola, azeitona e orégano.',
    price: 46.99,
    category: 'tradicionais',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80'
  },
  {
    id: 'frango-bacon',
    name: 'Frango com Bacon',
    description: 'Molho de tomate, frango desfiado temperado, queijo mussarela, bacon, azeitona e orégano.',
    price: 46.99,
    category: 'tradicionais',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80'
  },
  {
    id: 'portuguesa',
    name: 'Portuguesa',
    description: 'Molho de tomate, presunto, queijo mussarela, ovo cozido, pimentão, cebola, azeitona e orégano.',
    price: 46.99,
    category: 'tradicionais',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80'
  },
  {
    id: 'quatro-queijos',
    name: 'Quatro Queijos',
    description: 'Molho de tomate, queijo mussarela, catupiry, cheddar, parmesão e orégano.',
    price: 46.99,
    category: 'tradicionais',
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?w=500&q=80'
  },
  {
    id: 'bacon',
    name: 'Bacon',
    description: 'Molho de tomate, bacon crocante, queijo mussarela, presunto, calabresa, tomate e orégano.',
    price: 46.99,
    category: 'tradicionais',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&q=80'
  },
  {
    id: 'moda-casa',
    name: 'Moda da Casa',
    description: 'Molho de tomate, queijo mussarela, presunto, calabresa, tomate, azeitona e orégano.',
    price: 46.99,
    category: 'tradicionais',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80'
  },

  // Pizzas Doces
  {
    id: 'banana-chocolate',
    name: 'Banana com Chocolate',
    description: 'Massa, chocolate ao leite, queijo mussarela, banana. (canela opcional).',
    price: 36.99,
    category: 'doces',
    image: 'https://images.unsplash.com/photo-1605627244243-228db40e7401?w=500&q=80'
  },
  {
    id: 'chocolate-morango',
    name: 'Chocolate com Morango',
    description: 'Massa, queijo mussarela, chocolate e morango.',
    price: 36.99,
    category: 'doces',
    image: 'https://images.unsplash.com/photo-1617343251257-b5b7095f68b6?w=500&q=80'
  },

  // Bebidas
  {
    id: 'agua-sem-gas',
    name: 'Água sem gás',
    description: '500ml',
    price: 3.00,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500&q=80'
  },
  {
    id: 'agua-com-gas',
    name: 'Água com gás',
    description: '500ml',
    price: 3.00,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1564414277413-5804291a3294?w=500&q=80'
  },
  {
    id: 'coca-2l',
    name: 'Coca-Cola 2LT',
    description: 'Garrafa 2 Litros',
    price: 12.00,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80'
  },
  {
    id: 'coca-zero-2l',
    name: 'Coca-Cola Zero 2LT',
    description: 'Garrafa 2 Litros',
    price: 12.00,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80'
  },
  {
    id: 'fanta-2l',
    name: 'Fanta 2LT',
    description: 'Garrafa 2 Litros',
    price: 12.00,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=500&q=80'
  },
  {
    id: 'guarana-2l',
    name: 'Guaraná Antárctica 2LT',
    description: 'Garrafa 2 Litros',
    price: 12.00,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1582106245687-cbb6409d5667?w=500&q=80'
  },
  {
    id: 'suco-delvale',
    name: 'Suco Delvale 1,5LT',
    description: 'Garrafa 1,5 Litros',
    price: 10.00,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&q=80'
  },
  {
    id: 'coca-lata',
    name: 'Coca lata',
    description: '350ml',
    price: 5.00,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80'
  },
];
