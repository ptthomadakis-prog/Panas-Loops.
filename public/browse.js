const browseBeats = [
  "[destroy lonely, lucki, glok40spaz] 'IN THE AIR'-Cm 150bpm- @panas_loops.mp3",
  "TOP FLOOR tagged.mp3",
  "[future, destroy lonely, lil baby] 'FOREIGN'- A#m 140bpm- @panas_loops.mp3",
  "ATLANTA tagged.mp3",
  "OUNCE tagged.mp3",
  "CRASH DA WHIP tagged.mp3",
  "LEAN tagged.mp3",
  "ROAD tagged.mp3",
  "NOISY tagged.mp3",
  "SLATT tagged.mp3",
  "BIZZY BAP TAGGED.mp3",
  "SLICED tagged.mp3",
  "[destroy lonely, hxg, lucki] 'TRIPPED OUT'- Cm 140bpm - @panas_loops.mp3",
];

const browseGrid = document.getElementById('browseBeatsGrid');

function audioPath(filename) {
  const isFilePage = window.location.protocol === 'file:';
  const isInPublicFolder = /\/public\//i.test(window.location.pathname.replace(/\\/g, '/'));
  const previewRoot = isFilePage && !isInPublicFolder ? 'public/previews' : 'previews';
  return `${previewRoot}/${encodeURIComponent(filename)}`;
}

function beatTitleFromFilename(filename) {
  const quotedTitle = filename.match(/'([^']+)'/);
  return quotedTitle ? quotedTitle[1] : filename.replace(/\s+tagged\.mp3$/i, '').replace(/\.mp3$/i, '');
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

function beatPrice(title) {
  return title === 'ATLANTA' ? '$25.00' : '$19.99';
}

function premiumBeatPageUrl(title) {
  return `premium-beat.html?beat=${encodeURIComponent(beatSlug(title))}`;
}

function renderBrowseBeats() {
  browseGrid.innerHTML = browseBeats
    .map((filename, index) => {
      const title = beatTitleFromFilename(filename);
      return `
        <article class="beat-card">
          <div class="beat-badge">NEW</div>
          <div class="beat-image">${beatImage(title)}</div>
          <div class="beat-details">
            <h3 class="beat-title">${title}</h3>
            <div class="beat-player">
              <button id="browse-play-${index}" class="play-button" type="button" onclick="toggleBrowseBeat(${index})">▶</button>
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
              <audio id="browse-audio-${index}" src="${audioPath(filename)}"></audio>
            </div>
            <div class="beat-footer">
              <span class="beat-price">${beatPrice(title)}</span>
              <div class="beat-actions">
                <button onclick="viewBrowseBeat('${beatSlug(title)}')">VIEW BEAT</button>
                <button onclick="addBrowseToCart(${index})">ADD</button>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  addBrowsePlaybackListeners();
}

function addBrowseToCart(index) {
  const filename = browseBeats[index];
  if (!filename) return;
  const title = beatTitleFromFilename(filename);
  if (typeof addToCart === 'function') {
    addToCart({
      title,
      price: beatPrice(title),
      page: 'browse-beats.html',
      file: filename,
    });
  } else {
    alert(`${title} added to cart.`);
  }
}

function toggleBrowseBeat(index) {
  const audio = document.getElementById(`browse-audio-${index}`);
  const button = document.getElementById(`browse-play-${index}`);
  if (!audio || !button) return;

  if (audio.paused) {
    pauseAllBrowseBeats();
    audio.play().catch(() => {
      button.textContent = '▶';
    });
    button.textContent = '❚❚';
  } else {
    audio.pause();
    button.textContent = '▶';
  }
}

function pauseAllBrowseBeats() {
  document.querySelectorAll('.beat-player audio').forEach((audio) => audio.pause());
  document.querySelectorAll('.beat-player audio').forEach((audio) => {
    audio.currentTime = 0;
  });
  document.querySelectorAll('.play-button').forEach((button) => {
    button.textContent = '▶';
  });
}

function addBrowsePlaybackListeners() {
  document.querySelectorAll('.beat-player audio').forEach((audio, index) => {
    audio.onended = () => {
      const button = document.getElementById(`browse-play-${index}`);
      if (button) button.textContent = '▶';
    };
  });
}

function viewBrowseBeat(slug) {
  window.location.href = `premium-beat.html?beat=${encodeURIComponent(slug)}`;
}

renderBrowseBeats();
