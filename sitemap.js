// Netlify Function v2: builds sitemap.xml live from the shop's data.
//
// Why this exists: the products are drawn by JavaScript, so Google cannot
// discover them by following links alone. This lists every published product
// page AND its photos, and updates itself whenever something is added, edited,
// sold or removed in the admin - no manual step.
//
// Served at /sitemap.xml (see the redirect rule in netlify.toml).
import { getStore } from '@netlify/blobs';
import BASE from './lib/base-products.js';

const SITE = 'https://matthew-simon.ch';
const MAX_IMAGES_PER_PAGE = 10;

const STATIC_PAGES = [
    ['/', '1.0', 'weekly'],
    ['/shop.html', '0.9', 'daily'],
    ['/about.html', '0.7', 'monthly'],
    ['/contact.html', '0.7', 'monthly'],
    ['/archive.html', '0.5', 'weekly']
];

const esc = (s) => String(s == null ? '' : s).replace(/[<>&'"]/g, (c) =>
    ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]));

function absoluteImage(img) {
    if (!img || typeof img !== 'string') return null;
    if (/^https?:\/\//i.test(img)) return img;
    if (img.startsWith('/')) return SITE + img;              // e.g. /.netlify/functions/get-photo?name=...
    return SITE + '/images/' + encodeURIComponent(img);      // original photos in /images/
}

// Same layering the shop itself uses: original products, then the admin's
// edits, then deletions, then products added in the admin, then sold/draft status.
function mergeProducts(data) {
    const d = data || {};
    let list = BASE.map((p) => ({ ...p }));

    if (d.edits && typeof d.edits === 'object') {
        list = list.map((p) => (d.edits[p.id] ? { ...p, ...d.edits[p.id], id: p.id } : p));
    }
    if (Array.isArray(d.deleted) && d.deleted.length) {
        const gone = new Set(d.deleted.map(Number));
        list = list.filter((p) => !gone.has(Number(p.id)));
    }
    if (Array.isArray(d.custom)) {
        const seen = new Map();
        d.custom.forEach((p) => { if (p && p.id != null) seen.set(Number(p.id), { ...p, id: Number(p.id) }); });
        list = list.concat([...seen.values()]);
    }
    if (d.status && typeof d.status === 'object') {
        list.forEach((p) => {
            const s = d.status[p.id];
            if (s && s.status) p.status = s.status;
        });
    }
    return list;
}

function urlEntry(loc, opts = {}) {
    let xml = `  <url>\n    <loc>${esc(loc)}</loc>\n`;
    if (opts.changefreq) xml += `    <changefreq>${opts.changefreq}</changefreq>\n`;
    if (opts.priority) xml += `    <priority>${opts.priority}</priority>\n`;
    (opts.images || []).forEach((img) => { xml += `    <image:image>\n      <image:loc>${esc(img)}</image:loc>\n    </image:image>\n`; });
    return xml + '  </url>\n';
}

export default async (req, context) => {
    let data = null;
    try {
        const store = getStore({ name: 'product-data', consistency: 'strong' });
        data = await store.get('products', { type: 'json' });
    } catch (e) {
        // Still produce a useful sitemap from the original products if storage is unavailable
        console.error('sitemap: storage unavailable, using original products only:', e && e.message);
    }

    let products = [];
    try {
        products = mergeProducts(data).filter((p) => (p.status || 'published') === 'published');
    } catch (e) {
        console.error('sitemap: merge failed:', e && e.message);
    }

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
        + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" '
        + 'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

    STATIC_PAGES.forEach(([path, priority, changefreq]) => {
        xml += urlEntry(SITE + path, { priority, changefreq });
    });

    products
        .sort((a, b) => Number(b.id) - Number(a.id))
        .forEach((p) => {
            const images = (Array.isArray(p.images) ? p.images : [])
                .map(absoluteImage).filter(Boolean).slice(0, MAX_IMAGES_PER_PAGE);
            xml += urlEntry(`${SITE}/product-detail.html?id=${Number(p.id)}`, {
                priority: '0.8', changefreq: 'monthly', images
            });
        });

    xml += '</urlset>\n';

    return new Response(xml, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600'
        }
    });
};
