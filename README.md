# SGM Clean Solutions – Website

Static website for **SGM Clean Solutions** (cleaning, floor care and snow removal in Lowell and across Massachusetts) — https://www.sgmcleansolutions.com

- **Language:** English by default, with a Spanish translation from the language
  selector (remembered per visitor). Each language has its own URL
  (`?lang=es`) with `hreflang` tags so search engines can index both. All texts live
  in `translations.js`.
- **Quote form:** replaces the old embedded Google Form. Validated in the browser and
  sent to a Google Apps Script backend that stores requests in a private Google Sheet
  and emails the business. Setup and security details:
  [`backend/google-apps-script/README.md`](backend/google-apps-script/README.md).
- **SEO:** unique titles/descriptions, canonical + hreflang, Open Graph/Twitter cards,
  `LocalBusiness`, `Article` and `BreadcrumbList` structured data, `sitemap.xml`,
  `robots.txt`, optimized and descriptively named images with explicit dimensions and
  lazy loading.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Home page (English). Translatable elements use `data-i18n*` attributes. |
| `cleaning-services-massachusetts/` | Cleaning tips page (`index.html`, `tips.css`, `tips.js`). |
| `translations.js` | English and Spanish texts for every page. |
| `i18n.js` | Shared language switching (URL, canonical, internal links). |
| `config.js` | Form endpoint URL and optional Cloudflare Turnstile site key. |
| `script.js` | Home page: menu, quote form validation/submission, UI behaviour. |
| `analytics.js` / `tawk.js` | Google Analytics and Tawk.to chat loaders. |
| `styles.css` | Home page styles. |
| `sitemap.xml`, `robots.txt`, `site.webmanifest`, `404.html` | SEO / site files. |
| `backend/google-apps-script/Code.gs` | Secure form backend (paste into Apps Script). |

## After publishing

1. Deploy the form backend (see its README) and check `FORM_ENDPOINT` in `config.js`.
2. In [Google Search Console](https://search.google.com/search-console) add the domain
   and submit `https://www.sgmcleansolutions.com/sitemap.xml`.
3. Create/claim the **Google Business Profile** with the same name, address and phone
   as the website (NAP consistency is key for local SEO), and link the website.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
