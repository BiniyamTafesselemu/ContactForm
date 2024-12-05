/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lightgreen': "hsl(148, 38%, 91%)",
        'mediumgreen': "hsl(169, 82%, 27%)",
        'Red': "hsl(0, 66%, 54%)",
        'White':"hsl(0, 0%, 100%)",
        'mediumgray': "hsl(186, 15%, 59%)",
        'darkergray':"hsl(187, 24%, 22%)"
      },
      fontFamily: {
        Karla: ["Karla", 'sans-serif'],
      }, 
    },
  },
  plugins: [],
}

