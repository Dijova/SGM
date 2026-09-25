/*
 * "What Our Clients Say" carousel.
 *
 * Loads the real Google reviews of the business through the Apps Script
 * backend (?action=reviews), which keeps the Google API key private and caches
 * the response. While loading, or if Google reviews are not configured, the
 * carousel shows the fallback testimonials written in index.html.
 */
document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const CONFIG = window.SGM_CONFIG || {};
    const I18N = window.SGM_I18N;
    const t = (key) => I18N.t(key);

    const carousel = document.getElementById('reviews-carousel');
    const track = document.getElementById('reviews-track');
    const dotsEl = document.getElementById('reviews-dots');
    if (!carousel || !track || !dotsEl) return;

    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const AUTOPLAY_MS = 6000;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ------------------------------------------------------------------
     * Carousel behaviour
     * ------------------------------------------------------------------ */
    const cards = () => Array.from(track.querySelectorAll('.review-card'));

    function visibleCount() {
        const first = cards()[0];
        if (!first) return 1;
        return Math.max(1, Math.round(track.clientWidth / first.getBoundingClientRect().width));
    }

    function pageCount() {
        return Math.max(1, cards().length - visibleCount() + 1);
    }

    function currentIndex() {
        const first = cards()[0];
        if (!first) return 0;
        const step = first.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);
        return Math.round(track.scrollLeft / step);
    }

    function goTo(index) {
        const list = cards();
        const pages = pageCount();
        if (!list.length) return;
        const target = ((index % pages) + pages) % pages;
        track.scrollTo({ left: list[target].offsetLeft - list[0].offsetLeft, behavior: reduceMotion ? 'auto' : 'smooth' });
    }

    function renderDots() {
        dotsEl.textContent = '';
        const pages = pageCount();
        const active = Math.min(currentIndex(), pages - 1);
        const showControls = pages > 1;
        dotsEl.hidden = !showControls;
        prevBtn.hidden = !showControls;
        nextBtn.hidden = !showControls;
        for (let i = 0; i < pages; i++) {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'carousel-dot' + (i === active ? ' active' : '');
            dot.setAttribute('aria-label', t('testimonials.goTo') + ' ' + (i + 1));
            if (i === active) dot.setAttribute('aria-current', 'true');
            dot.addEventListener('click', () => { goTo(i); restartAutoplay(); });
            dotsEl.appendChild(dot);
        }
    }

    prevBtn.addEventListener('click', () => { goTo(currentIndex() - 1); restartAutoplay(); });
    nextBtn.addEventListener('click', () => { goTo(currentIndex() + 1); restartAutoplay(); });

    track.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); goTo(currentIndex() + 1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(currentIndex() - 1); }
    });

    let scrollTimer = null;
    track.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(renderDots, 100);
    }, { passive: true });
    window.addEventListener('resize', () => renderDots(), { passive: true });

    // Autoplay, paused while the visitor interacts with the carousel.
    let autoplayTimer = null;
    let paused = false;

    function startAutoplay() {
        if (reduceMotion) return;
        stopAutoplay();
        autoplayTimer = setInterval(() => {
            if (!paused && !document.hidden && pageCount() > 1) goTo(currentIndex() + 1);
        }, AUTOPLAY_MS);
    }

    function stopAutoplay() {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
    }

    function restartAutoplay() {
        if (autoplayTimer) startAutoplay();
    }

    ['mouseenter', 'focusin', 'touchstart'].forEach(evt => carousel.addEventListener(evt, () => { paused = true; }, { passive: true }));
    ['mouseleave', 'focusout', 'touchend'].forEach(evt => carousel.addEventListener(evt, () => { paused = false; }, { passive: true }));

    /* ------------------------------------------------------------------
     * Google reviews
     * ------------------------------------------------------------------ */
    function stars(rating) {
        const full = Math.round(rating);
        return '★★★★★'.slice(0, full) + '☆☆☆☆☆'.slice(0, 5 - full);
    }

    function safeGoogleUrl(value) {
        return /^https:\/\/([a-z0-9-]+\.)*(google\.com|googleusercontent\.com|goo\.gl)(\/|$)/i.test(String(value || '')) ? value : '';
    }

    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined) node.textContent = text;
        return node;
    }

    // Every value is inserted with textContent / validated URLs, never as HTML.
    function buildReviewCard(review) {
        const card = el('figure', 'testimonial-item review-card google-review');

        const header = el('div', 'review-header');
        if (safeGoogleUrl(review.photo)) {
            const img = el('img', 'review-avatar');
            img.src = review.photo;
            img.alt = '';
            img.width = 40;
            img.height = 40;
            img.loading = 'lazy';
            img.referrerPolicy = 'no-referrer';
            header.appendChild(img);
        } else {
            header.appendChild(el('span', 'review-avatar review-avatar-letter', (review.author || '?').charAt(0).toUpperCase()));
        }

        const who = el('div', 'review-who');
        const authorUrl = safeGoogleUrl(review.authorUrl);
        const name = authorUrl ? el('a', 'review-author', review.author) : el('span', 'review-author', review.author);
        if (authorUrl) {
            name.href = authorUrl;
            name.target = '_blank';
            name.rel = 'noopener noreferrer nofollow';
        }
        who.appendChild(name);
        who.appendChild(el('span', 'review-time', review.time || ''));
        header.appendChild(who);
        header.appendChild(el('span', 'google-g', 'G')).setAttribute('aria-hidden', 'true');
        card.appendChild(header);

        const rating = el('div', 'stars', stars(review.rating));
        rating.setAttribute('role', 'img');
        rating.setAttribute('aria-label', t('testimonials.rated').replace('{n}', review.rating));
        card.appendChild(rating);

        const quote = el('blockquote');
        quote.appendChild(el('p', 'review-text', review.text));
        card.appendChild(quote);

        const reviewUrl = safeGoogleUrl(review.url);
        if (reviewUrl) {
            const link = el('a', 'review-link', t('testimonials.readOnGoogle'));
            link.href = reviewUrl;
            link.target = '_blank';
            link.rel = 'noopener noreferrer nofollow';
            card.appendChild(link);
        }
        return card;
    }

    function showGoogleReviews(data) {
        if (!data || data.result !== 'success' || !Array.isArray(data.reviews) || !data.reviews.length) return;

        track.textContent = '';
        data.reviews.forEach(review => track.appendChild(buildReviewCard(review)));
        track.scrollLeft = 0;

        const summary = document.getElementById('reviews-summary');
        if (summary && typeof data.rating === 'number') {
            document.getElementById('reviews-rating').textContent = data.rating.toFixed(1);
            document.getElementById('reviews-stars').textContent = stars(data.rating);
            document.getElementById('reviews-count').textContent = t('testimonials.count').replace('{n}', data.total);
            summary.hidden = false;
        }
        const attribution = document.getElementById('reviews-attribution');
        if (attribution) attribution.hidden = false;

        const reviewsLink = document.getElementById('reviews-link');
        if (reviewsLink && safeGoogleUrl(data.reviewsUrl)) reviewsLink.href = data.reviewsUrl;
        const writeLink = document.getElementById('write-review-link');
        if (writeLink && safeGoogleUrl(data.writeReviewUrl)) writeLink.href = data.writeReviewUrl;

        renderDots();
    }

    function cacheKey(lang) { return 'sgmReviews:' + lang; }

    function loadGoogleReviews(lang) {
        if (!CONFIG.FORM_ENDPOINT || CONFIG.GOOGLE_REVIEWS === false) return;

        try {
            const cached = JSON.parse(window.sessionStorage.getItem(cacheKey(lang)) || 'null');
            if (cached) { showGoogleReviews(cached); return; }
        } catch (e) { /* storage unavailable */ }

        const url = CONFIG.FORM_ENDPOINT + '?action=reviews&lang=' + encodeURIComponent(lang);
        fetch(url, { method: 'GET', credentials: 'omit', redirect: 'follow' })
            .then(response => (response.ok ? response.json() : null))
            .then(data => {
                if (!data || data.result !== 'success') return;
                try { window.sessionStorage.setItem(cacheKey(lang), JSON.stringify(data)); } catch (e) { /* ignore */ }
                // Ignore late answers for a language the visitor already left.
                if (I18N.current() === lang) showGoogleReviews(data);
            })
            .catch(() => { /* keep the fallback testimonials */ });
    }

    let lastLang = null;
    I18N.onChange(lang => {
        renderDots();
        if (lang !== lastLang) {
            lastLang = lang;
            loadGoogleReviews(lang);
        }
    });

    renderDots();
    startAutoplay();
});
