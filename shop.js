// Product database
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
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
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
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
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
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 4,
        name: "Jacob Müller Ronco Chair (Set of 2)",
        designer: "Jacob Müller",
        era: "1950s",
        condition: "Excellent",
        price: 950,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop",
        story: "Mid-century Swiss design classic. Müller is underrated master of modernist furniture. Sought by collectors who know design history.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
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
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 6,
        name: "Thonet Bistro Table",
        designer: "Michael Thonet",
        era: "1900s",
        condition: "Very Good",
        price: 800,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop",
        story: "Original Thonet bentwood design. Iconic café furniture from the master of steam-bent wood. Authentic period piece.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 7,
        name: "Groult Flower Stand",
        designer: "André Groult",
        era: "1940s",
        condition: "Excellent",
        price: 1100,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop",
        story: "Art Deco designer Groult's sculptural stand. Rare signed piece. Demonstrates French modernist craftsmanship of pre-war era.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 8,
        name: "Anthroposophical Frame (Set of 2)",
        designer: "Rudolf Steiner principles",
        era: "1950s",
        condition: "Good",
        price: 950,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop",
        story: "Hand-crafted following Steiner philosophy. Increasingly rare specialist pieces. Collectors value the craft and intentional design.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 9,
        name: "Anthroposophical Corner Cabinet",
        designer: "Rudolf Steiner principles",
        era: "1950s",
        condition: "Very Good",
        price: 1800,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop",
        story: "Unique architectural cabinet built to Steiner principles. Rare artisan-crafted piece. Specialist collectors seek these authentic examples.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 10,
        name: "Anthroposophical Cabinet",
        designer: "Rudolf Steiner principles",
        era: "1940s",
        condition: "Excellent",
        price: 2200,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop",
        story: "Hand-created cabinetry reflecting Steiner design philosophy. Museum-quality anthroposophical furniture. Increasingly difficult to find.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 11,
        name: "Verner Panton Chair",
        designer: "Verner Panton",
        era: "1960s",
        condition: "Excellent",
        price: 1200,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=600&fit=crop",
        story: "The iconic chair of the 1960s. Panton's masterpiece design. Investment-grade mid-century classic sought worldwide.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 12,
        name: "Max Ingrand Umbrella Stand",
        designer: "Max Ingrand",
        era: "1950s",
        condition: "Excellent",
        price: 1500,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop",
        story: "Elegant French designer Ingrand's signature brass and glass form. Rare authenticated example. Museum-quality condition.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 13,
        name: "BACA Tile Table",
        designer: "Copenhagen Tileworks",
        era: "1960s",
        condition: "Excellent",
        price: 2800,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop",
        story: "Stunning ceramic tile top with minimalist design. Hand-crafted Danish craftsmanship. 1960s design icon.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 14,
        name: "Louis XV Console Pair",
        designer: "French Rococo",
        era: "1800s",
        condition: "Good",
        price: 2400,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=600&fit=crop",
        story: "Authentic period console furniture. Rococo era design. Documented French provenance. Statement pieces for collectors.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 15,
        name: "Set of 6 Danhauser Chairs",
        designer: "Joseph Danhauser",
        era: "1860s",
        condition: "Good",
        price: 1600,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop",
        story: "Historical 19th-century Viennese furniture by renowned maker. Period seating set. Rare to find complete matched sets.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 16,
        name: "Bauhaus MR515 Table",
        designer: "Mies van der Rohe",
        era: "1920s",
        condition: "Excellent",
        price: 2100,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=600&fit=crop",
        story: "Bauhaus design icon by modernist master. Iconic tubular steel form. Museum-quality investment piece.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 17,
        name: "Jallot Vitrine",
        designer: "Léon Jallot",
        era: "1920s",
        condition: "Excellent",
        price: 3200,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop",
        story: "Art Deco master Jallot's display cabinet. Exquisite French design. Serious collectors seek authenticated Jallot pieces.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 18,
        name: "Caruelle Table Embru",
        designer: "René Caruelle",
        era: "1950s",
        condition: "Excellent",
        price: 2200,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=600&fit=crop",
        story: "Swiss modernist design by Caruelle. Embru production. Mid-century classics increasingly rare on market.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 19,
        name: "Caruelle Table Paris",
        designer: "René Caruelle",
        era: "1950s",
        condition: "Excellent",
        price: 2400,
        category: "Möbel",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop",
        story: "Paris-based production of Caruelle design. Sophisticated French-Swiss modernism. Investment-grade mid-century furniture.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 20,
        name: "Rare Vittorio Zecchin Murano Vase",
        designer: "Vittorio Zecchin",
        era: "1920s",
        condition: "Excellent",
        price: 2400,
        category: "Glas",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "One of Venice's greatest glassmakers. Hand-painted Murano masterpiece. Museum-quality condition. Rare authenticated example.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 21,
        name: "Barovier Artistic Vase",
        designer: "Ercole Barovier",
        era: "1950s",
        condition: "Excellent",
        price: 1800,
        category: "Glas",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Legendary Venetian glass artist. Artistic Barovier production. Hand-crafted Murano excellence. Collector-grade piece.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 22,
        name: "Venini Glass Bowl",
        designer: "Paolo Venini",
        era: "1960s",
        condition: "Excellent",
        price: 1500,
        category: "Glas",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Modernist Murano designer. Iconic form and color. Venini pieces are sought by serious collectors. Design innovation in glass.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 23,
        name: "Seguso Murano Vase",
        designer: "Archimede Seguso",
        era: "1950s",
        condition: "Very Good",
        price: 1400,
        category: "Glas",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Master Murano glassmaker. Hand-blown authentic Murano. Period perfect example of post-war Venetian technique.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 24,
        name: "Costantini Sculptural Glass",
        designer: "Maurizio Costantini",
        era: "1970s",
        condition: "Excellent",
        price: 1200,
        category: "Glas",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Contemporary Murano artist. Sculptural glass form. Modern master of hand-blown technique.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 25,
        name: "Archimede Seguso Technique Vessel",
        designer: "Archimede Seguso",
        era: "1950s",
        condition: "Excellent",
        price: 1600,
        category: "Glas",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Technical mastery of Murano tradition. Hand-blown with innovative color technique. Museum-quality contemporary glass.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 26,
        name: "Anthroposophical Color Glass",
        designer: "Rudolf Steiner principles",
        era: "1940s",
        condition: "Good",
        price: 800,
        category: "Glas",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Specialized glass crafted following Steiner color philosophy. Rare artisan-made piece. Collector of specialized craft.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 27,
        name: "Art Deco Pendant Light",
        designer: "French Design",
        era: "1930s",
        condition: "Very Good",
        price: 950,
        category: "Leuchten",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Art Deco era chandelier. Hand-painted glass details. Period lighting fixture with authentic patina.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 28,
        name: "Mid-Century Brass Chandelier",
        designer: "European Design",
        era: "1950s",
        condition: "Excellent",
        price: 1600,
        category: "Leuchten",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Brass construction with glass elements. Mid-century modernist form. Functional sculpture for interior design.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 29,
        name: "Murano Glass Pendant",
        designer: "Venetian Glass",
        era: "1960s",
        condition: "Excellent",
        price: 1200,
        category: "Leuchten",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Hand-blown Murano glass pendant. Color and form define mid-century modern lighting. Artistic glass lighting.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 30,
        name: "Sculptural Brass Table Lamp",
        designer: "Mid-Century",
        era: "1950s",
        condition: "Excellent",
        price: 800,
        category: "Leuchten",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Brass base with modernist form. 1950s design classic. Minimalist aesthetic lighting piece.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 31,
        name: "Chrome Pendant Fixture",
        designer: "Modernist",
        era: "1960s",
        condition: "Very Good",
        price: 700,
        category: "Leuchten",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Geometric chrome design. Clean modernist form. Period-correct mid-century lighting solution.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 32,
        name: "Ceramic Table Lamp",
        designer: "Studio Pottery",
        era: "1940s",
        condition: "Good",
        price: 600,
        category: "Leuchten",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Hand-thrown ceramic base. Studio pottery craftsmanship. Unique artisan piece with functional purpose.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 33,
        name: "Wall-Mounted Brass Light",
        designer: "European Design",
        era: "1950s",
        condition: "Excellent",
        price: 850,
        category: "Leuchten",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Minimalist wall sconce. Brass construction. Mid-century functional design for period interiors.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 34,
        name: "Hanging Glass Fixture",
        designer: "Murano Inspired",
        era: "1960s",
        condition: "Excellent",
        price: 950,
        category: "Leuchten",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Glass suspended lighting element. Architectural modernism. Geometric form from design era.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 35,
        name: "Fornasetti Decorative Plate",
        designer: "Piero Fornasetti",
        era: "1950s",
        condition: "Excellent",
        price: 450,
        category: "Objekte",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop",
        story: "Decorative art object by master designer. Hand-painted iconic pattern. Collectible Fornasetti tableware.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 36,
        name: "Picasso Ceramic Piece",
        designer: "Pablo Picasso School",
        era: "1950s",
        condition: "Good",
        price: 1100,
        category: "Objekte",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Mid-century ceramic art. Modernist form. Artistic object for collectors of 20th-century art ceramics.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 37,
        name: "Abstract Sculptural Form",
        designer: "Contemporary Craft",
        era: "1960s",
        condition: "Excellent",
        price: 750,
        category: "Objekte",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop",
        story: "Hand-crafted sculptural object. Modernist abstraction. Artistic form for interior collectors.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 38,
        name: "Brass Decorative Bowl",
        designer: "Modernist Design",
        era: "1950s",
        condition: "Very Good",
        price: 550,
        category: "Objekte",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Sculptural metalwork object. Minimalist form. Functional art for design-conscious collectors.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 39,
        name: "Ceramic Vessel",
        designer: "Studio Art Pottery",
        era: "1940s",
        condition: "Good",
        price: 480,
        category: "Objekte",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop",
        story: "Hand-thrown ceramic form. Studio pottery tradition. Artisan-crafted collectible object.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 40,
        name: "Glass Sculpture",
        designer: "Modernist Artist",
        era: "1960s",
        condition: "Excellent",
        price: 850,
        category: "Objekte",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Hand-crafted glass form. Artistic modernist vision. Sculptural object for serious collectors.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 41,
        name: "Wood Carved Figure",
        designer: "European Artisan",
        era: "1930s",
        condition: "Good",
        price: 650,
        category: "Objekte",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=600&fit=crop",
        story: "Hand-carved wooden sculpture. Period craftsmanship. Historical artisan object.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    },
    {
        id: 42,
        name: "Metal Wall Hanging",
        designer: "Brutalist Style",
        era: "1960s",
        condition: "Excellent",
        price: 700,
        category: "Objekte",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=600&fit=crop",
        story: "Abstract metal sculpture. Brutalist design movement. Architectural art object.",
        badges: ["⭐ Authentifiziert"],
        featured: false,
        photos: []
    }
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
        case 'price-asc':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return sorted.sort((a, b) => b.price - a.price);
        case 'era-old':
            const eraOrder = {'1800s': 1, '1860s': 2, '1900s': 3, '1920s': 4, '1930s': 5, '1940s': 6, '1950s': 7, '1960s': 8, '1970s': 9};
            return sorted.sort((a, b) => (eraOrder[a.era] || 0) - (eraOrder[b.era] || 0));
        case 'era-new':
            const eraOrder2 = {'1800s': 1, '1860s': 2, '1900s': 3, '1920s': 4, '1930s': 5, '1940s': 6, '1950s': 7, '1960s': 8, '1970s': 9};
            return sorted.sort((a, b) => (eraOrder2[b.era] || 0) - (eraOrder2[a.era] || 0));
        default:
            return sorted;
    }
}

function renderProducts(productsToRender) {
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    
    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-designer">${product.designer}</p>
                <p class="product-era">${product.era}</p>
                <p class="product-condition">Condition: ${product.condition}</p>
                <p class="product-price">CHF ${product.price}</p>
                <p class="product-story">${product.story}</p>
                <div class="product-badges">
                    ${product.badges.map(badge => `<span class="badge">${badge}</span>`).join('')}
                </div>
                <a href="contact.html?product=${encodeURIComponent(product.name)}" class="btn-inquire">Inquire</a>
            </div>
        </div>
    `).join('');
}
