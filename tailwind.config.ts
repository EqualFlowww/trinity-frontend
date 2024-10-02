import {
  gapTheme,
  positioningTheme,
  sizingTheme,
  spacingTheme,
  zIndexTheme,
} from './tailwind/plugins/flowww/theme';
import flowwwPlugin from './tailwind/plugins/flowww';

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    screens: {
      mb: { max: '640px' }, // => mobile @media (max-width: 639px) { ... }
      tb: { max: '768px' }, // => tablet @media (max-width: 640px) { ... }
      lt: { max: '1024px' }, // => laptop @media (max-width: 1024px) { ... }
    },
    fontFamily: {
      pretendard: [
        'Pretendard',
        'system-ui',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      outfit: [
        'Outfit',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      SFProDisplay: [
        'SF Pro Display',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      suit: [
        'SUIT',
        'system-ui',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    spacing: spacingTheme,
    width: sizingTheme,
    height: sizingTheme,
    zIndex: zIndexTheme,
    flexBasis: positioningTheme,
    gap: gapTheme,
    flexGrow: {},
    flexShrink: {},
    extend: {},
  },
  corePlugins: {
    alignContent: false,
    alignItems: false,
    border: false,
    borderRadius: false,
    borderSpacing: false,
    boxShadow: false,
    color: false,
    fontSize: false,
    flexBasis: false,
    flexGrow: false,
    flexShrink: false,
    height: false,
    inset: false,
    justifyContent: false,
    minHeight: false,
    maxHeight: false,
    minWidth: false,
    maxWidth: false,
    objectPosition: false,
    objectFit: false,
    opacity: false,
    overflow: false,
    size: false,
    width: false,
  },
  plugins: [flowwwPlugin],
};
