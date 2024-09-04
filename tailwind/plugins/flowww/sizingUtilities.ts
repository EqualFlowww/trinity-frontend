// plugins/sizingUtilities.js
import plugin from 'tailwindcss/plugin';
import { sizingTheme } from './theme';

export const sizingUtilities = plugin(function ({ matchUtilities }) {
  matchUtilities(
    {
      size: (value) => ({
        width: value === 'screen' ? '100vw' : value,
        height: value === 'screen' ? '100vh' : value,
      }),
      width: (value) => ({
        width: value === 'screen' ? '100vw' : value,
      }),
      height: (value) => ({
        height: value === 'screen' ? '100vh' : value,
      }),
      'max-width': (value) => ({
        'max-width': value,
      }),
      'max-height': (value) => ({
        'max-height': value,
      }),
      'min-width': (value) => ({
        'min-width': value,
      }),
      'min-height': (value) => ({
        'min-height': value,
      }),
    },
    {
      values: sizingTheme,
    }
  );
});
