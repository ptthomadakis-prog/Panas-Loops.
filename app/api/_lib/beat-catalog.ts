export type CartRequestItem = {
  title?: string;
  beatTitle?: string;
  licenseName?: string;
};

type BeatCatalogItem = {
  priceCents: number;
  file: string;
};

const beatCatalog: Record<string, BeatCatalogItem> = {
  "IN THE AIR": {
    priceCents: 1999,
    file: "[destroy lonely, lucki, glok40spaz] 'IN THE AIR'-Cm 150bpm- @panas_loops.mp3",
  },
  "TOP FLOOR": {
    priceCents: 1999,
    file: "[destroy lonely, lucki] 'TOP FLOOR'-Cm 140bpm- @panas_loops.mp3",
  },
  FOREIGN: {
    priceCents: 1999,
    file: "[future, destroy lonely, lil baby] 'FOREIGN'- A#m 140bpm- @panas_loops.mp3",
  },
  ATLANTA: {
    priceCents: 2500,
    file: "[future, lil baby, destroy lonely]'ATLANTA'-Cm 140bpm- @panas_loops.mp3",
  },
  OUNCE: {
    priceCents: 1999,
    file: "[ian, summrs] 'OUNCE'-Cm 140bpm - @panas_loops.mp3",
  },
  "CRASH DA WHIP": {
    priceCents: 1999,
    file: "[ken carson, rich amiri, homixide gang] 'CRASH DA WHIP'- Am 130bpm - @panas_loops.mp3",
  },
  LEAN: {
    priceCents: 1999,
    file: "[lucki, glokk40spaz] 'LEAN' Gm 140bpm - @panas_loops.mp3",
  },
  ROAD: {
    priceCents: 1999,
    file: "[lucki, veeze] 'ROAD' Cm 141 bpm - @panas_loops.mp3",
  },
  NOISY: {
    priceCents: 1999,
    file: "[young thug, future, destroy lonely] 'NOISY' Cm 140bpm - @panas_loops.mp3",
  },
  SLATT: {
    priceCents: 1999,
    file: "[young thug, future] 'SLATT'-Cm 140bpm - @panas_loops.mp3",
  },
  "BIZZY BAP": {
    priceCents: 1999,
    file: "'BIZZY BAP'-Am 130bpm-@panas_loops.mp3",
  },
};

const licensePrices: Record<string, number> = {
  "MP3 Lease": 1999,
  "WAV Lease": 2999,
  "Trackout Lease": 5999,
  "Exclusive Rights": 29999,
};

function titleFromValue(value: unknown) {
  const text = String(value || "");
  const quotedTitle = text.match(/'([^']+)'/);
  return (quotedTitle ? quotedTitle[1] : text).replace(/\.mp3$/i, "").trim();
}

export function normalizeCartItems(items: CartRequestItem[]) {
  return items.map((item) => {
    const title = item.beatTitle || titleFromValue(item.title);
    const catalogItem = beatCatalog[title];
    if (!catalogItem) {
      throw new Error(`Unknown beat: ${title || "Untitled beat"}`);
    }

    const licenseName = item.licenseName || "Beat License";
    const priceCents = licensePrices[licenseName] || catalogItem.priceCents;

    return {
      title,
      licenseName,
      displayTitle: licenseName === "Beat License" ? title : `${title} - ${licenseName}`,
      priceCents,
      file: catalogItem.file,
    };
  });
}

