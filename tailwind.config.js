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
        accent: "#c99b41",
        secondary: "var(--secondary)",
        turquoise: {
          dark: "#0C0C0C",
          light: "#1C1C1C"
        },
        orange: {
          dark: "#b57f2e",
          mid: "#141414",
          light: "#e3c26a"
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
