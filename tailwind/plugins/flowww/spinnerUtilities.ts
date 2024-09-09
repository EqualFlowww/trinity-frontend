// plugins/sizingUtilities.js
import plugin from 'tailwindcss/plugin';

export const borderUtilities = plugin(function ({ addComponents }) {
  addComponents({
    '.spinner': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '.spinner-small': { border: 'none', boxShadow: 'none' },
    '.spinner-medium': { border: '1px solid', boxShadow: 'none' },
    '.spinner-large': { border: 'none', boxShadow: 'none' },
  });
});
