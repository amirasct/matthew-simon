// Netlify Function v2: Save product data to Netlify Blobs.
// Stores: product edits, custom products, deleted IDs, featured IDs, translations, sold status.
//
// ADMIN ONLY: requires a valid signed token from admin-login (see lib/auth.js).
//
// CRITICAL: consistency:'strong' is required. Without it, Netlify Blobs uses
// "eventual consistency" by default, meaning writes can take up to 60 SECONDS
// to propagate across their edge network. This was causing edits to appear to
// succeed but then get silently reverted by a later save that read stale data.
import { getStore } from '@netlify/blobs';
import { json, requireAdmin } from './lib/auth.js';

// Current data is roughly 0.3 MB. This leaves ~10x headroom but stops anyone
// stuffing the store with junk.
const MAX_BODY_CHARS = 3 * 1024 * 1024;

const isPlainObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);

export default async (req, context) => {
    if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

    const denied = requireAdmin(req);
    if (denied) return denied;

    try {
        const raw = await req.text();
        if (raw.length > MAX_BODY_CHARS) return json({ error: 'Payload too large' }, 413);

        let data;
        try { data = JSON.parse(raw); } catch (e) { return json({ error: 'Invalid JSON' }, 400); }
        if (!isPlainObject(data)) return json({ error: 'Invalid data' }, 400);

        // Type-check the fields the site relies on, so a malformed save can never
        // break the shop for every visitor.
        const objectFields = ['edits', 'translations', 'status'];
        const arrayFields = ['custom', 'deleted', 'featured'];
        for (const f of objectFields) {
            if (data[f] !== undefined && !isPlainObject(data[f])) return json({ error: `Invalid field: ${f}` }, 400);
        }
        for (const f of arrayFields) {
            if (data[f] !== undefined && !Array.isArray(data[f])) return json({ error: `Invalid field: ${f}` }, 400);
        }

        const store = getStore({ name: 'product-data', consistency: 'strong' });

        const payload = {
            ...data,
            lastUpdated: new Date().toISOString(),
            updatedBy: 'admin'
        };

        await store.setJSON('products', payload);

        return json({ success: true, savedAt: payload.lastUpdated });
    } catch (error) {
        console.error('Save products error:', error);
        return json({ error: 'Save failed' }, 500);
    }
};
