// plugins/sizingUtilities.js
import plugin from 'tailwindcss/plugin';
import { containerColorTheme, contentColorTheme } from './theme';

export const colorUtilities = plugin(function ({ matchUtilities }) {
  matchUtilities(
    {
      color: (value) => ({
        '&.text, &.svg': {
          color: value[0],
          backgroundColor: value[1],
        },
      }),
    },
    {
      values: containerColorTheme,
    }
  );
  matchUtilities(
    {
      color: (value) => ({
        color: value,
        backgroundColor: 'transparent',
      }),
    },
    {
      values: contentColorTheme,
    }
  );
});
