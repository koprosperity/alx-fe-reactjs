module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./src/main.jsx"
  ], // Files to scan for Tailwind classes
  darkMode: "class", // Enable dark mode via "class" or "media"
  theme: {
    extend: {}, // Extend default Tailwind theme here
  },
  plugins: [], // Add plugins here if necessary
};
