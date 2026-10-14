document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Mobile menu
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('nav-menu');
    if (toggle && menu) {
        toggle.addEventListener('click', function () {
            const open = menu.classList.toggle('active');
            toggle.classList.toggle('active', open);
            toggle.setAttribute('aria-expanded', String(open));
        });
    }

    // Filters
    const items = Array.from(document.querySelectorAll('#gallery-grid li'));
    document.querySelectorAll('.gallery-filters .chip').forEach(chip => {
        chip.addEventListener('click', function () {
            const f = chip.dataset.filter;
            document.querySelectorAll('.gallery-filters .chip').forEach(c => c.setAttribute('aria-pressed', String(c === chip)));
            items.forEach(li => { li.hidden = f !== 'all' && !li.dataset.cat.split(' ').includes(f); });
        });
    });

    // Lightbox for photos and videos
    const box = document.getElementById('lightbox');
    if (!box || typeof box.showModal !== 'function') return;
    const media = box.querySelector('.lb-media');
    const caption = box.querySelector('figcaption');
    let index = 0;
    const visible = () => items.filter(li => !li.hidden).map(li => li.querySelector('.work-item'));

    function show(i) {
        const list = visible();
        if (!list.length) return;
        index = (i + list.length) % list.length;
        const btn = list[index];
        media.replaceChildren();
        if (btn.dataset.video) {
            const v = document.createElement('video');
            v.src = btn.dataset.video; v.controls = true; v.autoplay = true; v.playsInline = true;
            media.appendChild(v);
        } else {
            const img = document.createElement('img');
            img.src = btn.dataset.full; img.alt = btn.querySelector('img').alt;
            media.appendChild(img);
        }
        caption.textContent = btn.querySelector('.work-cap').textContent;
    }

    items.forEach(li => li.querySelector('.work-item').addEventListener('click', function () {
        show(visible().indexOf(this));
        box.showModal();
    }));
    box.querySelector('.lb-prev').addEventListener('click', () => show(index - 1));
    box.querySelector('.lb-next').addEventListener('click', () => show(index + 1));
    box.querySelector('.lb-close').addEventListener('click', () => box.close());
    box.addEventListener('close', () => media.replaceChildren());
    box.addEventListener('click', e => { if (e.target === box) box.close(); });
    box.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') show(index - 1);
        if (e.key === 'ArrowRight') show(index + 1);
    });
});
