/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#d4af37",
        secondary: "var(--secondary)",
        turquoise: {
          dark: "#0C0C0C",
          light: "#1C1C1C"
        },
        orange: {
          dark: "#9a7b1c",
          mid: "#141414",
          light: "#fcd34d"
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-heading)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
