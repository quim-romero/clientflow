export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Unbounded", "cursive"],
      },
      colors: {
        brand: "#7C3AED",
        "brand-dark": "#5B21B6",
        "brand-light": "#DDD6FE",
        accent: "#F43F5E",
        muted: "#A78BFA",
        surface: "#FDF4FF",
        dark: "#1E1B4B",
        light: "#FAF5FF",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
