// plugins/spacingUtilities.js
import plugin from 'tailwindcss/plugin';
import { borderWidthTheme, sizingTheme } from './theme';

export const hrUtilities = plugin(function ({ matchUtilities }) {
  matchUtilities(
    {
      len: (value) => ({
        '&.hr.vertical': {
          height: value,
        },
        '&.hr.horizontal': {
          width: value,
        },
      }),
    },
    {
      values: sizingTheme,
    }
  );
  matchUtilities(
    {
      thk: (value) => ({
        '&.hr.vertical': {
          width: value,
        },
        '&.hr.horizontal': {
          height: value,
        },
      }),
    },
    {
      values: borderWidthTheme,
    }
  );
});
