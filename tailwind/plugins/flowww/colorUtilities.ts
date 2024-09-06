// plugins/sizingUtilities.js
import plugin from 'tailwindcss/plugin';
import { containerColorTheme, contentColorTheme } from './theme';

export const colorUtilities = plugin(function ({ matchUtilities }) {
  matchUtilities(
    {
      c: (value) => ({
        color: value[1],
        backgroundColor: value[0],
      }),
    },
    {
      values: containerColorTheme,
    }
  );
  matchUtilities(
    {
      c: (value) => ({
        '&.text, &.svg, &.btn-text': {
          color: value,
          backgroundColor: 'transparent',
        },
        '&.btn-outlined': {
          color: value,
          backgroundColor: 'transparent',
          borderColor: value,
        },
      }),
    },
    {
      values: contentColorTheme,
    }
  );
});
