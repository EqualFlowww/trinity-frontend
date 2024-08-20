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
  | 'inherit';

type ContentColor = Exclude<Color, 'transparent'>;
type ContainerColor = Exclude<
  Color,
  'inherit' | 'neutral-outline' | 'neutral-outline-variant' | 'neutral-scrim'
>;
type BorderColor = Exclude<Color, 'transparent' | 'inherit'>;

export interface ContentColorProps {
  color?: ContentColor;
  hoverColor?: ContentColor;
}

export interface ContainerColorProps {
  color?: ContainerColor;
  hoverColor?: ContainerColor;
}

export interface PositionProps {
  position?: 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky';
  top?: `${number}rem` | `${number}%`;
  left?: `${number}rem` | `${number}%`;
  bottom?: `${number}rem` | `${number}%`;
  right?: `${number}rem` | `${number}%`;
  zIndex?: number;
}

type Spacing =
  | '0'
  | '0-eighth'
  | '0-quarter'
  | '0-half'
  | '1'
  | '1-half'
  | '2'
  | '2-half'
  | '3'
  | '3-half'
  | '4'
  | '4-half'
  | '5'
  | '5-half'
  | '6'
  | '6-half'
  | '7'
  | '7-half'
  | '8'
  | '8-half'
  | '9'
  | '9-half'
  | '10';

export interface PaddingProps {
  padding?: Spacing;
  paddingX?: Spacing;
  paddingY?: Spacing;
  paddingTop?: Spacing;
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
  paddingRight?: Spacing;
}

export interface MarginProps {
  margin?: Spacing;
  marginX?: Spacing;
  marginY?: Spacing;
  marginTop?: Spacing;
  marginBottom?: Spacing;
  marginLeft?: Spacing;
  marginRight?: Spacing;
}

type BorderStyle =
  | 'none'
  | 'hidden'
  | 'solid'
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'groove'
  | 'ridge';
export type BorderWidth = '0' | '0-eighth' | '0-quarter' | '0-half';
export type BorderRadius =
  | '0'
  | '0-quarter'
  | '0-half'
  | '1'
  | '1-half'
  | '2'
  | '2-half'
  | '3'
  | 'circle';

export interface BorderProps {
  borderStyle?: BorderStyle;
  borderTopStyle?: BorderStyle;
  borderBottomStyle?: BorderStyle;
  borderLeftStyle?: BorderStyle;
  borderRightStyle?: BorderStyle;
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

export type ContentSizing =
  | '0'
  | '0-eighth'
  | '0-quarter'
  | '0-half'
  | '1'
  | '1-half'
  | '2'
  | '2-half'
  | '3'
  | '3-half'
  | '4'
  | '4-half'
  | '5'
  | '5-half'
  | '6'
  | '6-half'
  | '7'
  | '7-half'
  | '8'
  | '8-half'
  | '9'
  | '9-half'
  | '10'
  | 'full';

type ContainerSizing =
  | 'full'
  | 'auto'
  | 'desktop-full-mobile-auto'
  | 'desktop-auto-mobile-full';

export interface OpacityProps {
  opacity?: number;
}

export interface ShadowProps {
  shadow?: 'gray';
}

export interface ContentSizeProps {
  size?: ContentSizing;
  width?: ContentSizing;
  height?: ContentSizing;
}

export interface ContainerSizeProps {
  size?: ContainerSizing;
  width?: ContainerSizing;
  height?: ContainerSizing;
  maxWidth?: 'inherit';
  maxHeight?: 'inherit';
  minWidth?: 'inherit';
  minHeight?: 'inherit';
}

export interface ContentProps
  extends ContentColorProps,
    PositionProps,
    MarginProps,
    ContentSizeProps,
    OpacityProps,
    ShadowProps {}

export interface ContainerProps
  extends ContainerColorProps,
    PositionProps,
    PaddingProps,
    MarginProps,
    ContainerSizeProps,
    BorderProps,
    OpacityProps,
    ShadowProps {}

export interface FlexProps extends ContainerProps {
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
  gap?: Spacing;
}

export interface IconProps extends ContentProps {}
