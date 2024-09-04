import flowwwPlugin from './tailwind/plugins/flowww';

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [flowwwPlugin],
};
