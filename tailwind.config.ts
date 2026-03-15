import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
          DEFAULT: "#172554",
          hover: "#1e3a8a",
          border: "#1e3a8a",
        },
        brand: {
          DEFAULT: "#2563eb",
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        surface: "#f9fafb",
        border: "#1e40af",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      keyframes: {
        fadeIn: { from: { opacity: "0", transform: "translateY(8px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        slideIn: { from: { opacity: "0", transform: "translateX(-10px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        pulse2: { "0%, 100%": { opacity: "1" }, "50%": { opacity: ".5" } },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out",
        slideIn: "slideIn 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
