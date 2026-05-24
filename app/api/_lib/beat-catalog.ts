export type CartRequestItem = {
  title?: string;
  beatTitle?: string;
  licenseName?: string;
  file?: string;
};

type DeliveryKind = "mp3" | "wav" | "zip";

type BeatCatalogItem = {
  priceCents: number;
  files: Partial<Record<DeliveryKind, string>>;
};

const beatCatalog: Record<string, BeatCatalogItem> = {
  "IN THE AIR": {
    priceCents: 1999,
    files: {
      mp3: "[destroy lonely, lucki, glok40spaz] 'IN THE AIR'-Cm 150bpm- @panas_loops.mp3",
      wav: "[destroy lonely, lucki, glok40spaz] 'IN THE AIR'-Cm 150bpm- @panas_loops WAV.wav",
      zip: "IN THE AIR.zip",
    },
  },
  "TOP FLOOR": {
    priceCents: 1999,
    files: {
      mp3: "[destroy lonely, lucki] 'TOP FLOOR'-Cm 140bpm- @panas_loops.mp3",
      wav: "[destroy lonely, lucki] 'TOP FLOOR'-Cm 140bpm- @panas_loops.wav",
      zip: "TOP FLOOR.zip",
    },
  },
  FOREIGN: {
    priceCents: 1999,
    files: {
      mp3: "[future, destroy lonely, lil baby] 'FOREIGN'- A#m 140bpm- @panas_loops.mp3",
      wav: "[future, destroy lonely, lil baby] 'FOREIGN'- A#m 140bpm- @panas_loops.wav",
      zip: "FOREIGN.zip",
    },
  },
  ATLANTA: {
    priceCents: 2500,
    files: {
      mp3: "[future, lil baby, destroy lonely]'ATLANTA'-Cm 140bpm- @panas_loops.mp3",
      wav: "[future, lil baby, destroy lonely]'ATLANTA'-Cm 140bpm- @panas_loops WAV.wav",
      zip: "ATLANTA.zip",
    },
  },
  OUNCE: {
    priceCents: 1999,
    files: {
      mp3: "[ian, summrs] 'OUNCE'-Cm 140bpm - @panas_loops.mp3",
      wav: "[ian, summrs] 'OUNCE'-Cm 140bpm - @panas_loops WAV.wav",
      zip: "OUNCE.zip",
    },
  },
  "CRASH DA WHIP": {
    priceCents: 1999,
    files: {
      mp3: "[ken carson, rich amiri, homixide gang] 'CRASH DA WHIP'- Am 130bpm - @panas_loops.mp3",
      wav: "[ken carson, rich amiri, homixide gang] 'CRASH DA WHIP'- Am 130bpm - @panas_loops WAV.wav",
      zip: "CRASH DAW WHIP.zip",
    },
  },
  LEAN: {
    priceCents: 1999,
    files: {
      mp3: "[lucki, glokk40spaz] 'LEAN' Gm 140bpm - @panas_loops.mp3",
      wav: "[lucki, glokk40spaz] 'LEAN' Gm 140bpm - @panas_loops WAV.wav",
      zip: "LEAN.zip",
    },
  },
  ROAD: {
    priceCents: 1999,
    files: {
      mp3: "[lucki, veeze] 'ROAD' Cm 141 bpm - @panas_loops.mp3",
      wav: "[lucki, veeze] 'ROAD' Cm 141 bpm - @panas_loops WAV.wav",
      zip: "ROAD.zip",
    },
  },
  NOISY: {
    priceCents: 1999,
    files: {
      mp3: "[young thug, future, destroy lonely] 'NOISY' Cm 140bpm - @panas_loops.mp3",
    },
  },
  SLATT: {
    priceCents: 1999,
    files: {
      mp3: "[young thug, future] 'SLATT'-Cm 140bpm - @panas_loops.mp3",
      wav: "[young thug, future] 'SLATT'-Cm 140bpm - @panas_loops WAV.wav",
      zip: "SLATT.zip",
    },
  },
  "BIZZY BAP": {
    priceCents: 1999,
    files: {
      mp3: "'BIZZY BAP'-Am 130bpm-@panas_loops.mp3",
      wav: "'BIZZY BAP'-Am 130bpm-@panas_loops WAV.wav",
      zip: "BIZZY BAP.zip",
    },
  },
  SLICED: {
    priceCents: 1999,
    files: {
      mp3: "[destroy lonely, ken carson, southside] 'SLICED'-Cm 140bpm -@panas_loops.mp3",
      wav: "[destroy lonely, ken carson, southside] 'SLICED'-Cm 140bpm -@panas_loops.wav",
      zip: "SLICED.zip",
    },
  },
  "TRIPPED OUT": {
    priceCents: 1999,
    files: {
      mp3: "[destroy lonely, hxg, lucki] 'TRIPPED OUT'- Cm 140bpm - @panas_loops.mp3",
      wav: "[destroy lonely, hxg, lucki] 'TRIPPED OUT'- Cm 140bpm - @panas_loops.wav",
      zip: "tripped.zip",
    },
  },
};

const licenseCatalog: Record<string, { priceCents: number; deliverables: DeliveryKind[] }> = {
  "MP3 Lease": { priceCents: 1999, deliverables: ["mp3"] },
  "WAV Lease": { priceCents: 2999, deliverables: ["mp3", "wav"] },
  "Trackout Lease": { priceCents: 5999, deliverables: ["mp3", "wav", "zip"] },
  "Exclusive Rights": { priceCents: 29999, deliverables: ["mp3", "wav", "zip"] },
};

function titleFromValue(value: unknown) {
  const text = String(value || "");
  const quotedTitle = text.match(/'([^']+)'/);
  return (quotedTitle ? quotedTitle[1] : text).replace(/\.mp3$/i, "").trim();
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function deliveryId(title: string, licenseName: string) {
  return `${slugify(title)}:${slugify(licenseName || "beat-license")}`;
}

function licenseDelivery(title: string, catalogItem: BeatCatalogItem, licenseName: string) {
  const license = licenseCatalog[licenseName];
  const deliverables = license?.deliverables || ["mp3"];
  const files = deliverables.map((kind) => catalogItem.files[kind]).filter(Boolean) as string[];

  if (files.length !== deliverables.length) {
    throw new Error(`${title} is missing files for ${licenseName || "Beat License"}`);
  }

  return files;
}

export function filesForPaidSku(sku: string) {
  for (const [title, catalogItem] of Object.entries(beatCatalog)) {
    const licenseNames = ["Beat License", ...Object.keys(licenseCatalog)];
    const licenseName = licenseNames.find((name) => deliveryId(title, name) === sku);

    if (licenseName) {
      return licenseDelivery(title, catalogItem, licenseName);
    }
  }

  return [];
}

export function normalizeCartItems(items: CartRequestItem[]) {
  return items.map((item) => {
    const title = item.beatTitle || titleFromValue(item.title);
    const catalogItem = beatCatalog[title];
    if (!catalogItem) {
      throw new Error(`Unknown beat: ${title || "Untitled beat"}`);
    }

    const licenseName = item.licenseName || "Beat License";
    const priceCents = licenseCatalog[licenseName]?.priceCents || catalogItem.priceCents;
    const files = licenseDelivery(title, catalogItem, licenseName);

    return {
      title,
      licenseName,
      displayTitle: licenseName === "Beat License" ? title : `${title} - ${licenseName}`,
      priceCents,
      deliveryId: deliveryId(title, licenseName),
      file: files[0],
      files,
    };
  });
}
