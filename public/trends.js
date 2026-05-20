const trendState = {
  data: null,
  filtersReady: false,
};

const filterIds = {
  genre: 'genreFilter',
  mood: 'moodFilter',
  bpmRange: 'bpmFilter',
  status: 'statusFilter',
};

function getElement(id) {
  return document.getElementById(id);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function setText(id, value) {
  const element = getElement(id);
  if (element) element.textContent = value;
}

function uniqueValues(items, key) {
  return [...new Set(items.map((item) => item[key]).filter(Boolean))].sort();
}

function fillSelect(id, values, label) {
  const select = getElement(id);
  if (!select) return;

  select.innerHTML = [
    `<option value="">All ${escapeHtml(label)}</option>`,
    ...values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`),
  ].join('');
}

function setupFilters(trends) {
  if (trendState.filtersReady) return;

  fillSelect(filterIds.genre, uniqueValues(trends, 'genre'), 'genres');
  fillSelect(filterIds.mood, uniqueValues(trends, 'mood'), 'moods');
  fillSelect(filterIds.bpmRange, uniqueValues(trends, 'bpmRange'), 'BPM ranges');
  fillSelect(filterIds.status, uniqueValues(trends, 'status'), 'statuses');

  Object.values(filterIds).forEach((id) => {
    const select = getElement(id);
    if (select) select.addEventListener('change', renderTrendCards);
  });

  const resetButton = getElement('resetTrendFilters');
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      Object.values(filterIds).forEach((id) => {
        const select = getElement(id);
        if (select) select.value = '';
      });
      renderTrendCards();
    });
  }

  trendState.filtersReady = true;
}

function selectedFilters() {
  return Object.fromEntries(
    Object.entries(filterIds).map(([key, id]) => {
      const element = getElement(id);
      return [key, element ? element.value : ''];
    })
  );
}

function trendMatchesFilters(trend, filters) {
  return Object.entries(filters).every(([key, value]) => !value || trend[key] === value);
}

function renderHero(data) {
  setText('heroSignalState', data.sourceStatus || 'Trend source ready');
  setText('heroTopSignal', data.hero?.topSignal || data.trends?.[0]?.title || 'No signal');
  setText('heroTempoPocket', data.hero?.tempoPocket || '--');
  setText('heroMomentum', data.hero?.momentum || '--');
}

function renderTrendCards() {
  const data = trendState.data;
  const grid = getElement('trendCards');
  if (!data || !grid) return;

  const filters = selectedFilters();
  const visible = data.trends.filter((trend) => trendMatchesFilters(trend, filters));

  setText('trendResultCount', `${visible.length} trend signal${visible.length === 1 ? '' : 's'} showing`);
  setText('trendSourceStatus', data.sourceStatus || 'Trend source ready');

  if (!visible.length) {
    grid.innerHTML = '<div class="no-trends">No trend signals match these filters.</div>';
    return;
  }

  grid.innerHTML = visible
    .map((trend) => {
      const statusClass = `status-${String(trend.status || '').toLowerCase()}`;
      const tags = (trend.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join('');
      const evidenceTitle = escapeHtml(trend.evidence?.title || 'Catalog evidence');
      const evidenceUrl = trend.evidence?.url || '#';
      const evidenceMeta = escapeHtml(trend.evidence?.meta || '');

      return `
        <article class="trend-card ${statusClass}">
          <div class="trend-card-top">
            <span class="trend-card-source">${escapeHtml(trend.source)}</span>
            <span class="trend-status">${escapeHtml(trend.status)}</span>
          </div>
          <h3>${escapeHtml(trend.title)}</h3>
          <p class="trend-summary">${escapeHtml(trend.summary)}</p>
          <div class="trend-tags">${tags}</div>
          <div class="trend-meta-row">
            <span>${escapeHtml(trend.genre)} / ${escapeHtml(trend.mood)}</span>
            <b>${escapeHtml(trend.bpm)} BPM</b>
          </div>
          <div class="trend-evidence">
            <span>Evidence</span>
            <a href="${escapeHtml(evidenceUrl)}">${evidenceTitle}</a>
            <small>${evidenceMeta}</small>
          </div>
          <div class="trend-why">
            <span>Producer move</span>
            <p>${escapeHtml(trend.why)}</p>
          </div>
        </article>
      `;
    })
    .join('');
}

function renderEngine(data) {
  const output = getElement('aiOutput');
  const reasoning = getElement('reasoningStream');
  if (!output || !reasoning) return;

  setText('engineStatus', 'Trend read loaded');
  setText('engineScope', data.sourceStatus || 'Catalog and public preview signals');

  output.innerHTML = (data.engine || [])
    .map((card) => {
      const items = (card.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('');
      return `
        <article class="ai-card">
          <span>${escapeHtml(card.label)}</span>
          <h3>${escapeHtml(card.title)}</h3>
          <ul>${items}</ul>
        </article>
      `;
    })
    .join('');

  reasoning.innerHTML = (data.reasoning || [])
    .map((line, index) => `<div class="reasoning-line ${index === 0 ? 'is-active' : ''}">${escapeHtml(line)}</div>`)
    .join('');
}

function renderWeekly(data) {
  const weekly = data.weekly || {};
  setText('weeklySummaryText', weekly.summary || 'No weekly summary available.');
  setText('weeklySourceMeta', weekly.sourceMeta || '');

  const momentum = getElement('momentumBars');
  if (momentum) {
    momentum.innerHTML = (weekly.momentum || [])
      .map((item) => `
        <div class="momentum-row">
          <div class="momentum-row-header">
            <span>${escapeHtml(item.label)}</span>
            <b>${escapeHtml(item.score)}%</b>
          </div>
          <div class="momentum-track">
            <div class="momentum-fill" style="--score: ${Number(item.score) || 0}%"></div>
          </div>
        </div>
      `)
      .join('');
  }

  const topStyles = getElement('topStylesList');
  if (topStyles) {
    topStyles.innerHTML = (weekly.topStyles || [])
      .map((style) => `<li>${escapeHtml(style)}</li>`)
      .join('');
  }
}

function renderFutureModules(data) {
  const container = getElement('futureModules');
  if (!container) return;

  container.innerHTML = (data.futureModules || [])
    .map((module) => `
      <article class="future-module">
        <div>
          <span>${escapeHtml(module.label)}</span>
          <h3>${escapeHtml(module.title)}</h3>
          <p>${escapeHtml(module.detail)}</p>
        </div>
        <b>${escapeHtml(module.status)}</b>
      </article>
    `)
    .join('');
}

function renderTrends(data) {
  trendState.data = data;
  setupFilters(data.trends || []);
  renderHero(data);
  renderTrendCards();
  renderEngine(data);
  renderWeekly(data);
  renderFutureModules(data);
}

async function loadTrendData() {
  const refreshButton = getElement('rerunEngine');
  if (refreshButton) refreshButton.disabled = true;

  setText('trendSourceStatus', 'Loading trend signals...');
  setText('engineStatus', 'Loading');

  try {
    const response = await fetch('/api/trends', { cache: 'no-store' });
    if (!response.ok) throw new Error(`Trend API returned ${response.status}`);
    renderTrends(await response.json());
  } catch (error) {
    setText('heroSignalState', 'Trend feed unavailable');
    setText('trendResultCount', 'No trend signals available');
    setText('trendSourceStatus', error instanceof Error ? error.message : 'Trend API failed');
    setText('engineStatus', 'Trend read failed');

    const grid = getElement('trendCards');
    if (grid) grid.innerHTML = '<div class="no-trends">The trend feed could not be loaded. Try refreshing after the dev server is running.</div>';
  } finally {
    if (refreshButton) refreshButton.disabled = false;
  }
}

const refreshButton = getElement('rerunEngine');
if (refreshButton) refreshButton.addEventListener('click', loadTrendData);

loadTrendData();
