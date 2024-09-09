// plugins/positionUtilities.js
import plugin from 'tailwindcss/plugin';

export const objectUtilities = plugin(function ({ addUtilities }) {
  addUtilities({
    ['.obj-fill']: {
      'object-fit': 'fill',
    },
    ['.obj-contain']: {
      'object-fit': 'contain',
    },
    ['.obj-cover']: {
      'object-fit': 'cover',
    },
    ['.obj-none']: {
      'object-fit': 'none',
    },
    ['.obj-scale-down']: {
      'object-fit': 'scale-down',
    },
    ['.obj-bottom']: {
      'object-position': 'bottom',
    },
    ['.obj-center']: {
      'object-position': 'center',
    },
    ['.obj-left']: {
      'object-position': 'left',
    },
    ['.obj-left-bottom']: {
      'object-position': 'left bottom',
    },
    ['.obj-left-top']: {
      'object-position': 'left top',
    },
    ['.obj-right']: {
      'object-position': 'right',
    },
    ['.obj-right-bottom']: {
      'object-position': 'right bottom',
    },
    ['.obj-right-top']: {
      'object-position': 'right top',
    },
    ['.obj-top']: {
      'object-position': 'top',
    },
  });
});
