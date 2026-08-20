// Shop page - displays products from products.js database
// Makes entire cards clickable and syncs with admin panel

let filteredProducts = [];

document.addEventListener('DOMContentLoaded', function() {
    // Wait for products to load from products.js
    setTimeout(initializeShop, 100);
});

function initializeShop() {
    if (!window.MATTHEW_PRODUCTS || window.MATTHEW_PRODUCTS.length === 0) {
        console.error('❌ Products not loaded');
        return;
    }
    
    console.log(`✅ Shop initialized with ${window.MATTHEW_PRODUCTS.length} products`);
    
    // Load initial products
    filteredProducts = [...window.MATTHEW_PRODUCTS];
    renderProducts();
    
    // Setup filter listeners
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
    if (sortFilter) {
        sortFilter.addEventListener('change', applyFilters);
    }
}

function applyFilters() {
    const category = document.getElementById('categoryFilter')?.value || '';
    const sort = document.getElementById('sortFilter')?.value || 'featured';
    
    // Filter by category
    if (category) {
        filteredProducts = window.MATTHEW_PRODUCTS.filter(p => p.category === category);
    } else {
        filteredProducts = [...window.MATTHEW_PRODUCTS];
    }
    
    // Sort
    switch(sort) {
        case 'price-high':
            filteredProducts.sort((a, b) => extractPrice(b.price) - extractPrice(a.price));
            break;
        case 'price-low':
            filteredProducts.sort((a, b) => extractPrice(a.price) - extractPrice(b.price));
            break;
        case 'featured':
        default:
            filteredProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    
    renderProducts();
}

function extractPrice(priceStr) {
    if (!priceStr) return 0;
    const match = priceStr.match(/\d+/);
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
    
    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-product-id="${product.id}" onclick="goToProduct(${product.id})" style="cursor: pointer;">
            <div class="product-image-container">
                ${product.images && product.images.length > 0 
                    ? `<img src="images/${product.images[0]}" alt="${product.name}" class="product-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22%3ENo Image%3C/text%3E%3C/svg%3E';">`
                    : `<div class="product-image placeholder" style="background: #f0f0f0; display: flex; align-items: center; justify-content: center; color: #999;">No Image</div>`
                }
            </div>
            
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category" style="font-size: 0.85em; color: #999; margin: 4px 0;">${product.category}</p>
                <p class="product-description">${product.shortDescription}</p>
                <p class="product-price" style="font-weight: 600; margin: 8px 0; color: #333;">${product.price}</p>
            </div>
            
            <div class="product-actions">
                <button class="btn btn-secondary" onclick="event.stopPropagation(); inquireAbout('${product.name.replace(/'/g, "\\'")}')">Inquire</button>
                <button class="btn btn-primary" onclick="event.stopPropagation(); goToProduct(${product.id})">More Details</button>
            </div>
        </div>
    `).join('');
}

function goToProduct(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

function inquireAbout(productName) {
    // Get current language
    const lang = localStorage.getItem('language') || 'en';
    
    // Prepare subject based on product name
    const subject = encodeURIComponent(`Inquiry about: ${productName}`);
    
    // Message in appropriate language
    let message = '';
    if (lang === 'de') {
        message = encodeURIComponent(`Guten Tag,\n\nIch bin interessiert in ${productName}. Könnten Sie mir mehr Details geben?\n\nDanke,`);
    } else if (lang === 'fr') {
        message = encodeURIComponent(`Bonjour,\n\nJe suis intéressé par ${productName}. Pourriez-vous me fournir plus de détails?\n\nMerci,`);
    } else if (lang === 'it') {
        message = encodeURIComponent(`Buongiorno,\n\nSono interessato a ${productName}. Potrebbe fornirmi più dettagli?\n\nGrazie,`);
    } else {
        message = encodeURIComponent(`Hello,\n\nI'm interested in ${productName}. Could you please provide more details?\n\nThank you,`);
    }
    
    window.location.href = `contact.html?subject=${subject}&message=${message}`;
}
