// plugins/sizingUtilities.js
import plugin from 'tailwindcss/plugin';

export const spinnerUtilities = plugin(function ({ addComponents }) {
  addComponents({
    '.spinner': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '.spinner-s': {
      width: '1.6rem',
      height: '1.6rem',
      '& > .loader': {
        borderTopWidth: '0.1rem',
        borderRightWidth: '0.1rem',
      },
    },
    '.spinner-m': {
      width: '3.2rem',
      height: '3.2rem',
      '& > .loader': {
        borderTopWidth: '0.2rem',
        borderRightWidth: '0.2rem',
      },
    },
    '.spinner-l': {
      width: '6.4rem',
      height: '6.4rem',
      '& > .loader': {
        borderTopWidth: '0.4rem',
        borderRightWidth: '0.4rem',
      },
    },
    '.spinner-xl': {
      width: '12.8rem',
      height: '12.8rem',
      '& > .loader': {
        borderTopWidth: '0.6rem',
        borderRightWidth: '0.6rem',
      },
    },
  });
});
