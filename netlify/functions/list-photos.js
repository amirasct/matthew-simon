// Netlify Function v2: list all photos in blob storage.
// ADMIN ONLY: no page on the site uses this, so it is locked to the admin.
import { getStore } from '@netlify/blobs';
import { json, requireAdmin } from './lib/auth.js';

export default async (req, context) => {
    const denied = requireAdmin(req);
    if (denied) return denied;

    try {
        const store = getStore({ name: 'product-photos', consistency: 'strong' });
        const { blobs } = await store.list();
        return json({
            photos: blobs.map((b) => ({
                filename: b.key,
                url: `/.netlify/functions/get-photo?name=${encodeURIComponent(b.key)}`
            }))
        });
    } catch (error) {
        console.error('List error:', error);
        return json({ error: 'List failed' }, 500);
    }
};
