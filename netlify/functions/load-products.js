// Netlify Function v2: Load product data from Netlify Blobs
// Public endpoint - anyone can read (needed for shop visitors)
// NO CACHING - we want changes to appear immediately
import { getStore } from '@netlify/blobs';

export default async (req, context) => {
    try {
        const store = getStore('product-data');
        const data = await store.get('products', { type: 'json' });
        
        // Headers that prevent any caching at any layer (browser, CDN, proxy)
        const noCacheHeaders = { 
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Surrogate-Control': 'no-store'
        };
        
        if (!data) {
            // Return empty structure if nothing saved yet
            return new Response(JSON.stringify({
                edits: {},
                custom: [],
                deleted: [],
                featured: [],
                translations: {},
                lastUpdated: null
            }), {
                status: 200,
                headers: noCacheHeaders
            });
        }
        
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: noCacheHeaders
        });
    } catch (error) {
        console.error('Load products error:', error);
        return new Response(JSON.stringify({ 
            error: error.message,
            edits: {}, custom: [], deleted: [], featured: [], translations: {}
        }), {
            status: 200,  // Return 200 with empty data on error so site still works
            headers: { 
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache, no-store, must-revalidate'
            }
        });
    }
};
