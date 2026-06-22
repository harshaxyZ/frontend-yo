/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        samvad: {
          bg: {
            light: '#FAFAF8',
            dark: '#0A0A0F',
          },
          card: {
            light: '#FFFFFF',
            dark: '#1A1A1A',
          },
          primary: '#FF6B6B',      // coral
          secondary: '#0D9488',    // teal
          tertiary: '#F59E0B',     // gold
          text: {
            primary: {
              light: '#0F0F0F',
              dark: '#E7E5E0',
            },
            secondary: {
              light: '#6B6B6B',
              dark: '#A3A3A3',
            }
          },
          brand: {
            lavender: '#C4B5E0',
            skyblue: '#A7C7E7',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'real': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'real-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
