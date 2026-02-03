/* --- TABELA DE TAXAS DE ENTREGA (Caldas Novas) --- */
// O sistema normaliza o texto (ignora acentos e maiúsculas)
const DELIVERY_RATES = {
    'centro': 5.00,
    'nova vila': 7.00,
    'itaguai': 8.00,
    'bandeirantes': 6.00,
    'mansoes aguas quentes': 10.00,
    'jardim brasil': 9.00,
    'parque das brisas': 12.00,
    'holiday': 8.00,
    'default': 15.00 // Valor padrão caso não encontre o bairro
};

/* --- Agendamento da Pizza do Dia (0 = Domingo, 1 = Segunda...) --- */
// Usamos os IDs das pizzas que já existem no MENU_ITEMS
const PROMO_SCHEDULE = {
    0: 'mussarela',         // Domingo
    1: 'calabresa',         // Segunda
    2: 'frango-catupiry',   // Terça
    3: 'portuguesa',        // Quarta
    4: 'quatro-queijos',    // Quinta
    5: 'bacon',             // Sexta
    6: 'moda-casa'          // Sábado
};

const DAYS_LABELS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

/**
 * DADOS DO CARDÁPIO (MOCK DATA)
 */
const MENU_ITEMS = [
    // --- COMBOS & PROMOÇÕES ---
    {
      id: 'promo-dia',
      name: 'Promoção do Dia',
      description: 'Consultar sabor do dia. Todos os dias temos um sabor especial por um preço fixo.',
      price: 42.00,
      category: 'combos',
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=80',
      isPromo: true
    },
    {
      id: 'combo-familia',
      name: 'Combo Família',
      description: '2 pizzas grandes de sal + 1 refrigerante de 2 litros (Coca-Cola, Fanta ou Guaraná Antárctica).',
      price: 99.00,
      category: 'combos',
      image: 'https://res.cloudinary.com/dxplpg36m/image/upload/v1769208962/Gemini_Generated_Image_o1yivo1yivo1yivo_whdw4k.png',
      isPromo: true
    },
    {
      id: 'combo-casal',
      name: 'Combo Casal',
      description: '1 pizza grande de sal + 1 pizza grande doce + 1 refrigerante de 2 litros (Coca-Cola, Fanta ou Guaraná Antárctica).',
      price: 91.00,
      category: 'combos',
      image: 'https://res.cloudinary.com/dxplpg36m/image/upload/v1769207797/Gemini_Generated_Image_33hyd933hyd933hy_xa9lsy.png',
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
      image: 'https://img.freepik.com/fotos-gratis/aproximar-se-da-deliciosa-pizza_23-2150852113.jpg?t=st=1769207380~exp=1769210980~hmac=fd4c858114b1a58f42d56577780f977102c16eb4f9fade2aa0a548eee7d8ee0bhttps://res.cloudinary.com/dxplpg36m/image/upload/v1769208962/Gemini_Generated_Image_o1yivo1yivo1yivo_whdw4k.png'
    },
    {
      id: 'frango-cheddar',
      name: 'Frango com Cheddar',
      description: 'Molho de tomate, frango desfiado temperado, queijo cheddar, queijo mussarela, azeitona e orégano.',
      price: 46.99,
      category: 'tradicionais',
      image: 'https://res.cloudinary.com/dxplpg36m/image/upload/v1769213019/Pizza_Frango_com_Cheddar_snce0i.png'
    },
    {
      id: 'frango-catupiry',
      name: 'Frango com Catupiry',
      description: 'Molho de tomate, frango desfiado temperado, catupiry, queijo mussarela, cebola, azeitona e orégano.',
      price: 46.99,
      category: 'tradicionais',
      image: 'https://res.cloudinary.com/dxplpg36m/image/upload/v1769212707/Pizza_Frango_com_Catupiry_ccpt5j.png'
    },
    {
      id: 'frango-bacon',
      name: 'Frango com Bacon',
      description: 'Molho de tomate, frango desfiado temperado, queijo mussarela, bacon, azeitona e orégano.',
      price: 46.99,
      category: 'tradicionais',
      image: 'https://res.cloudinary.com/dxplpg36m/image/upload/v1769212837/Pizza_Frango_com_Bacon_vcyta7.png'
    },
    {
      id: 'portuguesa',
      name: 'Portuguesa',
      description: 'Molho de tomate, presunto, queijo mussarela, ovo cozido, pimentão, cebola, azeitona e orégano.',
      price: 46.99,
      category: 'tradicionais',
      image: 'https://res.cloudinary.com/dxplpg36m/image/upload/v1769212610/Pizza_Portuguesa_ypkxsx.png'
    },
    {
      id: 'quatro-queijos',
      name: 'Quatro Queijos',
      description: 'Molho de tomate, queijo mussarela, catupiry, cheddar, parmesão e orégano.',
      price: 46.99,
      category: 'tradicionais',
      image: 'https://res.cloudinary.com/dxplpg36m/image/upload/v1769212223/Pizza_Quatro_Queijos_tx9ory.png'
    },
    {
      id: 'bacon',
      name: 'Bacon',
      description: 'Molho de tomate, bacon crocante, queijo mussarela, presunto, calabresa, tomate e orégano.',
      price: 46.99,
      category: 'tradicionais',
      image: 'https://res.cloudinary.com/dxplpg36m/image/upload/v1769212029/Pizza_de_Bacon_ezn5vt.png'
    },
    {
      id: 'moda-casa',
      name: 'Moda da Casa',
      description: 'Molho de tomate, queijo mussarela, presunto, calabresa, tomate, azeitona e orégano.',
      price: 46.99,
      category: 'tradicionais',
      image: 'https://res.cloudinary.com/dxplpg36m/image/upload/v1769212299/Pizza_Moda_da_casa_jcyma8.png'
    },

    // --- PIZZAS DOCES (R$ 36,99) ---
    {
      id: 'banana-chocolate',
      name: 'Banana com Chocolate',
      description: 'Massa, chocolate ao leite, queijo mussarela, banana (canela opcional).',
      price: 36.99,
      category: 'doces',
      image: 'https://res.cloudinary.com/dxplpg36m/image/upload/v1769209956/Gemini_Generated_Image_5smb305smb305smb_po596f.webp'
    },
    {
      id: 'chocolate-morango',
      name: 'Chocolate com Morango',
      description: 'Massa, queijo mussarela, chocolate e morango.',
      price: 36.99,
      category: 'doces',
      image: 'https://res.cloudinary.com/dxplpg36m/image/upload/v1769210725/Gemini_Generated_Image_qs6fpvqs6fpvqs6f_sucv17.png'
    },

    // --- BEBIDAS ---
    
    {
      id: 'coca-2l',
      name: 'Coca-Cola 2LT',
      description: 'Garrafa 2 Litros',
      price: 12.00,
      category: 'bebidas',
      image: 'https://carrefourbrfood.vtexassets.com/arquivos/ids/118271106/refrigerante-coca-cola-garrafa-2-l-1.jpg?v=638217385053270000'
    },
    {
      id: 'coca-zero-2l',
      name: 'Coca-Cola Zero 2LT',
      description: 'Garrafa 2 Litros',
      price: 12.00,
      category: 'bebidas',
      image: 'https://fortatacadista.vteximg.com.br/arquivos/ids/293843-1000-1000/7894900701517.jpg?v=637617987089330000'
    },
    {
      id: 'fanta-2l',
      name: 'Fanta 2LT',
      description: 'Garrafa 2 Litros',
      price: 12.00,
      category: 'bebidas',
      image: 'https://superandreazza.com.br/wp-content/uploads/2022/10/fanta-optimized.jpg'
    },
    {
      id: 'guarana-2l',
      name: 'Guaraná Antárctica 2LT',
      description: 'Garrafa 2 Litros',
      price: 12.00,
      category: 'bebidas',
      image: 'https://carrefourbrfood.vtexassets.com/arquivos/ids/106437065/refrigerante-guarana-antarctica-garrafa-2l-2.jpg?v=638144885948670000'
    },
    {
      id: 'mineiro-2l',
      name: 'Mineiro 2LT',
      description: 'Refrigerante Mineiro 2 Litros',
      price: 9.50,
      category: 'bebidas',
      image: 'https://www.bernardaoemcasa.com.br/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/w/h/whatsapp_image_2020-07-17_at_09.41.20.jpeg'
    },
    {
      id: 'suco-delvale',
      name: 'Suco Delvale 1,5LT',
      description: 'Garrafa 1,5 Litros',
      price: 10.00,
      category: 'bebidas',
      image: 'https://res.cloudinary.com/dxplpg36m/image/upload/v1769211324/Gemini_Generated_Image_qdi2ejqdi2ejqdi2_eagrw2.png'
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
      image: 'https://res.cloudinary.com/dxplpg36m/image/upload/v1769213654/Fanta_lata_is7zn3.png'
    },
    {
      id: 'guarana-lata',
      name: 'Guaraná lata',
      description: '350ml',
      price: 5.00,
      category: 'bebidas',
      image: 'https://img.megaboxatacado.com.br/produto/1000X1000/202039_10951.jpg'
    },
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
      image: 'https://res.cloudinary.com/dxplpg36m/image/upload/v1770088318/9640312_1_z6kdos.webp'
    },
];

const WHATSAPP_NUMBER = "5564993182960"; // Substitua pelo seu número real

/* ==========================================================================
   APLICAÇÃO PRINCIPAL
   ========================================================================== */
const app = {
    cart: [],
    currentLocationLink: null,
    mapInstance: null,
    contactMapInstance: null,
    selectedLat: null,
    selectedLng: null,
    deliveryFee: 0, 
    
    // --- Inicialização ---
    init: function() {
        this.loadCart();
        this.renderHome();
        this.renderMenu();
        this.initParallax();
        setTimeout(() => this.initScrollAnimations(), 100);
        
        // Listener para recalcular taxa quando o usuário digitar manualmente
        const districtInput = document.getElementById('cust-district');
        if(districtInput) {
            districtInput.addEventListener('input', () => this.calculateDeliveryFee());
            districtInput.addEventListener('blur', () => this.calculateDeliveryFee());
        }

        lucide.createIcons();
    },

    // --- LÓGICA DE ENTREGA E TAXAS ---
    calculateDeliveryFee: function() {
        const districtInput = document.getElementById('cust-district');
        const districtLabel = document.getElementById('delivery-district');
        
        if (!districtInput) return;

        const districtRaw = districtInput.value.trim();
        
        if (districtRaw.length < 3) {
            this.deliveryFee = 0;
            districtLabel.innerText = 'Informe o bairro';
            this.updateCartUI(); 
            return;
        }

        // Normaliza (remove acentos e deixa minúsculo)
        const districtNormalized = districtRaw.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        let fee = DELIVERY_RATES['default'];
        let found = false;

        // Procura na tabela
        for (const [zone, price] of Object.entries(DELIVERY_RATES)) {
            if (districtNormalized.includes(zone)) {
                fee = price;
                found = true;
                break;
            }
        }

        this.deliveryFee = fee;
        districtLabel.innerText = districtRaw; 
        
        this.updateCartUI(); 
    },

    // --- PARALLAX EFFECT ---
    initParallax: function() {
        window.addEventListener('scroll', () => {
            const heroWrapper = document.querySelector('.hero-video-wrapper');
            if (!heroWrapper) return;

            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                heroWrapper.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    },

    // --- ANIMAÇÕES DE SCROLL E PARALLAX ---
    initScrollAnimations: function() {
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elementsToAnimate = document.querySelectorAll('.product-card, .section-header, .contact-card');
        elementsToAnimate.forEach(el => {
            el.classList.add('scroll-hidden');
            observer.observe(el);
        });
    },

    initParallax: function() {
        window.addEventListener('scroll', () => {
            const heroWrapper = document.querySelector('.hero-video-wrapper');
            if (heroWrapper && window.pageYOffset < window.innerHeight) {
                heroWrapper.style.transform = `translateY(${window.pageYOffset * 0.5}px)`;
            }
        });
    },

    // --- NAVEGAÇÃO ---
    navigate: function(pageId) {
        document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
        
        const target = document.getElementById(`page-${pageId}`);
        if(target) target.classList.remove('hidden');

        const navLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
        if(navLink) navLink.classList.add('active');

        document.getElementById('mobile-menu').classList.add('hidden');
        window.scrollTo(0,0);
        lucide.createIcons();
    },

    toggleMobileMenu: function() {

        const menu = document.getElementById('mobile-menu');
        document.querySelectorAll('.mobile-menu a').forEach(el => el.classList.remove('active'));
            const activePage = document.querySelector('.nav-link.active');
        menu.classList.toggle('hidden');
        if(activePage) {
            const pageId = activePage.getAttribute('data-page');
            const mobileLink = document.querySelector(`.mobile-menu a[data-page="${pageId}"]`);
            if(mobileLink) mobileLink.classList.add('active');
        }
    },

    openWhatsApp: function() {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
    },

    // --- RENDERIZAÇÃO DE PRODUTOS ---
    createProductCard: function(product) {
        const isPromoCard = product.id === 'promo-dia';
        const buttonAction = isPromoCard ? `app.openPromoModal()` : `app.addToCart('${product.id}')`;
        const buttonText = isPromoCard ? 'Ver Dia' : 'Adicionar';
        const buttonIcon = isPromoCard ? 'calendar' : 'plus';

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
                        <button onclick="${buttonAction}" class="btn-add">
                            ${buttonText} <i data-lucide="${buttonIcon}" width="16"></i>
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
        if (filter !== 'todos') items = items.filter(i => i.category === filter);
        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase();
            items = items.filter(i => i.name.toLowerCase().includes(lowerTerm) || i.description.toLowerCase().includes(lowerTerm));
        }

        const grid = document.getElementById('menu-grid');
        grid.innerHTML = items.length === 0 
            ? '<p class="text-center col-span-full">Nenhum item encontrado.</p>' 
            : items.map(this.createProductCard).join('');
        lucide.createIcons();
    },

    filterMenu: function(category, btnElement) {
        document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
        btnElement.classList.add('active');
        const searchTerm = document.getElementById('search-input').value;
        this.renderMenu(category, searchTerm);
    },

    searchMenu: function(term) {
        const activeCatBtn = document.querySelector('.cat-btn.active');
        const activeCategory = activeCatBtn ? activeCatBtn.innerText.toLowerCase() : 'todos';
        let catId = 'todos';
        if(activeCategory.includes('combos')) catId = 'combos';
        else if(activeCategory.includes('tradicionais')) catId = 'tradicionais';
        else if(activeCategory.includes('doces')) catId = 'doces';
        else if(activeCategory.includes('bebidas')) catId = 'bebidas';
        this.renderMenu(catId, term);
    },

    // --- PROMOÇÃO DO DIA ---
    openPromoModal: function() {
        const modal = document.getElementById('promo-modal');
        modal.classList.remove('hidden');
        const todayIndex = new Date().getDay();
        this.renderWeekDays(todayIndex);
        this.selectPromoDay(todayIndex);
        lucide.createIcons();
    },

    closePromoModal: function() {
        document.getElementById('promo-modal').classList.add('hidden');
    },

    renderWeekDays: function(activeDayIndex) {
        const container = document.getElementById('week-days-container');
        container.innerHTML = DAYS_LABELS.map((label, index) => {
            const isActive = index === activeDayIndex ? 'active' : '';
            return `
                <button class="day-btn ${isActive}" onclick="app.selectPromoDay(${index})">
                    ${label}
                    ${index === new Date().getDay() ? '<span>Hoje</span>' : '<span>&nbsp;</span>'}
                </button>
            `;
        }).join('');
    },

    selectPromoDay: function(dayIndex) {
        document.querySelectorAll('.day-btn').forEach((btn, idx) => {
            if(idx === dayIndex) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        const pizzaId = PROMO_SCHEDULE[dayIndex];
        const product = MENU_ITEMS.find(p => p.id === pizzaId);
        if(!product) return;
        const display = document.getElementById('promo-pizza-display');
        display.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="promo-img">
            <h4 class="promo-title">${product.name}</h4>
            <p class="promo-desc">${product.description}</p>
            <button onclick="app.addPromoToCart('${product.id}')" class="btn btn-success full-width">
                Pedir Promoção do Dia - R$ 42,00
            </button>
        `;
    },

    addPromoToCart: function(originalProductId) {
        const product = MENU_ITEMS.find(p => p.id === originalProductId);
        if (!product) return;
        const internalId = Date.now().toString();
        this.cart.push({
            ...product,
            internalId: internalId,
            price: 42.00,
            quantity: 1,
            observation: 'PROMOÇÃO DO DIA'
        });
        this.saveCart();
        this.closePromoModal();
        this.toggleCart();
        this.updateCartUI();
    },

    // Adicione esta variável no topo do objeto app, junto com cart, mapInstance...
    contactMapInstance: null,

    // --- NAVEGAÇÃO (Atualizada) ---
    navigate: function(pageId) {
        document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
        
        const target = document.getElementById(`page-${pageId}`);
        if(target) target.classList.remove('hidden');

        const navLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
        if(navLink) navLink.classList.add('active');

        document.getElementById('mobile-menu').classList.add('hidden');
        window.scrollTo(0,0);

        // SE FOR A PÁGINA DE CONTATO, INICIA O MAPA
        if (pageId === 'contact') {
            // Pequeno delay para garantir que a div está visível antes de renderizar
            setTimeout(() => {
                this.initContactMap();
            }, 100);
        }

        lucide.createIcons();
    },

    // --- MAPA DE CONTATO (Novo) ---
    initContactMap: function() {
        // Se já existe, apenas atualiza o tamanho (corrige bug de mapa cinza)
        if (this.contactMapInstance) {
            this.contactMapInstance.invalidateSize();
            return;
        }

        // Coordenadas de Caldas Novas
        const caldasCoords = [-17.7436, -48.6253];

        this.contactMapInstance = L.map('contact-map', {
            scrollWheelZoom: false // Evita scroll acidental na página
        }).setView(caldasCoords, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap'
        }).addTo(this.contactMapInstance);

        // Círculo de Destaque (Área de Entrega)
        L.circle(caldasCoords, {
            color: '#9A2A2A',       // Vermelho da marca
            fillColor: '#9A2A2A',
            fillOpacity: 0.1,       // Bem suave
            radius: 3500            // 3.5km de raio
        }).addTo(this.contactMapInstance);

        // Marcador da Loja
        const icon = L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34]
        });

        L.marker(caldasCoords, { icon: icon }).addTo(this.contactMapInstance)
            .bindPopup('<b>Mestre das Pizzas</b><br>O melhor sabor de Caldas!')
            .openPopup();
    },

    // --- ENDEREÇO & MAPA ---

    // --- BUSCA POR CEP ---
    fetchAddressByCep: function() {
        const cepInput = document.getElementById('cust-cep');
        const statusIcon = document.getElementById('cep-status-icon');
        const cep = cepInput.value.replace(/\D/g, '');

        if (cep.length !== 8) return; 

        statusIcon.innerHTML = '<i data-lucide="loader-2" width="18"></i>';
        statusIcon.classList.add('spin-animate');
        lucide.createIcons();

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                statusIcon.classList.remove('spin-animate');
                if (!data.erro) {
                    statusIcon.innerHTML = '<i data-lucide="check-circle" width="18"></i>';
                    statusIcon.classList.add('success');
                    
                    document.getElementById('cust-street').value = data.logradouro;
                    
                    const districtField = document.getElementById('cust-district');
                    districtField.value = data.bairro;
                    
                    // CORREÇÃO: Preenche Cidade - UF
                    document.getElementById('cust-city').value = `${data.localidade} - ${data.uf}`;
                    
                    document.getElementById('cust-number').focus();
                    
                    // Força cálculo
                    this.calculateDeliveryFee(); 
                    
                } else {
                    alert('CEP não encontrado.');
                }
                lucide.createIcons();
            })
            .catch(err => {
                statusIcon.classList.remove('spin-animate');
                statusIcon.innerHTML = '<i data-lucide="alert-circle" width="18"></i>';
                statusIcon.classList.add('error');
                lucide.createIcons();
            });
    },

    // --- MAPA MANUAL (Estilo iFood) ---
    openMapModal: function() {
        document.getElementById('map-modal').classList.remove('hidden');
        
        if (!this.mapInstance) {
            this.mapInstance = L.map('map-container', { zoomControl: false }).setView([-17.74, -48.62], 15);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(this.mapInstance);
            
            // Cursor Mira
            document.getElementById('map-container').style.cursor = 'crosshair';

            this.mapInstance.on('movestart', () => { document.querySelector('.center-pin').classList.add('map-moving'); });
            this.mapInstance.on('moveend', () => { document.querySelector('.center-pin').classList.remove('map-moving'); });
        }
        
        setTimeout(() => { 
            this.mapInstance.invalidateSize(); 
            // ATIVA O LOADING NO MODAL
            document.getElementById('map-loading-overlay').classList.remove('hidden');
            this.detectInitialLocation(); 
        }, 300);
    },

    showMapLoading: function() {
        const msgDiv = document.getElementById('location-msg');
        // Usamos uma mensagem temporária de cor azul ou neutra
        msgDiv.innerHTML = `<span style="color: #666; display: flex; align-items: center; gap: 0.5rem;"><i data-lucide="loader-2" class="spin-animate" width="16"></i> Buscando sua localização...</span>`;
        msgDiv.classList.remove('hidden');
        lucide.createIcons();
    },

    detectInitialLocation: function() {
        // Se não tiver GPS ou demorar muito, remove o loading após 3s
        const loadingTimeout = setTimeout(() => {
            document.getElementById('map-loading-overlay').classList.add('hidden');
        }, 5000);

        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                clearTimeout(loadingTimeout);
                if(this.mapInstance) {
                    this.mapInstance.flyTo([pos.coords.latitude, pos.coords.longitude], 17, { animate: true, duration: 1.5 });
                    // Remove o loading quando achar
                    setTimeout(() => {
                        document.getElementById('map-loading-overlay').classList.add('hidden');
                    }, 1000);
                }
            },
            (err) => {
                clearTimeout(loadingTimeout);
                document.getElementById('map-loading-overlay').classList.add('hidden');
                console.log("GPS erro:", err);
            },
            { enableHighAccuracy: true, timeout: 8000 }
        );
    },

    closeMapModal: function() {
        document.getElementById('map-modal').classList.add('hidden');
    },

    confirmMapLocation: function() {
        if (!this.mapInstance) return;
        const center = this.mapInstance.getCenter();
        this.selectedLat = center.lat;
        this.selectedLng = center.lng;
        this.currentLocationLink = `https://maps.google.com/?q=${center.lat},${center.lng}&z=19`;

        const msgDiv = document.getElementById('location-msg');
        msgDiv.innerHTML = `<span class="location-success"><i data-lucide="map-pin" width="12"></i> Local selecionado!</span>`;
        msgDiv.classList.remove('hidden');

        this.reverseGeocode(center.lat, center.lng);
        this.closeMapModal();
        lucide.createIcons();
    },

    // --- NO GPS AUTOMÁTICO (CORRIGIDO) ---
    getCurrentLocation: function() {
        if (!navigator.geolocation) {
            alert('Seu navegador não suporta geolocalização.');
            return;
        }

        const btn = document.querySelector('.btn-location-action');
        const msgDiv = document.getElementById('location-msg');
        
        const originalContent = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="loader" class="spin-animate"></i>';
        btn.classList.add('loading');
        lucide.createIcons();

        // Configurações de alta precisão
        const options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                
                // --- CORREÇÃO AQUI: Link oficial do Google Maps ---
                this.currentLocationLink = `https://maps.google.com/?q=${lat},${lng}&z=19`;
                
                // Se o mapa manual já tiver sido aberto, atualiza a posição dele também
                if(this.mapInstance) {
                    this.updateMapPosition(lat, lng);
                }

                this.reverseGeocode(lat, lng);

                btn.classList.remove('loading');
                btn.innerHTML = originalContent;
                msgDiv.innerHTML = `<span class="location-success"><i data-lucide="check-circle" width="12"></i> Localização GPS anexada!</span>`;
                msgDiv.classList.remove('hidden');
                lucide.createIcons();
            },
            (error) => {
                console.error(error);
                btn.classList.remove('loading');
                btn.innerHTML = originalContent;
                alert('Não foi possível obter sua localização precisa.');
                lucide.createIcons();
            },
            options
        );
    },

    reverseGeocode: function(lat, lng) {
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
            .then(r => r.json())
            .then(data => {
                if(data.address) {
                    if(data.address.road) document.getElementById('cust-street').value = data.address.road;
                    
                    // Preenche Bairro
                    if(data.address.suburb || data.address.neighbourhood) {
                        document.getElementById('cust-district').value = data.address.suburb || data.address.neighbourhood;
                        this.calculateDeliveryFee(); 
                    }
                    
                    // CORREÇÃO: Preenche Cidade - UF
                    const city = data.address.city || data.address.town || data.address.village || data.address.municipality || 'Caldas Novas';
                    const state = data.address.state || 'GO';
                    document.getElementById('cust-city').value = `${city} - ${state}`;

                    if(data.address.postcode) {
                        document.getElementById('cust-cep').value = data.address.postcode;
                    }
                }
            });
    },

    // --- CARRINHO & CHECKOUT ---
    loadCart: function() {
        const saved = localStorage.getItem('mestre_pizzas_cart');
        if (saved) { this.cart = JSON.parse(saved); this.updateCartUI(); }
    },
    saveCart: function() { localStorage.setItem('mestre_pizzas_cart', JSON.stringify(this.cart)); this.updateCartUI(); },
    toggleCart: function() { document.getElementById('cart-sidebar').classList.toggle('hidden'); },
    
    addToCart: function(id) {
        const item = MENU_ITEMS.find(p => p.id === id);
        if (!item) return;
        this.cart.push({ ...item, internalId: Date.now().toString(), quantity: 1, observation: '' });
        this.saveCart();
        this.toggleCart();
    },
    removeFromCart: function(id) { this.cart = this.cart.filter(i => i.internalId !== id); this.saveCart(); },
    updateQuantity: function(id, delta) {
        const item = this.cart.find(i => i.internalId === id);
        if (item) { item.quantity += delta; if(item.quantity <= 0) this.removeFromCart(id); else this.saveCart(); }
    },
    updateObservation: function(id, text) {
        const item = this.cart.find(i => i.internalId === id);
        if (item) { item.observation = text; this.saveCart(); }
    },

    checkAddressCompletion: function() {
        const name = document.getElementById('cust-name').value;
        const street = document.getElementById('cust-street').value;
        const district = document.getElementById('cust-district').value;
        const checkIcon = document.getElementById('delivery-check');
        
        if (name && street && district) {
            checkIcon.classList.add('completed');
            checkIcon.setAttribute('data-lucide', 'check-circle-2'); 
        } else {
            checkIcon.classList.remove('completed');
        }
        lucide.createIcons();
    },

    updateCartUI: function() {
        const container = document.getElementById('cart-items');
        const badge = document.getElementById('cart-count');
        const subtotalEl = document.getElementById('cart-subtotal-value');
        const deliveryEl = document.getElementById('cart-delivery-value');
        const totalEl = document.getElementById('cart-total-value');
        
        const subtotal = this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        const totalItems = this.cart.reduce((acc, item) => acc + item.quantity, 0);

        badge.innerText = totalItems;
        badge.classList.toggle('hidden', totalItems === 0);

        if (this.cart.length === 0) {
            container.innerHTML = '<div class="empty-cart-msg">Sua bandeja está vazia.</div>';
            document.getElementById('cart-form-area').classList.add('hidden');
            document.getElementById('cart-checkout-area').classList.add('hidden');
            return;
        }

        document.getElementById('cart-form-area').classList.remove('hidden');
        document.getElementById('cart-checkout-area').classList.remove('hidden');

        container.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-header">
                        <span class="item-name">${item.name}</span>
                        <span class="item-price">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                    </div>
                    <input type="text" class="obs-input" placeholder="Obs: ex. sem cebola" value="${item.observation || ''}" onchange="app.updateObservation('${item.internalId}', this.value)">
                    <div class="cart-item-footer">
                        <div class="qty-wrapper">
                            <button class="qty-btn" onclick="app.updateQuantity('${item.internalId}', -1)">-</button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn" onclick="app.updateQuantity('${item.internalId}', 1)">+</button>
                        </div>
                        <button class="remove-btn" onclick="app.removeFromCart('${item.internalId}')"><i data-lucide="trash-2" width="14"></i> Remover</button>
                    </div>
                </div>
            </div>
        `).join('');

        // ATUALIZA OS VALORES NA TELA
        const totalFinal = subtotal + this.deliveryFee;

        subtotalEl.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        
        if (this.deliveryFee > 0) {
            deliveryEl.innerText = `+ R$ ${this.deliveryFee.toFixed(2).replace('.', ',')}`;
            deliveryEl.classList.remove('text-green'); // Cor normal ou vermelha
        } else {
            deliveryEl.innerText = 'A calcular';
        }

        totalEl.innerText = `R$ ${totalFinal.toFixed(2).replace('.', ',')}`;
        
        this.checkAddressCompletion();
        lucide.createIcons();
    },

    // --- Checkout (Envia taxa no WhatsApp) ---
    checkout: function() {
        const name = document.getElementById('cust-name').value;
        const street = document.getElementById('cust-street').value;
        const number = document.getElementById('cust-number').value;
        const district = document.getElementById('cust-district').value;
        const complement = document.getElementById('cust-complement').value;
        const reference = document.getElementById('cust-reference').value;
        const payment = document.getElementById('cust-payment').value;
        const obsGeral = document.getElementById('cust-obs').value;

        if (!name || !street || !number || !district) {
            alert("Por favor, preencha Nome, Rua, Número e Bairro.");
            return;
        }

        let message = `*NOVO PEDIDO - MESTRE DAS PIZZAS* 🍕\n\n`;
        message += `*Cliente:* ${name}\n`;
        message += `--------------------------------\n`;
        
        let subtotal = 0;
        this.cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            message += `✅ ${item.quantity}x ${item.name}\n`;
            if (item.observation) message += `   _(Obs: ${item.observation})_\n`;
            message += `   Valor: R$ ${itemTotal.toFixed(2).replace('.', ',')}\n`;
        });

        const totalFinal = subtotal + this.deliveryFee;

        message += `--------------------------------\n`;
        message += `Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
        message += `🛵 *Taxa de Entrega:* R$ ${this.deliveryFee.toFixed(2).replace('.', ',')}\n`;
        message += `*TOTAL FINAL: R$ ${totalFinal.toFixed(2).replace('.', ',')}*\n`;
        message += `--------------------------------\n`;
        
        message += `*📍 ENDEREÇO:*\n${street}, Nº ${number} - ${district}\n`;
        if (complement) message += `Complemento: ${complement}\n`;
        if (reference) message += `Ref: ${reference}\n`;
        
        if (this.currentLocationLink) {
            message += `\n🔗 *GPS:* ${this.currentLocationLink}\n`;
        }

        message += `--------------------------------\n`;
        message += `*💳 Pagamento:* ${payment}\n`;
        if (obsGeral) message += `*📝 Nota:* ${obsGeral}\n`;

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    },
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

// --- CORREÇÃO PARA O VITE/VERCEL ---
// Isso garante que o objeto 'app' seja acessível pelo HTML (onclick)
window.app = app;