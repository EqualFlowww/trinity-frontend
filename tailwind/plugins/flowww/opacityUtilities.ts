// plugins/sizingUtilities.js
import plugin from 'tailwindcss/plugin';
import { opacityTheme } from './theme';

export const opacityUtilities = plugin(function ({ matchUtilities }) {
  matchUtilities(
    {
      opacity: (value) => ({
        opacity: value,
      }),
    },
    {
      values: opacityTheme,
    }
  );
});
