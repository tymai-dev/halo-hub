import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2.5rem",
      },
      screens: {
        "2xl": "72rem",
      },
    },
    extend: {
      colors: {
        ink: "#0F172A",
        cloud: "#F1F5F9",
        halo: "#F59E0B",
        slate: "#94A3B8",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        lift: "0 18px 60px -30px rgba(15, 23, 42, 0.65)",
      },
      borderRadius: {
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
} satisfies Config
