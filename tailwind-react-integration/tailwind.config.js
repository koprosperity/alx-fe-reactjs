module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Files to scan for Tailwind classes
  darkMode: "class", // Enable dark mode via "class" or "media"
  theme: {
    extend: {}, // Extend default Tailwind theme here
  },
  plugins: [], // Add plugins here if necessary
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Replaces "purge"
  theme: {
    extend: {}, // Extend the default theme if needed
  },
  plugins: [], // Add plugins if required
};