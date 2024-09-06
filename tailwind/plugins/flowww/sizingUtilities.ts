// plugins/sizingUtilities.js
import plugin from 'tailwindcss/plugin';
import { sizingTheme } from './theme';

export const sizingUtilities = plugin(function ({ matchUtilities }) {
  matchUtilities(
    {
      sz: (value) => ({
        width: value === 'screen' ? '100vw' : value,
        height: value === 'screen' ? '100vh' : value,
      }),
      w: (value) => ({
        width: value === 'screen' ? '100vw' : value,
      }),
      h: (value) => ({
        height: value === 'screen' ? '100vh' : value,
      }),
      xw: (value) => ({
        'max-width': 'screen' ? '100vw' : value,
      }),
      xh: (value) => ({
        'max-height': 'screen' ? '100vh' : value,
      }),
      mw: (value) => ({
        'min-width': 'screen' ? '100vw' : value,
      }),
      mh: (value) => ({
        'min-height': 'screen' ? '100vh' : value,
      }),
    },
    {
      values: sizingTheme,
    }
  );
});
