import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        halo: "#F59E0B",
        slate: "#64748B",
        cloud: "#F1F5F9",
        coral: "#F97316"
      }
    }
  },
  plugins: [],
} satisfies Config
