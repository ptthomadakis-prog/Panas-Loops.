const loopKits = [
  {
    slug: "chase",
    title: "CHASE",
    subtitle: "Drake inspired loop kit",
    cover: "images/loops/chase.jpg",
    genre: "Drake R&B",
    moods: ["Cold", "Luxury", "Late Night"],
    tags: ["Drake", "R&B", "Toronto"],
    bpm: 140,
    key: "Minor",
    loops: 10,
    description: "Moody Drake-style melodies with clean space for hooks, rap verses, and polished R&B drums.",
    preview: "previews/ATLANTA%20tagged.mp3",
    downloadFile: "'CHASE' LOOP KIT DRAKE.zip",
    downloads: 4210,
    newest: true
  },
  {
    slug: "flex",
    title: "FLEX",
    subtitle: "Trap R&B loop kit",
    cover: "images/loops/flex.jpg",
    genre: "Trap R&B",
    moods: ["Smooth", "Club", "Glossy"],
    tags: ["Chris Brown", "R&B", "Trap"],
    bpm: 140,
    key: "Minor",
    loops: 12,
    description: "Bouncy trap R&B ideas with glossy keys, vocal-friendly chords, and clean modern movement.",
    preview: "previews/%5Bfuture%2C%20destroy%20lonely%2C%20lil%20baby%5D%20'FOREIGN'-%20A%23m%20140bpm-%20%40panas_loops.mp3",
    downloadFile: "'FLEX'- TRAP RNB LOOP KIT CHRIS BROWN.zip",
    downloads: 3980,
    newest: true
  },
  {
    slug: "luxury",
    title: "LUXURY",
    subtitle: "Tory Lanez R&B loop kit",
    cover: "images/loops/luxury.jpg",
    genre: "R&B",
    moods: ["Luxury", "Smooth", "Emotional"],
    tags: ["Tory Lanez", "R&B", "Melodic"],
    bpm: 140,
    key: "Minor",
    loops: 14,
    description: "Premium R&B progressions, smooth lead ideas, and late-night textures for polished melodic records.",
    preview: "previews/%5Bfuture%2C%20destroy%20lonely%2C%20lil%20baby%5D%20'FOREIGN'-%20A%23m%20140bpm-%20%40panas_loops.mp3",
    downloadFile: "'LUXURY' RNB LOOP KIT TORY LANEZ.zip",
    downloads: 5120,
    newest: true
  },
  {
    slug: "attraction",
    title: "ATTRACTION",
    subtitle: "Drake melodic loop kit",
    cover: "images/loops/attraction.jpg",
    genre: "Drake R&B",
    moods: ["Romantic", "Dark", "Atmospheric"],
    tags: ["Drake", "Melodic", "R&B"],
    bpm: 140,
    key: "Minor",
    loops: 11,
    description: "Atmospheric melodies and romantic dark chords made for Drake-style hooks and clean artist pockets.",
    preview: "previews/ATLANTA%20tagged.mp3",
    downloadFile: "ATTRACTION LOOP KIT DRAKE.zip",
    downloads: 3675
  },
  {
    slug: "breeze-vol-2",
    title: "BREEZE VOL.2",
    subtitle: "Dancehall loop kit",
    cover: "images/loops/breeze-vol-2.jpg",
    genre: "Dancehall",
    moods: ["Tropical", "Smooth", "Summer"],
    tags: ["Dancehall", "Afro", "Island"],
    bpm: 100,
    key: "Minor",
    loops: 16,
    description: "Warm dancehall melodies, island textures, and smooth rhythmic starters for summer records.",
    preview: "previews/%5Bfuture%2C%20destroy%20lonely%2C%20lil%20baby%5D%20'FOREIGN'-%20A%23m%20140bpm-%20%40panas_loops.mp3",
    downloadFile: "BREEZE VOL.2 DANCEHALL.zip",
    downloads: 4588
  },
  {
    slug: "dreams",
    title: "DREAMS",
    subtitle: "R&B loop kit",
    cover: "images/loops/dreams.jpg",
    genre: "R&B",
    moods: ["Dreamy", "Emotional", "Floating"],
    tags: ["R&B", "Soul", "Melodic"],
    bpm: 130,
    key: "Minor",
    loops: 13,
    description: "Dreamy R&B chord work, soft melodic layers, and emotional late-night ideas.",
    preview: "previews/LEAN%20tagged.mp3",
    downloadFile: "DREAMS MEEK MILL RNB LOOP KIT - TURN INTO MP3.zip",
    downloads: 3360
  },
  {
    slug: "iceman",
    title: "ICEMAN",
    subtitle: "Drake loop kit",
    cover: "images/loops/iceman.jpg",
    genre: "Drake R&B",
    moods: ["Cold", "Minimal", "Dark"],
    tags: ["Drake", "Toronto", "Trap Soul"],
    bpm: 140,
    key: "Minor",
    loops: 10,
    description: "Cold, minimal Drake-style phrases with clean melodic tension and space for direct vocals.",
    preview: "previews/ATLANTA%20tagged.mp3",
    downloadFile: "ICEMAN LOOP KIT DRAKE.zip",
    downloads: 3902
  },
  {
    slug: "late-night",
    title: "LATE NIGHT",
    subtitle: "Bryson Tiller loop kit",
    cover: "images/loops/late-night.jpg",
    genre: "Trap Soul",
    moods: ["Late Night", "Intimate", "Smooth"],
    tags: ["Bryson Tiller", "Trap Soul", "R&B"],
    bpm: 130,
    key: "Minor",
    loops: 15,
    description: "Trap soul progressions, soft keys, and intimate textures built for late-night R&B records.",
    preview: "previews/TOP%20FLOOR%20tagged.mp3",
    downloadFile: "LATE NIGHT LOOP KIT BRYSON TILLER- TURN INTO MP3.zip",
    downloads: 4860
  },
  {
    slug: "long-time",
    title: "LONG TIME",
    subtitle: "Rod Wave loop kit",
    cover: "images/loops/long-time.jpg",
    genre: "Pain Rap",
    moods: ["Emotional", "Soulful", "Pain"],
    tags: ["Rod Wave", "Pain Rap", "Soul"],
    bpm: 120,
    key: "Minor",
    loops: 12,
    description: "Soulful piano and emotional melodic starters for pain rap, heartfelt hooks, and big vocal moments.",
    preview: "previews/ROAD%20tagged.mp3",
    downloadFile: "LONG TIME ROD WAVE LOOP KIT.zip",
    downloads: 3524
  },
  {
    slug: "love",
    title: "LOVE",
    subtitle: "Brent Faiyaz loop kit",
    cover: "images/loops/love.jpg",
    genre: "Alternative R&B",
    moods: ["Romantic", "Minimal", "Soulful"],
    tags: ["Brent Faiyaz", "R&B", "Alternative"],
    bpm: 128,
    key: "Minor",
    loops: 15,
    description: "Minimal alternative R&B loops with romantic chords, tasteful space, and moody bounce.",
    preview: "previews/LEAN%20tagged.mp3",
    downloadFile: "LOVE LOOP KIT BRENT FAIYAZ TURN INTO MP3.zip",
    downloads: 4994
  }
];

const loopAudioFiles = {
  attraction: [
    "01-alone-d-m-160bpm-rnb-loop.mp3",
    "02-fall-bm-90bpm-rnb-loop.mp3",
    "03-lies-cm-120bpm-rnb-loop.mp3",
    "04-los-angeles-em-120bpm.mp3",
    "05-marbella-dm-120bpm-rnb-loop.mp3",
    "06-one-way-f-m-105bpm-rnb-trap-loop.mp3",
    "07-sounds-f-m-120bpm-trap-rnb-loop.mp3",
    "08-with-you-d-m-90bpm-rnb-loop.mp3"
  ],
  "breeze-vol-2": [
    "01-done-a-m-100-bpm.mp3",
    "02-drip-a-m-100-bpm.mp3",
    "03-games-g-minor-100-bpm.mp3",
    "04-greece-c-m-100-bpm.mp3",
    "05-metro-c-m-100-bpm.mp3",
    "06-sin-c-minor-100-bpm.mp3",
    "07-sun-c-minor-100-bpm.mp3",
    "08-sweet-cm-97-bpm.mp3"
  ],
  chase: [
    "01-back-gm-120bpm-rnb-loop.mp3",
    "02-ice-gm-120bpm-rnb-trap-loop.mp3",
    "03-needs-cm-110bpm-rnb-trap-loop.mp3",
    "04-nights-d-m-120bpm-rnb-loop.mp3",
    "05-one-way-cm-110bpm-trap-rnb-loop.mp3",
    "06-pain-cm-110bpm-rnb-trap-loop.mp3",
    "07-same-bm-108bpm-rnb-trap-loop.mp3",
    "08-toronto-gm-120npm-rnb-trap-loop.mp3"
  ],
  dreams: [
    "01-be-real-dm-170bpm-r-b-trap-loop.mp3",
    "02-fly-cm-170bpm-r-b-trap-digital-comp-pasnas.mp3",
    "03-meet-cm-170bpm-r-b-loop.mp3",
    "04-no-more-f-m-100bpm-r-b-trap-loop.mp3",
    "05-trust-cm-154bpm-r-b-trap-loop.mp3"
  ],
  flex: [
    "01-chrome-cm-120bpm-rnb-loop.mp3",
    "02-city-lights-c-m-120bpm-rnb-loop.mp3",
    "03-dreams-fm-120bpm-rnb-loop.mp3",
    "04-fire-gm-120bpm-trap-rnb-loop.mp3",
    "05-grind-cm-120bpm-trap-rnb-loop.mp3",
    "06-money-am-120bpm-trap-rnb-loop.mp3",
    "07-racks-cm-120bpm-rnb-loop.mp3",
    "08-sleep-d-m-120bpm-rnb-trap-loop.mp3"
  ],
  iceman: [
    "01-6-fm-120bpm.mp3",
    "02-bunce-am-130bpm.mp3",
    "03-coffee-fm-96bpm.mp3",
    "04-goose-fm-120bpm.mp3",
    "05-grow-am-115bpm.mp3",
    "06-lucky-g-m-120bpm.mp3",
    "07-splash-am-130bpm.mp3",
    "08-wyd-cm-95bpm.mp3"
  ],
  "late-night": [
    "01-california-bm-120bpm-rnb-trap-loop.mp3",
    "02-crazy-bm-120-bpm-rnb-trap-loop.mp3",
    "03-long-nights-g-m-90bpm-rnb-loop.mp3",
    "04-mellow-cm-105bpm-rnb-loop.mp3",
    "05-numbers-cm-80bpm-rnb-trap-loop.mp3",
    "06-rari-dm-110bpm-rnb-trap-loop.mp3",
    "07-right-my-wrongs-am-120bpm-rnb-trap-loop.mp3",
    "08-see-me-dm-120bpm-rnb-trap-loop.mp3",
    "09-struggle-a-m-105bpm-trap-rnb.mp3",
    "10-wants-am-120bpm-rnb-loop.mp3"
  ],
  "long-time": [
    "01-delulu-gm-120bpm-rnb-trap-loop.mp3",
    "02-emotion-dm-97bpm-rnb-loop.mp3",
    "03-feel-me-g-m-105bpm-trap-rnb-loop.mp3",
    "04-hard-times-c-m-120bpm-rnb-trap-loop.mp3",
    "05-long-time-cm-120bpm-rnb-trap.mp3",
    "06-raw-fm-120bpm-rnb-trap-loop.mp3",
    "07-slide-cm-105bpm-rnb-trap.mp3",
    "08-smooth-cm-120bpm-rnb-trap-loop.mp3",
    "09-long-time-loop-kit-audio.mp3"
  ],
  love: [
    "01-antisocial-am-120bpm-rnb-loop.mp3",
    "02-cash-f-m-120bpm-r-b-trap-loop.mp3",
    "03-cologne-am-100bpm-trap-r-b-loop.mp3",
    "04-fire-f-m-120bpm-rnb-loop.mp3",
    "05-heaven-cm-120bpm-rnb-loop.mp3",
    "06-life-em-100bpm-rnb-trap-loop.mp3",
    "07-love-cm-105bpm-trap-rnb-loop.mp3",
    "08-mind-f-m-90bpm-rnb-loop.mp3",
    "09-recognize-cm-120bpm-rnb-loop.mp3"
  ],
  luxury: [
    "01-ambition-cm-120bpm.mp3",
    "02-dreams-bm-90bpm-trap-rnb-loop.mp3",
    "03-drive-em-120bpm-rnb-trap-loop.mp3",
    "04-gucci-cm-120bpm-trap-rnb-loop.mp3",
    "05-hurts-cm-120bpm-rnb-loop.mp3",
    "06-hustle-am-110bpm-rnb-trap-loop.mp3",
    "07-lies-c-m-120bpm-rnb-trap-loop.mp3",
    "08-life-a-m-120bpm-rnb-trap-loop.mp3",
    "09-relax-cm-90bpm-rnb-trap-loop.mp3",
    "10-sensational-a-m-120bpm-rnb-trap-loop.mp3"
  ]
};

function loopDisplayName(fileName) {
  return fileName
    .replace(/\.(mp3|wav|m4a|ogg)$/i, "")
    .replace(/^\d+-/, "")
    .split("-")
    .filter(Boolean)
    .map((word) => (word.length <= 3 && /^(rnb|bpm|trap|wav|mp3|cm|dm|fm|gm|am|bm|em)$/.test(word) ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(" ");
}

function assetPath(folder, parts) {
  const isFilePage = window.location.protocol === "file:";
  const isInPublicFolder = /\/public\//i.test(window.location.pathname.replace(/\\/g, "/"));
  const root = isFilePage && !isInPublicFolder ? `public/${folder}` : folder;
  return [root, ...parts.map((part) => encodeURIComponent(part))].join("/");
}

loopKits.forEach((kit) => {
  const files = loopAudioFiles[kit.slug] || [];
  kit.audio = files.map((fileName) => ({
    title: loopDisplayName(fileName),
    fileName,
    src: assetPath("loop-audio", [kit.slug, fileName])
  }));
  kit.loops = kit.audio.length || kit.loops;
});

window.loopKits = loopKits;

const loopState = {
  query: "",
  genre: "All",
  bpm: "All",
  mood: "All",
  key: "All",
  activeAudio: null,
  selectedKit: null
};

function unique(values) {
  return Array.from(new Set(values)).sort();
}

function compactNumber(value) {
  return new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

function waveformBars() {
  return Array.from({ length: 28 }, (_, index) => {
    const height = 20 + Math.abs(Math.sin(index * 1.7)) * 58 + (index % 4) * 5;
    return `<span style="height:${height}%"></span>`;
  }).join("");
}

function renderFilter(containerId, values, key, suffix = "") {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = ["All", ...values].map((value) => {
    const label = value === "All" ? "All" : `${value}${suffix}`;
    const active = loopState[key] === String(value) ? " active" : "";
    return `<button class="loop-filter-button${active}" type="button" data-filter-key="${key}" data-filter-value="${value}">${label}</button>`;
  }).join("");
}

function kitCard(kit) {
  return `
    <article class="loop-card" data-kit="${kit.slug}">
      <div class="loop-card-art">
        <img src="${kit.cover}" alt="${kit.title} loop kit artwork" onerror="this.src='images/in-the-air.png'" />
        <span class="loop-free-badge">FREE</span>
      </div>
      <span class="loop-card-label">${kit.subtitle}</span>
      <h3>${kit.title}</h3>
      <p>${kit.description}</p>
      <div class="loop-card-meta">
        <div><b>${kit.key}</b><span>KEY</span></div>
        <div><b>${kit.loops}</b><span>LOOPS</span></div>
      </div>
      <div class="loop-tags">
        <span>${kit.genre}</span>
        ${kit.moods.slice(0, 2).map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <div class="loop-player" data-player="${kit.slug}">
        <button class="loop-play" type="button" data-preview="${kit.slug}" aria-label="Play ${kit.title} preview">Play</button>
        <div class="loop-wave">${waveformBars()}</div>
      </div>
      <div class="loop-actions">
        <button class="button button-primary" type="button" data-download-kit="${kit.slug}">DOWNLOAD</button>
        <a class="button loop-view-button" href="loop-kit.html?kit=${kit.slug}">VIEW KIT</a>
      </div>
    </article>
  `;
}

function renderLoops() {
  const grid = document.getElementById("loopsGrid");
  if (!grid) return;
  const needle = loopState.query.toLowerCase().trim();
  const filtered = loopKits.filter((kit) => {
    const text = [kit.title, kit.subtitle, kit.genre, kit.key, kit.description, ...kit.tags, ...kit.moods].join(" ").toLowerCase();
    return (!needle || text.includes(needle))
      && (loopState.genre === "All" || kit.genre === loopState.genre)
      && (loopState.bpm === "All" || String(kit.bpm) === loopState.bpm)
      && (loopState.mood === "All" || kit.moods.includes(loopState.mood))
      && (loopState.key === "All" || kit.key === loopState.key);
  });

  grid.innerHTML = filtered.length ? filtered.map(kitCard).join("") : `<p class="hero-subtitle">No kits match that filter yet.</p>`;
}

function renderFeatureRows() {
  const newest = document.getElementById("newestGrid");
  if (newest) {
    newest.innerHTML = loopKits.filter((kit) => kit.newest).map((kit) => `
      <article class="newest-card">
        <img src="${kit.cover}" alt="${kit.title} artwork" onerror="this.src='images/in-the-air.png'" />
        <div>
          <h3>${kit.title}</h3>
          <p>${kit.genre} / ${kit.bpm} BPM / ${kit.key}</p>
        </div>
      </article>
    `).join("");
  }
}

function stopActiveAudio() {
  if (!loopState.activeAudio) return;
  clearTimeout(loopState.activeAudio.timer);
  loopState.activeAudio.audio.pause();
  loopState.activeAudio.audio.currentTime = 0;
  loopState.activeAudio.player.classList.remove("playing");
  loopState.activeAudio.button.textContent = "Play";
  loopState.activeAudio = null;
}

function playKitSequence(kit, player, button) {
  if (!kit.audio.length) return;
  stopActiveAudio();

  const audio = new Audio();
  let index = 0;

  const playCurrent = () => {
    const loop = kit.audio[index];
    button.textContent = `${index + 1}/${kit.audio.length}`;
    audio.src = loop.src;
    audio.currentTime = 0;
    audio.play().catch(stopActiveAudio);
    loopState.activeAudio.timer = window.setTimeout(nextLoop, 10000);
  };

  const nextLoop = () => {
    clearTimeout(loopState.activeAudio?.timer);
    audio.pause();
    index += 1;
    if (index >= kit.audio.length) {
      stopActiveAudio();
      return;
    }
    playCurrent();
  };

  loopState.activeAudio = { audio, player, button, timer: 0 };
  player.classList.add("playing");
  audio.addEventListener("ended", nextLoop);
  playCurrent();
}

function openDownloadModal(slug) {
  const kit = loopKits.find((item) => item.slug === slug);
  const modal = document.getElementById("loopModal");
  if (!kit || !modal) return;
  loopState.selectedKit = kit;
  document.getElementById("modalKitTitle").textContent = kit.title;
  document.getElementById("loopFormMessage").textContent = "";
  modal.hidden = false;
  document.getElementById("leadEmail").focus();
}

function startDownload(downloadUrl) {
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = "";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

async function saveLead(event) {
  event.preventDefault();
  const kit = loopState.selectedKit;
  if (!kit) return;

  const email = document.getElementById("leadEmail").value.trim();
  const producerName = document.getElementById("producerName").value.trim();
  const optIn = document.getElementById("leadOptIn").checked;
  const message = document.getElementById("loopFormMessage");
  const submitButton = event.submitter || event.currentTarget.querySelector('button[type="submit"]');
  message.textContent = "Unlocking...";
  if (submitButton) submitButton.disabled = true;

  try {
    const response = await fetch("/api/loop-leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, producerName, optIn, kitSlug: kit.slug })
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "Could not unlock download");
    message.textContent = "Download starting...";
    startDownload(payload.downloadUrl);
    window.setTimeout(() => {
      document.getElementById("loopModal").hidden = true;
      if (submitButton) submitButton.disabled = false;
    }, 900);
  } catch (error) {
    const isLocalFile = window.location.protocol === "file:";
    message.textContent = isLocalFile
      ? "Open the site through localhost so the email unlock can run."
      : error.message || "Could not unlock download. Try again.";
    if (submitButton) submitButton.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilter("genreFilters", unique(loopKits.map((kit) => kit.genre)), "genre");
  renderFilter("bpmFilters", unique(loopKits.map((kit) => String(kit.bpm))), "bpm", " BPM");
  renderFilter("moodFilters", unique(loopKits.flatMap((kit) => kit.moods)), "mood");
  renderFilter("keyFilters", unique(loopKits.map((kit) => kit.key)), "key");
  renderFeatureRows();
  renderLoops();

  document.getElementById("loopSearch")?.addEventListener("input", (event) => {
    loopState.query = event.target.value;
    renderLoops();
  });

  document.addEventListener("click", (event) => {
    const filterButton = event.target.closest("[data-filter-key]");
    const downloadButton = event.target.closest("[data-download-kit]");
    const previewButton = event.target.closest("[data-preview]");

    if (filterButton) {
      loopState[filterButton.dataset.filterKey] = filterButton.dataset.filterValue;
      renderFilter("genreFilters", unique(loopKits.map((kit) => kit.genre)), "genre");
      renderFilter("bpmFilters", unique(loopKits.map((kit) => String(kit.bpm))), "bpm", " BPM");
      renderFilter("moodFilters", unique(loopKits.flatMap((kit) => kit.moods)), "mood");
      renderFilter("keyFilters", unique(loopKits.map((kit) => kit.key)), "key");
      renderLoops();
    }

    if (downloadButton) {
      openDownloadModal(downloadButton.dataset.downloadKit);
    }

    if (previewButton) {
      const player = previewButton.closest(".loop-player");
      const kit = loopKits.find((item) => item.slug === previewButton.dataset.preview);
      if (loopState.activeAudio?.player === player) {
        stopActiveAudio();
        return;
      }
      if (kit) playKitSequence(kit, player, previewButton);
    }
  });

  document.getElementById("closeLoopModal")?.addEventListener("click", () => {
    document.getElementById("loopModal").hidden = true;
  });

  document.getElementById("loopLeadForm")?.addEventListener("submit", saveLead);
});
