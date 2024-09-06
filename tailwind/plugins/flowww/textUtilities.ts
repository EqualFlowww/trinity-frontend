// plugins/positionUtilities.js
import plugin from 'tailwindcss/plugin';

export const textUtilities = plugin(function ({ addUtilities }) {
  // 위치 설정 유틸리티
  addUtilities(
    ['row', 'column', 'row-reverse', 'column-reverse'].map((value) => ({
      [`.f-${value}`]: {
        'flex-direction': value,
      },
    }))
  );
  addUtilities(
    ['wrap', 'nowrap', 'wrap-reverse'].map((value) => ({
      [`.f-${value}`]: {
        'flex-wrap': value,
      },
    }))
  );
  addUtilities({
    ['.jc-start']: {
      'justify-content': 'flex-start',
    },
    ['.jc-end']: {
      'justify-content': 'flex-end',
    },
    ['.jc-center']: {
      'justify-content': 'center',
    },
    ['.ac-between']: {
      'align-content': 'space-between',
    },
    ['.ac-around']: {
      'align-content': 'space-around',
    },
    ['.ac-stretch']: {
      'align-content': 'stretch',
    },
  });
});
