/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "event-card-bg": "url('/src/assets/event-card-bg.jpg')",
      },
    },
  },
  plugins: [],
};
