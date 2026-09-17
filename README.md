# Suman Gautam portfolio

A lightweight, responsive portfolio for Suman Gautam, Product Manager and Product Owner. The site is intentionally static so it can deploy directly to GitHub Pages or any standard web host.

## Run locally

From the repository root:

```sh
ruby -run -e httpd . -p 8000
```

Then open `http://localhost:8000`.

## Structure

- `index.html` — homepage and recruiter scan
- `work.html` — five factual product stories
- `aboutme.html` — product approach and career transition
- `experience.html` — employment and education timeline
- `contact.html` — contact details and mail-client form fallback
- `assets/css/portfolio.css` — shared design system and responsive layout
- `assets/js/portfolio.js` — accessible mobile navigation

## Content updates

Professional copy is kept in the HTML pages so the site remains easy to edit without a build step. Update metrics and dates only against the supplied resume. Add a real PDF to `public/resume/` or the repository root before turning the Resume link into a download link. No testimonial section is included because no genuine testimonial copy was supplied.

## Contact form

The current form uses `mailto:`. It opens the visitor's email client and does not pretend to send mail from the browser. For production server-side delivery, replace the form action with a provider endpoint or a small serverless function, then add validation, rate limiting, and secrets through the hosting provider's environment variables.

## Deployment

The site has no build step. Deploy the repository root to GitHub Pages, Netlify, Vercel static hosting, or any web server that serves HTML files. Ensure the configured domain is updated in the metadata before adding a canonical URL or sitemap.
