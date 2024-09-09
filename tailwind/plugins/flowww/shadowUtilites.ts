// plugins/positionUtilities.js
import plugin from 'tailwindcss/plugin';

export const shadowUtilites = plugin(function ({ addUtilities }) {
  addUtilities({
    ['.shd-gray']: {
      '&.text': {
        padding: '0.2rem',
        margin: '-0.2rem',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)',
      },
      '&.svg': {
        filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.25))',
        webkitFilter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.25))',
      },
      '&:not(.text):not(.svg)': {
        boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)',
      },
    },
  });
});
