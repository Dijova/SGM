/*
 * Shared language handling for every page: English by default, Spanish on
 * demand. Exposes window.SGM_I18N = { t, apply, current, onChange }.
 */
(function () {
    'use strict';

    const CONFIG = window.SGM_CONFIG || {};
    const TRANSLATIONS = window.SGM_TRANSLATIONS || {};
    const SUPPORTED = CONFIG.SUPPORTED_LANGUAGES || ['en', 'es'];
    const DEFAULT = CONFIG.DEFAULT_LANGUAGE || 'en';
    const STORAGE_KEY = 'selectedLanguage';
    const LOCALES = { en: 'en_US', es: 'es_US' };

    let current = DEFAULT;
    const listeners = [];

    function lookup(dict, key) {
        return key.split('.').reduce(
            (obj, part) => (obj && Object.prototype.hasOwnProperty.call(obj, part) ? obj[part] : undefined),
            dict
        );
    }

    // Resolves "a.b.c" for the current language, falling back to English.
    function t(key, lang) {
        const value = lookup(TRANSLATIONS[lang || current], key);
        if (typeof value === 'string') return value;
        const fallback = lookup(TRANSLATIONS[DEFAULT], key);
        return typeof fallback === 'string' ? fallback : key;
    }

    function storageGet() {
        try { return window.localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }

    function storageSet(value) {
        try { window.localStorage.setItem(STORAGE_KEY, value); } catch (e) { /* storage unavailable */ }
    }

    // Adds/removes ?lang=es on a URL, keeping path and hash.
    function withLang(href, lang) {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return href;
        if (lang === DEFAULT) url.searchParams.delete('lang');
        else url.searchParams.set('lang', lang);
        return url.href;
    }

    function updateUrlState(lang) {
        // Keep the address bar, canonical and internal links in sync so that
        // the Spanish version has its own shareable, indexable URL (?lang=es).
        try {
            const next = withLang(window.location.href, lang);
            if (next !== window.location.href) window.history.replaceState(null, '', next);
        } catch (e) { /* file:// or sandboxed context */ }

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            if (!canonical.dataset.base) canonical.dataset.base = canonical.getAttribute('href');
            const base = new URL(canonical.dataset.base);
            if (lang === DEFAULT) base.searchParams.delete('lang');
            else base.searchParams.set('lang', lang);
            canonical.setAttribute('href', base.href);
        }

        const ogLocale = document.querySelector('meta[property="og:locale"]');
        if (ogLocale) ogLocale.setAttribute('content', LOCALES[lang] || LOCALES[DEFAULT]);

        document.querySelectorAll('a[data-lang-link]').forEach(a => {
            if (!a.dataset.baseHref) a.dataset.baseHref = a.getAttribute('href');
            const base = a.dataset.baseHref;
            if (lang === DEFAULT) {
                a.setAttribute('href', base);
                return;
            }
            // Keep relative links relative (works on any host and on file://).
            const [pathPart, hash] = base.split('#');
            a.setAttribute('href', pathPart + '?lang=' + encodeURIComponent(lang) + (hash !== undefined ? '#' + hash : ''));
        });
    }

    function apply(lang) {
        if (!SUPPORTED.includes(lang) || !TRANSLATIONS[lang]) lang = DEFAULT;
        current = lang;
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.textContent = t(el.dataset.i18n);
        });
        // Only used for trusted, static strings from translations.js (never user input).
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            el.innerHTML = t(el.dataset.i18nHtml);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder));
        });
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            el.setAttribute('alt', t(el.dataset.i18nAlt));
        });
        document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
            el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel));
        });
        document.querySelectorAll('[data-i18n-content]').forEach(el => {
            el.setAttribute('content', t(el.dataset.i18nContent));
        });

        updateUrlState(lang);

        const selector = document.getElementById('language-selector');
        if (selector) selector.value = lang;

        listeners.forEach(fn => fn(lang));
    }

    function initialLanguage() {
        const fromUrl = new URLSearchParams(window.location.search).get('lang');
        if (fromUrl && SUPPORTED.includes(fromUrl)) return fromUrl;
        const saved = storageGet();
        if (saved && SUPPORTED.includes(saved)) return saved;
        return DEFAULT;
    }

    window.SGM_I18N = {
        t: t,
        apply: apply,
        current: () => current,
        onChange: fn => listeners.push(fn)
    };

    document.addEventListener('DOMContentLoaded', function () {
        const selector = document.getElementById('language-selector');
        if (selector) {
            selector.addEventListener('change', function (e) {
                apply(e.target.value);
                storageSet(current);
            });
        }
        // Page scripts register their listeners on DOMContentLoaded too; apply
        // the language right after them.
        setTimeout(() => apply(initialLanguage()), 0);

        const yearEl = document.getElementById('current-year');
        if (yearEl) yearEl.textContent = String(new Date().getFullYear());
    });
})();
