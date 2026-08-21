// Netlify Function: List all photos in blob storage
// Used by admin to see what's available

const { getStore } = require('@netlify/blobs');

exports.handler = async (event, context) => {
    try {
        const store = getStore('product-photos');
        const { blobs } = await store.list();
        
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                photos: blobs.map(b => ({
                    filename: b.key,
                    url: `/.netlify/functions/get-photo?name=${encodeURIComponent(b.key)}`
                }))
            })
        };
    } catch (error) {
        console.error('List error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
