// plugins/spacingUtilities.js
import plugin from 'tailwindcss/plugin';

export const buttonUtilities = plugin(function ({
  matchUtilities,
  addComponents,
}) {
  addComponents({
    btn: { cursor: 'pointer' },
    '.btn-filled': { border: 'none', boxShadow: 'none' },
    '.btn-outlined': { border: '1px solid', boxShadow: 'none' },
    '.btn-text': { border: 'none', boxShadow: 'none' },
  });
});
