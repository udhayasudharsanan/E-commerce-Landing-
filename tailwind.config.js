/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Custom breakpoint for small mobiles
      },
    },
  },
  plugins: [],
}

