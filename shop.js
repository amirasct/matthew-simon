// Product database - Using placeholder images that will load reliably
const MATTHEW_PRODUCTS = [
    {
        id: 1,
        name: "Fornasetti Umbrella Stand",
        designer: "Piero Fornasetti",
        era: "1950s",
        condition: "Excellent",
        price: 3800,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop",
        story: "Rare hand-painted geometric masterpiece. Fornasetti's iconic designs are museum-quality pieces rarely available in this condition. Functional art object.",
        badges: ["⭐ Authenticated", "🏆 Rare"]
    },
    {
        id: 2,
        name: "Fornasetti Chair",
        designer: "Piero Fornasetti",
        era: "1950s",
        condition: "Excellent",
        price: 3200,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=600&fit=crop",
        story: "Classic Fornasetti design with hand-painted details. A legendary designer's work sought by serious collectors worldwide. Investment-grade piece.",
        badges: ["⭐ Authenticated", "🏆 Museum Quality"]
    },
    {
        id: 3,
        name: "Schinkel Garden Chair",
        designer: "Karl Friedrich Schinkel",
        era: "1800s",
        condition: "Good",
        price: 1500,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=600&fit=crop",
        story: "Historic 19th-century design from Prussian architect Schinkel. Period furniture with documented provenance. Rare to find authentic examples.",
        badges: ["⭐ Authenticated", "🌍 Historical"]
    },
    {
        id: 4,
        name: "Jacob Müller Ronco Chair",
        designer: "Jacob Müller",
        era: "1950s",
        condition: "Excellent",
        price: 950,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop",
        story: "Mid-century Swiss design classic. Müller is underrated master of modernist furniture. Sought by collectors who know design history.",
        badges: ["⭐ Authenticated", "🔍 Rare"]
    },
    {
        id: 5,
        name: "Hans Gugelot Modular Chair",
        designer: "Hans Gugelot",
        era: "1960s",
        condition: "Excellent",
        price: 1400,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=600&fit=crop",
        story: "Bauhaus-influenced design by legendary industrial designer. Model 1363 is iconic modernist form. Museum-quality condition.",
        badges: ["⭐ Authenticated", "🏆 Museum Quality"]
    },
    {
        id: 6,
        name: "Thonet Bistro Table",
        designer: "Michael Thonet",
        era: "1900s",
        condition: "Very Good",
        price: 800,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1565182999061-f32c95fdd4cd?w=500&h=600&fit=crop",
        story: "Original Thonet bentwood design. Iconic café furniture from the master of steam-bent wood. Authentic period piece.",
        badges: ["⭐ Authenticated"]
    },
    {
        id: 7,
        name: "Panton Chair",
        designer: "Verner Panton",
        era: "1960s",
        condition: "Excellent",
        price: 1200,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=600&fit=crop",
        story: "The iconic chair of the 1960s. Panton's masterpiece design. Investment-grade mid-century classic sought worldwide.",
        badges: ["⭐ Authenticated", "🏆 Collector Grade"]
    },
    {
        id: 8,
        name: "Max Ingrand Umbrella Stand",
        designer: "Max Ingrand",
        era: "1950s",
        condition: "Excellent",
        price: 1500,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&h=600&fit=crop",
        story: "Elegant French designer Ingrand's signature brass and glass form. Rare authenticated example. Museum-quality condition.",
        badges: ["⭐ Authenticated", "🔍 Rare"]
    },
    {
        id: 9,
        name: "Rare Vittorio Zecchin Murano Vase",
        designer: "Vittorio Zecchin",
        era: "1920s",
        condition: "Excellent",
        price: 2400,
        category: "Glas",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "One of Venice's greatest glassmakers. Hand-painted Murano masterpiece. Museum-quality condition. Rare authenticated example.",
        badges: ["⭐ Authenticated", "🏆 Museum Quality", "🌍 Provenance"]
    },
    {
        id: 10,
        name: "Barovier Artistic Vase",
        designer: "Ercole Barovier",
        era: "1950s",
        condition: "Excellent",
        price: 1800,
        category: "Glas",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Legendary Venetian glass artist. Artistic Barovier production. Hand-crafted Murano excellence. Collector-grade piece.",
        badges: ["⭐ Authenticated", "🔍 Rare"]
    },
];

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const emptyState = document.getElementById('emptyState');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const searchInput = document.getElementById('searchInput');

// Load products from localStorage if available, otherwise use hardcoded products
let products = (function() {
    const stored = localStorage.getItem('matthew_simon_products');
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch(e) {
            console.log('Could not parse localStorage products, using defaults');
            return MATTHEW_PRODUCTS;
        }
    }
    return MATTHEW_PRODUCTS;
})();

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    setupEventListeners();
});

function setupEventListeners() {
    categoryFilter.addEventListener('change', filterAndSort);
    sortFilter.addEventListener('change', filterAndSort);
    searchInput.addEventListener('input', filterAndSort);
}

function filterAndSort() {
    const category = categoryFilter.value;
    const searchTerm = searchInput.value.toLowerCase();
    const sortBy = sortFilter.value;
    
    // Filter
    let filtered = products.filter(product => {
        const matchesCategory = !category || product.category === category;
        const matchesSearch = !searchTerm || 
            product.name.toLowerCase().includes(searchTerm) ||
            product.designer.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });
    
    // Sort
    filtered = sortProducts(filtered, sortBy);
    
    // Render
    renderProducts(filtered);
}

function sortProducts(arr, sortBy) {
    const sorted = [...arr];
    
    switch(sortBy) {
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'era-new':
            const eraOrder = {'1950s': 0, '1960s': 1, '1940s': -1, '1930s': -2, '1920s': -3, '1900s': -4, '1800s': -5};
            sorted.sort((a, b) => {
                const aVal = eraOrder[a.era] || 0;
                const bVal = eraOrder[b.era] || 0;
                return bVal - aVal;
            });
            break;
        case 'featured':
        default:
            // Keep original order
            break;
    }
    
    return sorted;
}

function renderProducts(arr) {
    productsGrid.innerHTML = '';
    
    if (arr.length === 0) {
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    
    arr.forEach(product => {
        const card = createProductCard(product);
        productsGrid.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const badgesHTML = product.badges.map(badge => 
        `<span class="product-badge">${badge}</span>`
    ).join('');
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-details">${product.designer} | ${product.era}</p>
            <p class="product-story">${product.story}</p>
            <div class="product-badges">
                ${badgesHTML}
            </div>
            <p class="product-price">CHF ${product.price.toLocaleString()}</p>
            <a href="contact.html?product=${encodeURIComponent(product.name)}" class="btn btn-primary">Inquire</a>
        </div>
    `;
    
    return card;
}
