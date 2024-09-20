// plugins/positionUtilities.js
import { degreeTheme, positioningTheme, scaleTheme } from './theme';
import plugin from 'tailwindcss/plugin';

export const transformUtilities = plugin(function ({
  addUtilities,
  matchUtilities,
}) {
  matchUtilities(
    {
      scl: (value) => ({
        transform: `scale(${value})`,
      }),
      sclx: (value) => ({
        transform: `scaleX(${value})`,
      }),
      scly: (value) => ({
        transform: `scaleY(${value})`,
      }),
    },
    { values: scaleTheme }
  );
  matchUtilities(
    {
      rot: (value) => ({
        transform: `rotate(${value})`,
      }),
    },
    { values: degreeTheme, supportsNegativeValues: true }
  );
  matchUtilities(
    {
      trl: (value) => ({
        transform: `translate(${value}, ${value})`,
      }),
      trlx: (value) => ({
        transform: `translateX(${value})`,
      }),
      trly: (value) => ({
        transform: `translateY(${value})`,
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
        transform: `skew(${value})`,
      }),
      skwx: (value) => ({
        transform: `skewX(${value})`,
      }),
      skwy: (value) => ({
        transform: `skewY(${value})`,
      }),
    },
    { values: degreeTheme, supportsNegativeValues: true }
  );
  addUtilities({
    'org-center': {
      'transform-origin': 'center',
    },
    'org-top': {
      'transform-origin': 'top',
    },
    'org-top-right': {
      'transform-origin': 'top right',
    },
    'org-right': {
      'transform-origin': 'right',
    },
    'org-bottom-right': {
      'transform-origin': 'bottom right',
    },
    'org-bottom': {
      'transform-origin': 'bottom',
    },
    'org-bottom-left': {
      'transform-origin': 'bottom left',
    },
    'org-left': {
      'transform-origin': 'left',
    },
    'org-top-left': {
      'transform-origin': 'top left',
    },
  });
});
