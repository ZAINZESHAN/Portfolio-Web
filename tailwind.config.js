/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    screens: {
      sm: '340px',
      md: '540px',
      lg: '798px',
      xl: '1180px',
      xxl: '1400px'
    },
    extend: {
      fontFamily: {
        Jost: ['Jost', 'sans-serif'],
        Viga: ['Viga', 'sans-serif'],
        Strait: ['Strait', 'sans-serif'],
        jetBrains: ['JetBrains Mono', 'monospace'], // Define JetBrains Mono here
        Rubik: ['Rubik Vinyl', 'serif']
      },
      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#00cc7a',
          hover: '#00e187'
        }
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
        md: '32px'
      }
    }
  },
  plugins: [],
}

