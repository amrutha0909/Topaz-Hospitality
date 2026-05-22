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
          dark: "#012c3d",
          light: "#2c788c"
        },
        orange: {
          dark: "#d8532e",
          mid: "#e86b3e",
          light: "#f1924e"
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      }
    },
  },
  plugins: [],
}
