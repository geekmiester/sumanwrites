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
- `projects.html` — portfolio index for projects, case studies, and design breakdowns
- `work.html` — detailed product stories retained for older links
- `blogs.html` — five sample article entries ready to develop
- `aboutme.html` — product approach, experience timeline, and education
- `experience.html` — compatibility redirect to the Experience section inside About
- `contact.html` — contact details and mail-client form fallback
- `assets/css/portfolio.css` — shared design system and responsive layout
- `assets/js/portfolio.js` — accessible mobile navigation

## Content updates

Professional copy is kept in the HTML pages so the site remains easy to edit without a build step. Update metrics and dates only against the supplied resume. The downloadable resume is stored at `assets/resume/suman-gautam-product-manager-resume.pdf`. No testimonial section is included because no genuine testimonial copy was supplied.

Projects and blog entries are intentionally marked as sample content. Replace the titles, summaries, links, and metadata with publishable material as each project or article becomes ready.

## Contact form

The current form uses `mailto:`. It opens the visitor's email client and does not pretend to send mail from the browser. For production server-side delivery, replace the form action with a provider endpoint or a small serverless function, then add validation, rate limiting, and secrets through the hosting provider's environment variables.

## Deployment

The site has no build step. Deploy the repository root to GitHub Pages, Netlify, Vercel static hosting, or any web server that serves HTML files. Ensure the configured domain is updated in the metadata before adding a canonical URL or sitemap.
