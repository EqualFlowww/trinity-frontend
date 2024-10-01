// plugins/positionUtilities.js
import plugin from 'tailwindcss/plugin';

export const shadowUtilites = plugin(function ({ addUtilities }) {
  addUtilities({
    ['.shd-gray']: {
      '&.text': {
        padding: '0.4rem',
        margin: '-0.4rem',
        textShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      '&.svg': {
        filter: 'drop-shadow(0px 0px 4px 0px rgba(0, 0, 0, 0.25))',
        webkitFilter: 'drop-shadow(0px 0px 4px 0px rgba(0, 0, 0, 0.25))',
      },
      '&:not(.text):not(.svg)': {
        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  });
});
