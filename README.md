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

3. Start the backend and frontend together:
   ```bash
   npm run dev:all
   ```
   This will launch Vite on port 3000 and the Express server on port 5000. Vite is configured to proxy `/api` requests to the server.

4. Visit `http://localhost:3000` and submit a query via the contact modal; you should receive an email at the address configured above.

### Deploying

When deploying, make sure your hosting platform supports running both the React app and a small Express API, and set the appropriate environment variables (`EMAIL_USER`, `EMAIL_PASS`, etc.) on the server.

The frontend will hit `/api/inquiry` relative to the current origin; adjust `API_BASE` or proxy settings if you need a different path.

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
