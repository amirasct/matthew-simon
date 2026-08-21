// Netlify Function: Get photo from blob storage
// This serves photos that were uploaded via upload-photo.js

const { getStore } = require('@netlify/blobs');

exports.handler = async (event, context) => {
    try {
        const filename = event.queryStringParameters?.name;
        
        if (!filename) {
            return {
                statusCode: 400,
                body: 'Missing filename'
            };
        }

        const store = getStore('product-photos');
        const blob = await store.get(filename, { type: 'arrayBuffer' });
        const metadata = await store.getMetadata(filename);

        if (!blob) {
            return {
                statusCode: 404,
                body: 'Photo not found'
            };
        }

        const contentType = metadata?.metadata?.contentType || 'image/jpeg';

        return {
            statusCode: 200,
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=31536000, immutable'
            },
            body: Buffer.from(blob).toString('base64'),
            isBase64Encoded: true
        };
    } catch (error) {
        console.error('Get photo error:', error);
        return {
            statusCode: 500,
            body: 'Error retrieving photo'
        };
    }
};
