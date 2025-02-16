/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      screens: {
        xs: "380px",
        sm: "640px",
        md: "768px",
        lg: "1024px" // Custom breakpoint for small mobiles
      },
    },
  },
  plugins: [],
}

