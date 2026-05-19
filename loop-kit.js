const detailRoot = document.getElementById("loopKitDetail");
let detailAudio = null;
let detailTimer = null;
let detailButton = null;

function stopDetailPreview() {
  if (detailTimer) window.clearTimeout(detailTimer);
  if (detailAudio) {
    detailAudio.pause();
    detailAudio.currentTime = 0;
  }
  if (detailButton) detailButton.textContent = "Play 10s";
  detailTimer = null;
  detailAudio = null;
  detailButton = null;
}

function playDetailPreview(src, button) {
  if (detailButton === button) {
    stopDetailPreview();
    return;
  }

  stopDetailPreview();
  detailButton = button;
  detailButton.textContent = "Playing";
  detailAudio = new Audio(src);
  detailAudio.play().catch(stopDetailPreview);
  detailAudio.addEventListener("ended", stopDetailPreview);
  detailTimer = window.setTimeout(stopDetailPreview, 10000);
}

function renderLoopKitDetail() {
  if (!detailRoot || !window.loopKits) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("kit") || "";
  const kit = window.loopKits.find((item) => item.slug === slug);

  if (!kit) {
    detailRoot.innerHTML = `
      <section class="loop-detail-empty container">
        <p class="breadcrumb">LOOP KIT NOT FOUND</p>
        <h1>That kit is not in the vault.</h1>
        <a class="button button-primary" href="loops.html">BACK TO LOOPS</a>
      </section>
    `;
    return;
  }

  document.title = `${kit.title} Loop Kit - PANAS`;
  detailRoot.innerHTML = `
    <section class="loop-detail-hero">
      <div class="container loop-detail-grid">
        <div class="loop-detail-art">
          <img src="${kit.cover}" alt="${kit.title} loop kit artwork" onerror="this.src='images/in-the-air.png'" />
        </div>
        <div class="loop-detail-copy">
          <p class="breadcrumb">FREE LOOP KIT / ${kit.genre}</p>
          <h1>${kit.title}</h1>
          <p class="hero-subtitle">${kit.description} Free download. Not royalty-free; PANAS keeps 50% of royalties on releases using this kit.</p>
          <div class="loop-card-meta">
            <div><b>${kit.key}</b><span>KEY</span></div>
            <div><b>${kit.audio.length}</b><span>LOOPS</span></div>
          </div>
          <div class="loop-tags">
            ${[kit.genre, ...kit.moods, ...kit.tags].map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="hero-actions">
            <button class="button button-primary" type="button" data-download-kit="${kit.slug}">DOWNLOAD KIT</button>
            <a class="button button-secondary" href="loops.html">BACK TO LOOPS</a>
          </div>
        </div>
      </div>
    </section>

    <section class="container loop-detail-list-section">
      <div class="section-header">
        <div>
          <span class="section-label">INCLUDED LOOPS</span>
          <h2>Every loop in ${kit.title}</h2>
        </div>
      </div>
      <div class="loop-detail-list">
        ${kit.audio.map((loop, index) => `
          <article class="loop-detail-row">
            <span class="loop-detail-index">${String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>${loop.title}</h3>
              <p>${loop.fileName}</p>
            </div>
            <button class="button loop-view-button" type="button" data-detail-preview="${loop.src}">Play 10s</button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderLoopKitDetail();

  document.addEventListener("click", (event) => {
    const preview = event.target.closest("[data-detail-preview]");
    if (!preview) return;
    playDetailPreview(preview.dataset.detailPreview, preview);
  });
});
