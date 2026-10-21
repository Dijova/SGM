document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Filters
    const items = Array.from(document.querySelectorAll('#gallery-grid li'));
    document.querySelectorAll('.gallery-filters .chip').forEach(chip => {
        chip.addEventListener('click', function () {
            const f = chip.dataset.filter;
            document.querySelectorAll('.gallery-filters .chip').forEach(c => c.setAttribute('aria-pressed', String(c === chip)));
            items.forEach(li => { li.hidden = f !== 'all' && !li.dataset.cat.split(' ').includes(f); });
        });
    });

    // Before/after sliders
    document.querySelectorAll('.ba-frame').forEach(frame => {
        const range = frame.querySelector('.ba-range');
        range.addEventListener('input', () => frame.style.setProperty('--pos', range.value + '%'));
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
            if ('portrait' in btn.dataset) v.className = 'portrait';
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
