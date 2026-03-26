/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#050814",
          card: "#070b1f",
          accent: "#4ade80",
          accentSoft: "rgba(74,222,128,0.18)",
          accentStrong: "#22c55e"
        }
      },
      boxShadow: {
        "cyber-glow": "0 0 25px rgba(74,222,128,0.45)"
      },
      backgroundImage: {
        "matrix-grid":
          "radial-gradient(circle at 1px 1px, rgba(74,222,128,0.18) 1px, transparent 0)"
      },
      animation: {
        "float-slow": "float 10s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 1 }
        }
      }
    }
  },
  plugins: []
};

