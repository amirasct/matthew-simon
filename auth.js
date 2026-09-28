// Shared admin-authentication helpers for the Netlify Functions.
//
// How it works:
//   1. The admin page sends the password to admin-login.
//   2. The SERVER compares it with the ADMIN_PASSWORD environment variable
//      (the password is never in any file that visitors can download).
//   3. If correct, the server returns a signed pass ("token") that expires.
//      The token is signed with ADMIN_SESSION_SECRET, which only the server knows,
//      so nobody can forge one.
//   4. save-products, upload-photo and list-photos refuse any request that does
//      not carry a valid, unexpired token.
//
// Fail closed: if the two environment variables are missing or too weak,
// nothing can be changed at all. Reading the shop is unaffected.
import crypto from 'node:crypto';

const MIN_PASSWORD_LENGTH = 12;
const MIN_SECRET_LENGTH = 32;

export function envVar(name) {
    try {
        if (typeof Netlify !== 'undefined' && Netlify.env) {
            const v = Netlify.env.get(name);
            if (v) return v;
        }
    } catch (e) { /* fall through to process.env */ }
    return process.env[name] || '';
}

export function json(body, status = 200, extraHeaders = {}) {
    return new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...extraHeaders }
    });
}

export function isConfigured() {
    return envVar('ADMIN_PASSWORD').length >= MIN_PASSWORD_LENGTH
        && envVar('ADMIN_SESSION_SECRET').length >= MIN_SECRET_LENGTH;
}

// Constant-time comparison: hashing both sides first makes the length
// irrelevant and prevents timing differences from leaking the password.
export function passwordMatches(input) {
    const a = crypto.createHash('sha256').update(String(input == null ? '' : input)).digest();
    const b = crypto.createHash('sha256').update(envVar('ADMIN_PASSWORD')).digest();
    return crypto.timingSafeEqual(a, b);
}

function sign(payloadB64) {
    return crypto.createHmac('sha256', envVar('ADMIN_SESSION_SECRET')).update(payloadB64).digest();
}

export function issueToken(ttlSeconds) {
    const payload = Buffer.from(JSON.stringify({
        v: 1,
        exp: Math.floor(Date.now() / 1000) + ttlSeconds
    })).toString('base64url');
    return payload + '.' + sign(payload).toString('base64url');
}

export function verifyToken(token) {
    if (!isConfigured() || typeof token !== 'string') return false;
    const parts = token.split('.');
    if (parts.length !== 2) return false;
    const [payload, sig] = parts;

    const expected = sign(payload);
    const given = Buffer.from(sig, 'base64url');
    if (given.length !== expected.length || !crypto.timingSafeEqual(given, expected)) return false;

    try {
        const p = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
        return p.v === 1 && typeof p.exp === 'number' && p.exp > Date.now() / 1000;
    } catch (e) {
        return false;
    }
}

// Returns null if the request is allowed, otherwise a ready-made error Response.
export function requireAdmin(req) {
    if (!isConfigured()) return json({ error: 'not_configured' }, 503);
    const header = req.headers.get('authorization') || '';
    const token = header.startsWith('Bearer ') ? header.slice(7).trim() : '';
    if (!verifyToken(token)) return json({ error: 'unauthorized' }, 401);
    return null;
}
