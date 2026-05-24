const beats = [
  {
    title: 'IN THE AIR',
    file: "[destroy lonely, lucki, glok40spaz] 'IN THE AIR'-Cm 150bpm- @panas_loops.mp3",
    // After uploading, paste your Blob URLs here:
    blobUrls: {
      wav: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/%5Bdestroy%20lonely%2C%20lucki%2C%20glok40spaz%5D%20%27IN%20THE%20AIR%27-Cm%20150bpm-%20%40panas_loops%20WAV.wav",
      zip: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/IN%20THE%20AIR.zip"
    },
    files: { mp3: true, wav: true, zip: true }
  },
  {
    title: 'TOP FLOOR',
    file: "[destroy lonely, lucki] 'TOP FLOOR'-Cm 140bpm- @panas_loops.mp3",
    blobUrls: { wav: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/%5Bdestroy%20lonely%2C%20lucki%5D%20%27TOP%20FLOOR%27-Cm%20140bpm-%20%40panas_loops.wav", zip: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/TOP%20FLOOR.zip" },
    files: { mp3: true, wav: false, zip: false }
  },
  {
    title: 'FOREIGN',
    file: "[future, destroy lonely, lil baby] 'FOREIGN'- A#m 140bpm- @panas_loops.mp3",
    blobUrls: { wav: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/%5Bfuture%2C%20destroy%20lonely%2C%20lil%20baby%5D%20%27FOREIGN%27-%20A%23m%20140bpm-%20%40panas_loops.wav", zip: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/FOREIGN.zip" },
    files: { mp3: true, wav: false, zip: false }
  },
  {
    title: 'ATLANTA',
    file: "[future, lil baby, destroy lonely]'ATLANTA'-Cm 140bpm- @panas_loops.mp3",
    blobUrls: { wav: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/%5Bfuture%2C%20lil%20baby%2C%20destroy%20lonely%5D%20%27ATLANTA%27-Cm%20140bpm-%20%40panas_loops.wav", zip: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/ATLANTA.zip" },
    files: { mp3: true, wav: false, zip: false }
  },
  {
    title: 'OUNCE',
    file: "[ian, summrs] 'OUNCE'-Cm 140bpm - @panas_loops.mp3",
    blobUrls: { wav: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/%5Bian%2C%20summrs%5D%20%27OUNCE%27-Cm%20140bpm%20-%20%40panas_loops.wav", zip: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/OUNCE.zip" },
    files: { mp3: true, wav: false, zip: false }
  },
  {
    title: 'CRASH DA WHIP',
    file: "[ken carson, rich amiri, homixide gang] 'CRASH DA WHIP'- Am 130bpm - @panas_loops.mp3",
    blobUrls: { wav: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/%5Bken%20carson%2C%20rich%20amiri%2C%20homixide%20gang%5D%20%27CRASH%20DA%20WHIP%27-Am%20130bpm-%20%40panas_loops.wav", zip: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/CRASH%20DA%20WHIP.zip" },
    files: { mp3: true, wav: false, zip: false }
  },
  {
    title: 'LEAN',
    file: "[lucki, glokk40spaz] 'LEAN' Gm 140bpm - @panas_loops.mp3",
    blobUrls: { wav: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/%5Blucki%2C%20glokk40spaz%5D%20%27LEAN%27-Gm%20140bpm-%20%40panas_loops.wav", zip: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/LEAN.zip" },
    files: { mp3: true, wav: false, zip: false }
  },
  {
    title: 'ROAD',
    file: "[lucki, veeze] 'ROAD' Cm 141 bpm - @panas_loops.mp3",
    blobUrls: { wav: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/%5Blucki%2C%20veeze%5D%20%27ROAD%27-Cm%20141bpm-%20%40panas_loops.wav", zip: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/ROAD.zip" },
    files: { mp3: true, wav: false, zip: false }
  },
  {
    title: 'NOISY',
    file: "[young thug, future, destroy lonely] 'NOISY' Cm 140bpm - @panas_loops.mp3",
    blobUrls: { wav: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/%5Byoung%20thug%2C%20future%2C%20destroy%20lonely%5D%20%27NOISY%27-Cm%20140bpm%20-%20%40panas_loops.wav", zip: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/NOISY.zip" },
    files: { mp3: true, wav: false, zip: false }
  },
  {
    title: 'SLATT',
    file: "[young thug, future] 'SLATT'-Cm 140bpm - @panas_loops.mp3",
    blobUrls: { wav: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/%5Byoung%20thug%2C%20future%5D%20%27SLATT%27-Cm%20140bpm%20-%20%40panas_loops.wav", zip: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/SLATT.zip" },
    files: { mp3: true, wav: false, zip: false }
  },
  {
    title: 'BIZZY BAP',
    file: "'BIZZY BAP'-Am 130bpm-@panas_loops.mp3",
    blobUrls: { wav: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/%5Bian%2C%20summrs%5D%20%27OUNCE%27-Cm%20140bpm%20-%20%40panas_loops.wav", zip: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/OUNCE.zip" },
    files: { mp3: true, wav: false, zip: false }
  },
  {
    title: 'SLICED',
    file: "[destroy lonely, ken carson, southside] 'SLICED'-Cm 140bpm -@panas_loops.mp3",
    blobUrls: { wav: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/%5Bdestroy%20lonely%2C%20ken%20carson%2C%20southside%5D%20%27SLICED%27-Cm%20140bpm%20-%40panas_loops.wav", zip: "https://kt0zshql4zhnkqdc.public.blob.vercel-storage.com/SLICED.zip" },
    files: { mp3: true, wav: false, zip: false }
  },
  {
    title: 'TRIPPED OUT',
    file: "[destroy lonely, hxg, lucki] 'TRIPPED OUT'- Cm 140bpm - @panas_loops.mp3",
    blobUrls: {
      wav: "https://acpwxurzgc2lujlk.private.blob.vercel-storage.com/[destroy%20lonely,%20hxg,%20lucki]%20'TRIPPED%20OUT'-%20Cm%20140bpm%20-%20@panas_loops.wav?vercel-blob-valid-until=1779647116907&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfYUNQd1hVclpHYzJMdWpMSyIsIm93bmVySWQiOiJ0ZWFtXzc4Q1M5WHRzWURrTHBMaVd0WjVQVnRHSiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzc5NjkwMTgxMjk5LCJpYXQiOjE3Nzk2NDY5ODAwNTR9.kpXEnR0YUgTY8XAIxPort2RWncMj8AgzdRxOoziF8IY&vercel-blob-signature=YESyX2bT6o62GITHyUel7xrNu8XLTcnsudniS2czlEg",
      zip: "https://acpwxurzgc2lujlk.private.blob.vercel-storage.com/tripped.zip?vercel-blob-valid-until=1779647152035&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfYUNQd1hVclpHYzJMdWpMSyIsIm93bmVySWQiOiJ0ZWFtXzc4Q1M5WHRzWURrTHBMaVd0WjVQVnRHSiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzc5NjkwMTgxMjk5LCJpYXQiOjE3Nzk2NDY5ODAwNTR9.kpXEnR0YUgTY8XAIxPort2RWncMj8AgzdRxOoziF8IY&vercel-blob-signature=Bmhc-ATakp_5aXt56i7jmZPadJQPCswEezlXEVokrq8"
    },
    files: { mp3: true, wav: true, zip: true }
  },
];

const licenses = [
  {
    name: 'MP3 Lease',
    price: '$19.99',
    deliverables: ['mp3'],
    description: 'Tagged MP3 file with a basic non-exclusive license for smaller releases.',
    features: [
      'Tagged MP3 file only',
      'Basic non-exclusive license',
      'Up to 50,000 total streams across all streaming platforms combined',
      '1 music video allowed',
      'Streaming platforms allowed',
      'No Content ID',
      'Producer credit required',
      'Cannot resell beat',
    ],
  },
  {
    name: 'WAV Lease',
    price: '$29.99',
    deliverables: ['mp3', 'wav'],
    description: 'Untagged WAV and MP3 files with higher audio quality for monetized releases.',
    features: [
      'Untagged WAV + MP3',
      'Higher audio quality',
      'Non-exclusive license',
      'Up to 100,000 total streams across all streaming platforms combined',
      '1-2 music videos allowed',
      'Streaming + monetization allowed',
      'No Content ID',
      'Producer credit required',
      'Cannot resell',
    ],
  },
  {
    name: 'Trackout Lease',
    price: '$59.99',
    deliverables: ['mp3', 'wav', 'zip'],
    description: 'Full ZIP delivery with stems for serious mixing, mastering, and commercial releases.',
    features: [
      'WAV + MP3 + full stems (ZIP file)',
      'Individual instrument tracks (drums, melody, 808s, etc.)',
      'Full mixing flexibility',
      'Non-exclusive license',
      'Up to 100,000 total streams across all streaming platforms combined',
      'Multiple music videos allowed',
      'Commercial use allowed',
      'No Content ID',
      'Cannot resell',
    ],
  },
  {
    name: 'Exclusive Rights',
    price: '$299.99',
    deliverables: ['mp3', 'wav', 'zip'],
    description: 'Full exclusive usage rights for one buyer only, with the beat removed from the store after purchase.',
    features: [
      'Full rights for one buyer only',
      'Beat removed from store after purchase',
      'WAV + MP3 + stems included',
      'Unlimited streams across all platforms',
      'Unlimited music videos',
      'Commercial use + Content ID allowed',
      'Producer credit required (publishing split negotiable)',
      'Buyer gets exclusive usage rights',
    ],
  },
];

let cart = JSON.parse(localStorage.getItem('panasCart') || '[]');

function slugify(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function fromUrl(collection, key, fallback) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get(key);
  return collection.find((item) => slugify(item.title || item.name) === slug) || fallback;
}

function saveCart() {
  localStorage.setItem('panasCart', JSON.stringify(cart));
}

function premiumBeatPageUrl(beat) {
  return `premium-beat.html?beat=${encodeURIComponent(slugify(beat.title))}`;
}

function licenseIsAvailable(beat, license) {
  if (!beat.files) return true;
  return license.deliverables.every((fileType) => beat.files[fileType]);
}

const activeBeat = fromUrl(beats, 'beat', beats[0]);
const activeLicense = fromUrl(licenses, 'license', licenses[0]);
const addLicenseButton = document.getElementById('addLicenseToCart');
const isLicenseAvailable = licenseIsAvailable(activeBeat, activeLicense);

document.title = `${activeLicense.name} - ${activeBeat.title} - PANAS`;
document.getElementById('backToBeat').href = premiumBeatPageUrl(activeBeat);
document.getElementById('licenseName').textContent = activeLicense.name;
document.getElementById('beatTitle').textContent = activeBeat.title;
document.getElementById('licensePrice').textContent = activeLicense.price;
document.getElementById('licenseDescription').textContent = activeLicense.description;
document.getElementById('licenseFeatures').innerHTML = activeLicense.features.map((feature) => `<li>${feature}</li>`).join('');

if (!isLicenseAvailable) {
  addLicenseButton.disabled = true;
  addLicenseButton.textContent = 'Unavailable';
  document.getElementById('licenseDescription').textContent = 'This license is not available for this beat yet because the required delivery files are missing.';
}

addLicenseButton.addEventListener('click', () => {
  if (!isLicenseAvailable) return;

  cart.push({
    beatTitle: activeBeat.title,
    licenseName: activeLicense.name,
    title: activeBeat.title,
    price: activeLicense.price,
    page: premiumBeatPageUrl(activeBeat),
    file: activeBeat.file,
  });
  saveCart();
  window.location.href = 'cart.html';
});
