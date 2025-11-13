import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#ff4eb8",
          pinkDark: "#d51f8b",
          teal: "#35f0e4",
          bg: "#050513"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      borderRadius: {
        xl: "1rem",
        pill: "999px"
      },
      boxShadow: {
        glow: "0 0 40px rgba(53, 240, 228, 0.4)"
      }
    }
  },
  plugins: []
};

export default config;
