/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        glow: "0 0 10px rgba(255, 255, 255, 0.8)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-glow": {
          textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
        },
      });
    },
  ],
};
