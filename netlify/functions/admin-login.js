// Netlify Function v2: admin login.
// Checks the password on the server and returns a signed, expiring token.
// Brute-force protection: 5 wrong attempts from one address locks that address
// out for 15 minutes, and every wrong attempt is slowed by a short delay.
// Addresses are stored only as a salted hash, never in readable form.
import crypto from 'node:crypto';
import { getStore } from '@netlify/blobs';
import { envVar, json, isConfigured, passwordMatches, issueToken } from './lib/auth.js';

const MAX_FAILS = 5;
const WINDOW_MS = 15 * 60 * 1000;
const LOCK_MS = 15 * 60 * 1000;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default async (req, context) => {
    if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);
    if (!isConfigured()) return json({ error: 'not_configured' }, 503);

    let body;
    try { body = await req.json(); } catch (e) { return json({ error: 'bad_request' }, 400); }
    const password = body && typeof body.password === 'string' ? body.password : '';
    const remember = !!(body && body.remember === true);
    if (password.length === 0 || password.length > 200) return json({ error: 'invalid_credentials' }, 401);

    const ip = (context && context.ip)
        || req.headers.get('x-nf-client-connection-ip')
        || req.headers.get('x-forwarded-for')
        || 'unknown';
    const key = 'fail-' + crypto.createHash('sha256')
        .update(ip + envVar('ADMIN_SESSION_SECRET')).digest('hex').slice(0, 32);

    // If the lockout store is unavailable we still check the password; we just
    // lose the lockout for that request. Never fail open on the password itself.
    let store = null;
    let record = null;
    try {
        store = getStore({ name: 'admin-security', consistency: 'strong' });
        record = await store.get(key, { type: 'json' });
    } catch (e) {
        console.error('lockout store unavailable:', e && e.message);
    }

    const now = Date.now();
    if (record && record.lockedUntil && record.lockedUntil > now) {
        const retryAfter = Math.ceil((record.lockedUntil - now) / 1000);
        return json({ error: 'locked', retryAfter }, 429, { 'Retry-After': String(retryAfter) });
    }

    if (!passwordMatches(password)) {
        await sleep(800);
        let count = 1;
        let first = now;
        if (record && record.first && now - record.first < WINDOW_MS) {
            count = (record.count || 0) + 1;
            first = record.first;
        }
        const next = { count, first };
        if (count >= MAX_FAILS) next.lockedUntil = now + LOCK_MS;
        try { if (store) await store.setJSON(key, next); } catch (e) { /* non-fatal */ }
        return json({ error: 'invalid_credentials', attemptsLeft: Math.max(0, MAX_FAILS - count) }, 401);
    }

    try { if (store && record) await store.delete(key); } catch (e) { /* non-fatal */ }

    const ttlSeconds = remember ? 30 * 24 * 60 * 60 : 2 * 60 * 60;
    return json({ token: issueToken(ttlSeconds), expiresAt: Date.now() + ttlSeconds * 1000 });
};
