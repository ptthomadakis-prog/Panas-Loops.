const beats = [
  {
    title: 'IN THE AIR',
    key: 'Cm',
    bpm: '150',
    length: '2:08',
    price: '$19.99',
    image: 'images/in-the-air.png',
    file: "[destroy lonely, lucki, glok40spaz] 'IN THE AIR'-Cm 150bpm- @panas_loops.mp3",
    files: {
      mp3: "[destroy lonely, lucki, glok40spaz] 'IN THE AIR'-Cm 150bpm- @panas_loops.mp3",
      wav: "[destroy lonely, lucki, glok40spaz] 'IN THE AIR'-Cm 150bpm- @panas_loops WAV.wav",
      zip: "IN THE AIR.zip"
    },
    tags: ['dark', 'rage', 'opium', 'underground', 'cinematic'],
    compatibility: ['Destroy Lonely', 'Lucki', 'Ken Carson', 'Future', 'Veeze'],
    description: 'Cold melodic pressure with clipped drums, negative space, and a late-night chrome finish.',
    notes: 'Keep the vocal intimate and dry in the first eight bars, then widen the hook with doubles and filtered ad-libs. The beat leaves pockets for whisper flows, sudden triplet runs, and one clean melodic switch before the second drop.'
  },
  {
    title: 'TOP FLOOR',
    key: 'Cm',
    bpm: '140',
    length: '2:24',
    price: '$19.99',
    image: 'images/top-floor.png',
    file: "TOP FLOOR tagged.mp3",
    files: {
      mp3: "[destroy lonely, lucki] 'TOP FLOOR'-Cm 140bpm- @panas_loops.mp3",
      wav: "[destroy lonely, lucki] 'TOP FLOOR'-Cm 140bpm- @panas_loops.wav",
      zip: "TOP FLOOR.zip"
    },
    tags: ['dark', 'luxury', 'night', 'melodic', 'underground'],
    compatibility: ['Destroy Lonely', 'Lucki', 'Kankan', 'Autumn!', 'Summrs'],
    description: 'A penthouse-level loop with icy melodies, clean bounce, and room for a confident low-register vocal.',
    notes: 'Let the first verse sit relaxed and expensive. The hook works best with a wider stack, short ad-libs, and a melodic response line every two bars.'
  },
  {
    title: 'FOREIGN',
    key: 'A#m',
    bpm: '140',
    length: '2:31',
    price: '$19.99',
    image: 'images/foreign.png',
    file: "[future, destroy lonely, lil baby] 'FOREIGN'- A#m 140bpm- @panas_loops.mp3",
    files: {
      mp3: "[future, destroy lonely, lil baby] 'FOREIGN'- A#m 140bpm- @panas_loops.mp3",
      wav: "[future, destroy lonely, lil baby] 'FOREIGN'- A#m 140bpm- @panas_loops.wav",
      zip: "FOREIGN.zip"
    },
    tags: ['trap', 'foreign', 'chrome', 'bounce', 'late night'],
    compatibility: ['Future', 'Lil Baby', 'Destroy Lonely', 'Gunna', 'Young Thug'],
    description: 'Glossy trap motion with luxury-car energy, polished drums, and a hook-ready pocket.',
    notes: 'Start direct and rhythmic, then make the hook more melodic. This one likes clean punch-ins, confident doubles, and sharp bar endings.'
  },
  {
    title: 'ATLANTA',
    key: 'Cm',
    bpm: '140',
    length: '2:45',
    price: '$25.00',
    image: 'images/atlanta.png',
    file: "ATLANTA tagged.mp3",
    files: {
      mp3: "[future, lil baby, destroy lonely]'ATLANTA'-Cm 140bpm- @panas_loops.mp3",
      wav: "[future, lil baby, destroy lonely]'ATLANTA'-Cm 140bpm- @panas_loops WAV.wav",
      zip: "ATLANTA.zip"
    },
    tags: ['atlanta', 'trap', 'dark', 'street', 'premium'],
    compatibility: ['Future', 'Lil Baby', 'Young Thug', 'Gunna', 'Lil Keed'],
    description: 'Heavy Atlanta bounce with polished low end, cold keys, and a big commercial street record feel.',
    notes: 'Use a strong first line and keep the cadence tight. The beat has enough weight for a direct hook, so avoid overfilling the pocket.'
  },
  {
    title: 'OUNCE',
    key: 'Cm',
    bpm: '140',
    length: '2:18',
    price: '$19.99',
    image: 'images/ounce.png',
    file: "OUNCE tagged.mp3",
    files: {
      mp3: "[ian, summrs] 'OUNCE'-Cm 140bpm - @panas_loops.mp3",
      wav: "[ian, summrs] 'OUNCE'-Cm 140bpm - @panas_loops WAV.wav",
      zip: "OUNCE.zip"
    },
    tags: ['pluggnb', 'float', 'clean', 'melodic', 'gloss'],
    compatibility: ['Ian', 'Summrs', 'Autumn!', 'Kankan', 'Rich Amiri'],
    description: 'A clean melodic bounce with airy space, glossy chords, and a smooth underground pocket.',
    notes: 'Keep the vocal bright and close. The hook can be simple and repetitive, with small melodic changes doing the heavy lifting.'
  },
  {
    title: 'CRASH DA WHIP',
    key: 'Am',
    bpm: '130',
    length: '2:20',
    price: '$19.99',
    image: 'images/crash-da-whip.png',
    file: "CRASH DA WHIP tagged.mp3",
    files: {
      mp3: "[ken carson, rich amiri, homixide gang] 'CRASH DA WHIP'- Am 130bpm - @panas_loops.mp3",
      wav: "[ken carson, rich amiri, homixide gang] 'CRASH DA WHIP'- Am 130bpm - @panas_loops WAV.wav",
      zip: "CRASH DAW WHIP.zip"
    },
    tags: ['rage', 'distorted', 'aggressive', 'opium', 'moshpit'],
    compatibility: ['Ken Carson', 'Homixide Gang', 'Rich Amiri', 'Destroy Lonely', 'Yeat'],
    description: 'Aggressive distorted drums, raw synth energy, and a reckless hook section built for movement.',
    notes: 'Use short, punchy phrases and let the beat answer between lines. The hook should feel like a command, not a paragraph.'
  },
  {
    title: 'LEAN',
    key: 'Gm',
    bpm: '140',
    length: '2:16',
    price: '$19.99',
    image: 'images/lean.png',
    file: "LEAN tagged.mp3",
    files: {
      mp3: "[lucki, glokk40spaz] 'LEAN' Gm 140bpm - @panas_loops.mp3",
      wav: "[lucki, glokk40spaz] 'LEAN' Gm 140bpm - @panas_loops WAV.wav",
      zip: "LEAN.zip"
    },
    tags: ['dark', 'slurred', 'minimal', 'street', 'late night'],
    compatibility: ['Lucki', 'Glokk40Spaz', 'Veeze', 'Babyface Ray', 'Rx Papi'],
    description: 'Minimal, heavy, and hypnotic with a woozy lead and enough negative space for low-key delivery.',
    notes: 'Do not rush it. A lazy cadence, dry lead vocal, and quiet doubles will make the drums feel heavier.'
  },
  {
    title: 'ROAD',
    key: 'Cm',
    bpm: '141',
    length: '2:22',
    price: '$19.99',
    image: 'images/road.png',
    file: "ROAD tagged.mp3",
    files: {
      mp3: "[lucki, veeze] 'ROAD' Cm 141 bpm - @panas_loops.mp3",
      wav: "[lucki, veeze] 'ROAD' Cm 141 bpm - @panas_loops WAV.wav",
      zip: "ROAD.zip"
    },
    tags: ['road', 'detroit', 'dark', 'motion', 'minimal'],
    compatibility: ['Lucki', 'Veeze', 'Babyface Ray', 'Rio Da Yung OG', 'Skilla Baby'],
    description: 'A cold road-trip pocket with simple drums, deadpan bounce, and hypnotic late-night repetition.',
    notes: 'This works best with conversational bars. Keep the hook understated and let the repetition build the mood.'
  },
  {
    title: 'NOISY',
    key: 'Cm',
    bpm: '140',
    length: '2:10',
    price: '$19.99',
    image: 'images/noisy.png',
    file: "NOISY tagged.mp3",
    files: {
      mp3: "[young thug, future, destroy lonely] 'NOISY' Cm 140bpm - @panas_loops.mp3"
    },
    tags: ['chaotic', 'trap', 'dark', 'melodic', 'experimental'],
    compatibility: ['Young Thug', 'Future', 'Destroy Lonely', 'SoFaygo', 'Yeat'],
    description: 'Chaotic melodic trap with sharp ear-candy, strange movement, and a vocal pocket that can go weird fast.',
    notes: 'Try a strange first melody and commit to it. The beat rewards personality, odd ad-libs, and unexpected pitch movement.'
  },
  {
    title: 'SLATT',
    key: 'Cm',
    bpm: '140',
    length: '2:26',
    price: '$19.99',
    image: 'images/slatt.png',
    file: "SLATT tagged.mp3",
    files: {
      mp3: "[young thug, future] 'SLATT'-Cm 140bpm - @panas_loops.mp3",
      wav: "[young thug, future] 'SLATT'-Cm 140bpm - @panas_loops WAV.wav",
      zip: "SLATT.zip"
    },
    tags: ['slime', 'atlanta', 'trap', 'melodic', 'dark'],
    compatibility: ['Young Thug', 'Future', 'Gunna', 'Lil Keed', 'Yak Gotti'],
    description: 'Slime-coated Atlanta bounce with eerie melody work, rolling drums, and a hook that wants ad-libs.',
    notes: 'Push the ad-libs forward and make the hook feel loose. The verse can be tighter, but the chorus should float.'
  },
  {
    title: 'BIZZY BAP',
    key: 'Am',
    bpm: '130',
    length: '2:12',
    price: '$19.99',
    image: 'images/bizzy-bap.png',
    file: "BIZZY BAP TAGGED.mp3",
    files: {
      mp3: "'BIZZY BAP'-Am 130bpm-@panas_loops.mp3",
      wav: "'BIZZY BAP'-Am 130bpm-@panas_loops WAV.wav",
      zip: "BIZZY BAP.zip"
    },
    tags: ['bap', 'raw', 'dark', 'bounce', 'underground'],
    compatibility: ['Bizzy Banks', 'Kenzo B', 'Fivio Foreign', 'Sheff G', 'Sleepy Hallow'],
    description: 'A darker drill-adjacent bounce with raw drums, sharp space, and a direct high-energy vocal lane.',
    notes: 'Keep the delivery tight and percussive. This beat likes confident pauses, short hook phrases, and stacked endings.'
  },
  {
    title: 'SLICED',
    key: 'Cm',
    bpm: '140',
    length: '2:21',
    price: '$19.99',
    image: 'images/sliced.jpg',
    file: "SLICED tagged.mp3",
    files: {
      mp3: "[destroy lonely, ken carson, southside] 'SLICED'-Cm 140bpm -@panas_loops.mp3",
      wav: "[destroy lonely, ken carson, southside] 'SLICED'-Cm 140bpm -@panas_loops.wav",
      zip: "SLICED.zip"
    },
    tags: ['dark', 'trap', 'opium', 'southside', 'underground'],
    compatibility: ['Destroy Lonely', 'Ken Carson', 'Southside', 'Future', 'Homixide Gang'],
    description: 'A dark 140 BPM trap cut with sharp bounce, cold melody work, and a focused hook pocket.',
    notes: 'Keep the hook direct and let the drums talk between lines. Short melodic phrases and tight ad-libs will sit best.'
  },
  {
    title: 'TRIPPED OUT',
    key: 'Cm',
    bpm: '140',
    length: '2:17',
    price: '$19.99',
    image: 'images/tripped-out.png',
    file: "[destroy lonely, hxg, lucki] 'TRIPPED OUT'- Cm 140bpm - @panas_loops.mp3",
    files: {
      mp3: "[destroy lonely, hxg, lucki] 'TRIPPED OUT'- Cm 140bpm - @panas_loops.mp3",
      wav: "[destroy lonely, hxg, lucki] 'TRIPPED OUT'- Cm 140bpm - @panas_loops.wav",
      zip: "tripped.zip"
    },
    tags: ['melodic', 'trippy', 'bounce', 'ambient'],
    compatibility: ['Destroy Lonely', 'Lucki', 'So Faygo'],
    description: 'Smooth beat with an ambient sample and hard 808s.',
    notes: 'Keep the vocals atmospheric with some reverb. The pocket is wide open for melodic flows and rhythmic variation.'
  }
];

const audio = document.getElementById('premiumAudio');
const playButton = document.getElementById('playButton');
const modalPlay = document.getElementById('modalPlay');
const waveform = document.getElementById('waveform');
const waveProgress = document.getElementById('waveProgress');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const liveState = document.getElementById('liveState');
const fullscreenButton = document.getElementById('fullscreenButton');
const listenModal = document.getElementById('listenModal');
const closeModal = document.getElementById('closeModal');
const artTilt = document.querySelector('[data-tilt]');
const beatArtwork = document.getElementById('beatArtwork');

function slugify(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function beatFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('beat') || 'in-the-air';
  return beats.find((beat) => slugify(beat.title) === slug) || beats[0];
}

const activeBeat = beatFromUrl();

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function audioPath(filename) {
  return `/previews/${encodeURIComponent(filename)}`;
}

function licensePageUrl(beat, license) {
  return `license.html?beat=${encodeURIComponent(slugify(beat.title))}&license=${encodeURIComponent(slugify(license.name))}`;
}

function renderTags(targetId, tags) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = tags.map((tag) => `<span>${tag}</span>`).join('');
}

function renderLicenses(beat) {
  const licenses = [
    {
      name: 'MP3 Lease',
      price: '$19.99',
      deliverables: ['mp3'],
      detail: 'Tagged MP3 file with a basic non-exclusive license for smaller releases.',
      features: [
        'Tagged MP3 file only',
        'Basic non-exclusive license',
        'Up to 50,000 total streams across all streaming platforms combined',
        '1 music video allowed',
        'Streaming platforms allowed',
        'No Content ID',
        'Producer credit required',
        'Cannot resell beat'
      ]
    },
    {
      name: 'WAV Lease',
      price: '$29.99',
      deliverables: ['mp3', 'wav'],
      detail: 'Untagged WAV and MP3 files with higher audio quality for monetized releases.',
      features: [
        'Untagged WAV + MP3',
        'Higher audio quality',
        'Non-exclusive license',
        'Up to 100,000 total streams across all streaming platforms combined',
        '1-2 music videos allowed',
        'Streaming + monetization allowed',
        'No Content ID',
        'Producer credit required',
        'Cannot resell'
      ]
    },
    {
      name: 'Trackout Lease',
      price: '$59.99',
      deliverables: ['mp3', 'wav', 'zip'],
      detail: 'Full ZIP delivery with stems for serious mixing, mastering, and commercial releases.',
      features: [
        'WAV + MP3 + full stems (ZIP file)',
        'Individual instrument tracks (drums, melody, 808s, etc.)',
        'Full mixing flexibility',
        'Non-exclusive license',
        'Up to 100,000 total streams across all streaming platforms combined',
        'Multiple music videos allowed',
        'Commercial use allowed',
        'No Content ID',
        'Cannot resell'
      ]
    },
    {
      name: 'Exclusive Rights',
      price: '$299.99',
      deliverables: ['mp3', 'wav', 'zip'],
      detail: 'Full exclusive usage rights for one buyer only, with the beat removed from the store after purchase.',
      features: [
        'Full rights for one buyer only',
        'Beat removed from store after purchase',
        'WAV + MP3 + stems included',
        'Unlimited streams across all platforms',
        'Unlimited music videos',
        'Commercial use + Content ID allowed',
        'Producer credit required (publishing split negotiable)',
        'Buyer gets exclusive usage rights'
      ]
    }
  ];

  document.getElementById('licenseGrid').innerHTML = licenses.map((license, index) => {
    const isAvailable = license.deliverables.every((fileType) => beat.files && beat.files[fileType]);
    return `
    <article class="license-card ${index === 2 ? 'featured-license' : ''}">
      <h3>${license.name}</h3>
      <strong>${license.price}</strong>
      <p>${license.detail}</p>
      <ul>${license.features.map((feature) => `<li>${feature}</li>`).join('')}</ul>
      <button type="button" ${isAvailable ? `onclick="window.location.href='${licensePageUrl(beat, license)}'"` : 'disabled'}>${isAvailable ? 'Buy License' : 'Unavailable'}</button>
    </article>
  `;
  }).join('');
}

function renderSimilar(beat) {
  const similar = beats.filter((item) => item.title !== beat.title).slice(0, 4);
  document.getElementById('similarRow').innerHTML = similar.map((item) => `
    <article onclick="window.location.href='premium-beat.html?beat=${slugify(item.title)}'">
      <img src="${item.image}" alt="${item.title} artwork" onerror="this.src='hero.jpg'" />
      <b>${item.title}</b>
      <span>${item.key} · ${item.bpm} BPM</span>
    </article>
  `).join('');
}

function renderBeat(beat) {
  document.title = `${beat.title} - Premium Beat License`;
  beatArtwork.src = beat.image;
  beatArtwork.alt = `${beat.title} beat artwork`;
  beatArtwork.onerror = () => {
    beatArtwork.src = 'hero.jpg';
  };

  const beatTitle = document.getElementById('beatTitle');
  beatTitle.textContent = beat.title;
  beatTitle.dataset.text = beat.title;

  setText('beatBpm', beat.bpm);
  setText('beatKey', beat.key);
  setText('beatLength', beat.length);
  setText('playerTitle', beat.title);
  setText('modalTitle', beat.title);
  setText('producerNotes', beat.notes);

  document.getElementById('beatMetaLine').innerHTML = `
    <span>Produced by <b>PANAS LOOPS</b></span>
    <span>Uploaded May 12, 2026</span>
  `;

  renderTags('beatTags', beat.tags);
  renderTags('compatibilityTags', beat.compatibility);
  renderLicenses(beat);
  renderSimilar(beat);

  audio.src = audioPath(beat.file);
  audio.load();
  durationEl.textContent = beat.length;
}

function formatTime(value) {
  if (!Number.isFinite(value)) return '0:00';
  const minutes = Math.floor(value / 60);
  const seconds = String(Math.floor(value % 60)).padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function setPlaying(isPlaying) {
  playButton.textContent = isPlaying ? '||' : '>';
  modalPlay.textContent = isPlaying ? '||' : '>';
  liveState.textContent = isPlaying ? 'LIVE PREVIEW' : 'READY';
  liveState.classList.toggle('playing', isPlaying);
}

function toggleAudio() {
  if (audio.paused) {
    audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  } else {
    audio.pause();
    setPlaying(false);
  }
}

function updateProgress() {
  const progress = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  waveProgress.style.width = `${progress}%`;
  currentTimeEl.textContent = formatTime(audio.currentTime);
}

renderBeat(activeBeat);
setPlaying(false);

playButton.addEventListener('click', toggleAudio);
modalPlay.addEventListener('click', toggleAudio);

audio.addEventListener('loadedmetadata', () => {
  durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', () => setPlaying(false));

waveform.addEventListener('click', (event) => {
  if (!audio.duration) return;
  const bounds = waveform.getBoundingClientRect();
  audio.currentTime = ((event.clientX - bounds.left) / bounds.width) * audio.duration;
});

fullscreenButton.addEventListener('click', () => {
  listenModal.hidden = false;
});

closeModal.addEventListener('click', () => {
  listenModal.hidden = true;
});

if (artTilt) {
  artTilt.addEventListener('mousemove', (event) => {
    const frame = artTilt.querySelector('.art-frame');
    const bounds = artTilt.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    frame.style.transform = `rotateX(${y * -7}deg) rotateY(${x * 7}deg)`;
  });

  artTilt.addEventListener('mouseleave', () => {
    artTilt.querySelector('.art-frame').style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}
