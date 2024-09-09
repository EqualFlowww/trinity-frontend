// plugins/spacingUtilities.js
import plugin from 'tailwindcss/plugin';

export const buttonUtilities = plugin(function ({ addComponents }) {
  addComponents({
    '.btn': { display: 'flex', cursor: 'pointer' },
    '.btn-filled': { border: 'none', boxShadow: 'none' },
    '.btn-outlined': { border: '1px solid', boxShadow: 'none' },
    '.btn-text': { border: 'none', boxShadow: 'none' },
  });
});
