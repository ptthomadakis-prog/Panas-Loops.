const beats = [
  {
    title: 'SLICED',
    info: 'Cm - 140 BPM - 2:21',
    price: '$19.99',
    file: 'SLICED tagged.mp3',
    page: 'browse-beats.html',
  },
  {
    title: 'IN THE AIR',
    info: 'Cm - 150 BPM - 2:08',
    price: '$19.99',
    file: "[destroy lonely, lucki, glok40spaz] 'IN THE AIR'-Cm 150bpm- @panas_loops.mp3",
    page: 'in-the-air.html',
  },
  {
    title: 'BIZZY BAP',
    info: 'Am - 130 BPM - 2:12',
    price: '$19.99',
    file: 'BIZZY BAP TAGGED.mp3',
    page: 'bizzy-bap.html',
  },
  {
    title: 'ATLANTA',
    info: 'Cm - 140 BPM - 2:45',
    price: '$25.00',
    file: 'ATLANTA tagged.mp3',
    page: 'atlanta.html',
  },
  {
    title: 'TOP FLOOR',
    info: 'Cm - 140 BPM - 2:24',
    price: '$19.99',
    file: 'TOP FLOOR tagged.mp3',
    page: 'browse-beats.html',
  },
  {
    title: 'TRIPPED OUT',
    info: 'Cm - 140 BPM - 2:17',
    price: '$19.99',
    file: "[destroy lonely, hxg, lucki] 'TRIPPED OUT'- Cm 140bpm - @panas_loops.mp3",
    page: 'browse-beats.html',
  },
];

const homeLoopKits = [
  {
    slug: 'chase',
    title: 'CHASE',
    info: 'Drake R&B - 140 BPM - Minor',
    cover: 'images/loops/chase.jpg',
  },
  {
    slug: 'flex',
    title: 'FLEX',
    info: 'Trap R&B - 140 BPM - Minor',
    cover: 'images/loops/flex.jpg',
  },
  {
    slug: 'luxury',
    title: 'LUXURY',
    info: 'R&B - 140 BPM - Minor',
    cover: 'images/loops/luxury.jpg',
  },
  {
    slug: 'attraction',
    title: 'ATTRACTION',
    info: 'Drake R&B - 140 BPM - Minor',
    cover: 'images/loops/attraction.jpg',
  },
];

const beatsGrid = document.getElementById('beatsGrid');
const homeLoopsGrid = document.getElementById('homeLoopsGrid');
let cart = JSON.parse(localStorage.getItem('panasCart') || '[]');

const playIcon = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7L8 5Z"/></svg>';
const pauseIcon = '<svg viewBox="0 0 24 24"><path d="M10 17H8V7h2v10Zm6 0h-2V7h2v10Z"/></svg>';

function audioPath(filename) {
  const isFilePage = window.location.protocol === 'file:';
  const isInPublicFolder = /\/public\//i.test(window.location.pathname.replace(/\\/g, '/'));
  const previewRoot = isFilePage && !isInPublicFolder ? 'public/previews' : 'previews';
  return `${previewRoot}/${encodeURIComponent(filename)}`;
}

function imagePath(title) {
  return `images/${beatSlug(title)}.png`;
}

function fallbackImagePath(title) {
  return `images/${beatSlug(title)}.jpg`;
}

function beatSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function beatImage(title) {
  return `<img src="${imagePath(title)}" alt="${title} artwork" loading="lazy" onerror="if (!this.dataset.fallback) { this.dataset.fallback = 'jpg'; this.src = '${fallbackImagePath(title)}'; } else { this.hidden = true; }" />`;
}

function saveCart() {
  localStorage.setItem('panasCart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.length;
  document.querySelectorAll('.cart-count').forEach((element) => {
    element.textContent = count;
  });
  document.querySelectorAll('.cart-button').forEach((button) => {
    button.textContent = `CART (${count})`;
  });
}

function addToCart(item) {
  cart.push(item);
  saveCart();
  updateCartUI();
  alert(`Added ${item.title} to cart.`);
}

function addBeatToCart(index) {
  const beat = beats[index];
  if (!beat) return;
  addToCart({
    title: beat.title,
    price: beat.price,
    page: beat.page,
    file: beat.file,
  });
}

function premiumBeatPageUrl(title) {
  return `premium-beat.html?beat=${encodeURIComponent(beatSlug(title))}`;
}

function renderBeats() {
  if (!beatsGrid) return;

  beatsGrid.innerHTML = beats
    .map((beat, index) => {
      return `
        <article class="beat-card">
          <div class="beat-badge">NEW</div>
          <div class="beat-image">${beatImage(beat.title)}</div>
          <div class="beat-details">
            <h3 class="beat-title">${beat.title}</h3>
            <div class="beat-player">
              <button id="beat-play-${index}" class="play-button" type="button" onclick="toggleBeat(${index})">&gt;</button>
              <div class="beat-waveform mini">
                <span class="bar h1"></span>
                <span class="bar h3"></span>
                <span class="bar h2"></span>
                <span class="bar h4"></span>
                <span class="bar h3"></span>
                <span class="bar h5"></span>
                <span class="bar h2"></span>
                <span class="bar h4"></span>
                <span class="bar h3"></span>
                <span class="bar h1"></span>
              </div>
              <audio id="beat-audio-${index}" src="${audioPath(beat.file)}"></audio>
            </div>
            <div class="beat-footer">
              <span class="beat-price">${beat.price}</span>
              <div class="beat-actions">
                <button onclick="viewBeat('${beatSlug(beat.title)}')">VIEW BEAT</button>
                <button onclick="addBeatToCart(${index})">ADD</button>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  addPlaybackListeners();
}

function renderHomeLoops() {
  if (!homeLoopsGrid) return;

  homeLoopsGrid.innerHTML = homeLoopKits
    .map((kit) => {
      return `
        <article class="beat-card loop-home-card">
          <div class="beat-badge">FREE</div>
          <div class="beat-image">
            <img src="${kit.cover}" alt="${kit.title} loop kit artwork" loading="lazy" onerror="this.hidden = true" />
          </div>
          <div class="beat-details">
            <h3 class="beat-title">${kit.title}</h3>
            <div class="beat-meta">${kit.info}</div>
            <div class="beat-footer">
              <span class="beat-price">FREE</span>
              <div class="beat-actions">
                <button onclick="viewLoopKit('${kit.slug}')">VIEW KIT</button>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

function toggleBeat(index) {
  const audio = document.getElementById(`beat-audio-${index}`);
  const button = document.getElementById(`beat-play-${index}`);
  if (!audio || !button) return;

  if (audio.paused) {
    pauseAllBeats();
    pauseFeaturedBeat();
    audio.play().catch(() => {
      button.textContent = '>';
    });
    button.textContent = '||';
  } else {
    audio.pause();
    button.textContent = '>';
  }
}

function pauseAllBeats() {
  document.querySelectorAll('.beat-player audio').forEach((audio) => audio.pause());
  document.querySelectorAll('.beat-player audio').forEach((audio) => {
    audio.currentTime = 0;
  });
  document.querySelectorAll('.play-button').forEach((button) => {
    button.textContent = '>';
  });
}

function toggleFeaturedBeat() {
  const audio = document.getElementById('featured-audio');
  const button = document.getElementById('featured-play-button');
  if (!audio || !button) return;

  if (audio.paused) {
    pauseAllBeats();
    audio.play().catch(() => {
      setFeaturedPlaying(false);
    });
    setFeaturedPlaying(true);
  } else {
    pauseFeaturedBeat();
  }
}

function setFeaturedPlaying(isPlaying) {
  const button = document.getElementById('featured-play-button');
  if (!button) return;

  button.innerHTML = isPlaying ? pauseIcon : playIcon;
  button.setAttribute('aria-label', isPlaying ? 'Pause IN THE AIR' : 'Play IN THE AIR');
}

function pauseFeaturedBeat() {
  const audio = document.getElementById('featured-audio');
  if (!audio) return;

  audio.pause();
  setFeaturedPlaying(false);
}

function addPlaybackListeners() {
  document.querySelectorAll('.beat-player audio').forEach((audio, index) => {
    audio.onended = () => {
      const button = document.getElementById(`beat-play-${index}`);
      if (button) button.textContent = '>';
    };
  });
}

function viewBeat(slug) {
  window.location.href = `premium-beat.html?beat=${encodeURIComponent(slug)}`;
}

function viewLoopKit(slug) {
  window.location.href = `loop-kit.html?kit=${encodeURIComponent(slug)}`;
}

function initializeCart() {
  updateCartUI();
}

function initializeFeaturedPlayer() {
  const featuredAudio = document.getElementById('featured-audio');
  if (featuredAudio) {
    featuredAudio.src = audioPath("[destroy lonely, lucki, glok40spaz] 'IN THE AIR'-Cm 150bpm- @panas_loops.mp3");
    featuredAudio.onended = () => setFeaturedPlaying(false);
  }
  setFeaturedPlaying(false);
}

initializeCart();
renderBeats();
renderHomeLoops();
initializeFeaturedPlayer();
