// Netlify Function: Upload photos to Netlify Blob Storage
// This runs on Netlify's servers when admin uploads a photo

const { getStore } = require('@netlify/blobs');

exports.handler = async (event, context) => {
    // Only accept POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    // Simple password protection - checks for admin password in header
    const authHeader = event.headers['x-admin-password'];
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'matthew-simon-admin';
    if (authHeader !== ADMIN_PASSWORD) {
        return {
            statusCode: 401,
            body: JSON.stringify({ error: 'Unauthorized' })
        };
    }

    try {
        const { filename, contentType, base64Data } = JSON.parse(event.body);

        if (!filename || !base64Data) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing filename or data' })
            };
        }

        // Get the photos store
        const store = getStore('product-photos');

        // Convert base64 to buffer
        const buffer = Buffer.from(base64Data, 'base64');

        // Save to blob storage
        await store.set(filename, buffer, {
            metadata: { contentType: contentType || 'image/jpeg' }
        });

        // Return the URL where the photo can be accessed
        const url = `/.netlify/functions/get-photo?name=${encodeURIComponent(filename)}`;

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                success: true,
                filename: filename,
                url: url
            })
        };
    } catch (error) {
        console.error('Upload error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
