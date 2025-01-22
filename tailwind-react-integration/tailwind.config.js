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

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Scans files for class names
  theme: {
    extend: {
      // Extend or add custom styles here
    },
  },
  plugins: [], // Add plugins if required
};