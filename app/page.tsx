"use client";

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ChevronRight,
  CircleDollarSign,
  Expand,
  MessageCircle,
  Pause,
  Play,
  Radio,
  ShoppingBag,
  Sparkles,
  Waves,
  X
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type License = {
  name: string;
  price: string;
  stems: string;
  limit: string;
  features: string[];
};

type BeatCard = {
  title: string;
  meta: string;
  image: string;
  price: string;
};

const audioFile = "[destroy lonely, lucki, glok40spaz] 'IN THE AIR'-Cm 150bpm- @panas_loops.mp3";

const licenses: License[] = [
  {
    name: "MP3 Lease",
    price: "$19.99",
    stems: "Tagged MP3 file",
    limit: "Tagged MP3 file for demos, YouTube, and basic streaming use.",
    features: ["Tagged MP3 file", "Demo-ready audio", "Basic streaming file"]
  },
  {
    name: "WAV Lease",
    price: "$29.99",
    stems: "High-quality WAV file",
    limit: "High-quality WAV file for professional recording and streaming platforms.",
    features: ["High-quality WAV file", "Professional recording file", "Streaming platform file"]
  },
  {
    name: "Trackout Lease",
    price: "$59.99",
    stems: "WAV + trackout ZIP",
    limit: "Includes WAV file + all separated stems/trackouts in a ZIP folder for full mixing and mastering flexibility.",
    features: ["WAV file included", "Separated stems/trackouts", "ZIP folder delivery"]
  },
  {
    name: "Exclusive Rights",
    price: "$299.99",
    stems: "Exclusive ownership",
    limit: "Buyer receives exclusive ownership rights and the beat is removed from the store after purchase.",
    features: ["Exclusive ownership rights", "Beat removed from store", "Full exclusive delivery"]
  }
];

const similarBeats: BeatCard[] = [
  { title: "BIZZY BAP", meta: "Am - 130 BPM", image: "/images/bizzy-bap.png", price: "$19.99" },
  { title: "ATLANTA", meta: "Cm - 140 BPM", image: "/images/atlanta.png", price: "$25" },
  { title: "TOP FLOOR", meta: "Cm - 140 BPM", image: "/images/top-floor.png", price: "$19.99" },
  { title: "ROAD", meta: "Cm - 141 BPM", image: "/images/road.png", price: "$19.99" },
  { title: "FOREIGN", meta: "A#m - 140 BPM", image: "/images/foreign.png", price: "$25" }
];

const compatibility = ["Destroy Lonely", "Lucki", "Ken Carson", "Future", "Veeze", "Dark Pluggnb", "Opium"];

function formatTime(value: number) {
  if (!Number.isFinite(value)) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function Waveform({ progress, isPlaying }: { progress: number; isPlaying: boolean }) {
  const bars = useMemo(
    () =>
      Array.from({ length: 72 }, (_, index) => ({
        height: 26 + Math.round(Math.abs(Math.sin(index * 1.8) * 54)) + (index % 7) * 3,
        delay: `${(index % 12) * 0.045}s`
      })),
    []
  );

  return (
    <div className="relative h-28 overflow-hidden rounded-md border border-white/10 bg-black/40 px-4 py-4">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.07),transparent)] opacity-40" />
      <div
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-ember/[.28] via-white/[.12] to-transparent transition-[width] duration-300"
        style={{ width: `${progress}%` }}
      />
      <div className="relative flex h-full items-center gap-1">
        {bars.map((bar, index) => (
          <span
            key={index}
            className={`w-full origin-center rounded-full bg-white/[.35] shadow-[0_0_18px_rgba(224,32,32,.22)] ${
              isPlaying ? "animate-wave" : ""
            }`}
            style={{
              height: `${bar.height}%`,
              animationDelay: bar.delay,
              opacity: index / bars.length <= progress / 100 ? 0.95 : 0.28
            }}
          />
        ))}
      </div>
    </div>
  );
}

function PremiumPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const progress = duration ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => setCurrentTime(audio.currentTime);
    const onMeta = () => setDuration(audio.duration || 0);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const seek = (event: React.MouseEvent<HTMLButtonElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const next = ((event.clientX - bounds.left) / bounds.width) * duration;
    audio.currentTime = Math.max(0, Math.min(duration, next));
  };

  const player = (
    <motion.div
      layout
      className={`chrome-border relative overflow-hidden rounded-lg p-4 sm:p-6 ${isPlaying ? "shadow-red" : ""}`}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-1/4 top-0 h-36 w-1/2 rotate-12 bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 right-0 h-44 w-44 rounded-full bg-ember/20 blur-3xl" />
      </div>
      <div className="relative flex flex-col gap-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[.32em] text-ember">Premium Player</p>
            <h2 className="mt-1 font-display text-3xl font-black uppercase tracking-[.08em] text-white sm:text-4xl">
              In The Air
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setFullscreen(true)}
            className="grid size-11 place-items-center rounded-md border border-white/10 bg-white/[.04] text-white/70 transition hover:border-white/25 hover:text-white"
            aria-label="Open fullscreen listening mode"
          >
            <Expand size={18} />
          </button>
        </div>
        <button type="button" onClick={seek} className="group block text-left" aria-label="Seek audio track">
          <Waveform progress={progress} isPlaying={isPlaying} />
        </button>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={toggle}
              className="grid size-16 place-items-center rounded-full border border-white/20 bg-white text-black shadow-[0_0_44px_rgba(224,32,32,.28)] transition hover:scale-105 hover:bg-ember hover:text-white"
              aria-label={isPlaying ? "Pause beat" : "Play beat"}
            >
              {isPlaying ? <Pause fill="currentColor" size={24} /> : <Play fill="currentColor" size={24} />}
            </button>
            <div className="font-mono text-sm text-white/[.65]">
              {formatTime(currentTime)} <span className="text-white/25">/</span> {formatTime(duration)}
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[.28em] text-white/[.45]">
            <Radio size={15} className={isPlaying ? "text-ember" : ""} />
            {isPlaying ? "Live Preview" : "Ready"}
          </div>
        </div>
      </div>
      <audio ref={audioRef} preload="metadata" src={`/previews/${encodeURIComponent(audioFile)}`} />
    </motion.div>
  );

  return (
    <>
      {player}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/[.88] p-5 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={() => setFullscreen(false)}
              className="absolute right-5 top-5 grid size-11 place-items-center rounded-md border border-white/[.15] bg-white/5 text-white"
              aria-label="Close fullscreen listening mode"
            >
              <X size={20} />
            </button>
            <div className="w-full max-w-5xl">
              <div className="mb-8 text-center">
                <p className="font-display text-sm font-bold uppercase tracking-[.44em] text-ember">Listening Mode</p>
                <h3 className="mt-3 font-display text-6xl font-black uppercase tracking-[.08em] text-white">
                  In The Air
                </h3>
              </div>
              <Waveform progress={progress} isPlaying={isPlaying} />
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={toggle}
                  className="grid size-20 place-items-center rounded-full bg-white text-black transition hover:bg-ember hover:text-white"
                  aria-label={isPlaying ? "Pause beat" : "Play beat"}
                >
                  {isPlaying ? <Pause fill="currentColor" size={28} /> : <Play fill="currentColor" size={28} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LicenseCard({ item, index }: { item: License; index: number }) {
  return (
    <motion.article
      className="chrome-border group relative overflow-hidden rounded-lg p-5"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-50" />
      <div className="absolute -right-16 -top-16 size-36 rounded-full bg-ember/0 blur-3xl transition group-hover:bg-ember/[.18]" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-black uppercase tracking-[.08em] text-white">{item.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-[.24em] text-white/[.45]">{item.stems}</p>
          </div>
          <p className="font-display text-3xl font-black text-white">{item.price}</p>
        </div>
        <div className="my-5 h-px bg-white/10" />
        <p className="mb-4 flex items-center gap-2 text-sm text-white/[.72]">
          <Waves size={15} className="text-ember" />
          {item.limit}
        </p>
        <ul className="space-y-3 text-sm text-white/[.62]">
          {item.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-ember shadow-[0_0_18px_rgba(224,32,32,.8)]" />
              {feature}
            </li>
          ))}
        </ul>
        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-md border border-white/[.12] bg-white py-3 text-sm font-bold uppercase tracking-[.2em] text-black transition hover:border-ember hover:bg-ember hover:text-white">
          <ShoppingBag size={16} />
          Buy License
        </button>
      </div>
    </motion.article>
  );
}

function ArtworkCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 18 });
  const springY = useSpring(y, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(springY, [-40, 40], [4, -4]);
  const rotateY = useTransform(springX, [-40, 40], [-4, 4]);

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[620px] perspective-1000"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="chrome-border relative overflow-hidden rounded-lg p-3 shadow-chrome"
      >
        <div className="absolute -inset-16 animate-pulseGlow bg-[radial-gradient(circle,rgba(224,32,32,.28),transparent_58%)] blur-2xl" />
        <div className="relative overflow-hidden rounded-md border border-white/[.15] bg-black">
          <img
            src="/images/in-the-air.png"
            alt="In The Air beat cover artwork"
            className="aspect-square w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,.2)_46%,transparent_53%)] opacity-25" />
          <div className="absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>
      </motion.div>
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-ember/20 blur-3xl" />
    </motion.div>
  );
}

function BeatTile({ beat }: { beat: BeatCard }) {
  return (
    <motion.article
      className="group min-w-[230px] overflow-hidden rounded-lg border border-white/10 bg-white/[.035]"
      whileHover={{ y: -6 }}
    >
      <div className="relative overflow-hidden">
        <img src={beat.image} alt={`${beat.title} artwork`} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/[.85] via-black/10 to-transparent opacity-80" />
        <button className="absolute left-4 top-4 grid size-10 place-items-center rounded-full border border-white/20 bg-black/[.45] text-white backdrop-blur transition group-hover:bg-white group-hover:text-black">
          <Play size={16} fill="currentColor" />
        </button>
        <span className="absolute bottom-4 right-4 font-display text-xl font-black text-white">{beat.price}</span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-2xl font-black uppercase tracking-[.08em] text-white">{beat.title}</h3>
        <p className="text-sm text-white/[.48]">{beat.meta}</p>
      </div>
    </motion.article>
  );
}

export default function PremiumBeatPage() {
  return (
    <main className="relative z-10 min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 h-[40rem] w-[24rem] bg-ember/10 blur-3xl" />
      <header className="mx-auto flex w-[min(100%_-_2rem,1280px)] items-center justify-between py-6">
        <a className="font-display text-3xl font-black uppercase tracking-[.18em] text-ember" href="#">
          PANAS
        </a>
        <nav className="hidden items-center gap-8 font-display text-sm font-bold uppercase tracking-[.26em] text-white/[.58] md:flex">
          <a className="transition hover:text-white" href="#licenses">Licenses</a>
          <a className="transition hover:text-white" href="#similar">Similar</a>
          <a className="transition hover:text-white" href="#notes">Notes</a>
        </nav>
        <button className="rounded-md border border-white/[.12] px-4 py-3 font-display text-sm font-bold uppercase tracking-[.22em] text-white transition hover:border-ember hover:text-ember">
          Cart 0
        </button>
      </header>

      <section className="mx-auto grid w-[min(100%_-_2rem,1280px)] grid-cols-1 items-center gap-10 pb-16 pt-6 lg:grid-cols-[.95fr_1.05fr] lg:gap-16 lg:pb-24">
        <motion.div initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .75 }}>
          <ArtworkCard />
        </motion.div>

        <motion.div
          className="space-y-7"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .75, delay: .08 }}
        >
          <div>
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-[.42em] text-ember">Underground Premium</p>
            <h1
              className="glitch-text font-display text-6xl font-black uppercase leading-[.86] tracking-[.04em] text-white sm:text-8xl xl:text-9xl"
              data-text="IN THE AIR"
            >
              IN THE AIR
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[.58]">
              Cold melodic pressure with clipped drums, negative space, and a late-night chrome finish.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["150", "BPM"],
              ["Cm", "Key"],
              ["2:08", "Length"],
              ["18.4k", "Plays"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-md border border-white/10 bg-white/[.035] p-4">
                <p className="font-display text-3xl font-black text-white">{value}</p>
                <p className="text-xs uppercase tracking-[.24em] text-white/[.38]">{label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-white/[.58]">
            <span>Produced by <b className="text-white">PANAS LOOPS</b></span>
            <span className="h-1 w-1 rounded-full bg-ember" />
            <span>Uploaded May 12, 2026</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {["dark", "rage", "opium", "underground", "cinematic", "night drive"].map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[.22em] text-white/[.55]">
                {tag}
              </span>
            ))}
          </div>

          <PremiumPlayer />
        </motion.div>
      </section>

      <section id="licenses" className="mx-auto w-[min(100%_-_2rem,1280px)] py-12">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[.38em] text-ember">Select License</p>
            <h2 className="mt-2 font-display text-5xl font-black uppercase tracking-[.06em] text-white">Usage Rights</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/[.48]">
            BeatStars-level buying clarity, styled like a private audio showroom.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {licenses.map((item, index) => (
            <LicenseCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </section>

      <section id="similar" className="mx-auto w-[min(100%_-_2rem,1280px)] py-12">
        <div className="mb-7 flex items-center justify-between gap-4">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[.38em] text-ember">Sound Match</p>
            <h2 className="mt-2 font-display text-5xl font-black uppercase tracking-[.06em] text-white">Similar Beats</h2>
          </div>
          <ChevronRight className="hidden text-white/40 sm:block" />
        </div>
        <div className="no-scrollbar flex gap-4 overflow-x-auto pb-4">
          {similarBeats.map((beat) => (
            <BeatTile key={beat.title} beat={beat} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-[min(100%_-_2rem,1280px)] gap-5 py-12 lg:grid-cols-[1fr_.85fr]">
        <div id="notes" className="chrome-border rounded-lg p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <Sparkles className="text-ember" size={20} />
            <h2 className="font-display text-4xl font-black uppercase tracking-[.08em] text-white">Producer Notes</h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-white/[.62]">
            Keep the vocal intimate and dry in the first eight bars, then widen the hook with doubles and filtered ad-libs.
            The beat leaves pockets for whisper flows, sudden triplet runs, and one clean melodic switch before the second drop.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {compatibility.map((tag) => (
              <span key={tag} className="rounded-md border border-white/10 bg-white/[.035] px-3 py-2 text-xs uppercase tracking-[.2em] text-white/[.52]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="chrome-border rounded-lg p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <MessageCircle className="text-ember" size={20} />
            <h2 className="font-display text-4xl font-black uppercase tracking-[.08em] text-white">Reactions</h2>
          </div>
          {[
            ["Kairo", "Hook comes in stupid clean. This is the one."],
            ["Mira", "Feels expensive and empty in the right way."],
            ["JX", "Drums hit but still leave room for the vocal."]
          ].map(([name, text]) => (
            <div key={name} className="border-t border-white/10 py-4 first:border-t-0 first:pt-0">
              <p className="font-display text-xl font-black uppercase tracking-[.08em] text-white">{name}</p>
              <p className="mt-1 text-sm leading-6 text-white/[.55]">{text}</p>
            </div>
          ))}
          <button className="mt-3 flex items-center gap-2 rounded-md border border-white/[.12] px-4 py-3 text-sm font-bold uppercase tracking-[.18em] text-white/[.72] transition hover:border-ember hover:text-white">
            <CircleDollarSign size={16} />
            Make Offer
          </button>
        </div>
      </section>

      <footer className="mx-auto flex w-[min(100%_-_2rem,1280px)] flex-col gap-3 border-t border-white/10 py-8 text-xs uppercase tracking-[.26em] text-white/[.34] sm:flex-row sm:items-center sm:justify-between">
        <span>PANAS LOOPS</span>
        <span>Luxury underground beat marketplace</span>
      </footer>
    </main>
  );
}
