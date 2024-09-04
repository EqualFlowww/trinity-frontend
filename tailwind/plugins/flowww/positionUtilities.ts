// plugins/positionUtilities.js
import plugin from 'tailwindcss/plugin';
import { positioningTheme, zIndexTheme } from './theme';

export const positionUtilities = plugin(function ({
  addUtilities,
  matchUtilities,
}) {
  // 위치 설정 유틸리티
  addUtilities(
    ['static', 'absolute', 'relative', 'fixed', 'sticky'].map((value) => ({
      [`.position-${value}`]: {
        position: value,
      },
    }))
  );

  // z-index 유틸리티
  matchUtilities(
    {
      'z-index': (value) => ({
        'z-index': value,
      }),
    },
    {
      values: zIndexTheme,
    }
  );

  // Top, Right, Bottom, Left 유틸리티
  matchUtilities(
    {
      top: (value) => ({
        top: value,
      }),
      right: (value) => ({
        right: value,
      }),
      bottom: (value) => ({
        bottom: value,
      }),
      left: (value) => ({
        left: value,
      }),
    },
    {
      values: positioningTheme,
      supportsNegativeValues: true,
    }
  );
});
