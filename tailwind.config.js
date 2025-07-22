/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 darkMode: "class", 
theme: {
  extend: {
    colors: {
      brandBlue: '#2563eb',
      lightBg: '#f9f9f9',
      lightCard: '#ffffff',
    },
  },
},

  plugins: [],
}

