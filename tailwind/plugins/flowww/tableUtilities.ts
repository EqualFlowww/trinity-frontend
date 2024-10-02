// plugins/sizingUtilities.js
import plugin from 'tailwindcss/plugin';
import { spacingTheme } from './theme';

export const tableUtilities = plugin(function ({ matchUtilities }) {
  matchUtilities(
    {
      bsp: (value) => ({
        '--tw-border-spacing-x': value,
        '--tw-border-spacing-y': value,
        'border-spacing': `var(--tw-border-spacing-x) var(--tw-border-spacing-y)`,
      }),
      bspx: (value) => ({
        '--tw-border-spacing-x': value,
        'border-spacing': `var(--tw-border-spacing-x) var(--tw-border-spacing-y)`,
      }),
      bspy: (value) => ({
        '--tw-border-spacing-y': value,
        'border-spacing': `var(--tw-border-spacing-x) var(--tw-border-spacing-y)`,
      }),
    },
    {
      values: spacingTheme,
    }
  );
});
