// plugins/positionUtilities.js
import plugin from 'tailwindcss/plugin';
import { gapTheme } from './theme';

export const flexUtilities = plugin(function ({
  addUtilities,
  matchUtilities,
}) {
  // 위치 설정 유틸리티
  addUtilities(
    ['row', 'column', 'row-reverse', 'column-reverse'].map((value) => ({
      [`.direction-${value}`]: {
        'flex-direction': value,
      },
    }))
  );
  addUtilities(
    ['wrap', 'nowrap', 'wrap-reverse'].map((value) => ({
      [`.wrap-${value}`]: {
        'flex-wrap': value,
      },
    }))
  );
  addUtilities({
    ['.justify-content-start']: {
      'justify-content': 'flex-start',
    },
    ['.justify-content-end']: {
      'justify-content': 'flex-end',
    },
    ['.justify-content-center']: {
      'justify-content': 'center',
    },
    ['.justify-content-between']: {
      'justify-content': 'space-between',
    },
    ['.justify-content-around']: {
      'justify-content': 'space-around',
    },
    ['.justify-content-evenly']: {
      'justify-content': 'space-evenly',
    },
    ['.align-items-start']: {
      'align-items': 'flex-start',
    },
    ['.align-items-end']: {
      'align-items': 'flex-end',
    },
    ['.align-items-center']: {
      'align-items': 'center',
    },
    ['.align-items-baseline']: {
      'align-items': 'baseline',
    },
    ['.align-items-stretch']: {
      'align-items': 'stretch',
    },
    ['.align-content-start']: {
      'align-content': 'flex-start',
    },
    ['.align-content-end']: {
      'align-content': 'flex-end',
    },
    ['.align-content-center']: {
      'align-content': 'center',
    },
    ['.align-content-between']: {
      'align-content': 'space-between',
    },
    ['.align-content-around']: {
      'align-content': 'space-around',
    },
    ['.align-content-stretch']: {
      'align-content': 'stretch',
    },
  });
  // gap 유틸리티
  matchUtilities(
    {
      gap: (value) => ({
        gap: value,
      }),
    },
    {
      values: gapTheme,
    }
  );
});
