// Google Analytics 4 (moved out of the HTML so the Content-Security-Policy
// does not need to allow inline scripts).
(function () {
    var GA_ID = 'G-4J5HHDTBMS';
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });
})();
