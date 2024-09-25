// plugins/positionUtilities.js
import { degreeTheme, positioningTheme, scaleTheme } from './theme';
import plugin from 'tailwindcss/plugin';

export const transformUtilities = plugin(function ({ matchUtilities }) {
  matchUtilities(
    {
      scl: (value) => ({
        '--tw-scale-x': value,
        '--tw-scale-y': value,
        transform:
          'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
      }),
      sclx: (value) => ({
        '--tw-scale-x': value,
        transform:
          'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
      }),
      scly: (value) => ({
        '--tw-scale-y': value,
        transform:
          'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
      }),
    },
    { values: scaleTheme }
  );
  matchUtilities(
    {
      rot: (value) => ({
        '--tw-rotate': value,
        transform:
          'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
      }),
    },
    { values: degreeTheme, supportsNegativeValues: true }
  );
  matchUtilities(
    {
      trl: (value) => ({
        '--tw-translate-x': value,
        '--tw-translate-y': value,
        transform:
          'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
      }),
      trlx: (value) => ({
        '--tw-translate-x': value,
        transform:
          'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
      }),
      trly: (value) => ({
        '--tw-translate-y': value,
        transform:
          'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
      }),
    },
    {
      values: positioningTheme,
      supportsNegativeValues: true,
    }
  );
  matchUtilities(
    {
      skw: (value) => ({
        '--tw-skew-x': value,
        '--tw-skew-y': value,
        transform:
          'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
      }),
      skwx: (value) => ({
        '--tw-skew-x': value,
        transform:
          'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
      }),
      skwy: (value) => ({
        '--tw-skew-y': value,
        transform:
          'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
      }),
    },
    { values: degreeTheme, supportsNegativeValues: true }
  );
});
