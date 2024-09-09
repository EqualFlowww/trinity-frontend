// plugins/sizingUtilities.js
import plugin from 'tailwindcss/plugin';

export const spinnerUtilities = plugin(function ({ addComponents }) {
  addComponents({
    '.spinner': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '.spinner-small': {
      width: 'var(--sz-1-half)',
      height: 'var(--sz-1-half)',
      '& > .loader': {
        borderTopWidth: 'var(--sz-0-quarter)',
        borderRightWidth: 'var(--sz-0-quarter)',
      },
    },
    '.spinner-medium': {
      width: 'var(--sz-3)',
      height: 'var(--sz-3)',
      '& > .loader': {
        borderTopWidth: 'var(--sz-0-half)',
        borderRightWidth: 'var(--sz-0-half)',
      },
    },
    '.spinner-large': {
      width: 'var(--sz-6)',
      height: 'var(--sz-6)',
      '& > .loader': {
        borderTopWidth: 'var(--sz-1)',
        borderRightWidth: 'var(--sz-1)',
      },
    },
  });
});
