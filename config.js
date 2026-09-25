/*
 * Site configuration.
 *
 * FORM_ENDPOINT: URL of the Google Apps Script Web App that stores the quote
 * requests (see backend/google-apps-script/README.md). After deploying
 * backend/google-apps-script/Code.gs, paste its "/exec" URL here.
 *
 * GOOGLE_REVIEWS: when true, the "What Our Clients Say" carousel loads the real
 * Google reviews from the same Apps Script (needs PLACES_API_KEY and PLACE_ID
 * in its Script properties). Falls back to the testimonials in index.html.
 *
 * TURNSTILE_SITE_KEY: optional Cloudflare Turnstile site key (free anti-bot
 * check). Leave empty to disable. If you set it, also set the matching
 * TURNSTILE_SECRET in the Apps Script "Script properties".
 */
window.SGM_CONFIG = Object.freeze({
    FORM_ENDPOINT: 'https://script.google.com/macros/s/AKfycbxFkXgFlGUfAVALmkDtQfR5ZlGQ8SBx6e-010a7GV09QYdRcfPN6ktocBHYGEtJtdHg/exec',
    GOOGLE_REVIEWS: true,
    TURNSTILE_SITE_KEY: '',
    DEFAULT_LANGUAGE: 'en',
    SUPPORTED_LANGUAGES: ['en', 'es']
});
