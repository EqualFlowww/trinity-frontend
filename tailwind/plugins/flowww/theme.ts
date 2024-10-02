import {
  BorderWidth,
  BorderRadius,
  ContainerColor,
  ContentColor,
  Percentage,
  Positioning,
  Sizing,
  Spacing,
  ZIndex,
  Gap,
  Opacity,
  BorderType,
  Duration,
  Scale,
  Degree,
  Factor,
} from '@/types/style';

type SpacingTheme = { [key in Spacing]: string };
type PercentageTheme = { [key in Percentage]: string };
type SizingTheme = { [key in Sizing]: string };
type zIndexTheme = { [key in ZIndex]: string };
type PositioningTheme = { [key in Positioning]: string };
type ContentColorTheme = { [key in ContentColor]: string };
type ContainerColorTheme = { [key in ContainerColor]: string[] };
type BorderTypeTheme = { [key in BorderType]: string };
type BorderWidthTheme = { [key in BorderWidth]: string };
type BorderRadiusTheme = { [key in BorderRadius]: string };
type GapTheme = { [key in Gap]: string };
type OpacityTheme = { [key in Opacity]: string };
type DurationTheme = { [key in Duration]: string };
type ScaleTheme = { [key in Scale]: string };
type DegreeTheme = { [key in Degree]: string };
type FlexItemTheme = { [key in Factor]: string };

const defaultSpacingBase = 0.8;
export const spacingTheme: SpacingTheme = {
  auto: 'auto',
  '0': `${defaultSpacingBase * 0}rem`,
  '0.125': `${defaultSpacingBase * 0.125}rem`,
  '0.25': `${defaultSpacingBase * 0.25}rem`,
  '0.375': `${defaultSpacingBase * 0.375}rem`,
  '0.5': `${defaultSpacingBase * 0.5}rem`,
  '0.75': `${defaultSpacingBase * 0.75}rem`,
  '1': `${defaultSpacingBase * 1}rem`,
  '1.25': `${defaultSpacingBase * 1.25}rem`,
  '1.5': `${defaultSpacingBase * 1.5}rem`,
  '1.75': `${defaultSpacingBase * 1.75}rem`,
  '2': `${defaultSpacingBase * 2}rem`,
  '2.25': `${defaultSpacingBase * 2.25}rem`,
  '2.5': `${defaultSpacingBase * 2.5}rem`,
  '2.75': `${defaultSpacingBase * 2.75}rem`,
  '3': `${defaultSpacingBase * 3}rem`,
  '3.25': `${defaultSpacingBase * 3.25}rem`,
  '3.5': `${defaultSpacingBase * 3.5}rem`,
  '3.75': `${defaultSpacingBase * 3.75}rem`,
  '4': `${defaultSpacingBase * 4}rem`,
  '4.25': `${defaultSpacingBase * 4.25}rem`,
  '4.5': `${defaultSpacingBase * 4.5}rem`,
  '4.75': `${defaultSpacingBase * 4.75}rem`,
  '5': `${defaultSpacingBase * 5}rem`,
  '5.5': `${defaultSpacingBase * 5.5}rem`,
  '6': `${defaultSpacingBase * 6}rem`,
  '6.5': `${defaultSpacingBase * 6.5}rem`,
  '7': `${defaultSpacingBase * 7}rem`,
  '7.5': `${defaultSpacingBase * 7.5}rem`,
  '8': `${defaultSpacingBase * 8}rem`,
  '8.5': `${defaultSpacingBase * 8.5}rem`,
  '9': `${defaultSpacingBase * 9}rem`,
  '9.5': `${defaultSpacingBase * 9.5}rem`,
  '10': `${defaultSpacingBase * 10}rem`,
  '11': `${defaultSpacingBase * 11}rem`,
  '12': `${defaultSpacingBase * 12}rem`,
  '13': `${defaultSpacingBase * 13}rem`,
  '14': `${defaultSpacingBase * 14}rem`,
  '15': `${defaultSpacingBase * 15}rem`,
  '16': `${defaultSpacingBase * 16}rem`,
  '18': `${defaultSpacingBase * 18}rem`,
  '20': `${defaultSpacingBase * 20}rem`,
  '22': `${defaultSpacingBase * 22}rem`,
  '24': `${defaultSpacingBase * 24}rem`,
  '26': `${defaultSpacingBase * 26}rem`,
  '28': `${defaultSpacingBase * 28}rem`,
  '30': `${defaultSpacingBase * 30}rem`,
  '32': `${defaultSpacingBase * 32}rem`,
  '36': `${defaultSpacingBase * 36}rem`,
  '40': `${defaultSpacingBase * 40}rem`,
  '44': `${defaultSpacingBase * 44}rem`,
  '48': `${defaultSpacingBase * 48}rem`,
  '52': `${defaultSpacingBase * 52}rem`,
  '56': `${defaultSpacingBase * 56}rem`,
  '60': `${defaultSpacingBase * 60}rem`,
  '64': `${defaultSpacingBase * 64}rem`,
  '72': `${defaultSpacingBase * 72}rem`,
  '80': `${defaultSpacingBase * 80}rem`,
  '88': `${defaultSpacingBase * 88}rem`,
  '96': `${defaultSpacingBase * 96}rem`,
  '104': `${defaultSpacingBase * 104}rem`,
  '112': `${defaultSpacingBase * 112}rem`,
  '120': `${defaultSpacingBase * 120}rem`,
  '128': `${defaultSpacingBase * 128}rem`,
};
export const percentageTheme: PercentageTheme = {
  '0pct': '0%',
  '1pct': '1%',
  '2pct': '2%',
  '3pct': '3%',
  '4pct': '4%',
  '5pct': '5%',
  '6pct': '6%',
  '7pct': '7%',
  '8pct': '8%',
  '9pct': '9%',
  '10pct': '10%',
  '11pct': '11%',
  '12pct': '12%',
  '13pct': '13%',
  '14pct': '14%',
  '15pct': '15%',
  '16pct': '16%',
  '18pct': '18%',
  '20pct': '20%',
  '22pct': '22%',
  '24pct': '24%',
  '26pct': '26%',
  '28pct': '28%',
  '30pct': '30%',
  '32pct': '32%',
  '34pct': '34%',
  '36pct': '36%',
  '38pct': '38%',
  '40pct': '40%',
  '42pct': '42%',
  '44pct': '44%',
  '46pct': '46%',
  '48pct': '48%',
  '50pct': '50%',
  '52pct': '52%',
  '54pct': '54%',
  '56pct': '56%',
  '58pct': '58%',
  '60pct': '60%',
  '62pct': '62%',
  '64pct': '64%',
  '66pct': '66%',
  '68pct': '68%',
  '70pct': '70%',
  '72pct': '72%',
  '74pct': '74%',
  '76pct': '76%',
  '78pct': '78%',
  '80pct': '80%',
  '82pct': '82%',
  '84pct': '84%',
  '86pct': '86%',
  '88pct': '88%',
  '90pct': '90%',
  '92pct': '92%',
  '94pct': '94%',
  '96pct': '96%',
  '98pct': '98%',
  '100pct': '100%',
};
export const sizingTheme: SizingTheme = {
  ...spacingTheme,
  ...percentageTheme,
  auto: 'auto',
  mobile: '640px',
  tablet: '768px',
  laptop: '1024px',
  full: '100%',
  'min-content': 'min-content',
  'max-content': 'max-content',
  'fit-content': 'fit-content',
  inherit: 'inherit',
  initial: 'initial',
  unset: 'unset',
  screen: 'screen',
};
export const zIndexTheme: zIndexTheme = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '10': '10',
  '11': '11',
  '12': '12',
  '13': '13',
  '14': '14',
  '15': '15',
  '16': '16',
  '17': '17',
  '18': '18',
  '19': '19',
  '100': '100',
  '101': '101',
  '102': '102',
  '103': '103',
  '104': '104',
  '105': '105',
  '106': '106',
  '107': '107',
  '108': '108',
  '109': '109',
  '1001': '1001',
  '1002': '1002',
  '1003': '1003',
  '1004': '1004',
  '1005': '1005',
  '1006': '1006',
  '1007': '1007',
  '1008': '1008',
  '1009': '1009',
  '1010': '1010',
  '1101': '1101',
  '1102': '1102',
  '1103': '1103',
  '1104': '1104',
  '1105': '1105',
  '1106': '1106',
  '1107': '1107',
  '1108': '1108',
  '1109': '1109',
  '1110': '1110',
};
export const positioningTheme: PositioningTheme = {
  ...spacingTheme,
  ...percentageTheme,
};

export const contentColorTheme: ContentColorTheme = {
  primary: 'var(--primary)',
  'on-primary': 'var(--on-primary)',
  'primary-container': 'var(--primary-container)',
  'on-primary-container': 'var(--on-primary-container)',
  secondary: 'var(--secondary)',
  'on-secondary': 'var(--on-secondary)',
  'secondary-container': 'var(--secondary-container)',
  'on-secondary-container': 'var(--on-secondary-container)',
  tertiary: 'var(--tertiary)',
  'on-tertiary': 'var(--on-tertiary)',
  'tertiary-container': 'var(--tertiary-container)',
  'on-tertiary-container': 'var(--on-tertiary-container)',
  success: 'var(--states-success)',
  'on-success': 'var(--states-on-success)',
  'success-container': 'var(--states-success-container)',
  'on-success-container': 'var(--states-on-success-container)',
  error: 'var(--states-error)',
  'on-error': 'var(--states-on-error)',
  'error-container': 'var(--states-error-container)',
  'on-error-container': 'var(--states-on-error-container)',
  warning: 'var(--states-warning)',
  'on-warning': 'var(--states-on-warning)',
  'warning-container': 'var(--states-warning-container)',
  'on-warning-container': 'var(--states-on-warning-container)',
  alert: 'var(--states-alert)',
  'on-alert': 'var(--states-on-alert)',
  'alert-container': 'var(--states-alert-container)',
  'on-alert-container': 'var(--states-on-alert-container)',
  neutral: 'var(--neutral-surface)',
  'on-neutral': 'var(--neutral-on-surface)',
  'on-neutral-variant': 'var(--neutral-on-surface-variant)',
  'neutral-container-01': 'var(--neutral-surface-container-01)',
  'neutral-container-02': 'var(--neutral-surface-container-02)',
  'neutral-container-03': 'var(--neutral-surface-container-03)',
  'neutral-container-04': 'var(--neutral-surface-container-04)',
  'neutral-container-05': 'var(--neutral-surface-container-05)',
  'neutral-outline': 'var(--neutral-outline)',
  'neutral-outline-variant': 'var(--neutral-outline-variant)',
  'neutral-scrim': 'var(--neutral-scrim)',
  transparent: 'transparent',
  inherit: 'inherit',
};

export const containerColorTheme: ContainerColorTheme = {
  primary: ['var(--primary)', 'var(--on-primary)'],
  'on-primary': ['var(--on-primary)', 'var(--primary)'],
  'primary-container': [
    'var(--primary-container)',
    'var(--on-primary-container)',
  ],
  'on-primary-container': [
    'var(--on-primary-container)',
    'var(--primary-container)',
  ],
  secondary: ['var(--secondary)', 'var(--on-secondary)'],
  'on-secondary': ['var(--on-secondary)', 'var(--secondary)'],
  'secondary-container': [
    'var(--secondary-container)',
    'var(--on-secondary-container)',
  ],
  'on-secondary-container': [
    'var(--on-secondary-container)',
    'var(--secondary-container)',
  ],
  tertiary: ['var(--tertiary)', 'var(--on-tertiary)'],
  'on-tertiary': ['var(--on-tertiary)', 'var(--tertiary)'],
  'tertiary-container': [
    'var(--tertiary-container)',
    'var(--on-tertiary-container)',
  ],
  'on-tertiary-container': [
    'var(--on-tertiary-container)',
    'var(--tertiary-container)',
  ],
  success: ['var(--states-success)', 'var(--states-on-success)'],
  'on-success': ['var(--states-on-success)', 'var(--states-success)'],
  'success-container': [
    'var(--states-success-container)',
    'var(--states-on-success-container)',
  ],
  'on-success-container': [
    'var(--states-on-success-container)',
    'var(--states-success-container)',
  ],
  error: ['var(--states-error)', 'var(--states-on-error)'],
  'on-error': ['var(--states-on-error)', 'var(--states-error)'],
  'error-container': [
    'var(--states-error-container)',
    'var(--states-on-error-container)',
  ],
  'on-error-container': [
    'var(--states-on-error-container)',
    'var(--states-error-container)',
  ],
  warning: ['var(--states-warning)', 'var(--states-on-warning)'],
  'on-warning': ['var(--states-on-warning)', 'var(--states-warning)'],
  'warning-container': [
    'var(--states-warning-container)',
    'var(--states-on-warning-container)',
  ],
  'on-warning-container': [
    'var(--states-on-warning-container)',
    'var(--states-warning-container)',
  ],
  alert: ['var(--states-alert)', 'var(--states-on-alert)'],
  'on-alert': ['var(--states-on-alert)', 'var(--states-alert)'],
  'alert-container': [
    'var(--states-alert-container)',
    'var(--states-on-alert-container)',
  ],
  'on-alert-container': [
    'var(--states-on-alert-container)',
    'var(--states-alert-container)',
  ],
  neutral: ['var(--neutral-surface)', 'var(--neutral-on-surface)'],
  'on-neutral': ['var(--neutral-on-surface)', 'var(--neutral-surface)'],
  'on-neutral-variant': [
    'var(--neutral-on-surface-variant)',
    'var(--neutral-surface-container-03)',
  ],
  'neutral-container-01': [
    'var(--neutral-surface-container-01)',
    'var(--neutral-on-surface-variant)',
  ],
  'neutral-container-02': [
    'var(--neutral-surface-container-02)',
    'var(--neutral-on-surface-variant)',
  ],
  'neutral-container-03': [
    'var(--neutral-surface-container-03)',
    'var(--neutral-on-surface-variant)',
  ],
  'neutral-container-04': [
    'var(--neutral-surface-container-04)',
    'var(--neutral-on-surface-variant)',
  ],
  'neutral-container-05': [
    'var(--neutral-surface-container-05)',
    'var(--neutral-on-surface-variant)',
  ],
  transparent: ['transparent', 'transparent'],
};

export const borderTypeTheme: BorderTypeTheme = {
  solid: 'solid',
  dashed: 'dashed',
  dotted: 'dotted',
  double: 'double',
  groove: 'groove',
  ridge: 'ridge',
  hidden: 'hidden',
  none: 'none',
};

export const borderWidthTheme: BorderWidthTheme = {
  '0': `${defaultSpacingBase * 0}rem`,
  '0.125': `${defaultSpacingBase * 0.125}rem`,
  '0.25': `${defaultSpacingBase * 0.25}rem`,
  '0.375': `${defaultSpacingBase * 0.375}rem`,
  '0.5': `${defaultSpacingBase * 0.5}rem`,
};

export const borderRadiusTheme: BorderRadiusTheme = {
  '0': `${defaultSpacingBase * 0}rem`,
  '0.25': `${defaultSpacingBase * 0.25}rem`,
  '0.5': `${defaultSpacingBase * 0.5}rem`,
  '0.75': `${defaultSpacingBase * 0.75}rem`,
  '1': `${defaultSpacingBase * 1}rem`,
  '1.5': `${defaultSpacingBase * 1.5}rem`,
  '2': `${defaultSpacingBase * 2}rem`,
  '2.5': `${defaultSpacingBase * 2.5}rem`,
  '3': `${defaultSpacingBase * 3}rem`,
  '9999': `${defaultSpacingBase * 9999}rem`,
  circle: '50%',
};

export const gapTheme: GapTheme = {
  '0': `${defaultSpacingBase * 0}rem`,
  '0.125': `${defaultSpacingBase * 0.125}rem`,
  '0.25': `${defaultSpacingBase * 0.25}rem`,
  '0.375': `${defaultSpacingBase * 0.375}rem`,
  '0.5': `${defaultSpacingBase * 0.5}rem`,
  '0.75': `${defaultSpacingBase * 0.75}rem`,
  '1': `${defaultSpacingBase * 1}rem`,
  '1.25': `${defaultSpacingBase * 1.25}rem`,
  '1.5': `${defaultSpacingBase * 1.5}rem`,
  '1.75': `${defaultSpacingBase * 1.75}rem`,
  '2': `${defaultSpacingBase * 2}rem`,
  '2.25': `${defaultSpacingBase * 2.25}rem`,
  '2.5': `${defaultSpacingBase * 2.5}rem`,
  '2.75': `${defaultSpacingBase * 2.75}rem`,
  '3': `${defaultSpacingBase * 3}rem`,
  '3.25': `${defaultSpacingBase * 3.25}rem`,
  '3.5': `${defaultSpacingBase * 3.5}rem`,
  '3.75': `${defaultSpacingBase * 3.75}rem`,
  '4': `${defaultSpacingBase * 4}rem`,
  '4.25': `${defaultSpacingBase * 4.25}rem`,
  '4.5': `${defaultSpacingBase * 4.5}rem`,
  '4.75': `${defaultSpacingBase * 4.75}rem`,
  '5': `${defaultSpacingBase * 5}rem`,
  '5.5': `${defaultSpacingBase * 5.5}rem`,
  '6': `${defaultSpacingBase * 6}rem`,
  '6.5': `${defaultSpacingBase * 6.5}rem`,
  '7': `${defaultSpacingBase * 7}rem`,
  '7.5': `${defaultSpacingBase * 7.5}rem`,
  '8': `${defaultSpacingBase * 8}rem`,
};

export const opacityTheme: OpacityTheme = {
  '0': '0',
  '0.1': '0.1',
  '0.2': '0.2',
  '0.3': '0.3',
  '0.4': '0.4',
  '0.5': '0.5',
  '0.6': '0.6',
  '0.7': '0.7',
  '0.8': '0.8',
  '0.9': '0.9',
  '1': '1',
};

export const durationTheme: DurationTheme = {
  '0': '0s',
  '75': '75ms',
  '100': '100ms',
  '150': '150ms',
  '200': '200ms',
  '300': '300ms',
  '500': '500ms',
  '700': '700ms',
  '1000': '1000ms',
};

export const scaleTheme: ScaleTheme = {
  '0': '0',
  '25': '0.25',
  '50': '0.5',
  '75': '0.75',
  '90': '0.9',
  '95': '0.95',
  '100': '1',
  '105': '1.05',
  '110': '1.1',
  '125': '1.25',
  '150': '1.5',
};

export const degreeTheme: DegreeTheme = {
  '0': '0deg',
  '1': '1deg',
  '2': '2deg',
  '3': '3deg',
  '6': '6deg',
  '12': '12deg',
  '15': '15deg',
  '30': '30deg',
  '45': '45deg',
  '60': '60deg',
  '75': '75deg',
  '90': '90deg',
  '105': '105deg',
  '120': '120deg',
  '135': '135deg',
  '150': '150deg',
  '165': '165deg',
  '180': '180deg',
};

export const flexItemTheme: FlexItemTheme = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '10': '10',
};
