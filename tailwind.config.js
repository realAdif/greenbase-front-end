/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '14px',
      sm: '18px',
      base: '20px',
      md: '24px',
      lg: '32px',
      'headline-base': '46px',
      'headline-md': '48px',
      'headline-samllScreen': '48px',
      'headline-lg': '85px',
    },
    extend: {
      colors: {
        primary: '#1E5EFF',
      },
    },
  },
  plugins: [],
};
