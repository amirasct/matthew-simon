// Netlify Function v2: upload a product photo to Netlify Blobs.
//
// ADMIN ONLY: requires a valid signed token from admin-login (see lib/auth.js).
//
// consistency:'strong' ensures the photo is immediately readable after upload
// (without it, get-photo could miss a just-uploaded photo for up to 60s).
import { getStore } from '@netlify/blobs';
import { json, requireAdmin } from './lib/auth.js';

// Netlify itself caps a request at about 6 MB, so this is a backstop only.
const MAX_BYTES = 6 * 1024 * 1024;

const TYPE_BY_EXT = {
    jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png',
    webp: 'image/webp', gif: 'image/gif'
};

// Check the file's actual first bytes, so a web page or script renamed "photo.jpg"
// can never be stored and then served from the shop's own address.
function looksLike(buf, ext) {
    if (ext === 'jpg' || ext === 'jpeg') return buf.length > 3 && buf[0] === 0xFF && buf[1] === 0xD8 && buf[2] === 0xFF;
    if (ext === 'png') return buf.length > 8 && buf.slice(0, 8).equals(Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]));
    if (ext === 'gif') return buf.length > 6 && buf.slice(0, 4).toString('latin1') === 'GIF8';
    if (ext === 'webp') return buf.length > 12 && buf.slice(0, 4).toString('latin1') === 'RIFF' && buf.slice(8, 12).toString('latin1') === 'WEBP';
    return false;
}

// Keep names readable and safe. The browser uses the name returned by this
// function, so tidying it here never breaks a link.
function safeName(name) {
    const raw = String(name || '');
    const dot = raw.lastIndexOf('.');
    const ext = (dot >= 0 ? raw.slice(dot + 1) : '').toLowerCase().replace(/[^a-z0-9]/g, '');
    let base = (dot >= 0 ? raw.slice(0, dot) : raw)
        .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^A-Za-z0-9_-]+/g, '-')
        .replace(/-{2,}/g, '-')
        .replace(/^[-_]+|[-_]+$/g, '')
        .slice(0, 100);
    if (!base) base = 'foto';
    return { base, ext };
}

export default async (req, context) => {
    if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

    const denied = requireAdmin(req);
    if (denied) return denied;

    try {
        let body;
        try { body = await req.json(); } catch (e) { return json({ error: 'Invalid JSON' }, 400); }
        const { filename, base64Data } = body || {};

        if (!filename || typeof base64Data !== 'string' || !base64Data) {
            return json({ error: 'Missing filename or data' }, 400);
        }

        const { base, ext } = safeName(filename);
        if (!TYPE_BY_EXT[ext]) return json({ error: 'unsupported_type' }, 415);

        const buffer = Buffer.from(base64Data, 'base64');
        if (buffer.length === 0) return json({ error: 'Missing filename or data' }, 400);
        if (buffer.length > MAX_BYTES) return json({ error: 'too_large' }, 413);
        if (!looksLike(buffer, ext)) return json({ error: 'unsupported_type' }, 415);

        const finalName = `${base}.${ext}`;
        const store = getStore({ name: 'product-photos', consistency: 'strong' });

        // The stored type comes from the verified extension, never from the client.
        await store.set(finalName, buffer, { metadata: { contentType: TYPE_BY_EXT[ext] } });

        return json({
            success: true,
            filename: finalName,
            url: `/.netlify/functions/get-photo?name=${encodeURIComponent(finalName)}`
        });
    } catch (error) {
        console.error('Upload error:', error);
        return json({ error: 'Upload failed' }, 500);
    }
};
