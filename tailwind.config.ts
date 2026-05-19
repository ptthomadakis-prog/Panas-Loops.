import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Inter", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"]
      },
      colors: {
        blood: "#b30e18",
        ember: "#e02020",
        chrome: "#d8dce4",
        ink: "#050505"
      },
      boxShadow: {
        chrome: "inset 0 1px 0 rgba(255,255,255,.28), 0 30px 90px rgba(0,0,0,.65)",
        red: "0 0 44px rgba(224,32,32,.22)"
      },
      animation: {
        scan: "scan 7s linear infinite",
        pulseGlow: "pulseGlow 3.2s ease-in-out infinite",
        wave: "wave 1.15s ease-in-out infinite"
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: ".42", transform: "scale(.98)" },
          "50%": { opacity: ".78", transform: "scale(1.02)" }
        },
        wave: {
          "0%, 100%": { transform: "scaleY(.38)" },
          "50%": { transform: "scaleY(1)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
