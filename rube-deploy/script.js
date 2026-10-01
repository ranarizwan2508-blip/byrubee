/**
 * ==========================================================================
 * RUBE — CURATED MODERN LIFESTYLE ESSENTIALS (PAKISTAN)
 * Enterprise-Grade Interactive Controller & State Management
 * Exact UX/UI Behavior of dnstore.pk
 * ==========================================================================
 */

(function () {
  'use strict';

  // ------------------------------------------------------------------------
  // 01. PRODUCT CATALOG DATA (Skin Care, Kitchen Accessories, Tech Accessories)
  // ------------------------------------------------------------------------
  const PRODUCTS = [
    // --- Skin Care (Revamped Clinical Formulations) ---
    {
      id: 'sc-01',
      title: 'Vita-Bright Vitamin C+ Facial Serum (30ml)',
      shortTitle: 'Vita-Bright Vitamin C+ Serum',
      volume: '30ml',
      category: 'skin-care',
      categoryLabel: 'Skincare',
      price: 1499,
      origPrice: 1899,
      keyBenefit: 'Brightening & Anti-Dark Spot',
      badges: ['Dermatologist Tested', 'Non-Greasy', 'All Skin Types'],
      primaryBadge: 'Dermatologist Tested',
      badgeClass: 'badge-glow',
      image: 'images/vita-bright-serum.jpg',
      description: 'Antioxidant-rich brightening facial serum that evens skin tone, reduces dark spots, and boosts natural radiance.',
      tags: ['serum', 'vitamin c', 'brightening', 'anti-dark spot', 'skincare', 'face', 'radiance', 'vita-bright']
    },
    {
      id: 'sc-02',
      title: 'Skin Glow Hydrating Facial Moisturizer (50ml)',
      shortTitle: 'Skin Glow Hydrating Moisturizer',
      volume: '50ml',
      category: 'skin-care',
      categoryLabel: 'Skincare',
      price: 1299,
      origPrice: 1699,
      keyBenefit: '24h Deep Hydration & Barrier Repair',
      badges: ['Barrier Repair', 'Non-Greasy', 'All Skin Types'],
      primaryBadge: 'Barrier Repair',
      badgeClass: 'badge-hydrate',
      image: 'images/skin-glow-moisturizer.jpg',
      description: 'Lightweight daily nourishing moisturizer cream designed for deep hydration, skin barrier repair, and a smooth natural finish.',
      tags: ['moisturizer', 'cream', 'hydration', 'barrier repair', 'skin glow', 'skincare', 'nourishing']
    },
    {
      id: 'sc-03',
      title: 'Gentle Foaming Facial Cleanser (200ml)',
      shortTitle: 'Gentle Foaming Facial Cleanser',
      volume: '200ml',
      category: 'skin-care',
      categoryLabel: 'Skincare',
      price: 1199,
      origPrice: 1499,
      keyBenefit: 'Deep Pore Cleansing & Soothing',
      badges: ['Dermatologist Tested', 'pH Balanced', 'All Skin Types'],
      primaryBadge: 'Dermatologist Tested',
      badgeClass: 'badge-cleanse',
      image: 'images/gentle-foaming-cleanser.jpg',
      description: 'Mild, pH-balanced foaming face wash for daily deep pore cleansing without drying or stripping natural moisture.',
      tags: ['cleanser', 'face wash', 'foaming', 'pore cleansing', 'soothing', 'gentle', 'skincare']
    },
    {
      id: 'sc-04',
      title: 'Soleil Skin Broad Spectrum SPF 50+ Sunscreen Fluid (150ml)',
      shortTitle: 'Soleil Skin SPF 50+ Sunscreen Fluid',
      volume: '150ml',
      category: 'skin-care',
      categoryLabel: 'Skincare',
      price: 1399,
      origPrice: 1799,
      keyBenefit: 'Invisible Broad Spectrum Protection (Zero White Cast)',
      badges: ['Zero White Cast', 'Non-Greasy', 'All Skin Types'],
      primaryBadge: 'Zero White Cast',
      badgeClass: 'badge-sun',
      image: 'images/soleil-skin-sunscreen.jpg',
      description: 'Non-greasy, water-resistant daily SPF 50+ broad-spectrum sunscreen fluid with zero white cast.',
      tags: ['sunscreen', 'spf 50', 'sun protection', 'soleil skin', 'zero white cast', 'non-greasy', 'skincare']
    },

    // --- Kitchen Accessories ---
    {
      id: 'ka-01',
      title: 'Portable Mini Electric Food Chopper (250ml)',
      shortTitle: 'Portable Mini Electric Food Chopper',
      volume: '250ml',
      category: 'kitchen-accessories',
      categoryLabel: 'Kitchen Appliances',
      price: 1499,
      origPrice: 1999,
      keyBenefit: 'Wireless USB-C Quick Food Prep with 3 Stainless Steel Blades',
      badges: ['USB Rechargeable', 'BPA Free', '250ml Capacity'],
      badge: 'Bestseller',
      badgeClass: 'badge-bestseller',
      image: 'images/mini-electric-food-chopper.jpg',
      description: 'Wireless USB rechargeable mini chopper for quick garlic, onion, and vegetable prep.',
      tags: ['chopper', 'food chopper', 'electric chopper', 'kitchen', 'garlic chopper', 'mini chopper', 'appliances']
    },
    {
      id: 'ka-02',
      title: '2-in-1 Glass Oil Dispenser with Silicone Basting Brush',
      shortTitle: '2-in-1 Glass Oil Dispenser & Brush',
      category: 'kitchen-accessories',
      categoryLabel: 'Kitchen Accessories',
      price: 990,
      origPrice: 1350,
      keyBenefit: 'Controlled Drip-Free Squeeze Brush & Heat-Resistant Glass',
      badges: ['Heat Resistant', 'Food Grade Silicone', 'Drip-Free'],
      badge: 'Trending',
      badgeClass: 'badge-featured',
      image: 'images/glass-oil-dispenser-basting-brush.jpg',
      description: 'Heat-resistant glass oil bottle with built-in squeeze brush for controlled oil coating.',
      tags: ['oil dispenser', 'basting brush', 'oil bottle', 'kitchen', 'glass dispenser', 'silicone brush', 'kitchen accessories']
    },
    {
      id: 'ka-03',
      title: 'Automatic Touchless Kitchen Soap Dispenser',
      shortTitle: 'Automatic Touchless Soap Dispenser',
      category: 'kitchen-accessories',
      categoryLabel: 'Kitchen & Cleaning',
      price: 1899,
      origPrice: 2499,
      keyBenefit: 'Infrared Motion Sensor with Integrated Sponge Caddy Holder',
      badges: ['Touchless Sensor', 'Sponge Holder', 'IPX4 Waterproof'],
      badge: 'New Arrival',
      badgeClass: 'badge-new',
      image: 'images/touchless-kitchen-soap-dispenser.jpg',
      description: 'Motion-sensor liquid soap dispenser with sponge holder for hygienic dishwashing.',
      tags: ['soap dispenser', 'automatic dispenser', 'touchless', 'kitchen', 'sponge holder', 'cleaning']
    },
    {
      id: 'ka-04',
      title: 'Reusable Silicone Stretch Fresh-Keeping Lids (Set of 6)',
      shortTitle: 'Reusable Silicone Stretch Lids (Set of 6)',
      category: 'kitchen-accessories',
      categoryLabel: 'Food Storage & Organization',
      price: 850,
      origPrice: 1199,
      keyBenefit: 'Airtight Leakproof Seal Across Multiple Sizes (Bowls, Cans, Fruit)',
      badges: ['Set of 6', 'Leakproof & Airtight', 'Microwave & Freezer Safe'],
      badge: 'Eco Friendly',
      badgeClass: 'badge-featured',
      image: 'images/silicone-stretch-lids-set.jpg',
      description: 'Leakproof, stretchable food-grade silicone covers for bowls, pots, and cut fruits.',
      tags: ['silicone lids', 'stretch lids', 'food covers', 'food storage', 'reusable', 'set of 6', 'kitchen']
    },

    // --- Tech Accessories ---
    {
      id: 'ta-01',
      title: '3-in-1 Foldable Magnetic Wireless Charging Station',
      shortTitle: '3-in-1 Wireless Charging Station',
      category: 'tech-accessories',
      categoryLabel: 'Tech Accessories',
      price: 10999,
      origPrice: 13499,
      keyBenefit: 'Simultaneous 15W MagSafe Fast Charging for iPhone, Apple Watch & AirPods',
      badges: ['MagSafe Compatible', 'Foldable Aluminum', '15W Fast Charge'],
      badge: 'Bestseller',
      badgeClass: 'badge-bestseller',
      image: 'images/3-in-1-wireless-charging-station.jpg',
      description: 'All-in-one wireless charging hub crafted from CNC anodized aluminum. Wirelessly powers your iPhone, Apple Watch, and AirPods simultaneously with built-in thermal protection.',
      tags: ['charging station', 'magsafe', 'wireless charger', '3 in 1', 'iphone', 'apple watch', 'airpods', 'tech', 'desk setup']
    },
    {
      id: 'ta-02',
      title: 'Pro ANC Studio Wireless Over-Ear Headphones',
      shortTitle: 'Pro ANC Wireless Headphones',
      category: 'tech-accessories',
      categoryLabel: 'Tech Accessories',
      price: 19999,
      origPrice: 24999,
      keyBenefit: 'Hybrid -40dB Active Noise Cancellation & 45h Studio Playtime',
      badges: ['Hybrid ANC', 'Lossless Audio', '45H Playtime'],
      badge: 'Flagship',
      badgeClass: 'badge-featured',
      image: 'images/pro-anc-wireless-headphones.jpg',
      description: 'High-definition studio wireless headphones with precision 40mm bio-cellulose drivers, plush protein leather earcups, and dual beamforming mics for crystal-clear calls.',
      tags: ['headphones', 'anc', 'noise cancelling', 'wireless', 'over-ear', 'studio', 'bluetooth', 'audio', 'tech']
    },
    {
      id: 'ta-03',
      title: 'Minimalist 75% Wireless Mechanical Keyboard',
      shortTitle: 'Minimalist 75% Mechanical Keyboard',
      category: 'tech-accessories',
      categoryLabel: 'Tech Accessories',
      price: 14499,
      origPrice: 17999,
      keyBenefit: 'Gasket-Mounted Tactile Typing with Walnut Wood Accent & Tri-Mode Wireless',
      badges: ['Hot-Swappable', 'Tri-Mode Wireless', 'PBT Keycaps'],
      badge: 'Top Rated',
      badgeClass: 'badge-new',
      image: 'images/minimalist-mechanical-keyboard.jpg',
      description: 'Streamlined 75% layout keyboard with CNC aluminum chassis, pre-lubed mechanical switches, dye-sub PBT keycaps with walnut spacebar, and Bluetooth/2.4G/USB-C connection.',
      tags: ['keyboard', 'mechanical keyboard', 'wireless', '75%', 'pbt keycaps', 'hot swap', 'desk setup', 'tech']
    },
    {
      id: 'ta-04',
      title: '65W GaN Fast Charger & Braided Type-C Cable Combo',
      shortTitle: '65W GaN Fast Charger & Cable Combo',
      category: 'tech-accessories',
      categoryLabel: 'Tech Accessories',
      price: 6499,
      origPrice: 8999,
      keyBenefit: 'GaN III Pocket Fast Charging with 2m Kevlar 100W PD Cable Included',
      badges: ['GaN III Tech', '100W PD Cable Included', 'Dual Port'],
      badge: 'Essential Combo',
      badgeClass: 'badge-bestseller',
      image: 'images/65w-gan-fast-charger-combo.jpg',
      description: 'Next-generation Gallium Nitride (GaN III) compact wall adapter capable of charging MacBooks, laptops, tablets, and phones at full speed. Includes 2m braided 100W cable.',
      tags: ['gan charger', 'fast charger', '65w', 'usb-c', 'cable', 'power delivery', 'laptop charger', 'tech']
    }
  ];

  // ------------------------------------------------------------------------
  // 02. CONSTANTS & STORE STATE
  // ------------------------------------------------------------------------
  const FREE_SHIPPING_THRESHOLD = 10000;
  const STANDARD_SHIPPING_FEE = 250;
  const OFFICIAL_WHATSAPP_NUMBER = '923267756787'; // Format for wa.me API
  const PAK_PHONE_REGEX = /^03[0-9]{9}$/; // Exact 11 digits starting with 03
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const CART_STORAGE_KEY = 'rube_cart_v1';

  let cart = [];
  let currentFilter = 'all';

  // ------------------------------------------------------------------------
  // 03. DOM ELEMENT SELECTORS
  // ------------------------------------------------------------------------
  const siteHeader = document.getElementById('siteHeader');
  const productGrid = document.getElementById('productGrid');
  const sliderPrevBtn = document.getElementById('sliderPrevBtn');
  const sliderNextBtn = document.getElementById('sliderNextBtn');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const navCategoryLinks = document.querySelectorAll('.category-link, .mobile-nav-link, .footer-link, .accordion-link');
  
  // Mobile Drawer
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerBackdrop = document.getElementById('mobileDrawerBackdrop');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');

  // Search Modal
  const searchToggleBtn = document.getElementById('searchToggleBtn');
  const searchModal = document.getElementById('searchModal');
  const searchBackdrop = document.getElementById('searchBackdrop');
  const searchCloseBtn = document.getElementById('searchCloseBtn');
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const searchResultsContainer = document.getElementById('searchResultsContainer');
  const suggestionChips = document.querySelectorAll('.suggestion-chip');

  // Cart Drawer
  const cartToggleBtn = document.getElementById('cartToggleBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartDrawerBackdrop = document.getElementById('cartDrawerBackdrop');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartBadgeCount = document.getElementById('cartBadgeCount');
  const cartCounterPill = document.getElementById('cartCounterPill');
  const cartItemsList = document.getElementById('cartItemsList');
  const emptyCartView = document.getElementById('emptyCartView');
  const emptyShopNowBtn = document.getElementById('emptyShopNowBtn');
  const cartSubtotalVal = document.getElementById('cartSubtotalVal');
  const cartShippingVal = document.getElementById('cartShippingVal');
  const cartGrandTotalVal = document.getElementById('cartGrandTotalVal');
  const shippingProgressBar = document.getElementById('shippingProgressBar');
  const shippingProgressText = document.getElementById('shippingProgressText');
  const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');

  // Checkout Modal & Form
  const checkoutModal = document.getElementById('checkoutModal');
  const checkoutModalBackdrop = document.getElementById('checkoutModalBackdrop');
  const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');
  const checkoutForm = document.getElementById('checkoutForm');
  const checkoutItemCount = document.getElementById('checkoutItemCount');
  const checkoutSummaryTotal = document.getElementById('checkoutSummaryTotal');
  const checkoutItemsPreview = document.getElementById('checkoutItemsPreview');
  const checkoutSubtotal = document.getElementById('checkoutSubtotal');
  const checkoutShipping = document.getElementById('checkoutShipping');
  const checkoutGrandTotal = document.getElementById('checkoutGrandTotal');
  
  // Payment Options & Bank Panel
  const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
  const codOptionCard = document.getElementById('codOptionCard');
  const bankOptionCard = document.getElementById('bankOptionCard');
  const bankDetailsPanel = document.getElementById('bankDetailsPanel');
  const copyButtons = document.querySelectorAll('.btn-copy');

  // Success Modal
  const successModal = document.getElementById('successModal');
  const successModalBackdrop = document.getElementById('successModalBackdrop');
  const successOrderRef = document.getElementById('successOrderRef');
  const successDetailsCard = document.getElementById('successDetailsCard');
  const reopenWhatsAppLink = document.getElementById('reopenWhatsAppLink');
  const continueShoppingBtn = document.getElementById('continueShoppingBtn');

  // Quick View Product Modal
  const productModal = document.getElementById('productModal');
  const productModalBackdrop = document.getElementById('productModalBackdrop');
  const productModalClose = document.getElementById('productModalClose');
  const productModalContent = document.getElementById('productModalContent');

  // Policy Modal
  const policyModal = document.getElementById('policyModal');
  const policyModalBackdrop = document.getElementById('policyModalBackdrop');
  const policyModalClose = document.getElementById('policyModalClose');
  const policyModalBody = document.getElementById('policyModalBody');
  const policyLinks = document.querySelectorAll('.policy-link');

  // Accordion Items (Mobile Footer)
  const accordionItems = document.querySelectorAll('.accordion-item');

  // Newsletter Forms
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterSuccess = document.getElementById('newsletterSuccess');
  const mobileNewsletterForm = document.getElementById('mobileNewsletterForm');

  // Toast Container
  const toastContainer = document.getElementById('toastContainer');

  // ------------------------------------------------------------------------
  // 04. FORMATTING & UTILITY FUNCTIONS
  // ------------------------------------------------------------------------
  function formatPKR(num) {
    return 'Rs. ' + Number(num).toLocaleString('en-PK');
  }

  function generateOrderRef() {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `#RUB-${randomNum}`;
  }

  function showToast(message, icon = '✓') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 400);
    }, 3200);
  }

  // ------------------------------------------------------------------------
  // 05. CART STATE MANAGEMENT & LOCAL STORAGE
  // ------------------------------------------------------------------------
  function loadCart() {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      cart = saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('Could not read cart from localStorage', e);
      cart = [];
    }
    renderCart();
  }

  function saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
    renderCart();
  }

  function addToCart(productId, quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.categoryLabel,
        quantity: quantity
      });
    }

    saveCart();
    showToast(`Added "${product.title}" to bag`);
    triggerBadgePulse();
    openCartDrawer();
  }

  function updateQuantity(productId, delta) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
      cart[itemIndex].quantity += delta;
      if (cart[itemIndex].quantity <= 0) {
        removeFromCart(productId, false);
        return;
      }
      saveCart();
    }
  }

  function removeFromCart(productId, showNotification = true) {
    const item = cart.find(i => i.id === productId);
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    if (showNotification && item) {
      showToast(`Removed "${item.title}" from bag`, '✕');
    }
  }

  function triggerBadgePulse() {
    cartBadgeCount.classList.remove('pulse');
    void cartBadgeCount.offsetWidth; // Trigger reflow
    cartBadgeCount.classList.add('pulse');
    setTimeout(() => cartBadgeCount.classList.remove('pulse'), 300);
  }

  function calculateCartTotals() {
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0;
    const shippingFee = (subtotal === 0 || isFreeShipping) ? 0 : STANDARD_SHIPPING_FEE;
    const grandTotal = subtotal + shippingFee;

    return { count, subtotal, isFreeShipping, shippingFee, grandTotal };
  }

  function renderCart() {
    const { count, subtotal, isFreeShipping, shippingFee, grandTotal } = calculateCartTotals();

    // Update Badge & Header Counts
    cartBadgeCount.textContent = count;
    cartCounterPill.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;

    // Free Shipping Progress
    if (subtotal === 0) {
      shippingProgressBar.style.width = '0%';
      shippingProgressText.innerHTML = `Add <strong>${formatPKR(FREE_SHIPPING_THRESHOLD)}</strong> for FREE shipping across Pakistan`;
    } else if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      shippingProgressBar.style.width = '100%';
      shippingProgressText.innerHTML = `✨ <strong>Congratulations!</strong> You have unlocked FREE Nationwide Shipping!`;
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
      const percent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      shippingProgressBar.style.width = `${percent}%`;
      shippingProgressText.innerHTML = `Add <strong>${formatPKR(remaining)}</strong> more for <strong>FREE shipping</strong>`;
    }

    // Toggle Empty View
    if (cart.length === 0) {
      emptyCartView.style.display = 'flex';
      cartItemsList.style.display = 'none';
      cartSubtotalVal.textContent = 'Rs. 0';
      cartShippingVal.textContent = 'Calculated next';
      cartGrandTotalVal.textContent = 'Rs. 0';
      proceedCheckoutBtn.disabled = true;
      proceedCheckoutBtn.style.opacity = '0.5';
      proceedCheckoutBtn.style.pointerEvents = 'none';
      return;
    }

    emptyCartView.style.display = 'none';
    cartItemsList.style.display = 'flex';
    proceedCheckoutBtn.disabled = false;
    proceedCheckoutBtn.style.opacity = '1';
    proceedCheckoutBtn.style.pointerEvents = 'auto';

    // Populate Item Cards
    cartItemsList.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.title}" class="cart-item-thumb" loading="lazy">
        <div class="cart-item-details">
          <div class="cart-item-top">
            <span class="cart-item-title">${item.title}</span>
            <button class="cart-item-remove-btn" data-action="remove" data-id="${item.id}" aria-label="Remove item">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <span class="cart-item-price">${formatPKR(item.price)}</span>
          <div class="cart-qty-control">
            <button type="button" class="qty-btn" data-action="decrease" data-id="${item.id}" aria-label="Decrease quantity">−</button>
            <span class="qty-val">${item.quantity}</span>
            <button type="button" class="qty-btn" data-action="increase" data-id="${item.id}" aria-label="Increase quantity">+</button>
          </div>
        </div>
      </div>
    `).join('');

    // Update Totals
    cartSubtotalVal.textContent = formatPKR(subtotal);
    cartShippingVal.textContent = isFreeShipping ? 'FREE' : formatPKR(shippingFee);
    cartGrandTotalVal.textContent = formatPKR(grandTotal);
  }

  // ------------------------------------------------------------------------
  // 06. PRODUCT GRID RENDERING & NICHE-BY-NICHE DISPLAY
  // ------------------------------------------------------------------------
  const NICHE_CATEGORIES = [
    {
      id: 'skin-care',
      num: '01',
      tagline: 'Dermatological Formulations',
      title: 'Skin Care',
      description: 'Ultra-concentrated botanical elixirs, multi-weight hydration complexes, and restorative treatments designed for radiant daily renewal.',
      label: 'Skin Care'
    },
    {
      id: 'kitchen-accessories',
      num: '02',
      tagline: 'Smart Culinary Prep & Storage',
      title: 'Kitchen Accessories',
      description: 'Rechargeable electric mini choppers, 2-in-1 glass oil dispensers, touchless soap dispensers, and reusable stretch silicone food lids.',
      label: 'Kitchen Accessories'
    },
    {
      id: 'tech-accessories',
      num: '03',
      tagline: 'Workspace & Desktop Gear',
      title: 'Tech Accessories',
      description: 'Studio-grade ANC acoustics, tactile custom mechanical keyboards, 3-in-1 MagSafe charging docks, and GaN high-power delivery.',
      label: 'Tech Accessories'
    }
  ];

  function createSkincareCardHTML(product) {
    const badgesList = product.badges || ['Dermatologist Tested', 'Non-Greasy', 'All Skin Types'];
    const badgesHtml = badgesList.map(b => `<span class="skin-badge-pill">${b}</span>`).join('');
    const discountPercent = Math.round((1 - product.price / product.origPrice) * 100);

    return `
      <article class="product-card skincare-product-card" data-id="${product.id}">
        <div class="product-image-container skincare-img-container">
          <img src="${product.image}" alt="${product.title}" class="product-img" loading="lazy">
          
          <div class="product-badge-wrap skincare-badge-wrap">
            <span class="product-badge skincare-badge-main ${product.badgeClass || ''}">${product.primaryBadge || 'Dermatologist Tested'}</span>
            <span class="product-badge skincare-badge-secondary">All Skin Types</span>
          </div>

          <div class="product-card-actions skincare-hover-actions">
            <button class="btn-card-quickview" data-action="quick-view" data-id="${product.id}" title="Quick View of ${product.title}" aria-label="Quick View of ${product.title}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>Quick View</span>
            </button>
          </div>
        </div>

        <div class="skincare-card-body">
          <div class="skincare-card-meta">
            <span class="skincare-cat-tag">Skincare</span>
            <span class="skincare-vol-tag">${product.volume || 'Standard'}</span>
          </div>

          <h3 class="skincare-card-title" title="${product.title}">${product.title}</h3>

          <div class="skincare-key-benefit-box">
            <span class="benefit-star-icon">✦</span>
            <span class="benefit-text"><strong>Key Benefit:</strong> ${product.keyBenefit || ''}</span>
          </div>

          <div class="skincare-badges-row">
            ${badgesHtml}
          </div>

          <p class="skincare-card-desc">${product.description}</p>

          <div class="skincare-price-row">
            <span class="skincare-price-current">${formatPKR(product.price)}</span>
            <span class="skincare-price-orig">${formatPKR(product.origPrice)}</span>
            <span class="skincare-save-pill">Save ${discountPercent}%</span>
          </div>

          <!-- Dual Conversion Buttons: Direct COD Buy Now & Add to Cart -->
          <div class="skincare-card-buttons">
            <button class="btn-skincare-cod" data-action="direct-cod" data-id="${product.id}" title="Instant Direct COD Buy Now">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              <span>Direct COD Buy Now</span>
            </button>
            <button class="btn-skincare-cart" data-action="quick-add" data-id="${product.id}" title="Add to Bag">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function createStandardProductCardHTML(product) {
    const hasDiscount = product.origPrice && product.origPrice > product.price;
    const discountPercent = hasDiscount ? Math.round((1 - product.price / product.origPrice) * 100) : 0;

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-image-container">
          <img src="${product.image}" alt="${product.title}" class="product-img" loading="lazy">
          
          <div class="product-badge-wrap">
            <span class="product-badge ${product.badgeClass}">${product.badge}</span>
            ${hasDiscount ? `<span class="product-badge badge-save-pill">-${discountPercent}%</span>` : ''}
          </div>

          <div class="product-card-actions">
            <button class="btn-card-quickadd" data-action="quick-add" data-id="${product.id}">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Add to Bag</span>
            </button>
            <button class="btn-card-quickview" data-action="quick-view" data-id="${product.id}" title="Quick View" aria-label="Quick View of ${product.title}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
        </div>

        <div class="product-info">
          <span class="product-category-label">${product.categoryLabel}</span>
          <h3 class="product-title" title="${product.title}">${product.title}</h3>
          <div class="product-price-row">
            <span class="product-price">${formatPKR(product.price)}</span>
            <span class="product-orig-price">${formatPKR(product.origPrice)}</span>
          </div>
          <div class="standard-cod-cta-wrap">
            <button class="btn-standard-cod" data-action="direct-cod" data-id="${product.id}">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              <span>Direct COD Buy Now</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function renderSkincareSection() {
    const skincareProducts = PRODUCTS.filter(p => p.category === 'skin-care');
    const niche = NICHE_CATEGORIES.find(n => n.id === 'skin-care') || {
      id: 'skin-care',
      num: '01',
      tagline: 'Dermatological Formulations',
      title: 'Skin Care',
      description: 'Ultra-concentrated botanical elixirs, multi-weight hydration complexes, and restorative treatments designed for radiant daily renewal.'
    };

    return `
      <section class="niche-section" id="niche-skin-care" data-category="skin-care">
        <div class="niche-header">
          <div class="niche-header-left">
            <span class="niche-tagline">${niche.num} • ${niche.tagline}</span>
            <h3 class="niche-title">${niche.title}</h3>
            <p class="niche-desc">${niche.description}</p>
          </div>
          <div class="niche-header-right">
            <span class="niche-pill-count">${skincareProducts.length} Pieces</span>
            <div class="niche-nav-arrows">
              <button class="niche-arrow-btn prev-btn" data-track-id="track-skin-care" aria-label="Previous ${niche.title}" title="Previous" disabled>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button class="niche-arrow-btn next-btn" data-track-id="track-skin-care" aria-label="Next ${niche.title}" title="Next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- 4 Skincare Cards Track / Grid -->
        <div class="niche-track skincare-cards-track" id="track-skin-care">
          ${skincareProducts.map(p => createSkincareCardHTML(p)).join('')}
        </div>
      </section>
    `;
  }

  function renderProducts(category = 'all') {
    currentFilter = category;
    
    // Update active tab buttons
    filterTabs.forEach(tab => {
      const match = tab.getAttribute('data-filter') === category;
      tab.classList.toggle('active', match);
      tab.setAttribute('aria-selected', match ? 'true' : 'false');
    });

    const visibleNiches = category === 'all' 
      ? NICHE_CATEGORIES 
      : NICHE_CATEGORIES.filter(n => n.id === category);

    productGrid.innerHTML = visibleNiches.map(niche => {
      if (niche.id === 'skin-care') {
        return renderSkincareSection();
      }

      const nicheProducts = PRODUCTS.filter(p => p.category === niche.id);
      return `
        <section class="niche-section" id="niche-${niche.id}" data-category="${niche.id}">
          <div class="niche-header">
            <div class="niche-header-left">
              <span class="niche-tagline">${niche.num} • ${niche.tagline}</span>
              <h3 class="niche-title">${niche.title}</h3>
              <p class="niche-desc">${niche.description}</p>
            </div>
            <div class="niche-header-right">
              <span class="niche-pill-count">${nicheProducts.length} Pieces</span>
              <div class="niche-nav-arrows">
                <button class="niche-arrow-btn prev-btn" data-track-id="track-${niche.id}" aria-label="Previous ${niche.title}" title="Previous" disabled>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button class="niche-arrow-btn next-btn" data-track-id="track-${niche.id}" aria-label="Next ${niche.title}" title="Next">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="niche-track" id="track-${niche.id}">
            ${nicheProducts.map(p => createStandardProductCardHTML(p)).join('')}
          </div>
        </section>
      `;
    }).join('');

    setupNicheSliderControls();
  }

  // ------------------------------------------------------------------------
  // 06B. PRODUCT NICHE ROW SLIDER CONTROLS (Left & Right Buttons per line)
  // ------------------------------------------------------------------------
  function scrollNicheTrack(trackId, direction) {
    const track = document.getElementById(trackId);
    if (!track) return;
    const firstCard = track.querySelector('.product-card');
    const gap = 24;
    const cardStep = firstCard ? (firstCard.offsetWidth + gap) : 320;
    const scrollDistance = window.innerWidth > 768 ? cardStep * 2 : cardStep;
    track.scrollBy({
      left: direction === 'next' ? scrollDistance : -scrollDistance,
      behavior: 'smooth'
    });
  }

  function updateNicheTrackButtons(track) {
    if (!track) return;
    const section = track.closest('.niche-section');
    if (!section) return;
    const prevBtn = section.querySelector('.niche-arrow-btn.prev-btn');
    const nextBtn = section.querySelector('.niche-arrow-btn.next-btn');
    if (!prevBtn || !nextBtn) return;

    const scrollLeft = track.scrollLeft;
    const maxScroll = track.scrollWidth - track.clientWidth - 4;

    // Desktop view: agar تمام products screen par fit aa jate hain to arrows hide
    if (track.scrollWidth <= track.clientWidth + 4) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
      return;
    }

    prevBtn.style.display = 'inline-flex';
    nextBtn.style.display = 'inline-flex';
    prevBtn.disabled = scrollLeft <= 4;
    nextBtn.disabled = scrollLeft >= maxScroll;
  }

  function updateAllNicheButtons() {
    document.querySelectorAll('.niche-track').forEach(track => {
      updateNicheTrackButtons(track);
    });
  }

  function setupNicheSliderControls() {
    const tracks = document.querySelectorAll('.niche-track');
    tracks.forEach(track => {
      track.addEventListener('scroll', () => updateNicheTrackButtons(track), { passive: true });
    });
    requestAnimationFrame(() => {
      setTimeout(updateAllNicheButtons, 60);
    });
  }

  function setupProductSlider() {
    setupNicheSliderControls();
    window.addEventListener('resize', updateAllNicheButtons);
  }

  // ------------------------------------------------------------------------
  // 07. SEARCH FUNCTIONALITY
  // ------------------------------------------------------------------------
  function openSearchModal() {
    searchModal.classList.add('active');
    searchModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    setTimeout(() => searchInput.focus(), 150);
  }

  function closeSearchModal() {
    searchModal.classList.remove('active');
    searchModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    searchInput.value = '';
    searchClearBtn.classList.remove('visible');
    searchResultsContainer.innerHTML = '';
  }

  function handleSearch(query) {
    const q = query.trim().toLowerCase();
    searchClearBtn.classList.toggle('visible', q.length > 0);

    if (q.length < 2) {
      searchResultsContainer.innerHTML = `
        <p class="search-prompt-text">
          Type at least 2 letters to search curated pieces...
        </p>
      `;
      return;
    }

    const matches = PRODUCTS.filter(p => {
      return p.title.toLowerCase().includes(q) ||
             (p.shortTitle && p.shortTitle.toLowerCase().includes(q)) ||
             p.categoryLabel.toLowerCase().includes(q) ||
             (p.keyBenefit && p.keyBenefit.toLowerCase().includes(q)) ||
             p.tags.some(tag => tag.toLowerCase().includes(q));
    });

    if (matches.length === 0) {
      searchResultsContainer.innerHTML = `
        <div class="search-no-results">
          <p class="search-no-results-title">No products found</p>
          <p class="search-no-results-sub">Try searching for "serum", "sunscreen", "moisturizer", or "glow bundle".</p>
        </div>
      `;
      return;
    }

    searchResultsContainer.innerHTML = matches.map(p => `
      <div class="search-result-item" data-id="${p.id}">
        <img src="${p.image}" alt="${p.title}" class="search-result-thumb">
        <div class="search-result-info">
          <div class="search-result-title">${p.title}</div>
          ${p.keyBenefit ? `<div class="search-result-benefit">✦ ${p.keyBenefit}</div>` : ''}
          <div class="search-result-price">${formatPKR(p.price)}</div>
        </div>
        <div class="search-result-actions">
          <button class="btn-search-cod" data-action="direct-cod" data-id="${p.id}" title="Instant COD Buy">
            COD
          </button>
          <button class="btn-card-quickadd search-result-add-btn" data-action="quick-add" data-id="${p.id}" title="Add to Bag">
            + Bag
          </button>
        </div>
      </div>
    `).join('');
  }

  // ------------------------------------------------------------------------
  // 08. CART DRAWER CONTROLLER
  // ------------------------------------------------------------------------
  function openCartDrawer() {
    closeMobileDrawer();
    closeSearchModal();
    cartDrawer.classList.add('active');
    cartDrawerBackdrop.classList.add('active');
    cartDrawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeCartDrawer() {
    cartDrawer.classList.remove('active');
    cartDrawerBackdrop.classList.remove('active');
    cartDrawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  // ------------------------------------------------------------------------
  // 09. MOBILE NAVIGATION DRAWER
  // ------------------------------------------------------------------------
  function openMobileDrawer() {
    closeCartDrawer();
    closeSearchModal();
    mobileDrawer.classList.add('active');
    mobileDrawerBackdrop.classList.add('active');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('modal-open');
  }

  function closeMobileDrawer() {
    mobileDrawer.classList.remove('active');
    mobileDrawerBackdrop.classList.remove('active');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('modal-open');
  }

  // ------------------------------------------------------------------------
  // 10. QUICK VIEW MODAL & DIRECT COD BUY NOW
  // ------------------------------------------------------------------------
  function directBuyNow(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    // Check if item is already in cart
    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex === -1) {
      cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.categoryLabel,
        quantity: 1
      });
      saveCart();
    }

    // Close any drawers / modals
    closeCartDrawer();
    closeQuickView();
    closeSearchModal();

    // Select COD option
    const codRadio = document.querySelector('input[name="paymentMethod"][value="COD"]');
    if (codRadio) {
      codRadio.checked = true;
      if (codOptionCard) codOptionCard.classList.add('active');
      if (bankOptionCard) bankOptionCard.classList.remove('active');
      if (bankDetailsPanel) bankDetailsPanel.classList.remove('visible');
    }

    // Open checkout modal directly
    openCheckout();
    showToast(`Instant COD Checkout for "${product.shortTitle || product.title}"`, '🇵🇰');

    // Auto-focus name field
    setTimeout(() => {
      const nameInput = document.getElementById('customerName');
      if (nameInput) nameInput.focus();
    }, 200);
  }

  function openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const badgesHtml = product.badges 
      ? product.badges.map(b => `<span class="skin-badge-pill">${b}</span>`).join('') 
      : `<span class="product-badge ${product.badgeClass}">${product.badge}</span>`;

    const keyBenefitHtml = product.keyBenefit 
      ? `<div class="quickview-benefit-box"><span class="benefit-star-icon">✦</span> <span><strong>Key Benefit:</strong> ${product.keyBenefit}</span></div>` 
      : '';

    const discountPercent = Math.round((1 - product.price / product.origPrice) * 100);

    productModalContent.innerHTML = `
      <div class="quickview-container">
        <div class="quickview-img-wrap">
          <img src="${product.image}" alt="${product.title}" class="quickview-img">
          ${product.primaryBadge ? `<span class="quickview-floating-badge">${product.primaryBadge}</span>` : ''}
        </div>
        <div class="quickview-details">
          <div class="quickview-meta-row">
            <span class="quickview-category">${product.categoryLabel}</span>
            ${product.volume ? `<span class="quickview-volume-pill">${product.volume}</span>` : ''}
          </div>
          <h2 class="quickview-title">${product.title}</h2>
          
          ${keyBenefitHtml}

          <div class="quickview-badges-row">
            ${badgesHtml}
          </div>

          <div class="quickview-price-row">
            <span class="quickview-price">${formatPKR(product.price)}</span>
            <span class="quickview-orig-price">${formatPKR(product.origPrice)}</span>
            <span class="quickview-save-pill">Save ${discountPercent}%</span>
          </div>
          
          <p class="quickview-desc">${product.description}</p>
          
          <div class="quickview-trust-perks">
            <span>🇵🇰 Cash on Delivery (COD) Available</span>
            <span>•</span>
            <span>🚚 Express Delivery 2-4 Days</span>
          </div>

          <div class="quickview-cta-group">
            <button class="btn-quickview-cod" data-id="${product.id}">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              <span>Direct COD Buy Now • ${formatPKR(product.price)}</span>
            </button>
            <button class="btn-quickview-add" data-id="${product.id}">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span>Add to Bag</span>
            </button>
          </div>
        </div>
      </div>
    `;

    productModal.classList.add('active');
    productModalBackdrop.classList.add('active');
    productModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    const addBtn = productModalContent.querySelector('.btn-quickview-add');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        addToCart(product.id, 1);
        closeQuickView();
      });
    }

    const codBtn = productModalContent.querySelector('.btn-quickview-cod');
    if (codBtn) {
      codBtn.addEventListener('click', () => {
        directBuyNow(product.id);
      });
    }
  }

  function closeQuickView() {
    productModal.classList.remove('active');
    productModalBackdrop.classList.remove('active');
    productModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  // ------------------------------------------------------------------------
  // 11. CHECKOUT MODAL & ANTI-FRAUD VERIFICATION
  // ------------------------------------------------------------------------
  function openCheckout() {
    if (cart.length === 0) {
      showToast('Your bag is empty', 'ℹ');
      return;
    }

    closeCartDrawer();
    const { count, subtotal, isFreeShipping, shippingFee, grandTotal } = calculateCartTotals();

    checkoutItemCount.textContent = count;
    checkoutSummaryTotal.textContent = formatPKR(grandTotal);
    checkoutSubtotal.textContent = formatPKR(subtotal);
    checkoutShipping.textContent = isFreeShipping ? 'FREE' : formatPKR(shippingFee);
    checkoutGrandTotal.textContent = formatPKR(grandTotal);

    checkoutItemsPreview.innerHTML = cart.map(item => `
      <div class="checkout-preview-row">
        <span>${item.title} (x${item.quantity})</span>
        <span class="checkout-preview-price">${formatPKR(item.price * item.quantity)}</span>
      </div>
    `).join('');

    checkoutModal.classList.add('active');
    checkoutModalBackdrop.classList.add('active');
    checkoutModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeCheckout() {
    checkoutModal.classList.remove('active');
    checkoutModalBackdrop.classList.remove('active');
    checkoutModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  // Validate form fields with anti-fraud rules
  function validateCheckoutForm() {
    let isValid = true;

    // 1. Silent Honeypot Check (Catches automated spam bots)
    const honeypot = document.getElementById('user_company_tax_id');
    if (honeypot && honeypot.value.trim() !== '') {
      console.warn('Spam submission detected by honeypot.');
      // Silently reject or simulate delay
      return false;
    }

    // 2. Full Name
    const nameInput = document.getElementById('customerName');
    const nameError = document.getElementById('nameError');
    if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
      nameInput.classList.add('invalid');
      nameError.classList.add('visible');
      isValid = false;
    } else {
      nameInput.classList.remove('invalid');
      nameError.classList.remove('visible');
    }

    // 3. Pakistani Mobile Phone (Strict regex: ^03[0-9]{9}$)
    const phoneInput = document.getElementById('customerPhone');
    const phoneError = document.getElementById('phoneError');
    const cleanedPhone = phoneInput.value.replace(/[\s-]/g, '');
    if (!PAK_PHONE_REGEX.test(cleanedPhone)) {
      phoneInput.classList.add('invalid');
      phoneError.classList.add('visible');
      isValid = false;
    } else {
      phoneInput.classList.remove('invalid');
      phoneError.classList.remove('visible');
    }

    // 4. Email validation
    const emailInput = document.getElementById('customerEmail');
    const emailError = document.getElementById('emailError');
    if (!EMAIL_REGEX.test(emailInput.value.trim())) {
      emailInput.classList.add('invalid');
      emailError.classList.add('visible');
      isValid = false;
    } else {
      emailInput.classList.remove('invalid');
      emailError.classList.remove('visible');
    }

    // 5. City Selection
    const citySelect = document.getElementById('shippingCity');
    const cityError = document.getElementById('cityError');
    if (!citySelect.value) {
      citySelect.classList.add('invalid');
      cityError.classList.add('visible');
      isValid = false;
    } else {
      citySelect.classList.remove('invalid');
      cityError.classList.remove('visible');
    }

    // 6. Complete Address
    const addressInput = document.getElementById('shippingAddress');
    const addressError = document.getElementById('addressError');
    if (!addressInput.value.trim() || addressInput.value.trim().length < 8) {
      addressInput.classList.add('invalid');
      addressError.classList.add('visible');
      isValid = false;
    } else {
      addressInput.classList.remove('invalid');
      addressError.classList.remove('visible');
    }

    return isValid;
  }

  // ------------------------------------------------------------------------
  // 12. WHATSAPP ORDER DISPATCH & SUCCESS FLOW
  // ------------------------------------------------------------------------
  function handleOrderSubmission(e) {
    e.preventDefault();

    if (!validateCheckoutForm()) {
      showToast('Please correct highlighted fields before submitting', '⚠️');
      return;
    }

    const { count, subtotal, isFreeShipping, shippingFee, grandTotal } = calculateCartTotals();
    const orderRef = generateOrderRef();

    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.replace(/[\s-]/g, '');
    const email = document.getElementById('customerEmail').value.trim();
    const city = document.getElementById('shippingCity').value;
    const address = document.getElementById('shippingAddress').value.trim();
    const postal = document.getElementById('shippingPostal').value.trim();
    const notes = document.getElementById('orderNotes').value.trim();

    const selectedPaymentEl = document.querySelector('input[name="paymentMethod"]:checked');
    const paymentMethod = selectedPaymentEl ? selectedPaymentEl.value : 'COD';
    const paymentMethodLabel = paymentMethod === 'COD' 
      ? 'Cash on Delivery (COD)' 
      : 'Direct Bank / JazzCash Transfer';

    // Build Structured Products List
    const itemsFormatted = cart.map((item, index) => {
      return `${index + 1}. ${item.title} (Qty: ${item.quantity}) — ${formatPKR(item.price * item.quantity)}`;
    }).join('\n');

    // Compile Structured WhatsApp Text
    const whatsappMessage = 
`🛍️ *NEW ORDER - RUBE PAKISTAN*
*Order Reference:* ${orderRef}
----------------------------------
👤 *Customer:* ${name}
📞 *Phone:* ${phone}
✉️ *Email:* ${email}
📍 *Shipping Address:* ${address}, ${city} ${postal ? '(' + postal + ')' : ''}
${notes ? `📝 *Special Instructions:* ${notes}\n` : ''}----------------------------------
📦 *ORDERED ITEMS (${count}):*
${itemsFormatted}
----------------------------------
💵 *Subtotal:* ${formatPKR(subtotal)}
🚚 *Courier Shipping:* ${isFreeShipping ? 'FREE (Orders > Rs. 10,000)' : formatPKR(shippingFee)}
💰 *NET PAYABLE:* ${formatPKR(grandTotal)} PKR
----------------------------------
💳 *Payment Method:* ${paymentMethodLabel}
${paymentMethod === 'BANK_TRANSFER' ? '📌 *Note:* Please share your payment receipt / screenshot here for swift dispatch confirmation.\n' : ''}----------------------------------
_Generated via RUBE Online Store (dnstore.pk UX)_`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Close Checkout and Show Success
    closeCheckout();
    renderSuccessModal(orderRef, name, phone, city, address, grandTotal, paymentMethod, whatsappUrl);

    // Automatically trigger WhatsApp in new window/tab
    try {
      window.open(whatsappUrl, '_blank');
    } catch (err) {
      console.warn('Popup blocked, WhatsApp link available on screen', err);
    }

    // Reset Cart & Form
    cart = [];
    saveCart();
    checkoutForm.reset();
  }

  function renderSuccessModal(ref, name, phone, city, address, total, paymentMethod, waUrl) {
    successOrderRef.textContent = ref;
    reopenWhatsAppLink.href = waUrl;

    let bankNoticeHtml = '';
    if (paymentMethod === 'BANK_TRANSFER') {
      bankNoticeHtml = `
        <div class="success-bank-notice">
          <strong>Direct Transfer Instructions:</strong><br>
          Meezan Bank: <code>00300116296954</code> | JazzCash: <code>03267756787</code><br>
          Please take a screenshot of your transfer and send it to our WhatsApp dispatch line (+92 326 7756787).
        </div>
      `;
    }

    successDetailsCard.innerHTML = `
      <div class="success-detail-row">
        <span class="success-detail-label">Recipient:</span>
        <strong>${name}</strong>
      </div>
      <div class="success-detail-row">
        <span class="success-detail-label">Mobile:</span>
        <span>${phone}</span>
      </div>
      <div class="success-detail-row">
        <span class="success-detail-label">Destination:</span>
        <span>${city}</span>
      </div>
      <div class="success-detail-row">
        <span class="success-detail-label">Payment:</span>
        <span>${paymentMethod === 'COD' ? 'Cash on Delivery (COD)' : 'Direct Bank / JazzCash'}</span>
      </div>
      <div class="success-detail-total-row">
        <strong>Total Amount:</strong>
        <strong class="success-detail-total-val">${formatPKR(total)}</strong>
      </div>
      ${bankNoticeHtml}
    `;

    successModal.classList.add('active');
    successModalBackdrop.classList.add('active');
    successModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeSuccessModal() {
    successModal.classList.remove('active');
    successModalBackdrop.classList.remove('active');
    successModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  // ------------------------------------------------------------------------
  // 13. POLICY MODAL CONTENT & CONTROLLER
  // ------------------------------------------------------------------------
  const POLICY_DATA = {
    shipping: {
      title: 'Shipping & Delivery Policy',
      content: `
        <p>At RUBE, all orders are dispatched from our central hub and serviced through premier logistics partners (TCS, Leopards Courier, and Call Courier).</p>
        <ul>
          <li><strong>Free Nationwide Shipping:</strong> Complimentary on all orders over Rs. 10,000.</li>
          <li><strong>Standard Flat Rate:</strong> Nominal Rs. 250 for orders below Rs. 10,000.</li>
          <li><strong>Delivery Timelines:</strong> 2 to 4 working days for major urban centers (Karachi, Lahore, Islamabad/Rawalpindi), and 3 to 5 working days for other destinations across Pakistan.</li>
          <li><strong>Direct Tracking:</strong> Tracking identifiers are instantly synchronized via our WhatsApp dispatch line (03267756787) upon package transit.</li>
        </ul>
      `
    },
    exchange: {
      title: '7-Day Easy Exchange Policy',
      content: `
        <p>We pride ourselves on flawless customer satisfaction and craft integrity.</p>
        <ul>
          <li><strong>Timeframe:</strong> You may request an exchange within 7 days of parcel receipt.</li>
          <li><strong>Eligibility:</strong> Items must be unused, in their original presentation packaging with safety seals intact.</li>
          <li><strong>Damaged / Incorrect Parcels:</strong> In the rare event of transit damage or shipment discrepancy, contact us on WhatsApp immediately with parcel photos for an expedited replacement at zero cost to you.</li>
        </ul>
      `
    },
    payment: {
      title: 'Payment Methods & Anti-Fraud Security',
      content: `
        <p>RUBE offers two seamless payment avenues across Pakistan:</p>
        <ul>
          <li><strong>Cash on Delivery (COD):</strong> Pay the courier representative in cash upon delivery to your doorstep.</li>
          <li><strong>Direct Bank / JazzCash:</strong> Instant electronic transfer with zero surcharge:
            <br>• <strong>Meezan Bank:</strong> A/C: 00300116296954 | Title: MUHAMMAD RIZWAN ZAHID | IBAN: PK24MEZN0000300116296954
            <br>• <strong>JazzCash:</strong> Account: 03267756787 | IBAN: PK93JCMA0308923267756787
          </li>
          <li><strong>Security:</strong> All online communications and sessions are protected with industry-standard 256-bit encryption.</li>
        </ul>
      `
    },
    authenticity: {
      title: '100% Authenticity & Quality Standard',
      content: `
        <p>Every piece in the RUBE catalog undergoes rigorous quality checks:</p>
        <ul>
          <li><strong>Skin Care:</strong> Clean, non-comedogenic formulations certified cruelty-free, produced under ISO standards.</li>
          <li><strong>Culinary Ware:</strong> Certified 304 food-grade stainless steels, high-density seasoned acacia hardwoods, and lead-free ceramics.</li>
          <li><strong>Desk Objects:</strong> CNC-machined structural aluminum and premium wool felt engineered for longevity.</li>
        </ul>
      `
    }
  };

  function openPolicy(type) {
    const policy = POLICY_DATA[type];
    if (!policy) return;

    policyModalBody.innerHTML = `
      <h3>${policy.title}</h3>
      ${policy.content}
    `;

    policyModal.classList.add('active');
    policyModalBackdrop.classList.add('active');
    policyModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closePolicy() {
    policyModal.classList.remove('active');
    policyModalBackdrop.classList.remove('active');
    policyModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  // ------------------------------------------------------------------------
  // 14. EVENT LISTENERS SETUP
  // ------------------------------------------------------------------------
  function setupEventListeners() {
    
    // Header Scroll State
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }, { passive: true });

    // Category Tabs Filter
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const cat = tab.getAttribute('data-filter');
        renderProducts(cat);
      });
    });

    // Navigation Category Links (Desktop, Mobile Drawer, Footer)
    navCategoryLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const cat = link.getAttribute('data-category');
        if (cat) {
          renderProducts(cat);
          const target = document.getElementById(`niche-${cat}`) || document.getElementById('collection');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
        if (link.hasAttribute('data-close-drawer')) {
          closeMobileDrawer();
        }
      });
    });

    const exploreBtn = document.getElementById('exploreCollectionBtn');
    if (exploreBtn) {
      exploreBtn.addEventListener('click', () => {
        renderProducts('all');
      });
    }

    // Mobile Hamburger
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('active');
      if (isOpen) {
        closeMobileDrawer();
      } else {
        openMobileDrawer();
      }
    });

    mobileDrawerClose.addEventListener('click', closeMobileDrawer);
    mobileDrawerBackdrop.addEventListener('click', closeMobileDrawer);

    // Search Toggle & Actions
    searchToggleBtn.addEventListener('click', openSearchModal);
    searchBackdrop.addEventListener('click', closeSearchModal);
    searchCloseBtn.addEventListener('click', closeSearchModal);

    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));

    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchClearBtn.classList.remove('visible');
      searchResultsContainer.innerHTML = '';
      searchInput.focus();
    });

    suggestionChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-search');
        searchInput.value = query;
        handleSearch(query);
      });
    });

    // Cart Toggle & Actions
    cartToggleBtn.addEventListener('click', openCartDrawer);
    cartCloseBtn.addEventListener('click', closeCartDrawer);
    cartDrawerBackdrop.addEventListener('click', closeCartDrawer);
    emptyShopNowBtn.addEventListener('click', () => {
      closeCartDrawer();
      document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
    });

    // Product Grid Delegate (Direct COD, Quick Add & Quick View)
    productGrid.addEventListener('click', (e) => {
      const directCodBtn = e.target.closest('[data-action="direct-cod"]');
      if (directCodBtn) {
        const id = directCodBtn.getAttribute('data-id');
        directBuyNow(id);
        return;
      }

      const quickAddBtn = e.target.closest('[data-action="quick-add"]');
      if (quickAddBtn) {
        const id = quickAddBtn.getAttribute('data-id');
        addToCart(id, 1);
        return;
      }

      const quickViewBtn = e.target.closest('[data-action="quick-view"]');
      if (quickViewBtn) {
        const id = quickViewBtn.getAttribute('data-id');
        openQuickView(id);
        return;
      }

      const arrowBtn = e.target.closest('.niche-arrow-btn');
      if (arrowBtn) {
        const trackId = arrowBtn.getAttribute('data-track-id');
        const isNext = arrowBtn.classList.contains('next-btn');
        scrollNicheTrack(trackId, isNext ? 'next' : 'prev');
        return;
      }
    });

    // Search Results Delegate
    searchResultsContainer.addEventListener('click', (e) => {
      const directCodBtn = e.target.closest('[data-action="direct-cod"]');
      if (directCodBtn) {
        e.stopPropagation();
        const id = directCodBtn.getAttribute('data-id');
        directBuyNow(id);
        return;
      }

      const quickAddBtn = e.target.closest('[data-action="quick-add"]');
      if (quickAddBtn) {
        e.stopPropagation();
        const id = quickAddBtn.getAttribute('data-id');
        addToCart(id, 1);
        closeSearchModal();
        return;
      }

      const itemCard = e.target.closest('.search-result-item');
      if (itemCard) {
        const id = itemCard.getAttribute('data-id');
        closeSearchModal();
        openQuickView(id);
      }
    });

    // Cart Items List Delegate (Quantity + / -, Remove)
    cartItemsList.addEventListener('click', (e) => {
      const target = e.target.closest('button');
      if (!target) return;

      const action = target.getAttribute('data-action');
      const id = target.getAttribute('data-id');

      if (action === 'increase') {
        updateQuantity(id, 1);
      } else if (action === 'decrease') {
        updateQuantity(id, -1);
      } else if (action === 'remove') {
        removeFromCart(id, true);
      }
    });

    // Proceed to Checkout
    proceedCheckoutBtn.addEventListener('click', openCheckout);
    checkoutCloseBtn.addEventListener('click', closeCheckout);
    checkoutModalBackdrop.addEventListener('click', closeCheckout);

    // Payment Method Radio Change
    paymentRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        if (radio.value === 'BANK_TRANSFER') {
          codOptionCard.classList.remove('active');
          bankOptionCard.classList.add('active');
          bankDetailsPanel.classList.add('visible');
        } else {
          bankOptionCard.classList.remove('active');
          codOptionCard.classList.add('active');
          bankDetailsPanel.classList.remove('visible');
        }
      });
    });

    // Copy to Clipboard Buttons (Bank Details)
    copyButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const textToCopy = btn.getAttribute('data-copy');
        if (!textToCopy) return;

        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalText = btn.innerHTML;
          btn.classList.add('copied');
          btn.innerHTML = `<span>Copied!</span>`;
          showToast(`Copied ${textToCopy} to clipboard`);

          setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = originalText;
          }, 2000);
        }).catch(err => {
          showToast('Failed to copy to clipboard', '✕');
        });
      });
    });

    // Checkout Form Submit (WhatsApp Dispatch)
    checkoutForm.addEventListener('submit', handleOrderSubmission);

    // Success Modal Close
    continueShoppingBtn.addEventListener('click', closeSuccessModal);
    successModalBackdrop.addEventListener('click', closeSuccessModal);

    // Quick View Modal Close
    productModalClose.addEventListener('click', closeQuickView);
    productModalBackdrop.addEventListener('click', closeQuickView);

    // Policy Links & Modal Close
    policyLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const type = link.getAttribute('data-policy');
        openPolicy(type);
      });
    });
    policyModalClose.addEventListener('click', closePolicy);
    policyModalBackdrop.addEventListener('click', closePolicy);

    // Mobile Footer Accordion Toggle
    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others for clean mobile ergonomics
        accordionItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            other.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
          }
        });
        item.classList.toggle('active', !isActive);
        header.setAttribute('aria-expanded', !isActive ? 'true' : 'false');
      });
    });

    // Newsletter Submission
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      newsletterSuccess.classList.add('visible');
      showToast('Thank you for subscribing to RUBE Private Dispatch');
      newsletterForm.reset();
      setTimeout(() => newsletterSuccess.classList.remove('visible'), 5000);
    });

    mobileNewsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Subscribed to RUBE Dispatch');
      mobileNewsletterForm.reset();
    });

    // Global Keyboard Shortcuts (Esc to close modals, '/' to search)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (searchModal.classList.contains('active')) closeSearchModal();
        if (cartDrawer.classList.contains('active')) closeCartDrawer();
        if (mobileDrawer.classList.contains('active')) closeMobileDrawer();
        if (checkoutModal.classList.contains('active')) closeCheckout();
        if (successModal.classList.contains('active')) closeSuccessModal();
        if (productModal.classList.contains('active')) closeQuickView();
        if (policyModal.classList.contains('active')) closePolicy();
      }

      // Quick search '/' shortcut when not typing in an input
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        openSearchModal();
      }
    });

    // Phone input auto-formatter for Pakistan (prevents alphabetic chars)
    const phoneInput = document.getElementById('customerPhone');
    phoneInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 11);
    });
  }

  // ------------------------------------------------------------------------
  // 15. INITIALIZATION
  // ------------------------------------------------------------------------
  function init() {
    renderProducts('all');
    setupProductSlider();
    loadCart();
    setupEventListeners();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
