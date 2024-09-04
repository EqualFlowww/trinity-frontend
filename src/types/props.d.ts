import {
  BorderColor,
  BorderRadius,
  BorderStyle,
  BorderWidth,
  ButtonStyle,
  ContainerColor,
  ContentColor,
  FlexStyle,
  Gap,
  Positioning,
  Responsive,
  Sizing,
  Spacing,
  State,
} from '@/types/style';

type Group =
  | 'container'
  | 'box'
  | 'button'
  | 'link'
  | 'list'
  | 'item'
  | 'wrapper';

type CapitalizeFirstLetter<T extends string> =
  T extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : T;

type CapitalizeFirstLetterState = CapitalizeFirstLetter<State>;

interface FlexStyleByState extends FlexStyle {
  [key: State]: FlexStyle;
  [key: `group${CapitalizeFirstLetterState}/${Group}`]: FlexStyle;
}
export interface FlexStyleProps extends FlexStyleByState {
  [key: Responsive]: FlexStyleByState;
  group?: Group;
}

interface ButtonStyleByState extends ButtonStyle {
  [key: State]: ButtonStyle;
  [key: `group${CapitalizeFirstLetterState}/${Group}`]: ButtonStyle;
}
export interface ButtonStyleProps extends ButtonStyleByState {
  [key: Responsive]: ButtonStyleByState;
  group?: Group;
}
