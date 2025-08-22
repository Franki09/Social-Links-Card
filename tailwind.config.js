/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Green: "hsl(75, 94%, 57%)",
        Grey: {
          Light: "hsl(0, 0%, 20%)",
          Mid: "hsl(0, 0%, 12%)",
          Dark: "hsl(0, 0%, 8%)",
        },
      },

      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },

      fontWeight: {
        normal: "400",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
};
