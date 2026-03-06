/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFCB05",
          black: "#0A0A0A",
          gray: "#1A1A1A",
          darkBlue: "#0D1B2A",
          lightGray: "#CCCCCC",
        },
      },

      fontFamily: {
        body: ["Inter", "system-ui", "sans-serif"],
        heading: ["Oswald", "Arial", "sans-serif"],
        subheading: ["Inter", "system-ui", "sans-serif"],
      },

      letterSpacing: {
        cinematic: "0.10em",
        batwide: "0.15em",
      },

      animation: {
        "star-flicker": "starFlicker 2s infinite ease-in-out",
      },

      keyframes: {
        starFlicker: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
      },

      spacing: {
        container: "1100px", // ✅ allows max-w-container to exist
      },

      maxWidth: {
        container: "1100px", // ✅ allows class="max-w-container"
      },
    },
  },
  plugins: [],
};
