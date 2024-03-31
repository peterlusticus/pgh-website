/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#fff',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111'
        }
      },
      fontFamily: {
        'sans': ['"Future"', 'Helvetica', 'system-ui'],
      },
      letterSpacing: {
        tightest: '0em',
        tight: '-.05em',
        widest: '.7em',
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
