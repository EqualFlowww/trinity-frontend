// plugins/positionUtilities.js
import plugin from 'tailwindcss/plugin';

export const overflowUtilities = plugin(function ({ addUtilities }) {
  addUtilities({
    ['.ovf-auto']: {
      overflow: 'auto',
    },
    ['.ovf-hidden']: {
      overflow: 'hidden',
    },
    ['.ovf-visible']: {
      overflow: 'visible',
    },
    ['.ovf-scroll']: {
      overflow: 'scroll',
    },
    ['ovf-clip']: {
      overflow: 'clip',
    },
    ['.ovf-x-auto']: {
      'overflow-x': 'auto',
    },
    ['.ovf-x-hidden']: {
      'overflow-x': 'hidden',
    },
    ['.ovf-x-visible']: {
      'overflow-x': 'visible',
    },
    ['.ovf-x-scroll']: {
      'overflow-x': 'scroll',
    },
    ['.ovf-x-clip']: {
      'overflow-x': 'clip',
    },
    ['.ovf-y-auto']: {
      'overflow-y': 'auto',
    },
    ['.ovf-y-hidden']: {
      'overflow-y': 'hidden',
    },
    ['.ovf-y-visible']: {
      'overflow-y': 'visible',
    },
    ['.ovf-y-scroll']: {
      'overflow-y': 'scroll',
    },
    ['.ovf-y-clip']: {
      'overflow-y': 'clip',
    },
  });
});
