// Matthew Simon Shop - Displays products from products.js with clickable cards

let filteredProducts = [];
let currentView = 'available'; // 'available' or 'archive'
let searchQuery = '';

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
    
    buildCategorySelect();
    buildCategoryPills();
    buildArtistChips();

    const restored = restoreShopState();

    // URL params win over restored state (e.g. arriving from a homepage tile)
    const params2 = new URLSearchParams(window.location.search);
    if (params2.get('view') === 'archive') { currentView = 'archive'; }
    if (params2.get('category')) {
        const cf = document.getElementById('categoryFilter');
        if (cf) cf.value = params2.get('category');
        syncCategoryPills();
    }
    if (params2.get('q')) {
        searchQuery = params2.get('q');
        const box = document.getElementById('shopSearch');
        if (box) box.value = searchQuery;
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
    buildCategoryPills();
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
    const sort = document.getElementById('sortFilter')?.value || 'recent';

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

    // Free-text search across every meaningful field
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const terms = q.split(/\s+/).filter(Boolean);
        filteredProducts = filteredProducts.filter(p => {
            const haystack = [
                p.name, p.shortHook, p.description, p.category,
                p.artist, p.era, p.price
            ].filter(Boolean).join(' ').toLowerCase();
            return terms.every(t => haystack.includes(t));
        });
    }

    switch (sort) {
        case 'price-high':
            filteredProducts.sort((a, b) => extractPrice(b.price) - extractPrice(a.price));
            break;
        case 'price-low':
            filteredProducts.sort((a, b) => extractPrice(a.price) - extractPrice(b.price));
            break;
        case 'era-old':
            // Antique-trade convention: oldest first. Undated pieces sink to the bottom.
            filteredProducts.sort((a, b) => {
                const ya = a.year || 9999, yb = b.year || 9999;
                return ya - yb;
            });
            break;
        case 'recent':
            filteredProducts.sort((a, b) => (b.id || 0) - (a.id || 0));
            break;
        default:
            if (currentView === 'archive') {
                filteredProducts.sort((a, b) => {
                    if (!a.soldDate) return 1;
                    if (!b.soldDate) return -1;
                    return new Date(b.soldDate) - new Date(a.soldDate);
                });
            } else {
                filteredProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
            }
    }

    updateResultCount();
    saveShopState();
    renderProducts();
}

function updateResultCount() {
    const el = document.getElementById('resultCount');
    if (!el) return;
    const n = filteredProducts.length;
    el.textContent = n === 1 ? '1 Stück' : n + ' Stücke';
}

// ---- Remember where the visitor was, so returning from a product restores it ----
function saveShopState() {
    try {
        sessionStorage.setItem('shopState', JSON.stringify({
            view: currentView,
            category: document.getElementById('categoryFilter')?.value || '',
            sort: document.getElementById('sortFilter')?.value || 'recent',
            search: searchQuery,
            scrollY: window.scrollY
        }));
    } catch (e) {}
}

function restoreShopState() {
    try {
        const raw = sessionStorage.getItem('shopState');
        if (!raw) return false;
        const s = JSON.parse(raw);
        currentView = s.view || 'available';
        document.querySelectorAll('.shop-tab').forEach(t => {
            t.classList.toggle('active', t.dataset.view === currentView);
        });
        const cat = document.getElementById('categoryFilter');
        const srt = document.getElementById('sortFilter');
        if (cat && s.category) cat.value = s.category;
        if (srt && s.sort) srt.value = s.sort;
        searchQuery = s.search || '';
        const box = document.getElementById('shopSearch');
        if (box) box.value = searchQuery;
        syncCategoryPills();
        // Restore scroll after the grid has painted
        if (s.scrollY) {
            setTimeout(() => window.scrollTo({ top: s.scrollY, behavior: 'auto' }), 120);
        }
        return true;
    } catch (e) { return false; }
}

// Keep scroll position current as they browse
window.addEventListener('scroll', function () {
    clearTimeout(window.__shopScrollT);
    window.__shopScrollT = setTimeout(saveShopState, 250);
});

// ---- Search ----
function onSearchInput(value) {
    searchQuery = String(value || '').trim();
    const clearBtn = document.getElementById('searchClear');
    if (clearBtn) clearBtn.style.display = searchQuery ? 'block' : 'none';
    applyFilters();
}

function clearSearch() {
    searchQuery = '';
    const box = document.getElementById('shopSearch');
    if (box) { box.value = ''; box.focus(); }
    const clearBtn = document.getElementById('searchClear');
    if (clearBtn) clearBtn.style.display = 'none';
    applyFilters();
}

function searchFor(term) {
    searchQuery = term;
    const box = document.getElementById('shopSearch');
    if (box) box.value = term;
    const clearBtn = document.getElementById('searchClear');
    if (clearBtn) clearBtn.style.display = 'block';
    applyFilters();
    document.querySelector('.shop-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Build the artist shortcut chips from whoever actually has the most pieces
function buildArtistChips() {
    const wrap = document.getElementById('artistChips');
    if (!wrap) return;
    const all = window.getPublicProducts ? window.getPublicProducts() : [];
    const counts = {};
    all.forEach(p => {
        if (p.artist && p.artist.length > 2) {
            counts[p.artist] = (counts[p.artist] || 0) + 1;
        }
    });
    const top = Object.entries(counts)
        .filter(([, n]) => n >= 2)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6);
    if (top.length === 0) { wrap.innerHTML = ''; return; }
    wrap.innerHTML = top.map(([name, n]) =>
        `<button type="button" class="artist-chip" onclick="searchFor('${name.replace(/'/g, "\\'")}')">${name} <span>${n}</span></button>`
    ).join('');
}

// ---- Category pills (desktop) kept in sync with the select (mobile) ----
function selectCategory(cat) {
    const sel = document.getElementById('categoryFilter');
    if (sel) sel.value = cat;
    syncCategoryPills();
    applyFilters();
}

function syncCategoryPills() {
    const current = document.getElementById('categoryFilter')?.value || '';
    document.querySelectorAll('.cat-pill').forEach(p => {
        p.classList.toggle('active', (p.dataset.cat || '') === current);
    });
}

function buildCategoryPills() {
    const wrap = document.getElementById('categoryPills');
    if (!wrap) return;
    const source = currentView === 'archive'
        ? (window.getArchiveProducts ? window.getArchiveProducts() : [])
        : (window.getPublicProducts ? window.getPublicProducts() : []);
    const cats = ['Möbel','Glas','Leuchten','Objekte','Gemälde/Grafik','Accessoires','Keramik','Fundstücke'];
    const counts = {};
    source.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });
    const allLabel = (window.t ? window.t('shop.filter.all') : 'Alle');
    let html = `<button type="button" class="cat-pill" data-cat="" onclick="selectCategory('')">${allLabel} <span>${source.length}</span></button>`;
    cats.forEach(cat => {
        const n = counts[cat] || 0;
        if (n === 0) return;   // hide empty categories rather than showing dead ends
        const label = window.translateCategory ? window.translateCategory(cat) : cat;
        html += `<button type="button" class="cat-pill" data-cat="${cat}" onclick="selectCategory('${cat.replace(/'/g,"\\'")}')">${label} <span>${n}</span></button>`;
    });
    wrap.innerHTML = html;
    syncCategoryPills();
}


// Rebuild the mobile category <select> so its options follow the active language
function buildCategorySelect() {
    const sel = document.getElementById('categoryFilter');
    if (!sel) return;
    const current = sel.value;
    const cats = ['Möbel','Glas','Leuchten','Objekte','Gemälde/Grafik','Accessoires','Keramik','Fundstücke'];
    const allLabel = window.t ? window.t('shop.filter.all') : 'Alle Kategorien';
    let html = `<option value="">${allLabel}</option>`;
    cats.forEach(cat => {
        const label = window.translateCategory ? window.translateCategory(cat) : cat;
        html += `<option value="${cat}">${label}</option>`;
    });
    sel.innerHTML = html;
    sel.value = current;
}

// ---- Back to top ----
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function () {
    const btn = document.getElementById('backToTop');
    if (btn) btn.classList.toggle('visible', window.scrollY > 600);
});

// Re-render when language changes (via custom event)
window.addEventListener('languageChanged', function() {
    buildCategorySelect();
    buildCategoryPills();
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
        ? `<img src="${getImageUrl(product.images[0])}" alt="${(window.buildAltText ? window.buildAltText(product) : product.name).replace(/"/g,'&quot;')}" class="product-image" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'no-image-placeholder\\'>📷<br><span>Foto folgt</span></div>';">`
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
                <div class="product-category-label">${window.translateCategory ? window.translateCategory(product.category) : product.category}${product.era ? ' · ' + (window.translateEra ? window.translateEra(product.era) : product.era) : ''}</div>
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
