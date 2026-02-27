<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:** Node.js (v16+) and a Gmail account with an app password or OAuth credentials.

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` or `.env.local` and fill in the values. (The server loads both `.env` and `.env.local`, with the latter taking precedence.)
   * `EMAIL_USER` – the Gmail address that will receive inquiries (`ledgifysolutionsllc@gmail.com`)
   * `EMAIL_PASS` – an app‑specific password generated in your Google account (or OAuth token credentials)
   * Optional: `PORT` for the backend server (defaults to 5000)

   If you see `Missing credentials for "PLAIN"` or `EAUTH` errors, it means
   one of the variables above is empty or undefined. Make sure the file is
   loaded (restart the server after editing) and that the values are correct.

3. Start the backend and frontend together for local development:
   ```bash
   npm run dev:all
   ```
   This will launch Vite on port 3000 and the Express server on port 5000. Vite is configured to proxy `/api` requests to the server.

4. Visit `http://localhost:3000` and submit a query via the contact modal; you should receive an email at the address configured above.

### Deploying

This project is structured to work seamlessly on Vercel. The React app is built
statically while API routes under the `api/` directory are converted into
serverless functions.

1. Push the repository to a linked Vercel project.
2. In the Vercel dashboard set the following **Environment Variables**:
   * `EMAIL_USER` – your Gmail address (e.g. `ledgifysolutionsllc@gmail.com`)
   * `EMAIL_PASS` – the app password or OAuth token used for SMTP
   * `VITE_SITE_URL` – the public URL of the site (e.g. `https://legiify-sols.vercel.app`).
  This value is exposed client‑side via `import.meta.env.VITE_SITE_URL`.
* `VITE_API_BASE` – optional base path for API calls (defaults to `/api`).
   * optionally `API_BASE` if you want to prefix the API path (defaults to `/api`)

   These variables are available in both the build and runtime environments.

3. Deploy; Vercel will automatically publish the frontend and wire up the
   `api/inquiry.ts` serverless function. Form submissions will work exactly the
   same as in development.

4. The frontend always sends requests to `/api/inquiry` (unless `API_BASE` is
   overridden), so the appropriate endpoint will be invoked whether you’re
   running locally or on Vercel.

If you choose another host, ensure you deploy the Node server or rewrite the
functions accordingly and set the same environment variables. The key is that
**production** must provide a working endpoint at `/api/inquiry`; otherwise the
form will fail silently.

The frontend will hit `/api/inquiry` relative to the current origin; adjust
`API_BASE` or proxy settings if you need a different path.

### Social sharing and SEO

All pages set meta tags dynamically using a small helper (`utils/seo.ts`) once
React hydrates. During development or client navigation the values are
updated to reflect the current route. The helper also prefixes relative image
paths with the configured site URL so `og:image` is always an absolute link.

**Important:** many social apps and search engine crawlers do **not** execute
JavaScript. When these bots request a URL they only see the static `index.html`
that’s served. That file therefore includes a set of **default metadata** (title,
description, image, canonical URL) which applies to every route. This ensures
that sharing the site (e.g. on WhatsApp, Facebook, Twitter) will at least show
basic information. If you need *page‑specific* metadata to appear in link
previews you must render HTML for each route on the server or prerender the
routes at build time; frameworks such as Next.js, Gatsby, or `vite-plugin-prerender`
can handle this.

The aHrefs audit should now report a valid canonical link and image for the
home page; other routes still rely on client‑side updates unless pre‑rendered.

### Vercel deployment

Because the app uses `BrowserRouter`, refreshing or directly navigating to a path
(e.g. `/services`) requires the server to always serve `index.html`. On Vercel
this is handled by a `vercel.json` file at the project root with a rewrite rule:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

Without that rule you'll see a `NOT_FOUND` error when reloading a sub–route; the
`vercel.json` we added already contains the necessary rewrite. If you deploy
elsewhere, configure an equivalent fallback.
