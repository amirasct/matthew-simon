// Netlify Function v2 syntax - serves photos from blob storage
import { getStore } from '@netlify/blobs';

export default async (req, context) => {
    try {
        const url = new URL(req.url);
        const filename = url.searchParams.get('name');
        
        if (!filename) {
            return new Response('Missing filename', { status: 400 });
        }

        const store = getStore('product-photos');
        const blob = await store.get(filename, { type: 'arrayBuffer' });
        
        if (!blob) {
            return new Response('Photo not found', { status: 404 });
        }

        const metadata = await store.getMetadata(filename);
        const contentType = metadata?.metadata?.contentType || 'image/jpeg';

        return new Response(blob, {
            status: 200,
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=31536000, immutable'
            }
        });
    } catch (error) {
        console.error('Get photo error:', error);
        return new Response('Error retrieving photo', { status: 500 });
    }
};
