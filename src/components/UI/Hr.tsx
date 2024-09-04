import classNames from 'classnames/bind';
import classes from './UI.module.scss';
import {
  ContainerColorProps,
  MarginProps,
  OpacityProps,
  PaddingProps,
  ShadowProps,
} from '@/types/props';
import classNamesObjectToArray from '@/utils/classNamesObjectToString';
import { BorderWidth, Sizing } from '@/types/style';
import { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ButtonStyleProps {
  children: React.ReactNode;
  type?: 'button' | 'submit';
}
interface HTMLButtonProps
  extends Omit<ComponentPropsWithoutRef<'div'>, keyof ButtonProps> {}
interface Props extends ButtonProps {
  htmlAttributes?: HTMLButtonProps;
}

interface Props
  extends ContainerColorProps,
    MarginProps,
    PaddingProps,
    OpacityProps,
    ShadowProps {
  type: 'vertical' | 'horizontal';
  size?: Sizing;
  weight?: BorderWidth;
}

const Hr = ({ opacity, ...classNamesProps }: Props) => {
  const cx = classNames.bind(classes);
  const style = {
    opacity,
  };

  const defaultClassNamesProps: Props = {
    type: 'horizontal',
    size: 'full',
    weight: '0.125',
    color: 'transparent',
    margin: '0',
  };

  return (
    <div
      className={cx(
        'hr',
        ...classNamesObjectToArray({
          ...defaultClassNamesProps,
          ...classNamesProps,
        })
      )}
      style={style}
    />
  );
};

export default Hr;
