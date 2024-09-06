// plugins/sizingUtilities.js
import plugin from 'tailwindcss/plugin';
import { opacityTheme } from './theme';

export const opacityUtilities = plugin(function ({ matchUtilities }) {
  matchUtilities(
    {
      oc: (value) => ({
        opacity: value,
      }),
    },
    {
      values: opacityTheme,
    }
  );
});
