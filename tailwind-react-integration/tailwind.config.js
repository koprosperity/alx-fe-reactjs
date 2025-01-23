module.exports = {
  purge: ["./public/index.html"], // Files to scan for Tailwind classes
  content: [".public/index.html"],
  darkMode: "class", // Enable dark mode via "class" or "media"
  theme: {
    extend: {}, // Extend default Tailwind theme here
  },
  plugins: [], // Add plugins here if necessary
};
