// Netlify Function v2 syntax - lists all photos in blob storage
import { getStore } from '@netlify/blobs';

export default async (req, context) => {
    try {
        const store = getStore('product-photos');
        const { blobs } = await store.list();
        
        return new Response(JSON.stringify({
            photos: blobs.map(b => ({
                filename: b.key,
                url: `/.netlify/functions/get-photo?name=${encodeURIComponent(b.key)}`
            }))
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('List error:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
