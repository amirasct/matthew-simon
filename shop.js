// Matthew Simon Shop - Displays products from products.js with clickable cards

let filteredProducts = [];

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeShop, 100);
});

function initializeShop() {
    if (!window.MATTHEW_PRODUCTS || window.MATTHEW_PRODUCTS.length === 0) {
        console.error('❌ Products database not loaded');
        return;
    }
    
    filteredProducts = [...window.MATTHEW_PRODUCTS];
    renderProducts();
    
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
    if (sortFilter) sortFilter.addEventListener('change', applyFilters);
}

function applyFilters() {
    const category = document.getElementById('categoryFilter')?.value || '';
    const sort = document.getElementById('sortFilter')?.value || 'featured';
    
    filteredProducts = category 
        ? window.MATTHEW_PRODUCTS.filter(p => p.category === category)
        : [...window.MATTHEW_PRODUCTS];
    
    switch(sort) {
        case 'price-high':
            filteredProducts.sort((a, b) => extractPrice(b.price) - extractPrice(a.price));
            break;
        case 'price-low':
            filteredProducts.sort((a, b) => extractPrice(a.price) - extractPrice(b.price));
            break;
        default:
            filteredProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    
    renderProducts();
}

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
        ? `<img src="images/${product.images[0]}" alt="${escName}" class="product-image" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'no-image-placeholder\\'>📷<br><span>Foto folgt</span></div>';">`
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
