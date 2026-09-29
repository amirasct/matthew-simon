// Netlify Edge Function: server-rendered preview for product pages.
//
// WHY THIS EXISTS: product-detail.html builds its content with JavaScript.
// That works fine for a person's browser, but WhatsApp, Instagram, Facebook
// and iMessage do NOT run JavaScript when generating a link preview - they
// only read the plain HTML that comes back on the first request. So sharing
// a product link currently shows a generic, wrong preview for every product.
//
// WHAT THIS DOES: runs at the network edge, before the page is served.
//   - A normal visitor, or Googlebot, is untouched: context.next() hands the
//     request straight on to the existing, already-tested product-detail.html.
//   - A known preview bot (WhatsApp, Facebook, Instagram, Twitter/X, Slack,
//     Telegram, Discord, LinkedIn, iMessage, Pinterest, Skype) instead gets a
//     small, complete HTML page with that ONE product's real title,
//     description and photo already in it.
//
// This only ever changes what a sharing bot sees. It cannot break the site
// for a visitor, and if anything below fails, it falls back to the normal
// page rather than showing an error.
import BASE from '../functions/lib/base-products.js';

const SITE = 'https://matthew-simon.ch';

// Matches the exact wording used across the rest of the shop
const FALLBACK = {
    de: { title: 'Matthew Simon – Kunst, Objekte, Design', desc: 'Authentifizierte europäische Antiquitäten und Design aus Bern.' },
};

const BOT_PATTERN = /facebookexternalhit|Facebot|WhatsApp|Instagram|Twitterbot|Slackbot|TelegramBot|Discordbot|LinkedInBot|SkypeUriPreview|Pinterest|redditbot|vkShare|W3C_Validator|Applebot/i;

const esc = (s) => String(s == null ? '' : s).replace(/[<>&'"]/g, (c) =>
    ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]));

function absoluteImage(img) {
    if (!img || typeof img !== 'string') return null;
    if (/^https?:\/\//i.test(img)) return img;
    if (img.startsWith('/')) return SITE + img;
    return SITE + '/images/' + encodeURIComponent(img);
}

// Same layering the shop and the sitemap function both use: original
// products, then admin edits, then deletions, then admin-added products,
// then sold/draft status.
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
        list.forEach((p) => { const s = d.status[p.id]; if (s && s.status) p.status = s.status; });
    }
    return list;
}

function previewPage(product, url) {
    const desc = String(product.shortHook || product.description || '')
        .replace(/\s+/g, ' ').trim().substring(0, 200);
    const image = absoluteImage((product.images || [])[0]) || (SITE + '/icon-512.png');
    const sold = product.status === 'sold';
    const title = product.name + (sold ? ' (verkauft) · Matthew Simon' : ' · Matthew Simon');

    return `<!doctype html>
<html lang="de">
<head>
<meta charset="UTF-8">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:type" content="product">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${esc(image)}">
<meta property="og:url" content="${esc(url)}">
<meta property="og:site_name" content="Matthew Simon">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${esc(image)}">
</head>
<body>
<img src="${esc(image)}" alt="${esc(product.name)}" style="max-width:100%;">
<h1>${esc(product.name)}</h1>
<p>${esc(desc)}</p>
<p><a href="${esc(url)}">${esc(url)}</a></p>
</body>
</html>`;
}

export default async (request, context) => {
    const userAgent = request.headers.get('user-agent') || '';

    // Real visitors and search engines: completely untouched, existing path.
    if (!BOT_PATTERN.test(userAgent)) {
        return context.next();
    }

    try {
        const url = new URL(request.url);
        const id = Number(url.searchParams.get('id'));
        if (!id) return context.next();

        // Read the same live product data the shop itself uses.
        const res = await fetch(new URL('/.netlify/functions/load-products', request.url));
        const data = res.ok ? await res.json() : null;

        const product = mergeProducts(data).find((p) => Number(p.id) === id);
        if (!product) return context.next();

        return new Response(previewPage(product, url.toString()), {
            status: 200,
            headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=900' }
        });
    } catch (e) {
        // Anything unexpected: fall back to the normal page rather than error.
        console.error('product-preview edge function failed:', e && e.message);
        return context.next();
    }
};

export const config = { path: '/product-detail.html' };
