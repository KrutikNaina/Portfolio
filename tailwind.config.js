/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        case: {
          black: "#07080a",
          charcoal: "#0f1115",
          slate: "#181b22",
          surface: "#1f242d",
          paper: "#ebe3d1",
          paperDark: "#dcd3be",
          paperTint: "#f7f2ea",
          text: "#f3f1ec",
          textMuted: "#a39f95",
          textDim: "#6b675e",
          textDark: "#23211c",
          red: "#b91c1c",
          redDark: "#6b1414",
          redBright: "#ef4444",
          gray: "#4b5563",
          grayMuted: "#374151",
          cyan: "#0891b2",
          cyanSubtle: "#06b6d4",
          yellow: "#eab308",
          caution: "#ca8a04",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
        typewriter: ['"Special Elite"', '"Courier Prime"', "monospace"],
        mono: ['"Courier Prime"', '"Space Mono"', "monospace"],
        dossier: ['"Bebas Neue"', "Impact", "sans-serif"],
      },
      boxShadow: {
        paper: "0 6px 24px -4px rgba(0, 0, 0, 0.6), 0 2px 6px rgba(0, 0, 0, 0.4)",
        paperLifted: "0 14px 32px -6px rgba(0, 0, 0, 0.75), 0 4px 10px rgba(0, 0, 0, 0.3)",
        dossier: "0 25px 50px -12px rgba(0, 0, 0, 0.85)",
        metal: "inset 0 1px 0 rgba(255, 255, 255, 0.12), inset 0 -1px 0 rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.6)",
        redGlow: "0 0 25px rgba(185, 28, 28, 0.25)",
        cyanGlow: "0 0 20px rgba(8, 145, 178, 0.2)",
      },
      borderWidth: {
        distressed: "3px",
      },
      animation: {
        "stamp-slam": "stampSlam 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        "red-pulse": "redPulse 3s ease-in-out infinite",
        "flicker": "flicker 4s infinite",
      },
      keyframes: {
        stampSlam: {
          "0%": { opacity: "0", transform: "scale(2.2) rotate(-20deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(-6deg)" },
        },
        redPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": { opacity: "0.99" },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
};

