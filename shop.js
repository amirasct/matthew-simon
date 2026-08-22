// Matthew Simon Shop - Displays products from products.js with clickable cards

let filteredProducts = [];
let currentView = 'available'; // 'available' or 'archive'

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeShop, 100);
});

async function initializeShop() {
    // Wait for cloud data
    if (window.loadCloudData) {
        try {
            await window.loadCloudData();
        } catch (e) {
            console.warn('Cloud load failed, using cached data');
        }
    }
    
    if (!window.MATTHEW_PRODUCTS || window.MATTHEW_PRODUCTS.length === 0) {
        console.error('❌ Products database not loaded');
        return;
    }
    
    // Check URL params for initial view (e.g. ?view=archive from homepage tile)
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');
    if (viewParam === 'archive') {
        currentView = 'archive';
        // Update tabs to reflect this
        document.querySelectorAll('.shop-tab').forEach(t => {
            t.classList.toggle('active', t.dataset.view === 'archive');
        });
    }
    
    // Check for category param (e.g. ?category=Möbel from homepage tile)
    const categoryParam = params.get('category');
    if (categoryParam) {
        const catFilter = document.getElementById('categoryFilter');
        if (catFilter) catFilter.value = categoryParam;
    }
    
    updateShopCounts();
    applyFilters();
    
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
    if (sortFilter) sortFilter.addEventListener('change', applyFilters);
    
    // Re-render when cloud data updates
    window.addEventListener('productsUpdated', () => {
        updateShopCounts();
        applyFilters();
    });
}

function switchShopView(view) {
    currentView = view;
    document.querySelectorAll('.shop-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.view === view);
    });
    document.querySelector('.shop-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    applyFilters();
}

function updateShopCounts() {
    const available = window.getPublicProducts ? window.getPublicProducts() : [];
    const archive = window.getArchiveProducts ? window.getArchiveProducts() : [];
    
    const availableEl = document.getElementById('availableCount');
    const archiveEl = document.getElementById('archiveCount');
    if (availableEl) availableEl.textContent = available.length;
    if (archiveEl) archiveEl.textContent = archive.length;
}

function getTranslated(products) {
    if (window.getTranslatedProduct) {
        return products.map(p => window.getTranslatedProduct(p.id) || p);
    }
    return products;
}

function applyFilters() {
    const category = document.getElementById('categoryFilter')?.value || '';
    const sort = document.getElementById('sortFilter')?.value || 'featured';
    
    // Get base products based on current view (available or archive)
    let base;
    if (currentView === 'archive') {
        base = window.getArchiveProducts ? window.getArchiveProducts() : [];
    } else {
        base = window.getPublicProducts ? window.getPublicProducts() : (window.MATTHEW_PRODUCTS || []);
    }
    
    if (category) {
        base = base.filter(p => p.category === category);
    }
    
    filteredProducts = getTranslated(base);
    
    switch(sort) {
        case 'price-high':
            filteredProducts.sort((a, b) => extractPrice(b.price) - extractPrice(a.price));
            break;
        case 'price-low':
            filteredProducts.sort((a, b) => extractPrice(a.price) - extractPrice(b.price));
            break;
        default:
            if (currentView === 'archive') {
                // Sort archive by sold date (newest first)
                filteredProducts.sort((a, b) => {
                    if (!a.soldDate) return 1;
                    if (!b.soldDate) return -1;
                    return new Date(b.soldDate) - new Date(a.soldDate);
                });
            } else {
                filteredProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
            }
    }
    
    renderProducts();
}

// Re-render when language changes (via custom event)
window.addEventListener('languageChanged', function() {
    applyFilters();
});

function extractPrice(str) {
    if (!str || str === 'Preis auf Anfrage') return 0;
    const match = str.replace(/[',]/g, '').match(/\d+/);
    return match ? parseInt(match[0]) : 0;
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const emptyState = document.getElementById('emptyState');
    
    if (!grid) return;
    
    if (filteredProducts.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }
    
    if (emptyState) emptyState.style.display = 'none';
    
    grid.innerHTML = filteredProducts.map(product => renderProductCard(product)).join('');
}

function renderProductCard(product) {
    // Escape name for JS strings
    const escName = product.name.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    
    // Image handling with placeholder fallback
    const imageHtml = product.images && product.images.length > 0
        ? `<img src="${getImageUrl(product.images[0])}" alt="${escName}" class="product-image" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'no-image-placeholder\\'>📷<br><span>Foto folgt</span></div>';">`
        : `<div class="no-image-placeholder">📷<br><span>Foto folgt</span></div>`;
    
    // Badges HTML
    const badgeHtml = product.badges && product.badges.length > 0
        ? `<div class="product-badges">${product.badges.map(b => renderBadge(b)).join('')}</div>`
        : '';
    
    // Photo count indicator
    const photoCount = product.images && product.images.length > 1
        ? `<div class="photo-count">📷 ${product.images.length}</div>`
        : '';
    
    return `
        <div class="product-card" onclick="goToProduct(${product.id})" role="link" tabindex="0" onkeypress="if(event.key==='Enter')goToProduct(${product.id})">
            <div class="product-image-container">
                ${imageHtml}
                ${photoCount}
                ${badgeHtml}
            </div>
            
            <div class="product-info">
                <div class="product-category-label">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-hook">${product.shortHook}</p>
                <div class="product-price">${product.price}</div>
            </div>
            
            <div class="product-actions" onclick="event.stopPropagation();">
                <button class="btn-inquire" onclick="inquireAbout('${escName}')">
                    <span>✉</span> Anfrage
                </button>
                <button class="btn-details" onclick="goToProduct(${product.id})">
                    Details →
                </button>
            </div>
        </div>
    `;
}

function renderBadge(type) {
    const badges = {
        'authenticated': { label: '✓ Signiert', class: 'badge-authenticated' },
        'rare': { label: '★ Selten', class: 'badge-rare' },
        'documented': { label: '📖 Dokumentiert', class: 'badge-documented' },
        'museum': { label: '🏛 Museumsqualität', class: 'badge-museum' },
        'provenance': { label: '📜 Provenienz', class: 'badge-provenance' }
    };
    const b = badges[type];
    return b ? `<span class="product-badge ${b.class}">${b.label}</span>` : '';
}

function goToProduct(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

function inquireAbout(productName) {
    const lang = localStorage.getItem('language') || 'de';
    const subject = encodeURIComponent(`Anfrage: ${productName}`);
    
    let message = '';
    if (lang === 'de') {
        message = encodeURIComponent(`Guten Tag Herr Simon,\n\nIch interessiere mich für "${productName}". Könnten Sie mir bitte weitere Details, hochauflösende Fotos und Versandinformationen zusenden?\n\nMit freundlichen Grüßen`);
    } else if (lang === 'fr') {
        message = encodeURIComponent(`Bonjour Monsieur Simon,\n\nJe suis intéressé(e) par "${productName}". Pourriez-vous me faire parvenir plus de détails, des photos haute résolution et les informations d'expédition?\n\nCordialement`);
    } else if (lang === 'it') {
        message = encodeURIComponent(`Buongiorno Signor Simon,\n\nSono interessato/a a "${productName}". Potrebbe inviarmi maggiori dettagli, foto ad alta risoluzione e informazioni sulla spedizione?\n\nCordiali saluti`);
    } else {
        message = encodeURIComponent(`Dear Mr. Simon,\n\nI'm interested in "${productName}". Could you please send me more details, high-resolution photos, and shipping information?\n\nBest regards`);
    }
    
    window.location.href = `contact.html?subject=${subject}&message=${message}`;
}
