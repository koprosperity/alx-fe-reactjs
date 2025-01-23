module.exports = {
  purge: ["./src/index.jsx"], // Files to scan for Tailwind classes
  content: ["./src/index.jsx"],
  darkMode: "true", // Enable dark mode via "class" or "media"
  theme: {
    extend: {}, // Extend default Tailwind theme here
  },
  plugins: [], // Add plugins here if necessary
};


module.exports = {
  purge: ["public/index.html"],
  darkMode: true, // or 'media' or 'class'
  theme: {
      extend: {},
  },
  variants: {
      extend: {},
  },
  plugins: [],
};