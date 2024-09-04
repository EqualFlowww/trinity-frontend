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

export type ContentColor = Exclude<Color, 'transparent'>;
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

export type Responsive = 'mobile' | 'tablet' | 'laptop';
export type State = 'hover' | 'focus' | 'active' | 'disabled';

/*--------------------Style--------------------*/

export interface ContentColorStyle {
  color?: ContentColor;
}

export interface ContainerColorStyle {
  color?: ContainerColor;
}

export interface PositionStyle {
  position?: 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky';
  top?: Positioning;
  left?: Positioning;
  bottom?: Positioning;
  right?: Positioning;
  zIndex?: number;
}

export interface OpacityStyle {
  opacity?: Opacity;
}

export interface PaddingStyle {
  padding?: Spacing;
  paddingX?: Spacing;
  paddingY?: Spacing;
  paddingTop?: Spacing;
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
  paddingRight?: Spacing;
}

export interface MarginStyle {
  margin?: Spacing;
  marginX?: Spacing;
  marginY?: Spacing;
  marginTop?: Spacing;
  marginBottom?: Spacing;
  marginLeft?: Spacing;
  marginRight?: Spacing;
}

export interface BorderStyle {
  borderStyle?: BorderType;
  borderTopStyle?: BorderType;
  borderBottomStyle?: BorderType;
  borderLeftStyle?: BorderType;
  borderRightStyle?: BorderType;
  borderColor?: BorderColor;
  borderTopColor?: BorderColor;
  borderBottomColor?: BorderColor;
  borderLeftColor?: BorderColor;
  borderRightColor?: BorderColor;
  borderWidth?: BorderWidth;
  borderTopWidth?: BorderWidth;
  borderBottomWidth?: BorderWidth;
  borderLeftWidth?: BorderWidth;
  borderRightWidth?: BorderWidth;
  borderRadius?: BorderRadius;
  borderRadiusTopLeft?: BorderRadius;
  borderRadiusTopRight?: BorderRadius;
  borderRadiusBottomLeft?: BorderRadius;
  borderRadiusBottomRight?: BorderRadius;
}

export interface ShadowStyle {
  shadow?: 'gray';
}

export interface SizeStyle {
  size?: Sizing;
  width?: Sizing;
  height?: Sizing;
  maxWidth?: Sizing;
  maxHeight?: Sizing;
  minWidth?: Sizing;
  minHeight?: Sizing;
}

export interface ContentStyle
  extends ContentColorStyle,
    PositionStyle,
    MarginStyle,
    SizeStyle,
    OpacityStyle,
    ShadowStyle {}

export interface ContainerStyle
  extends ContainerColorStyle,
    PositionStyle,
    PaddingStyle,
    MarginStyle,
    SizeStyle,
    BorderStyle,
    OpacityStyle,
    ShadowStyle {}

export interface FlexStyle extends ContainerStyle {
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  alignItems?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  alignContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  gap?: Gap;
}

export interface ButtonStyle extends FlexStyle {
  form?: 'filled' | 'outlined' | 'text';
}

export interface IconStyle extends ContentStyle {}
