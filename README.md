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

On Windows, if PayPal API calls fail with `fetch failed`, run Next with the system certificate store:

```bash
npm run dev:system-ca
npm run start:system-ca
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

Current Vercel production deployment:

- `https://panas-loops.vercel.app`
- Project: `panas-loops`

If you use a static host like GitHub Pages, it can only show the public storefront pages. The root `index.html` redirects static hosts into `public/index.html`.

Production PayPal is working only when `https://your-domain.example/api/paypal/config` returns JSON with a `clientId`. If that URL returns `404`, the site is being served statically and the cart cannot create or capture PayPal orders.

Do not deploy `private/audio` with a static host. Static hosting can expose those paid masters directly; they are protected only when the Next.js `/api/download` route serves them after PayPal verification.

### Custom Domain DNS

`panasloops.eu` and `www.panasloops.eu` are added to the Vercel project, but DNS still needs to be changed at the domain provider.

In GoDaddy DNS, remove the GitHub Pages records and add:

```text
A  @    76.76.21.21
A  www  76.76.21.21
```

Vercel will verify the domain and issue SSL after DNS propagates. You can also point nameservers to Vercel instead:

```text
ns1.vercel-dns.com
ns2.vercel-dns.com
```

### Large Audio Assets

The Vercel deployment excludes large loop-kit ZIP archives and public loop-audio previews through `.vercelignore`.

To host these yourself using Vercel Blob:
1. Create a Blob store in the **Storage** tab of your Vercel Dashboard.
2. Install the SDK: `npm install @vercel/blob`
3. Pull the access token: `vercel env pull .env.local`
4. Run the upload script for your folders:
   ```bash
   # Example: Upload all wav and zip files in a folder
   node --env-file=.env.local scripts/upload-assets.mjs ./private/audio
   ```

## PayPal Troubleshooting

- `404` from `/api/paypal/config`: deploy the site as a Next.js app, not static files.
- `PayPal credentials were rejected`: make sure `PAYPAL_ENV` matches the PayPal REST app credentials. Sandbox credentials only work with `PAYPAL_ENV=sandbox`; live credentials only work with `PAYPAL_ENV=live`.
- `fetch failed` locally on Windows: use `npm run dev:system-ca` or `npm run start:system-ca`.
