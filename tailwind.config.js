/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Background: '#333333',
        textColor: '#503ef3',
        textColor2: '#a1a1a1',
        textColor3: 'white',
      },
    },
  },
  plugins: [],
};
