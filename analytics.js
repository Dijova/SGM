// Google Analytics 4 (moved out of the HTML so the Content-Security-Policy
// does not need to allow inline scripts).
// gtag() queues hits right away; the library itself is downloaded once the
// page has finished loading so it does not compete with the first render.
(function () {
    var GA_ID = 'G-4J5HHDTBMS';

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });

    function load() {
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
        document.head.appendChild(s);
    }

    if (document.readyState === 'complete') setTimeout(load, 2000);
    else window.addEventListener('load', function () { setTimeout(load, 2000); });
})();
