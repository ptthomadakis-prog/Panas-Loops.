const beats = [
  {
    title: 'IN THE AIR',
    file: "[destroy lonely, lucki, glok40spaz] 'IN THE AIR'-Cm 150bpm- @panas_loops.mp3",
  },
  {
    title: 'TOP FLOOR',
    file: "[destroy lonely, lucki] 'TOP FLOOR'-Cm 140bpm- @panas_loops.mp3",
  },
  {
    title: 'FOREIGN',
    file: "[future, destroy lonely, lil baby] 'FOREIGN'- A#m 140bpm- @panas_loops.mp3",
  },
  {
    title: 'ATLANTA',
    file: "[future, lil baby, destroy lonely]'ATLANTA'-Cm 140bpm- @panas_loops.mp3",
  },
  {
    title: 'OUNCE',
    file: "[ian, summrs] 'OUNCE'-Cm 140bpm - @panas_loops.mp3",
  },
  {
    title: 'CRASH DA WHIP',
    file: "[ken carson, rich amiri, homixide gang] 'CRASH DA WHIP'- Am 130bpm - @panas_loops.mp3",
  },
  {
    title: 'LEAN',
    file: "[lucki, glokk40spaz] 'LEAN' Gm 140bpm - @panas_loops.mp3",
  },
  {
    title: 'ROAD',
    file: "[lucki, veeze] 'ROAD' Cm 141 bpm - @panas_loops.mp3",
  },
  {
    title: 'NOISY',
    file: "[young thug, future, destroy lonely] 'NOISY' Cm 140bpm - @panas_loops.mp3",
  },
  {
    title: 'SLATT',
    file: "[young thug, future] 'SLATT'-Cm 140bpm - @panas_loops.mp3",
  },
  {
    title: 'BIZZY BAP',
    file: "'BIZZY BAP'-Am 130bpm-@panas_loops.mp3",
  },
];

const licenses = [
  {
    name: 'MP3 Lease',
    price: '$19.99',
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

const activeBeat = fromUrl(beats, 'beat', beats[0]);
const activeLicense = fromUrl(licenses, 'license', licenses[0]);

document.title = `${activeLicense.name} - ${activeBeat.title} - PANAS`;
document.getElementById('backToBeat').href = premiumBeatPageUrl(activeBeat);
document.getElementById('licenseName').textContent = activeLicense.name;
document.getElementById('beatTitle').textContent = activeBeat.title;
document.getElementById('licensePrice').textContent = activeLicense.price;
document.getElementById('licenseDescription').textContent = activeLicense.description;
document.getElementById('licenseFeatures').innerHTML = activeLicense.features.map((feature) => `<li>${feature}</li>`).join('');

document.getElementById('addLicenseToCart').addEventListener('click', () => {
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
