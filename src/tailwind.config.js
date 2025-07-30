/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slideUp: "slideUp 0.6s ease-out forwards",
        fadeInUp: "fadeInUp 0.7s ease-out forwards",
        slideInRight: "slideInRight 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float-delay 7s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeInUp: {
          "0%": { transform: "translateY(15px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-delay": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "pulse-slow": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.2" },
          "50%": { transform: "scale(1.05)", opacity: "0.3" },
        },
      },
    },
  },
  plugins: [],
};