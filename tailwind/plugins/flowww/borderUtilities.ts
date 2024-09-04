// plugins/sizingUtilities.js
import plugin from 'tailwindcss/plugin';
import {
  borderRadiusTheme,
  borderWidthTheme,
  contentColorTheme,
} from './theme';

export const borderUtilities = plugin(function ({
  addUtilities,
  matchUtilities,
}) {
  addUtilities({
    ...[
      'solid',
      'dashed',
      'dotted',
      'double',
      'groove',
      'ridge',
      'none',
      'hidden',
    ].map((style) => ({
      [`.border-style-${style}`]: {
        'border-style': style,
      },
    })),
    ...['top', 'right', 'bottom', 'left'].map((direction) => ({
      [`.border-${direction}-style-solid`]: {
        [`border-${direction}-style`]: 'solid',
      },
      [`.border-${direction}-style-dashed`]: {
        [`border-${direction}-style`]: 'dashed',
      },
      [`.border-${direction}-style-dotted`]: {
        [`border-${direction}-style`]: 'dotted',
      },
      [`.border-${direction}-style-double`]: {
        [`border-${direction}-style`]: 'double',
      },
      [`.border-${direction}-style-groove`]: {
        [`border-${direction}-style`]: 'groove',
      },
      [`.border-${direction}-style-ridge`]: {
        [`border-${direction}-style`]: 'ridge',
      },
      [`.border-${direction}-style-none`]: {
        [`border-${direction}-style`]: 'none',
      },
      [`.border-${direction}-style-hidden`]: {
        [`border-${direction}-style`]: 'hidden',
      },
    })),
  });
  matchUtilities(
    {
      'border-color': (value) => ({
        'border-color': value,
      }),
      'border-top-color': (value) => ({
        'border-top-color': value,
      }),
      'border-right-color': (value) => ({
        'border-right-color': value,
      }),
      'border-bottom-color': (value) => ({
        'border-bottom-color': value,
      }),
      'border-left-color': (value) => ({
        'border-left-color': value,
      }),
    },
    {
      values: contentColorTheme,
    }
  );
  matchUtilities(
    {
      'border-width': (value) => ({
        'border-width': value,
      }),
      'border-top-width': (value) => ({
        'border-top-width': value,
      }),
      'border-right-width': (value) => ({
        'border-right-width': value,
      }),
      'border-bottom-width': (value) => ({
        'border-bottom-width': value,
      }),
      'border-left-width': (value) => ({
        'border-left-width': value,
      }),
    },
    {
      values: borderWidthTheme,
    }
  );
  matchUtilities(
    {
      'border-radius': (value) => ({
        'border-radius': value,
      }),
      'border-top-left-radius': (value) => ({
        'border-top-left-radius': value,
      }),
      'border-top-right-radius': (value) => ({
        'border-top-right-radius': value,
      }),
      'border-bottom-right-radius': (value) => ({
        'border-bottom-right-radius': value,
      }),
      'border-bottom-left-radius': (value) => ({
        'border-bottom-left-radius': value,
      }),
    },
    {
      values: borderRadiusTheme,
    }
  );
});
