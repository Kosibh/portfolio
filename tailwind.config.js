/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0C0C0C",
        surface: "#131313",
        card: "#161616",
        border: {
          DEFAULT: "#262626",
          soft: "#1E1E1E",
        },
        muted: "#8A8A8F",
        accent: {
          purple: "#8B5CF6",
          magenta: "#D946EF",
          orange: "#F97316",
        },
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      backgroundImage: {
        "chrome-gradient": "linear-gradient(180deg, #646973 0%, #BBCCD7 100%)",
        "accent-gradient": "linear-gradient(90deg, #8B5CF6 0%, #D946EF 50%, #F97316 100%)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
