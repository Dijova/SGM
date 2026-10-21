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
});
