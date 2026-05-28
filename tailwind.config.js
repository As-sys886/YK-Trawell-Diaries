/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern sans-serif font
        display: ['Montserrat', 'sans-serif'], // For headings, cinematic feel
        body: ['Roboto', 'sans-serif'], // For body text
      },
      colors: {
        primary: '#3a6b3b', // Earthy green
        secondary: '#a0522d', // Sienna/earthy brown
        accent: '#f7d08a', // Soft gold/orange for highlights
        background: '#1a1a1a', // Dark background
        card: 'rgba(30, 41, 59, 0.4)', // Darker slate for glassmorphism
        'card-border': 'rgba(255, 255, 255, 0.1)', // Light border for glass effect
        text: '#e2e8f0', // Light text
        'text-muted': '#a0aec0', // Muted text
        'monsoon-dark': '#2c3e50', // Dark stormy blue
        'monsoon-light': '#34495e', // Slightly lighter stormy blue
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropFilter: {
        none: 'none',
        blur: 'blur(10px)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        rain: {
          '0%': { transform: 'translateY(0vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'loading-clouds': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'loading-mountains': {
          '0%': { transform: 'scale(0.9) translateY(10%)' },
          '50%': { transform: 'scale(1) translateY(0%)' },
          '100%': { transform: 'scale(0.9) translateY(10%)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        rain: 'rain 2s linear infinite',
        'loading-clouds': 'loading-clouds 20s linear infinite',
        'loading-mountains': 'loading-mountains 4s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
