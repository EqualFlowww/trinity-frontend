// plugins/positionUtilities.js
import plugin from 'tailwindcss/plugin';

export const flexUtilities = plugin(function ({ addUtilities }) {
  // addUtilities({
  //   ['f-row']: { 'flex-direction': 'row' },
  //   ['f-row-reverse']: { 'flex-direction': 'row-reverse' },
  //   ['f-col']: { 'flex-direction': 'column' },
  //   ['f-col-reverse']: { 'flex-direction': 'column-reverse' },
  // });
  // addUtilities(
  //   ['wrap', 'nowrap', 'wrap-reverse'].map((value) => ({
  //     [`.f-${value}`]: {
  //       'flex-wrap': value,
  //     },
  //   }))
  // );
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
    ['.jc-between']: {
      'justify-content': 'space-between',
    },
    ['.jc-around']: {
      'justify-content': 'space-around',
    },
    ['.jc-evenly']: {
      'justify-content': 'space-evenly',
    },
    ['.ai-start']: {
      'align-items': 'flex-start',
    },
    ['.ai-end']: {
      'align-items': 'flex-end',
    },
    ['.ai-center']: {
      'align-items': 'center',
    },
    ['.ai-baseline']: {
      'align-items': 'baseline',
    },
    ['.ai-stretch']: {
      'align-items': 'stretch',
    },
    ['.ac-start']: {
      'align-content': 'flex-start',
    },
    ['.ac-end']: {
      'align-content': 'flex-end',
    },
    ['.ac-center']: {
      'align-content': 'center',
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
