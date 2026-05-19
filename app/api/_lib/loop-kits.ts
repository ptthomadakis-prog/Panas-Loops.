export type LoopKit = {
  slug: string;
  title: string;
  subtitle: string;
  cover: string;
  genre: string;
  moods: string[];
  tags: string[];
  bpm: number;
  key: string;
  loopCount: number;
  description: string;
  previewFile: string;
  downloadFile: string;
  downloads: number;
  featured?: boolean;
  newest?: boolean;
  loops: string[];
};

export const loopKits: LoopKit[] = [
  {
    slug: "chase",
    title: "CHASE",
    subtitle: "Drake inspired loop kit",
    cover: "/images/loops/chase.jpg",
    genre: "Drake R&B",
    moods: ["Cold", "Luxury", "Late Night"],
    tags: ["Drake", "R&B", "Toronto"],
    bpm: 140,
    key: "Minor",
    loopCount: 10,
    description: "Moody Drake-style melodies with clean space for hooks, rap verses, and polished R&B drums.",
    previewFile: "[future, lil baby, destroy lonely]'ATLANTA'-Cm 140bpm- @panas_loops.mp3",
    downloadFile: "'CHASE' LOOP KIT DRAKE.zip",
    downloads: 4210,
    newest: true,
    loops: ["Drake melody loops", "Dark R&B chords", "Late-night counters", "Vocal pocket starters"]
  },
  {
    slug: "flex",
    title: "FLEX",
    subtitle: "Trap R&B loop kit",
    cover: "/images/loops/flex.jpg",
    genre: "Trap R&B",
    moods: ["Smooth", "Club", "Glossy"],
    tags: ["Chris Brown", "R&B", "Trap"],
    bpm: 140,
    key: "Minor",
    loopCount: 12,
    description: "Bouncy trap R&B ideas with glossy keys, vocal-friendly chords, and clean modern movement.",
    previewFile: "[future, destroy lonely, lil baby] 'FOREIGN'- A#m 140bpm- @panas_loops.mp3",
    downloadFile: "'FLEX'- TRAP RNB LOOP KIT CHRIS BROWN.zip",
    downloads: 3980,
    newest: true,
    loops: ["Trap R&B chords", "Glossy keys", "Club melody starters", "Smooth counters"]
  },
  {
    slug: "luxury",
    title: "LUXURY",
    subtitle: "Tory Lanez R&B loop kit",
    cover: "/images/loops/luxury.jpg",
    genre: "R&B",
    moods: ["Luxury", "Smooth", "Emotional"],
    tags: ["Tory Lanez", "R&B", "Melodic"],
    bpm: 140,
    key: "Minor",
    loopCount: 14,
    description: "Premium R&B progressions, smooth lead ideas, and late-night textures for polished melodic records.",
    previewFile: "[future, destroy lonely, lil baby] 'FOREIGN'- A#m 140bpm- @panas_loops.mp3",
    downloadFile: "'LUXURY' RNB LOOP KIT TORY LANEZ.zip",
    downloads: 5120,
    newest: true,
    loops: ["Luxury R&B chords", "Smooth toplines", "Emotional textures", "Melodic counters"]
  },
  {
    slug: "attraction",
    title: "ATTRACTION",
    subtitle: "Drake melodic loop kit",
    cover: "/images/loops/attraction.jpg",
    genre: "Drake R&B",
    moods: ["Romantic", "Dark", "Atmospheric"],
    tags: ["Drake", "Melodic", "R&B"],
    bpm: 140,
    key: "Minor",
    loopCount: 11,
    description: "Atmospheric melodies and romantic dark chords made for Drake-style hooks and clean artist pockets.",
    previewFile: "[future, lil baby, destroy lonely]'ATLANTA'-Cm 140bpm- @panas_loops.mp3",
    downloadFile: "ATTRACTION LOOP KIT DRAKE.zip",
    downloads: 3675,
    loops: ["Atmospheric chords", "Romantic melodies", "Dark counters", "Drake-style starters"]
  },
  {
    slug: "breeze-vol-2",
    title: "BREEZE VOL.2",
    subtitle: "Dancehall loop kit",
    cover: "/images/loops/breeze-vol-2.jpg",
    genre: "Dancehall",
    moods: ["Tropical", "Smooth", "Summer"],
    tags: ["Dancehall", "Afro", "Island"],
    bpm: 100,
    key: "Minor",
    loopCount: 16,
    description: "Warm dancehall melodies, island textures, and smooth rhythmic starters for summer records.",
    previewFile: "[future, destroy lonely, lil baby] 'FOREIGN'- A#m 140bpm- @panas_loops.mp3",
    downloadFile: "BREEZE VOL.2 DANCEHALL.zip",
    downloads: 4588,
    loops: ["Dancehall guitar ideas", "Island keys", "Warm plucks", "Summer melody starters"]
  },
  {
    slug: "dreams",
    title: "DREAMS",
    subtitle: "R&B loop kit",
    cover: "/images/loops/dreams.jpg",
    genre: "R&B",
    moods: ["Dreamy", "Emotional", "Floating"],
    tags: ["R&B", "Soul", "Melodic"],
    bpm: 130,
    key: "Minor",
    loopCount: 5,
    description: "Dreamy R&B chord work, soft melodic layers, and emotional late-night ideas.",
    previewFile: "[lucki, glokk40spaz] 'LEAN' Gm 140bpm - @panas_loops.mp3",
    downloadFile: "DREAMS MEEK MILL RNB LOOP KIT - TURN INTO MP3.zip",
    downloads: 3360,
    loops: ["Dreamy chords", "Soft keys", "Floating leads", "Emotional counters"]
  },
  {
    slug: "iceman",
    title: "ICEMAN",
    subtitle: "Drake loop kit",
    cover: "/images/loops/iceman.jpg",
    genre: "Drake R&B",
    moods: ["Cold", "Minimal", "Dark"],
    tags: ["Drake", "Toronto", "Trap Soul"],
    bpm: 140,
    key: "Minor",
    loopCount: 10,
    description: "Cold, minimal Drake-style phrases with clean melodic tension and space for direct vocals.",
    previewFile: "[future, lil baby, destroy lonely]'ATLANTA'-Cm 140bpm- @panas_loops.mp3",
    downloadFile: "ICEMAN LOOP KIT DRAKE.zip",
    downloads: 3902,
    loops: ["Cold melodies", "Minimal chords", "Dark R&B starters", "Toronto counters"]
  },
  {
    slug: "late-night",
    title: "LATE NIGHT",
    subtitle: "Bryson Tiller loop kit",
    cover: "/images/loops/late-night.jpg",
    genre: "Trap Soul",
    moods: ["Late Night", "Intimate", "Smooth"],
    tags: ["Bryson Tiller", "Trap Soul", "R&B"],
    bpm: 130,
    key: "Minor",
    loopCount: 15,
    description: "Trap soul progressions, soft keys, and intimate textures built for late-night R&B records.",
    previewFile: "[destroy lonely, lucki] 'TOP FLOOR'-Cm 140bpm- @panas_loops.mp3",
    downloadFile: "LATE NIGHT LOOP KIT BRYSON TILLER- TURN INTO MP3.zip",
    downloads: 4860,
    loops: ["Trap soul chords", "Soft keys", "Intimate melodies", "Late-night counters"]
  },
  {
    slug: "long-time",
    title: "LONG TIME",
    subtitle: "Rod Wave loop kit",
    cover: "/images/loops/long-time.jpg",
    genre: "Pain Rap",
    moods: ["Emotional", "Soulful", "Pain"],
    tags: ["Rod Wave", "Pain Rap", "Soul"],
    bpm: 120,
    key: "Minor",
    loopCount: 12,
    description: "Soulful piano and emotional melodic starters for pain rap, heartfelt hooks, and big vocal moments.",
    previewFile: "[lucki, veeze] 'ROAD' Cm 141 bpm - @panas_loops.mp3",
    downloadFile: "LONG TIME ROD WAVE LOOP KIT.zip",
    downloads: 3524,
    loops: ["Soulful piano loops", "Pain rap chords", "Emotional counters", "Hook melody starters"]
  },
  {
    slug: "love",
    title: "LOVE",
    subtitle: "Brent Faiyaz loop kit",
    cover: "/images/loops/love.jpg",
    genre: "Alternative R&B",
    moods: ["Romantic", "Minimal", "Soulful"],
    tags: ["Brent Faiyaz", "R&B", "Alternative"],
    bpm: 128,
    key: "Minor",
    loopCount: 15,
    description: "Minimal alternative R&B loops with romantic chords, tasteful space, and moody bounce.",
    previewFile: "[lucki, glokk40spaz] 'LEAN' Gm 140bpm - @panas_loops.mp3",
    downloadFile: "LOVE LOOP KIT BRENT FAIYAZ TURN INTO MP3.zip",
    downloads: 4994,
    loops: ["Alternative R&B chords", "Romantic melodies", "Minimal counters", "Soulful starters"]
  }
];

export function getLoopKit(slug: string) {
  return loopKits.find((kit) => kit.slug === slug);
}

export function getLoopFilters() {
  return {
    genres: Array.from(new Set(loopKits.map((kit) => kit.genre))).sort(),
    bpms: Array.from(new Set(loopKits.map((kit) => kit.bpm))).sort((a, b) => a - b),
    moods: Array.from(new Set(loopKits.flatMap((kit) => kit.moods))).sort(),
    keys: Array.from(new Set(loopKits.map((kit) => kit.key))).sort()
  };
}
