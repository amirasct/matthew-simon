// Netlify Function v2: Save product data to Netlify Blobs
// Stores: product edits, custom products, deleted IDs, featured IDs, translations, sold status
//
// CRITICAL: consistency:'strong' is required. Without it, Netlify Blobs uses
// "eventual consistency" by default, meaning writes can take up to 60 SECONDS
// to propagate across their edge network. This was causing edits to appear to
// succeed but then get silently reverted by a later save that read stale data.
import { getStore } from '@netlify/blobs';

export default async (req, context) => {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const data = await req.json();
        
        // Validate structure
        if (typeof data !== 'object' || data === null) {
            return new Response(JSON.stringify({ error: 'Invalid data' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }
        
        const store = getStore({ name: 'product-data', consistency: 'strong' });
        
        // Save with timestamp
        const payload = {
            ...data,
            lastUpdated: new Date().toISOString(),
            updatedBy: 'admin'
        };
        
        await store.setJSON('products', payload);
        
        return new Response(JSON.stringify({
            success: true,
            savedAt: payload.lastUpdated
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Save products error:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
