# Beat Shop Website

This folder contains a beat shop website with public audio previews and protected PayPal downloads.

## Files

- `index.html` - homepage with a hero section and beat listings.
- `styles.css` - styling for the page layout and cards.
- `script.js` - beat data, audio preview support, and cart actions.
- `cart.js` - cart rendering and PayPal checkout button wiring.
- `../private/audio` - paid audio files served only after PayPal verification when the site is running through Next.js.
- `public/previews` - public preview audio used by the players.

## PayPal Setup

The protected download flow needs both PayPal values:

- `PAYPAL_CLIENT_ID` is public enough to load PayPal buttons.
- `PAYPAL_CLIENT_SECRET` must stay server-only in `.env.local`.

Setup:

1. Install Node.js.
2. Run `npm install`.
3. Copy `.env.local.example` to `.env.local`.
4. Add your PayPal app credentials to `.env.local`.
5. Run `npm run dev`.
6. Open the local URL printed by Next.js and use the HTML pages through that server.

The cart creates and captures PayPal orders through `/api/paypal/create-order` and `/api/paypal/capture-order`. Download buttons use `/api/download`, which checks PayPal before serving files from `private/audio`.

On the live domain, confirm `/api/paypal/config` returns JSON. If it returns `404`, the host is serving only static files and PayPal checkout cannot work there.

Do not publish this repo through GitHub Pages with `private/audio` included. A static host can expose the paid files directly instead of routing them through `/api/download`.

## Preview Files

The files in `public/previews` are public. Anyone can technically save a public preview, so do not put the final paid masters there for launch. Use tagged, watermarked, shortened, or lower-quality preview exports in `public/previews`, and keep the real files in `private/audio`.

## Content Edits

1. Replace the placeholder beat titles, descriptions, and prices in `script.js`.
2. Update your email and social links in `index.html`.
3. Replace preview MP3 files in `public/previews`, or update the preview paths in the JS files.
4. Each beat opens its own detail page with license terms.

## Premium Next.js Beat Page

This folder also includes a Next.js/Tailwind/Framer Motion premium beat page in `app/page.tsx`.

1. Install Node.js.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local URL printed by Next.js.

## Next Steps

- Add your own beat artwork images.
- Replace public previews with tagged preview exports.
- Deploy on a host that supports Next.js server routes, such as Vercel.
