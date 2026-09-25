document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Fade-in animation for article cards
    const cards = document.querySelectorAll('.article-card');
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        });
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }

    // Track CTA clicks in Google Analytics
    document.querySelectorAll('.cta-button, .contact-btn, .main-cta').forEach(button => {
        button.addEventListener('click', function () {
            if (typeof window.gtag === 'function') {
                window.gtag('event', 'cta_click', { cta_text: this.textContent.trim(), page: 'cleaning_tips' });
            }
        });
    });
});
