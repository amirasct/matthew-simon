// Netlify Function v2: Save product data to Netlify Blobs
// Stores: product edits, custom products, deleted IDs, featured IDs, translations, sold status
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
        
        const store = getStore('product-data');
        
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
