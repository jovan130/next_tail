import type { Config } from "tailwindcss";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD905",
        black: "#000000",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        primary: ["Yeon Sung", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
