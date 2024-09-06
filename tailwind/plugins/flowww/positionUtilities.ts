// plugins/positionUtilities.js
import plugin from 'tailwindcss/plugin';
import { positioningTheme } from './theme';

export const positionUtilities = plugin(function ({ matchUtilities }) {
  // // 위치 설정 유틸리티
  // addUtilities(
  //   ['static', 'absolute', 'relative', 'fixed', 'sticky'].map((value) => ({
  //     [`.position-${value}`]: {
  //       position: value,
  //     },
  //   }))
  // );
  // Top, Right, Bottom, Left 유틸리티
  matchUtilities(
    {
      t: (value) => ({
        top: value,
      }),
      r: (value) => ({
        right: value,
      }),
      b: (value) => ({
        bottom: value,
      }),
      l: (value) => ({
        left: value,
      }),
    },
    {
      values: positioningTheme,
      supportsNegativeValues: true,
    }
  );
});
