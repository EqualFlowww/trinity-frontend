// plugins/positionUtilities.js
import { durationTheme } from './theme';
import plugin from 'tailwindcss/plugin';

export const transitionUtilities = plugin(function ({
  addUtilities,
  matchUtilities,
}) {
  addUtilities({
    ['.trans-none']: {
      'transition-property': 'none',
    },
    ['.trans-all']: {
      'transition-property': 'all',
      'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
      'transition-duration': '150ms',
    },
    ['.trans']: {
      'transition-property':
        'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
      'transition-duration': '150ms',
    },
    ['.trans-colors']: {
      'transition-property':
        'color, background-color, border-color, text-decoration-color, fill, stroke',
      'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
      'transition-duration': '150ms',
    },
    ['.trans-opacity']: {
      'transition-property': 'opacity',
      'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
      'transition-duration': '150ms',
    },
    ['.trans-shadow']: {
      'transition-property': 'box-shadow, text-shadow, filter, backdrop-filter',
      'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
      'transition-duration': '150ms',
    },
    ['.trans-transform']: {
      'transition-property': 'transform',
      'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
      'transition-duration': '150ms',
    },
  });
  matchUtilities(
    {
      dur: (value) => ({
        'transition-duration': value,
      }),
    },
    { values: durationTheme }
  );
  matchUtilities(
    {
      dly: (value) => ({
        'transition-delay': value,
      }),
    },
    { values: durationTheme }
  );
});
