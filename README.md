# Panas Beats Store

This repo is set up as a Next.js beat shop with:

- static storefront files in `public/`
- public tagged previews in `public/previews/`
- protected full audio files in `private/audio/`
- PayPal and download API routes in `app/api/`
- a React premium beat page at `/premium-beat`

## Run Locally

```bash
npm install
npm run dev
```

Then open:

- Store homepage: `http://localhost:3000/`
- Static HTML store: `http://localhost:3000/index.html`
- Premium React page: `http://localhost:3000/premium-beat`
- Trends page: `http://localhost:3000/trends.html`

## PayPal Setup

`.env.local` should contain:

```env
PAYPAL_ENV=sandbox
PAYPAL_CLIENT_ID=your_paypal_client_id_here
PAYPAL_CLIENT_SECRET=your_paypal_client_secret_here
```

`PAYPAL_CLIENT_SECRET` must stay server-side only. Do not put final paid masters in `public/previews`; keep them in `private/audio`.

## Deployment Note

For the full protected PayPal download flow, deploy to a host that supports Next.js server routes, such as Vercel.

If you use a static host like GitHub Pages, it can only show the public storefront pages. The root `index.html` redirects static hosts into `public/index.html`.

Production PayPal is working only when `https://your-domain.example/api/paypal/config` returns JSON with a `clientId`. If that URL returns `404`, the site is being served statically and the cart cannot create or capture PayPal orders.

Do not deploy `private/audio` with a static host. Static hosting can expose those paid masters directly; they are protected only when the Next.js `/api/download` route serves them after PayPal verification.
