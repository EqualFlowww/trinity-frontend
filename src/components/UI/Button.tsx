import classNames from 'classnames/bind';
import classes from './Button.module.scss';
import { FlexProps } from '@/types/props';
import classNamesObjectToArray from '@/utils/classNamesObjectToArray';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends FlexProps {
  children?: React.ReactNode;
  type?: 'button' | 'submit';
  form?: 'filled' | 'outlined' | 'text';
}

interface CustomButtonAttributes
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps> {}

interface Props extends ButtonProps, CustomButtonAttributes {}

const Button = ({
  children,
  type,
  position = 'static',
  top,
  left,
  right,
  bottom,
  zIndex,
  opacity,
  ...buttonAttributes
}: Props) => {
  const {} = buttonProps;

  const cx = classNames.bind(classes);
  const style = {
    position,
    top,
    left,
    right,
    bottom,
    zIndex,
    opacity,
  };

  const defaultClassNames = {
    form: 'filled',
    size: 'auto',
    color: 'transparent',
    hoverColor: 'transparent',
    padding: '2',
    margin: '0',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    wrap: 'nowrap',
    direction: 'row',
    gap: '1',
    borderRadius: '3',
    shadow: 'none',
  };

  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={cx(
        'button',
        ...classNamesObjectToArray({ ...defaultClassNames, ...classNamesProps })
      )}
      style={style}
      {...buttonAttributes}
    >
      {children}
    </button>
  );
};

export default Button;
