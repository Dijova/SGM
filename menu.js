/*
 * Mobile menu (hamburger) shared by every page: opens/closes #nav-menu,
 * closes after choosing a link, when clicking outside or with Escape.
 */
document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (!menuToggle || !navMenu) return;

    function setMenuOpen(open) {
        navMenu.classList.toggle('show', open);
        menuToggle.classList.toggle('active', open);
        menuToggle.setAttribute('aria-expanded', String(open));
    }

    menuToggle.addEventListener('click', function () {
        setMenuOpen(!navMenu.classList.contains('show'));
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('click', function (event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            setMenuOpen(false);
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && navMenu.classList.contains('show')) {
            setMenuOpen(false);
            menuToggle.focus();
        }
    });
});
