import classNames from 'classnames/bind';
import classes from './UI.module.scss';
import {
  ContentColorProps,
  MarginProps,
  OpacityProps,
  PositionProps,
  SpinnerStyleProps,
} from '@/types/props';
import { ComponentPropsWithoutRef } from 'react';
import classNamesObjectToString from '@/utils/classNamesObjectToString';

interface SpinnerProps extends SpinnerStyleProps {
  name?: string;
}
interface HTMLSpinnerProps
  extends Omit<ComponentPropsWithoutRef<'div'>, keyof SpinnerProps> {}
interface Props extends SpinnerProps {
  htmlAttributes?: HTMLSpinnerProps;
}

const Spinner = ({
  name,
  color,
  htmlAttributes,
  ...restSpinnerProps
}: Props) => {
  const defaultStyleProps: SpinnerStyleProps = {
    size: 'medium',
    margin: 'm-0',
    color: 'c-on-neutral',
  };

  return (
    <div
      className={`spinner ${classNamesObjectToString({ ...defaultStyleProps, ...restSpinnerProps })}`}
      {...htmlAttributes}
    >
      <span className={cx('loader', `color-${color}`)}></span>
    </div>
  );
};

export default Spinner;
