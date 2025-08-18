/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        oldEnglish:[ "Mozilla Text", 'sans-serif']
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],  // শুধু light theme enable
    darkTheme: "dark",  // dark mode toggle করতে
  },
}
