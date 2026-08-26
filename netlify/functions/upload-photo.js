// Netlify Function v2 syntax - properly configures Blobs environment
// consistency:'strong' ensures the photo is immediately readable after upload
// (without it, list-photos/get-photo could miss a just-uploaded photo for up to 60s)
import { getStore } from '@netlify/blobs';

export default async (req, context) => {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const { filename, contentType, base64Data } = await req.json();

        if (!filename || !base64Data) {
            return new Response(JSON.stringify({ error: 'Missing filename or data' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const store = getStore({ name: 'product-photos', consistency: 'strong' });

        // Convert base64 to buffer
        const buffer = Buffer.from(base64Data, 'base64');

        // Save to blob storage
        await store.set(filename, buffer, {
            metadata: { contentType: contentType || 'image/jpeg' }
        });

        // Return the URL where the photo can be accessed
        const url = `/.netlify/functions/get-photo?name=${encodeURIComponent(filename)}`;

        return new Response(JSON.stringify({
            success: true,
            filename: filename,
            url: url
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Upload error:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
