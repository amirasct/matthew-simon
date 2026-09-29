// Netlify Function v2 syntax - serves photos from blob storage
// consistency:'strong' ensures freshly-uploaded photos are found immediately
import { getStore } from '@netlify/blobs';

export default async (req, context) => {
    try {
        const url = new URL(req.url);
        const filename = url.searchParams.get('name');
        
        if (!filename) {
            return new Response('Missing filename parameter', { status: 400 });
        }

        const store = getStore({ name: 'product-photos', consistency: 'strong' });
        
        // Get the blob as a Blob object (native v2 approach)
        const blob = await store.get(filename, { type: 'blob' });
        
        if (!blob) {
            return new Response('Photo not found', { status: 404 });
        }
        
        // Get metadata for content type
        const metadata = await store.getMetadata(filename);
        const contentType = metadata?.metadata?.contentType || 'image/jpeg';

        return new Response(blob, {
            status: 200,
            headers: {
                'Content-Type': contentType,
                // 'Cache-Control' only tells the VISITOR'S OWN BROWSER to keep this
                // for a year. It does NOT make Netlify's own network cache it.
                // Without the header below, every single request - including ones
                // from a WhatsApp/Facebook link-preview crawler, and from every
                // different visitor - has to run this function fresh and fetch the
                // photo from storage again. If that happens to be slow at that
                // moment, the crawler gives up and shows no image.
                'Cache-Control': 'public, max-age=31536000, immutable',
                // This is the fix: tells Netlify's own network to cache the response.
                // Once ANY single request for a given photo succeeds, the network
                // remembers it, and every request after that - from anyone,
                // anywhere, including a crawler's retry - is served instantly with
                // no function run and no storage lookup at all.
                // "durable" additionally shares that cached copy across every one
                // of Netlify's edge locations worldwide, not just the location the
                // first request happened to land on.
                'Netlify-CDN-Cache-Control': 'public, max-age=31536000, immutable, durable'
            }
        });
    } catch (error) {
        console.error('Get photo error:', error);
        return new Response(`Error retrieving photo: ${error.message}`, { status: 500 });
    }
};
