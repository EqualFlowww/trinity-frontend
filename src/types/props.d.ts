import {
  BlockStyle,
  BorderColor,
  BorderRadius,
  BorderStyle,
  BorderWidth,
  ButtonStyle,
  ContainerColor,
  ContainerStyle,
  ContentColor,
  FlexStyle,
  Gap,
  Hrstyle,
  IconStyle,
  ImageStyle,
  Positioning,
  Responsive,
  Sizing,
  Spacing,
  SpinnerStyle,
  State,
  TableStyle,
  TextStyle,
} from '@/types/style';

type CapitalizeFirstLetter<T extends string> =
  keyof T extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Rest}`
    : keyof T;

type CapitalizedKeys<T> = CapitalizeFirstLetter<keyof T & string>;

type Group = 'cnt' | 'bx' | 'btn' | 'lnk' | 'li' | 'itm' | 'wrp';
export type GroupState = `group-${keyof State & string}/${Group}`;

type Prefix<U, T> = {
  [K in keyof T]: `${U}:${NonNullable<T[K]>}`; // 각 값에 'md:' 접두사 추가
};

type StateStyle<T> = {
  [K in keyof State]?: Prefix<NonNullable<State[K]>, T>;
  // [K in GroupState]?: Prefix<
  // TransformGroupState<K>, T
  // >;
};
type GroupStyle<T> = {
  [K in GroupState]?: Prefix<NonNullable<GroupState>, T>;
};
type ResponsiveStyle<T> = {
  [K in keyof Responsive]?: Prefix<NonNullable<Responsive[K]>, T> & {
    [L in keyof State]?: Prefix<
      `${NonNullable<Responsive[K]>}:${NonNullable<State[L]>}`,
      T
    >;
  } & {
    [L in GroupState]?: Prefix<
      `${NonNullable<Responsive[K]>}:${NonNullable<GroupState>}`,
      T
    >;
  };
};

/*----------Wrapper----------*/

interface WrapperStyleByState
  extends ContainerStyle,
    StateStyle<ContainerStyle>,
    GroupStyle<ContainerStyle> {}

export interface WrapperStyleProps
  extends WrapperStyleByState,
    ResponsiveStyle<ContainerStyle> {
  group?: `group/${Group}` | 'group';
}

/*----------Block----------*/

interface BlockStyleByState
  extends BlockStyle,
    StateStyle<BlockStyle>,
    GroupStyle<BlockStyle> {}

export interface BlockStyleProps
  extends BlockStyleByState,
    ResponsiveStyle<BlockStyle> {
  group?: `group/${Group}` | 'group';
}

/*----------Flex----------*/

interface FlexStyleByState
  extends FlexStyle,
    StateStyle<FlexStyle>,
    GroupStyle<FlexStyle> {}

export interface FlexStyleProps
  extends FlexStyleByState,
    ResponsiveStyle<FlexStyle> {
  group?: `group/${Group}` | 'group';
}

/*----------Button----------*/

interface ButtonStyleByState
  extends ButtonStyle,
    StateStyle<ButtonStyle>,
    GroupStyle<ButtonStyle> {}

export interface ButtonStyleProps
  extends ButtonStyleByState,
    ResponsiveStyle<ButtonStyle> {
  group?: `group/${Group}` | 'group';
}

/*----------Icon----------*/

interface IconStyleByState
  extends IconStyle,
    StateStyle<IconStyle>,
    GroupStyle<IconStyle> {}

export interface IconStyleProps
  extends IconStyleByState,
    ResponsiveStyle<IconStyle> {
  group?: `group/${Group}` | 'group';
}

/*----------Hr----------*/

interface HrStyleByState
  extends Hrstyle,
    StateStyle<Hrstyle>,
    GroupStyle<HrStyle> {}

export interface HrStyleProps extends HrStyleByState, ResponsiveStyle<Hrstyle> {
  group?: `group/${Group}` | 'group';
}

/*----------Image----------*/

interface ImageStyleByState
  extends ImageStyle,
    StateStyle<ImageStyle>,
    GroupStyle<ImageStyle> {}

export interface ImageStyleProps
  extends ImageStyleByState,
    ResponsiveStyle<Imagestyle> {
  group?: `group/${Group}` | 'group';
}

/*----------Text----------*/

interface TextStyleByState
  extends TextStyle,
    StateStyle<TextStyle>,
    GroupStyle<TextStyle> {}

export interface TextStyleProps
  extends TextStyleByState,
    ResponsiveStyle<TextStyle> {
  group?: `group/${Group}` | 'group';
}

/*----------Spinner----------*/

interface SpinnerStyleByState
  extends SpinnerStyle,
    StateStyle<SpinnerStyle>,
    GroupStyle<SpinnerStyle> {}

export interface SpinnerStyleProps
  extends SpinnerStyleByState,
    ResponsiveStyle<SpinnerStyle> {
  group?: `group/${Group}` | 'group';
}

/*----------Table----------*/

interface TableStyleByState
  extends TableStyle,
    StateStyle<TableStyle>,
    GroupStyle<TableStyle> {}

export interface TableStyleProps
  extends TableStyleByState,
    ResponsiveStyle<TableStyle> {
  group?: `group/${Group}` | 'group';
}
