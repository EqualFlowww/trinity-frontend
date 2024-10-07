// plugins/positionUtilities.js
import plugin from 'tailwindcss/plugin';

export const textUtilities = plugin(function ({ addUtilities }) {
  // 위치 설정 유틸리티
  // addUtilities(
  //   ['wrap', 'nowrap', 'wrap-reverse'].map((value) => ({
  //     [`.f-${value}`]: {
  //       'flex-wrap': value,
  //     },
  //   }))
  // );
  addUtilities({
    ['.text']: {
      'font-style': 'normal',
      'line-height': 'normal',
    },
    ['.display-l']: {
      '&.text, &.font-pretendard': {
        'font-size': '5.6rem',
        'font-weight': '800',
      },
      '&.text, &.font-outfit': {
        'font-size': '5.6rem',
        'font-weight': '800',
      },
      '&.text, &.font-suit': {
        'font-size': '5.6rem',
        'font-weight': '800',
      },
    },
    ['.display-m']: {
      '&.text, &.font-pretendard': {
        'font-size': '4.8rem',
        'font-weight': '700',
      },
      '&.text, &.font-outfit': {
        'font-size': '4.8rem',
        'font-weight': '700',
      },
      '&.text, &.font-suit': {
        'font-size': '4.8rem',
        'font-weight': '700',
      },
    },
    ['.display-s']: {
      '&.text, &.font-pretendard': {
        'font-size': '3.6rem',
        'font-weight': '600',
      },
      '&.text, &.font-outfit': {
        'font-size': '3.6rem',
        'font-weight': '600',
      },
      '&.text, &.font-suit': {
        'font-size': '3.6rem',
        'font-weight': '600',
      },
    },
    ['.headline-l']: {
      '&.text, &.font-pretendard': {
        'font-size': '3.2rem',
        'font-weight': '800',
      },
      '&.text, &.font-outfit': {
        'font-size': '3.2rem',
        'font-weight': '800',
      },
      '&.text, &.font-suit': {
        'font-size': '3.2rem',
        'font-weight': '800',
      },
    },
    ['.headline-m']: {
      '&.text, &.font-pretendard': {
        'font-size': '2.8rem',
        'font-weight': '700',
      },
      '&.text, &.font-outfit': {
        'font-size': '2.8rem',
        'font-weight': '700',
      },
      '&.text, &.font-suit': {
        'font-size': '2.8rem',
        'font-weight': '700',
      },
    },
    ['.headline-s']: {
      '&.text, &.font-pretendard': {
        'font-size': '2.4rem',
        'font-weight': '600',
      },
      '&.text, &.font-outfit': {
        'font-size': '2.4rem',
        'font-weight': '600',
      },
      '&.text, &.font-suit': {
        'font-size': '2.4rem',
        'font-weight': '600',
      },
    },
    ['.title-l']: {
      '&.text, &.font-pretendard': {
        'font-size': '2.4rem',
        'font-weight': '800',
      },
      '&.text, &.font-outfit': {
        'font-size': '2.4rem',
        'font-weight': '800',
      },
      '&.text, &.font-suit': {
        'font-size': '2.4rem',
        'font-weight': '800',
      },
    },
    ['.title-m']: {
      '&.text, &.font-pretendard': {
        'font-size': '1.8rem',
        'font-weight': '700',
      },
      '&.text, &.font-outfit': {
        'font-size': '1.8rem',
        'font-weight': '700',
      },
      '&.text, &.font-suit': {
        'font-size': '1.8rem',
        'font-weight': '700',
      },
    },
    ['.title-s']: {
      '&.text, &.font-pretendard': {
        'font-size': '1.4rem',
        'font-weight': '600',
      },
      '&.text, &.font-outfit': {
        'font-size': '1.4rem',
        'font-weight': '600',
      },
      '&.text, &.font-suit': {
        'font-size': '1.4rem',
        'font-weight': '600',
      },
    },
    ['.body-xl']: {
      '&.text, &.font-pretendard': {
        'font-size': '1.8rem',
        'font-weight': '400',
      },
      '&.text, &.font-outfit': {
        'font-size': '1.8rem',
        'font-weight': '400',
      },
      '&.text, &.font-suit': {
        'font-size': '1.8rem',
        'font-weight': '400',
      },
    },

    ['.body-2xl']: {
      '&.text, &.font-pretendard': {
        'font-size': '2.4rem',
        'font-weight': '400',
      },
      '&.text, &.font-outfit': {
        'font-size': '2.4rem',
        'font-weight': '400',
      },
      '&.text, &.font-suit': {
        'font-size': '2.4rem',
        'font-weight': '400',
      },
    },

    ['.body-l']: {
      '&.text, &.font-pretendard': {
        'font-size': '1.6rem',
        'font-weight': '400',
      },
      '&.text, &.font-outfit': {
        'font-size': '1.6rem',
        'font-weight': '400',
      },
      '&.text, &.font-suit': {
        'font-size': '1.6rem',
        'font-weight': '400',
      },
    },
    ['.body-m']: {
      '&.text, &.font-pretendard': {
        'font-size': '1.4rem',
        'font-weight': '400',
      },
      '&.text, &.font-outfit': {
        'font-size': '1.4rem',
        'font-weight': '400',
      },
      '&.text, &.font-suit': {
        'font-size': '1.4rem',
        'font-weight': '400',
      },
    },
    ['.body-s']: {
      '&.text, &.font-pretendard': {
        'font-size': '1.2rem',
        'font-weight': '400',
      },
      '&.text, &.font-outfit': {
        'font-size': '1.2rem',
        'font-weight': '400',
      },
      '&.text, &.font-suit': {
        'font-size': '1.2rem',
        'font-weight': '400',
      },
    },
    ['.label-l']: {
      '&.text, &.font-pretendard': {
        'font-size': '1.4rem',
        'font-weight': '400',
        'letter-spacing': '-0.28px',
      },
      '&.text, &.font-outfit': {
        'font-size': '1.4rem',
        'font-weight': '400',
        'letter-spacing': '-0.28px',
      },
      '&.text, &.font-suit': {
        'font-size': '1.4rem',
        'font-weight': '400',
        'letter-spacing': '-0.28px',
      },
    },
    ['.label-m']: {
      '&.text, &.font-pretendard': {
        'font-size': '1.2rem',
        'font-weight': '400',
        'letter-spacing': '-0.24px',
      },
      '&.text, &.font-outfit': {
        'font-size': '1.2rem',
        'font-weight': '400',
        'letter-spacing': '-0.24px',
      },
      '&.text, &.font-suit': {
        'font-size': '1.2rem',
        'font-weight': '400',
        'letter-spacing': '-0.24px',
      },
    },
    ['.label-s']: {
      '&.text, &.font-pretendard': {
        'font-size': '1rem',
        'font-weight': '400',
        'letter-spacing': '-0.2px',
      },
      '&.text, &.font-outfit': {
        'font-size': '1rem',
        'font-weight': '400',
        'letter-spacing': '-0.2px',
      },
      '&.text, &.font-suit': {
        'font-size': '1rem',
        'font-weight': '400',
        'letter-spacing': '-0.2px',
      },
    },
  });
});
