/**
 * DADOS DO CARDÁPIO (MOCK DATA)
 */
const MENU_ITEMS = [
    // --- COMBOS & PROMOÇÕES ---
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
      description: '1 pizza grande de sal + 1 pizza grande doce + 1 refrigerante de 2 litros (Coca-Cola, Fanta ou Guaraná Antárctica).',
      price: 91.00,
      category: 'combos',
      image: 'https://images.unsplash.com/photo-1574126154517-d1e0d89e7344?w=500&q=80',
      isPromo: true
    },
    {
      id: 'promo-dia',
      name: 'Promoção do Dia',
      description: 'Consultar sabor do dia. Todos os dias temos um sabor especial por um preço fixo.',
      price: 42.00,
      category: 'combos',
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=80',
      isPromo: true
    },

    // --- PIZZAS TRADICIONAIS (R$ 46,99) ---
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

    // --- PIZZAS DOCES (R$ 36,99) ---
    {
      id: 'banana-chocolate',
      name: 'Banana com Chocolate',
      description: 'Massa, chocolate ao leite, queijo mussarela, banana (canela opcional).',
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

    // --- BEBIDAS ---
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
      id: 'mineiro-2l',
      name: 'Mineiro 2LT',
      description: 'Refrigerante Mineiro 2 Litros',
      price: 9.50,
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
    {
      id: 'fanta-lata',
      name: 'Fanta lata',
      description: '350ml',
      price: 5.00,
      category: 'bebidas',
      image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=500&q=80'
    },
    {
      id: 'guarana-lata',
      name: 'Guaraná lata',
      description: '350ml',
      price: 5.00,
      category: 'bebidas',
      image: 'https://images.unsplash.com/photo-1582106245687-cbb6409d5667?w=500&q=80'
    },
];

const WHATSAPP_NUMBER = "5564999999999"; // Substitua pelo seu número real

/**
 * APLICAÇÃO PRINCIPAL
 */
const app = {
    cart: [],
    
    // Inicialização
    init: function() {
        this.loadCart();
        this.renderHome();
        this.renderMenu();
        lucide.createIcons(); // Inicializa os ícones
    },

    // --- NAVEGAÇÃO ---
    navigate: function(pageId) {
        // Esconde todas as seções
        document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
        
        // Mostra a selecionada
        const target = document.getElementById(`page-${pageId}`);
        if(target) target.classList.remove('hidden');

        // Atualiza menu ativo
        const navLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
        if(navLink) navLink.classList.add('active');

        // Fecha menu mobile se aberto
        document.getElementById('mobile-menu').classList.add('hidden');

        // Scroll para o topo
        window.scrollTo(0,0);
        lucide.createIcons();
    },

    toggleMobileMenu: function() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    },

    openWhatsApp: function() {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
    },

    // --- RENDERIZAÇÃO DE PRODUTOS ---
    createProductCard: function(product) {
        return `
            <div class="product-card">
                <div class="card-img-wrapper">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${product.isPromo ? '<span class="promo-tag">PROMOÇÃO</span>' : ''}
                </div>
                <div class="card-content">
                    <h3 class="card-title">${product.name}</h3>
                    <p class="card-desc">${product.description}</p>
                    <div class="card-footer">
                        <span class="card-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                        <button onclick="app.addToCart('${product.id}')" class="btn-add">
                            Adicionar <i data-lucide="plus" width="16"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    renderHome: function() {
        const combos = MENU_ITEMS.filter(i => i.category === 'combos');
        const highlights = MENU_ITEMS.filter(i => i.category === 'tradicionais').slice(0, 4);

        document.getElementById('home-combos-grid').innerHTML = combos.map(this.createProductCard).join('');
        document.getElementById('home-highlights-grid').innerHTML = highlights.map(this.createProductCard).join('');
    },

    renderMenu: function(filter = 'todos', searchTerm = '') {
        let items = MENU_ITEMS;

        // Filtra por categoria
        if (filter !== 'todos') {
            items = items.filter(i => i.category === filter);
        }

        // Filtra por busca
        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase();
            items = items.filter(i => 
                i.name.toLowerCase().includes(lowerTerm) || 
                i.description.toLowerCase().includes(lowerTerm)
            );
        }

        const grid = document.getElementById('menu-grid');
        if (items.length === 0) {
            grid.innerHTML = '<p class="text-center col-span-full">Nenhum item encontrado.</p>';
        } else {
            grid.innerHTML = items.map(this.createProductCard).join('');
        }
        lucide.createIcons();
    },

    filterMenu: function(category, btnElement) {
        // Atualiza botões
        document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
        btnElement.classList.add('active');
        
        // Pega valor da busca atual
        const searchTerm = document.getElementById('search-input').value;
        this.renderMenu(category, searchTerm);
    },

    searchMenu: function(term) {
        const activeCatBtn = document.querySelector('.cat-btn.active');
        const activeCategory = activeCatBtn ? activeCatBtn.innerText.toLowerCase() : 'todos';
        // Mapeia texto do botão para ID da categoria (simplificado)
        let catId = 'todos';
        if(activeCategory.includes('combos')) catId = 'combos';
        else if(activeCategory.includes('tradicionais')) catId = 'tradicionais';
        else if(activeCategory.includes('doces')) catId = 'doces';
        else if(activeCategory.includes('bebidas')) catId = 'bebidas';

        this.renderMenu(catId, term);
    },

    // --- CARRINHO ---
    loadCart: function() {
        const saved = localStorage.getItem('mestre_pizzas_cart');
        if (saved) {
            this.cart = JSON.parse(saved);
            this.updateCartUI();
        }
    },

    saveCart: function() {
        localStorage.setItem('mestre_pizzas_cart', JSON.stringify(this.cart));
        this.updateCartUI();
    },

    toggleCart: function() {
        const sidebar = document.getElementById('cart-sidebar');
        sidebar.classList.toggle('hidden');
    },

    addToCart: function(productId) {
        const product = MENU_ITEMS.find(p => p.id === productId);
        if (!product) return;

        // Gera ID único para o item no carrinho (permite mesmo produto com obs diferentes futuramente)
        const internalId = Date.now().toString();

        this.cart.push({
            ...product,
            internalId: internalId,
            quantity: 1,
            observation: ''
        });

        this.saveCart();
        this.toggleCart(); // Abre o carrinho ao adicionar
    },

    removeFromCart: function(internalId) {
        this.cart = this.cart.filter(item => item.internalId !== internalId);
        this.saveCart();
    },

    updateQuantity: function(internalId, delta) {
        const item = this.cart.find(i => i.internalId === internalId);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) this.removeFromCart(internalId);
            else this.saveCart();
        }
    },

    updateObservation: function(internalId, text) {
        const item = this.cart.find(i => i.internalId === internalId);
        if (item) {
            item.observation = text;
            this.saveCart();
        }
    },

    updateCartUI: function() {
        const container = document.getElementById('cart-items');
        const footer = document.getElementById('cart-footer');
        const badge = document.getElementById('cart-count');
        const totalEl = document.getElementById('cart-total-value');

        // Atualiza badge
        const totalItems = this.cart.reduce((acc, item) => acc + item.quantity, 0);
        badge.innerText = totalItems;
        badge.classList.toggle('hidden', totalItems === 0);

        if (this.cart.length === 0) {
            container.innerHTML = '<div class="empty-cart-msg">Sua bandeja está vazia.</div>';
            footer.classList.add('hidden');
            return;
        }

        footer.classList.remove('hidden');

        // Renderiza Itens
        let totalValue = 0;
        container.innerHTML = this.cart.map(item => {
            totalValue += item.price * item.quantity;
            return `
                <div class="cart-item">
                    <div class="cart-item-header">
                        <span>${item.name}</span>
                        <span class="text-red">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                    </div>
                    <input 
                        type="text" 
                        class="obs-input" 
                        placeholder="Obs: ex. sem cebola" 
                        value="${item.observation}"
                        onchange="app.updateObservation('${item.internalId}', this.value)"
                    >
                    <div class="cart-item-controls">
                        <div>
                            <button class="qty-btn" onclick="app.updateQuantity('${item.internalId}', -1)">-</button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn" onclick="app.updateQuantity('${item.internalId}', 1)">+</button>
                        </div>
                        <button class="remove-btn" onclick="app.removeFromCart('${item.internalId}')">Remover</button>
                    </div>
                </div>
            `;
        }).join('');

        totalEl.innerText = `R$ ${totalValue.toFixed(2).replace('.', ',')}`;
    },

    checkout: function() {
        const name = document.getElementById('cust-name').value;
        const address = document.getElementById('cust-address').value;
        const district = document.getElementById('cust-phone').value; // Usando campo phone como bairro p/ simplificar
        const payment = document.getElementById('cust-payment').value;
        const obsGeral = document.getElementById('cust-obs').value;

        if (!name || !address || !district) {
            alert("Por favor, preencha Nome, Bairro e Endereço.");
            return;
        }

        let message = `*Olá! Quero fazer um pedido na Mestre das Pizzas* 🍕\n\n`;
        message += `*Nome:* ${name}\n`;
        message += `*Endereço:* ${address}\n`;
        message += `*Bairro:* ${district}\n`;
        message += `--------------------------------\n`;
        
        let total = 0;
        this.cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            message += `✅ ${item.quantity}x ${item.name}\n`;
            if (item.observation) message += `   _(Obs: ${item.observation})_\n`;
            message += `   Valor: R$ ${itemTotal.toFixed(2).replace('.', ',')}\n`;
        });

        message += `--------------------------------\n`;
        message += `*TOTAL: R$ ${total.toFixed(2).replace('.', ',')}*\n`;
        message += `*Pagamento:* ${payment}\n`;
        if (obsGeral) message += `*Obs. Gerais:* ${obsGeral}\n`;

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }
};

// Iniciar app quando carregar
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});