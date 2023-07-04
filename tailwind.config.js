/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        hpc: "920px",
      },
      colors: {
        "nomal-color": "#334155",
        "strong-color": "#0f172a",
        "header-footer-link": "#778899",
        "link-color": "#4682b4",
        "link-hover-color": "#4682b4b3",
        "border-color": "#e5e7eb",
        "sub-color": "#555",
      },
      borderColor: {
        "link-color": "#4682b4b3",
      },
    },
  },
  plugins: [],
};
