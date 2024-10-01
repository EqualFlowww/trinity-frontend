export type Factor =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | `[${number}]`;

export type Order = Factor | 'first' | 'last' | 'none';

export type Spacing =
  | 'auto'
  | '0'
  | '0.125'
  | '0.25'
  | '0.375'
  | '0.5'
  | '0.75'
  | '1'
  | '1.25'
  | '1.5'
  | '1.75'
  | '2'
  | '2.25'
  | '2.5'
  | '2.75'
  | '3'
  | '3.25'
  | '3.5'
  | '3.75'
  | '4'
  | '4.25'
  | '4.5'
  | '4.75'
  | '5'
  | '5.5'
  | '6'
  | '6.5'
  | '7'
  | '7.5'
  | '8'
  | '8.5'
  | '9'
  | '9.5'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '18'
  | '20'
  | '22'
  | '24'
  | '26'
  | '28'
  | '30'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '88'
  | '96'
  | '104'
  | '112'
  | '120'
  | '128'
  | `[${number}rem]`;

export type NagativeSpacing =
  | '-0'
  | '-0.125'
  | '-0.25'
  | '-0.375'
  | '-0.5'
  | '-0.75'
  | '-1'
  | '-1.25'
  | '-1.5'
  | '-1.75'
  | '-2'
  | '-2.25'
  | '-2.5'
  | '-2.75'
  | '-3'
  | '-3.25'
  | '-3.5'
  | '-3.75'
  | '-4'
  | '-4.25'
  | '-4.5'
  | '-4.75'
  | '-5'
  | '-5.5'
  | '-6'
  | '-6.5'
  | '-7'
  | '-7.5'
  | '-8'
  | '-8.5'
  | '-9'
  | '-9.5'
  | '-10'
  | '-11'
  | '-12'
  | '-13'
  | '-14'
  | '-15'
  | '-16'
  | '-18'
  | '-20'
  | '-22'
  | '-24'
  | '-26'
  | '-28'
  | '-30'
  | '-32'
  | '-36'
  | '-40'
  | '-44'
  | '-48'
  | '-52'
  | '-56'
  | '-60'
  | '-64'
  | '-72'
  | '-80'
  | '-88'
  | '-96'
  | '-104'
  | '-112'
  | '-120';

export type Percentage =
  | '0pct'
  | '1pct'
  | '2pct'
  | '3pct'
  | '4pct'
  | '5pct'
  | '6pct'
  | '7pct'
  | '8pct'
  | '9pct'
  | '10pct'
  | '11pct'
  | '12pct'
  | '13pct'
  | '14pct'
  | '15pct'
  | '16pct'
  | '18pct'
  | '20pct'
  | '22pct'
  | '24pct'
  | '26pct'
  | '28pct'
  | '30pct'
  | '32pct'
  | '34pct'
  | '36pct'
  | '38pct'
  | '40pct'
  | '42pct'
  | '44pct'
  | '46pct'
  | '48pct'
  | '50pct'
  | '52pct'
  | '54pct'
  | '56pct'
  | '58pct'
  | '60pct'
  | '62pct'
  | '64pct'
  | '66pct'
  | '68pct'
  | '70pct'
  | '72pct'
  | '74pct'
  | '76pct'
  | '78pct'
  | '80pct'
  | '82pct'
  | '84pct'
  | '86pct'
  | '88pct'
  | '90pct'
  | '92pct'
  | '94pct'
  | '96pct'
  | '98pct'
  | '100pct'
  | `[${number}%]`;

export type NagativePercentage =
  | '-0pct'
  | '-1pct'
  | '-2pct'
  | '-3pct'
  | '-4pct'
  | '-5pct'
  | '-6pct'
  | '-7pct'
  | '-8pct'
  | '-9pct'
  | '-10pct'
  | '-12pct'
  | '-14pct'
  | '-16pct'
  | '-18pct'
  | '-20pct'
  | '-22pct'
  | '-24pct'
  | '-26pct'
  | '-28pct'
  | '-30pct'
  | '-32pct'
  | '-34pct'
  | '-36pct'
  | '-38pct'
  | '-40pct'
  | '-42pct'
  | '-44pct'
  | '-46pct'
  | '-48pct'
  | '-50pct'
  | '-52pct'
  | '-54pct'
  | '-56pct'
  | '-58pct'
  | '-60pct'
  | '-62pct'
  | '-64pct'
  | '-66pct'
  | '-68pct'
  | '-70pct'
  | '-72pct'
  | '-74pct'
  | '-76pct'
  | '-78pct'
  | '-80pct'
  | '-82pct'
  | '-84pct'
  | '-86pct'
  | '-88pct'
  | '-90pct'
  | '-92pct'
  | '-94pct'
  | '-96pct'
  | '-98pct'
  | '-100pct';

export type Sizing =
  | Spacing
  | Percentage
  | 'mobile'
  | 'tablet'
  | 'laptop'
  | 'full'
  | 'screen'
  | 'min-content'
  | 'max-content'
  | 'fit-content'
  | 'inherit'
  | 'initial'
  | 'unset'
  | `[${number}]vw`
  | `[${number}]vh`;

export type Positioning = Spacing | Percentage;

export type ZIndex =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '100'
  | '101'
  | '102'
  | '103'
  | '104'
  | '105'
  | '106'
  | '107'
  | '108'
  | '109'
  | '1001'
  | '1002'
  | '1003'
  | '1004'
  | '1005'
  | '1006'
  | '1007'
  | '1008'
  | '1009'
  | '1010'
  | '1101'
  | '1102'
  | '1103'
  | '1104'
  | '1105'
  | '1106'
  | '1107'
  | '1108'
  | '1109'
  | '1110'
  | `[${number}]`;

export type Group =
  | 'item'
  | 'list'
  | 'container'
  | 'wrapper'
  | 'box'
  | 'link'
  | 'button';

type Color =
  | 'primary'
  | 'on-primary'
  | 'primary-container'
  | 'on-primary-container'
  | 'secondary'
  | 'on-secondary'
  | 'secondary-container'
  | 'on-secondary-container'
  | 'tertiary'
  | 'on-tertiary'
  | 'tertiary-container'
  | 'on-tertiary-container'
  | 'neutral'
  | 'on-neutral'
  | 'on-neutral-variant'
  | 'neutral-container-01'
  | 'neutral-container-02'
  | 'neutral-container-03'
  | 'neutral-container-04'
  | 'neutral-container-05'
  | 'neutral-outline'
  | 'neutral-outline-variant'
  | 'neutral-scrim'
  | 'error'
  | 'on-error'
  | 'error-container'
  | 'on-error-container'
  | 'warning'
  | 'on-warning'
  | 'warning-container'
  | 'on-warning-container'
  | 'success'
  | 'on-success'
  | 'success-container'
  | 'on-success-container'
  | 'alert'
  | 'on-alert'
  | 'alert-container'
  | 'on-alert-container'
  | 'transparent'
  | 'inherit'
  | `[#${number}]`;

export type ContentColor = Color;
export type ContainerColor = Exclude<
  Color,
  'inherit' | 'neutral-outline' | 'neutral-outline-variant' | 'neutral-scrim'
>;
export type BorderColor = Exclude<Color, 'transparent' | 'inherit'>;

export type BorderType =
  | 'none'
  | 'hidden'
  | 'solid'
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'groove'
  | 'ridge';
export type BorderWidth =
  | '0'
  | '0.125'
  | '0.25'
  | '0.375'
  | '0.5'
  | `[${number}rem]`;

export type BorderRadius =
  | '0'
  | '0.25'
  | '0.5'
  | '0.75'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '9999'
  | 'circle'
  | `[${number}rem]`;

export type Gap =
  | '0'
  | '0.125'
  | '0.25'
  | '0.375'
  | '0.5'
  | '0.75'
  | '1'
  | '1.25'
  | '1.5'
  | '1.75'
  | '2'
  | '2.25'
  | '2.5'
  | '2.75'
  | '3'
  | '3.25'
  | '3.5'
  | '3.75'
  | '4'
  | '4.25'
  | '4.5'
  | '4.75'
  | '5'
  | '5.5'
  | '6'
  | '6.5'
  | '7'
  | '7.5'
  | '8'
  | `[${number}rem]`;

export type Opacity =
  | '0'
  | '0.1'
  | '0.2'
  | '0.3'
  | '0.4'
  | '0.5'
  | '0.6'
  | '0.7'
  | '0.8'
  | '0.9'
  | '1'
  | `[${number}]`;

export type Duration =
  | '0'
  | '75'
  | '100'
  | '150'
  | '200'
  | '300'
  | '500'
  | '700'
  | '1000'
  | `[${number}ms]`;

export type Scale =
  | '0'
  | '25'
  | '50'
  | '75'
  | '90'
  | '95'
  | '100'
  | '105'
  | '110'
  | '125'
  | '150'
  | `[${number}]`;

export type Degree =
  | '0'
  | '1'
  | '2'
  | '3'
  | '6'
  | '12'
  | '15'
  | '30'
  | '45'
  | '60'
  | '75'
  | '90'
  | '105'
  | '120'
  | '135'
  | '150'
  | '165'
  | '180'
  | `[${number}deg]`;

// export type Responsive = 'mobile' | 'tablet' | 'laptop';
export interface Responsive {
  mobile?: 'mb';
  tablet?: 'tb';
  laptop?: 'lt';
}
export interface State {
  hover?: 'hover';
  focus?: 'focus';
  active?: 'active';
  disabled?: 'disabled';
}
/*--------------------Style--------------------*/

export interface ContentColorStyle {
  color?: `c-${ContentColor}`;
}

export interface ContainerColorStyle {
  color?: `c-${ContainerColor}`;
}

export interface PositionStyle {
  position?: 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky';
  top?: `t-${Positioning}` | `-t-${Positioning}`;
  left?: `l-${Positioning}` | `-l-${Positioning}`;
  bottom?: `b-${Positioning}` | `-b-${Positioning}`;
  right?: `r-${Positioning}` | `-r-${Positioning}`;
  zIndex?: `z-${ZIndex}` | `-z-${ZIndex}`;
}

export interface OpacityStyle {
  opacity?: `oc-${Opacity}`;
}

export interface PaddingStyle {
  padding?: `p-${Spacing}`;
  paddingX?: `px-${Spacing}`;
  paddingY?: `py-${Spacing}`;
  paddingTop?: `pt-${Spacing}`;
  paddingBottom?: `pb-${Spacing}`;
  paddingLeft?: `pl-${Spacing}`;
  paddingRight?: `pr-${Spacing}`;
}

export interface MarginStyle {
  margin?: `m-${Spacing}` | `-m-${Spacing}`;
  marginX?: `mx-${Spacing}` | `-mx-${Spacing}`;
  marginY?: `my-${Spacing}` | `-my-${Spacing}`;
  marginTop?: `mt-${Spacing}` | `-mt-${Spacing}`;
  marginBottom?: `mb-${Spacing}` | `-mb-${Spacing}`;
  marginLeft?: `ml-${Spacing}` | `-ml-${Spacing}`;
  marginRight?: `mr-${Spacing}` | `-mr-${Spacing}`;
}

export interface BorderStyle {
  borderStyle?: `bs-${BorderType}`;
  borderTopStyle?: `bts-${BorderType}`;
  borderBottomStyle?: `bbs-${BorderType}`;
  borderLeftStyle?: `bls-${BorderType}`;
  borderRightStyle?: `brs-${BorderType}`;
  borderColor?: `bc-${BorderColor}`;
  borderTopColor?: `btc-${BorderColor}`;
  borderBottomColor?: `bbc-${BorderColor}`;
  borderLeftColor?: `blc-${BorderColor}`;
  borderRightColor?: `brc-${BorderColor}`;
  borderWidth?: `bw-${BorderWidth}`;
  borderTopWidth?: `btw-${BorderWidth}`;
  borderBottomWidth?: `bbw-${BorderWidth}`;
  borderLeftWidth?: `blw-${BorderWidth}`;
  borderRightWidth?: `brw-${BorderWidth}`;
  borderRadius?: `rad-${BorderRadius}`;
  borderRadiusTop?: `rad-t-${BorderRadius}`;
  borderRadiusBottom?: `rad-b-${BorderRadius}`;
  borderRadiusLeft?: `rad-l-${BorderRadius}`;
  borderRadiusRight?: `rad-r-${BorderRadius}`;
  borderRadiusTopLeft?: `rad-tl-${BorderRadius}`;
  borderRadiusTopRight?: `rad-tr-${BorderRadius}`;
  borderRadiusBottomLeft?: `rad-bl-${BorderRadius}`;
  borderRadiusBottomRight?: `rad-br-${BorderRadius}`;
}

export interface ShadowStyle {
  shadow?: 'shd-gray';
}

export interface SizeStyle {
  size?: `sz-${Sizing}`;
  width?: `w-${Sizing}`;
  height?: `h-${Sizing}`;
  maxWidth?: `xw-${Sizing}`;
  maxHeight?: `xh-${Sizing}`;
  minWidth?: `mw-${Sizing}`;
  minHeight?: `mh-${Sizing}`;
}

export interface FlexItemStyle {
  grow?: `grow-${Factor}`;
  shrink?: `shrink-${Factor}`;
  basis?: `basis-${Positioning}`;
  order?: `order-${Factor}`;
}

export interface ObjectStyle {
  objectFit?:
    | 'obj-cover'
    | 'obj-contain'
    | 'obj-fill'
    | 'obj-none'
    | 'obj-scale-down';
  objectPosition?:
    | 'obj-top'
    | 'obj-right'
    | 'obj-bottom'
    | 'obj-left'
    | 'obj-center'
    | 'obj-left-top'
    | 'obj-right-top'
    | 'obj-right-bottom'
    | 'obj-left-bottom';
}

export interface VisibilityStyle {
  visibility?: 'visible' | 'hidden' | 'collapse';
}

export interface OverflowStyle {
  overflow?:
    | 'ovf-auto'
    | 'ovf-hidden'
    | 'ovf-visible'
    | 'ovf-scroll'
    | 'ovf-clip';
  overflowX?:
    | 'ovf-x-auto'
    | 'ovf-x-hidden'
    | 'ovf-x-visible'
    | 'ovf-x-scroll'
    | 'ovf-x-clip';
  overflowY?:
    | 'ovf-y-auto'
    | 'ovf-y-hidden'
    | 'ovf-y-visible'
    | 'ovf-y-scroll'
    | 'ovf-y-clip';
}

export interface TransitionStyle {
  transition?:
    | 'trans'
    | 'trans-all'
    | 'trans-none'
    | 'trans-colors'
    | 'trans-shadow'
    | 'trans-transform'
    | 'trans-opacity';
  transitionDuration?: `dur-${Duration}`;
  transitionTimingFunction?:
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'ease-linear';
  transitionDelay?: `dly-${Duration}`;
}

export interface TransformStyle {
  transformRotate?: `rot-${Degree}` | `-rot-${Degree}`;
  transformScale?: `scl-${Scale}`;
  transformScaleX?: `sclx-${Scale}`;
  transformScaleY?: `scly-${Scale}`;
  transformTranslate?: `trl-${Positioning}` | `-trl-${Positioning}`;
  transformTranslateX?: `trlx-${Positioning}` | `-trlx-${Positioning}`;
  transformTranslateY?: `trly-${Positioning}` | `-trly-${Positioning}`;
  transformSkew?: `skw-${Degree}` | `-skw-${Degree}`;
  transformSkewX?: `skwx-${Degree}` | `-skwx-${Degree}`;
  transformSkewY?: `skwy-${Degree}` | `-skwy-${Degree}`;
  transformOrigin?:
    | `origin-center`
    | `origin-top`
    | `origin-top-right`
    | `origin-right`
    | `origin-bottom-right`
    | `origin-bottom`
    | `origin-bottom-left`
    | `origin-left`
    | `origin-top-left`;
}

export interface BaseStyle
  extends OpacityStyle,
    VisibilityStyle,
    PositionStyle,
    OverflowStyle,
    TransformStyle,
    TransitionStyle {}

export interface ContentStyle
  extends ContentColorStyle,
    BaseStyle,
    MarginStyle,
    SizeStyle,
    ShadowStyle {}

export interface ContainerStyle
  extends ContainerColorStyle,
    BaseStyle,
    PaddingStyle,
    MarginStyle,
    SizeStyle,
    BorderStyle,
    ShadowStyle {}

export interface BlockStyle
  extends ContainerColorStyle,
    BaseStyle,
    BorderStyle,
    MarginStyle,
    SizeStyle,
    ShadowStyle {}

export interface FlexStyle extends ContainerStyle, FlexItemStyle {
  justifyContent?:
    | 'jc-start'
    | 'jc-end'
    | 'jc-center'
    | 'jc-between'
    | 'jc-around'
    | 'jc-evenly';
  alignItems?:
    | 'ai-start'
    | 'ai-end'
    | 'ai-center'
    | 'ai-stretch'
    | 'ai-baseline';
  alignContent?:
    | 'ac-start'
    | 'ac-end'
    | 'ac-center'
    | 'ac-between'
    | 'ac-around'
    | 'ac-evenly'
    | 'ac-stretch';
  direction?: 'flex-row' | 'flex-col' | 'flex-row-reverse' | 'flex-col-reverse';
  wrap?: 'flex-wrap' | 'flex-nowrap' | 'flex-wrap-reverse';
  gap?: `gap-${Gap}`;
}

export interface ButtonStyle extends FlexStyle {
  form?: 'btn-filled' | 'btn-outlined' | 'btn-text';
}

export interface IconStyle extends ContentStyle {}

export interface Hrstyle
  extends MarginStyle,
    BaseStyle,
    ShadowStyle,
    ContainerColorStyle {
  type: 'vertical' | 'horizontal';
  length: `len-${Sizing}`;
  thickness: `thk-${BorderWidth}`;
}

export interface ImageStyle extends ContentStyle, BorderStyle, ObjectStyle {}

export interface TextStyle
  extends BaseStyle,
    ContentColorStyle,
    MarginStyle,
    ShadowStyle {
  font?: 'font-suit' | 'font-pretendard' | 'font-outfit';
  size?:
    | 'display-s'
    | 'display-m'
    | 'display-l'
    | 'headline-s'
    | 'headline-m'
    | 'headline-l'
    | 'title-s'
    | 'title-m'
    | 'title-l'
    | 'body-s'
    | 'body-m'
    | 'body-l'
    | 'body-xl'
    | 'label-s'
    | 'label-m'
    | 'label-l';
  line?:
    | 'line-clamp-none'
    | 'line-clamp-1'
    | 'line-clamp-2'
    | 'line-clamp-3'
    | 'line-clamp-4'
    | 'line-clamp-5'
    | 'line-clamp-6'
    | `line-clamp-[${number}]`;
  wordBreak?: 'break-all' | 'break-words' | 'break-keep' | 'break-normal';
  align?:
    | 'text-left'
    | 'text-center'
    | 'text-right'
    | 'text-justify'
    | 'text-start'
    | 'text-end';
}

export interface SpinnerStyle extends BaseStyle, MarginStyle {
  size?: 'spinner-s' | 'spinner-m' | 'spinner-l' | 'spinner-xl';
  color?: `bc-${BorderColor}`;
}
