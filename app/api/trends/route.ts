import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const trends = [
  {
    id: "dark-pluggnb",
    title: "Dark pluggnb pockets",
    source: "Curated store signal",
    status: "Rising",
    genre: "Pluggnb",
    mood: "Dark",
    bpmRange: "140-150",
    bpm: 145,
    score: 92,
    summary: "Clean melodic loops with darker keys and clipped drum bounce are matching the strongest underground beat inventory.",
    tags: ["minor keys", "wide bells", "short hooks"],
    evidence: {
      title: "Matches LEAN, OUNCE, and IN THE AIR listener lanes",
      url: "/browse-beats.html",
      meta: "Store catalog read"
    },
    why: "Lead with spacious arrangements, simple counter melodies, and enough negative space for low-volume vocal delivery."
  },
  {
    id: "atlanta-street",
    title: "Atlanta street bounce",
    source: "Curated store signal",
    status: "Stable",
    genre: "Trap",
    mood: "Street",
    bpmRange: "135-145",
    bpm: 140,
    score: 85,
    summary: "The catalog's Atlanta-style records are strongest when the drums stay direct and the hook has a clean first line.",
    tags: ["808 rolls", "cold keys", "hook ready"],
    evidence: {
      title: "ATLANTA and SLATT are active license candidates",
      url: "/premium-beat.html?beat=atlanta",
      meta: "Store catalog read"
    },
    why: "Keep verses tight, use memorable ad-libs, and leave the chorus wide enough for artist identity."
  },
  {
    id: "rage-minimal",
    title: "Minimal rage energy",
    source: "Curated store signal",
    status: "Rising",
    genre: "Rage",
    mood: "Aggressive",
    bpmRange: "130-145",
    bpm: 130,
    score: 81,
    summary: "Distorted drums still work best when the melody is simple and the vocal pocket is not overcrowded.",
    tags: ["distortion", "moshpit", "short phrases"],
    evidence: {
      title: "CRASH DA WHIP has a clear aggressive lane",
      url: "/premium-beat.html?beat=crash-da-whip",
      meta: "Store catalog read"
    },
    why: "Build hard drops, but keep the verse sections open so artists can land punchy lines."
  },
  {
    id: "luxury-trap",
    title: "Luxury trap motion",
    source: "Curated store signal",
    status: "Stable",
    genre: "Trap",
    mood: "Luxury",
    bpmRange: "135-145",
    bpm: 140,
    score: 78,
    summary: "Polished, late-night trap ideas pair well with glossy artwork, short previews, and premium license positioning.",
    tags: ["gloss", "night drive", "clean bounce"],
    evidence: {
      title: "FOREIGN and TOP FLOOR share the luxury trap pocket",
      url: "/premium-beat.html?beat=foreign",
      meta: "Store catalog read"
    },
    why: "Use restrained melodies, premium cover visuals, and direct license copy for higher-priced placements."
  },
  {
    id: "drill-bap",
    title: "Raw drill-bap bounce",
    source: "Curated store signal",
    status: "Cooling",
    genre: "Drill",
    mood: "Raw",
    bpmRange: "125-135",
    bpm: 130,
    score: 69,
    summary: "The harder drill-adjacent pocket still has value, but it needs sharper branding to stand beside the darker trap records.",
    tags: ["raw drums", "drill", "direct vocal"],
    evidence: {
      title: "BIZZY BAP keeps the catalog connected to rawer energy",
      url: "/premium-beat.html?beat=bizzy-bap",
      meta: "Store catalog read"
    },
    why: "Use this lane for direct, percussive flows and keep the mix less glossy than the premium trap tracks."
  }
];

const weekly = {
  summary:
    "This week favors dark melodic beats, Atlanta bounce, and clean luxury-trap presentation. Keep public previews tagged and short, then route serious buyers into the protected PayPal license flow.",
  sourceMeta: "Generated from the local catalog and public preview structure.",
  momentum: [
    { label: "Dark pluggnb", score: 92 },
    { label: "Atlanta trap", score: 85 },
    { label: "Minimal rage", score: 81 },
    { label: "Luxury trap", score: 78 }
  ],
  topStyles: [
    "Dark pluggnb with wide bells",
    "Atlanta bounce with cold keys",
    "Minimal rage with distorted drums",
    "Luxury trap with polished cover art"
  ]
};

export async function GET() {
  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    sourceStatus: "Curated fallback signals are active. Connect external feed APIs when ready for live trend reads.",
    hero: {
      topSignal: trends[0].title,
      tempoPocket: "130-150 BPM",
      momentum: "Dark melodic beats rising"
    },
    trends,
    engine: [
      {
        label: "Catalog read",
        title: "Lead with dark melody",
        items: [
          "Feature IN THE AIR and LEAN near the top of the store.",
          "Keep descriptions focused on vocal pocket and mood.",
          "Use tagged previews in public and masters in private/audio."
        ]
      },
      {
        label: "License read",
        title: "Push premium clarity",
        items: [
          "Keep MP3, WAV, Trackout, and Exclusive tiers visible.",
          "Send every beat detail view into the license selector.",
          "Keep PayPal capture server-side only."
        ]
      },
      {
        label: "Content read",
        title: "Tighten release cadence",
        items: [
          "Rotate new beat badges around the strongest records.",
          "Keep Instagram as the primary social link.",
          "Replace any public preview with tagged exports only."
        ]
      },
      {
        label: "Production read",
        title: "Build around space",
        items: [
          "Use simpler melodies for aggressive beats.",
          "Leave hooks wide for doubles and ad-libs.",
          "Keep low end polished on Atlanta and luxury trap records."
        ]
      }
    ],
    reasoning: [
      "Matched visible catalog titles against tempo, mood, and license positioning.",
      "Weighted records with complete artwork, preview audio, and premium detail pages higher.",
      "Prioritized recommendations that improve buyer flow without exposing private masters."
    ],
    weekly,
    futureModules: [
      {
        label: "Module 01",
        title: "YouTube signal import",
        detail: "Use YOUTUBE_API_KEY to compare beat-search demand against catalog styles.",
        status: "Ready to connect"
      },
      {
        label: "Module 02",
        title: "Sales heatmap",
        detail: "Track captured PayPal orders by beat, license tier, and week.",
        status: "Needs order history"
      },
      {
        label: "Module 03",
        title: "Preview retention",
        detail: "Measure play starts and completion rate for public preview files.",
        status: "Needs analytics"
      },
      {
        label: "Module 04",
        title: "Drop planner",
        detail: "Suggest the next upload lane from catalog gaps and recent buyer behavior.",
        status: "Planned"
      }
    ]
  });
}
