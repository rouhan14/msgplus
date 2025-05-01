/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1D8EFF',
          secondary: '#006AFF',
        },
        fontFamily: {
          geist: ['var(--font-geist-sans)', 'sans-serif'],
          mono: ['var(--font-geist-mono)', 'monospace'],
        },
      },
    },
    plugins: [],
  }