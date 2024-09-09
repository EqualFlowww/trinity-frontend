// plugins/sizingUtilities.js
import plugin from 'tailwindcss/plugin';

export const borderUtilities = plugin(function ({ addComponents }) {
  addComponents({
    '.spinner': { cursor: 'pointer' },
    '.spinner-small': { border: 'none', boxShadow: 'none' },
    '.spinner-medium': { border: '1px solid', boxShadow: 'none' },
    '.spinner-large': { border: 'none', boxShadow: 'none' },
  });
});
