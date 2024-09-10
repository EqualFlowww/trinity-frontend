// plugins/sizingUtilities.js
import plugin from 'tailwindcss/plugin';
import {
  borderRadiusTheme,
  borderTypeTheme,
  borderWidthTheme,
  contentColorTheme,
} from './theme';

export const borderUtilities = plugin(function ({ matchUtilities }) {
  matchUtilities(
    {
      bs: (value) => ({
        'border-style': value,
      }),
      bts: (value) => ({
        'border-top-style': value,
      }),
      brs: (value) => ({
        'border-right-style': value,
      }),
      bbs: (value) => ({
        'border-bottom-style': value,
      }),
      bls: (value) => ({
        'border-left-style': value,
      }),
    },
    {
      values: borderTypeTheme,
    }
  );
  matchUtilities(
    {
      bc: (value) => ({
        'border-color': value,
      }),
      btc: (value) => ({
        'border-top-color': value,
      }),
      brc: (value) => ({
        'border-right-color': value,
      }),
      bbc: (value) => ({
        'border-bottom-color': value,
      }),
      blc: (value) => ({
        'border-left-color': value,
      }),
    },
    {
      values: contentColorTheme,
    }
  );
  matchUtilities(
    {
      bw: (value) => ({
        'border-width': value,
      }),
      btw: (value) => ({
        'border-top-width': value,
      }),
      brw: (value) => ({
        'border-right-width': value,
      }),
      bbw: (value) => ({
        'border-bottom-width': value,
      }),
      blw: (value) => ({
        'border-left-width': value,
      }),
    },
    {
      values: borderWidthTheme,
    }
  );
  matchUtilities(
    {
      rad: (value) => ({
        'border-radius': value,
      }),
      'rad-t': (value) => ({
        'border-top-left-radius': value,
        'border-top-right-radius': value,
      }),
      'rad-r': (value) => ({
        'border-top-right-radius': value,
        'border-bottom-right-radius': value,
      }),
      'rad-b': (value) => ({
        'border-bottom-right-radius': value,
        'border-bottom-left-radius': value,
      }),
      'rad-l': (value) => ({
        'border-top-left-radius': value,
        'border-bottom-left-radius': value,
      }),
      'rad-tl': (value) => ({
        'border-top-left-radius': value,
      }),
      'rad-tr': (value) => ({
        'border-top-right-radius': value,
      }),
      'rad-br': (value) => ({
        'border-bottom-right-radius': value,
      }),
      'rad-bl': (value) => ({
        'border-bottom-left-radius': value,
      }),
    },
    {
      values: borderRadiusTheme,
    }
  );
});
