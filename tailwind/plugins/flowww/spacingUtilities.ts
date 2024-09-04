// plugins/spacingUtilities.js
import plugin from 'tailwindcss/plugin';
import { spacingTheme } from './theme';

export const spacingUtilities = plugin(function ({ matchUtilities }) {
  matchUtilities(
    {
      padding: (value) => ({
        padding: value,
      }),
      'padding-x': (value) => ({
        'padding-left': value,
        'padding-right': value,
      }),
      'padding-y': (value) => ({
        'padding-top': value,
        'padding-bottom': value,
      }),
      'padding-top': (value) => ({
        'padding-top': value,
      }),
      'padding-right': (value) => ({
        'padding-right': value,
      }),
      'padding-bottom': (value) => ({
        'padding-bottom': value,
      }),
      'padding-left': (value) => ({
        'padding-left': value,
      }),
      margin: (value) => ({
        margin: value,
      }),
      'margin-x': (value) => ({
        'margin-left': value,
        'margin-right': value,
      }),
      'margin-y': (value) => ({
        'margin-top': value,
        'margin-bottom': value,
      }),
      'margin-top': (value) => ({
        'margin-top': value,
      }),
      'margin-right': (value) => ({
        'margin-right': value,
      }),
      'margin-bottom': (value) => ({
        'margin-bottom': value,
      }),
      'margin-left': (value) => ({
        'margin-left': value,
      }),
    },
    {
      // Tailwind의 width 값을 사용
      values: spacingTheme,
      supportsNegativeValues: true,
    }
  );
});
