import classNamesObjectToString from '@/utils/classNamesObjectToString';
import { ComponentPropsWithoutRef } from 'react';
import { ButtonStyleProps } from '@/types/props';

interface ButtonProps extends ButtonStyleProps {
  children: React.ReactNode;
  type?: 'button' | 'submit';
}
interface HTMLButtonProps
  extends Omit<ComponentPropsWithoutRef<'button'>, keyof ButtonProps> {}
interface Props extends ButtonProps {
  htmlAttributes?: HTMLButtonProps;
}

const Button = ({
  type = 'button',
  children,
  htmlAttributes,
  ...restButtonProps
}: Props) => {
  const styleProps: ButtonStyleProps = restButtonProps;
  const defaultStyleProps: ButtonStyleProps = {
    form: 'filled',
    size: 'auto',
    color: 'transparent',
    padding: '2',
    margin: '0',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    wrap: 'nowrap',
    direction: 'row',
    gap: '1',
    borderRadius: '3',
  };

  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={`button ${classNamesObjectToString({ ...defaultStyleProps, ...styleProps })}}`}
      {...htmlAttributes}
    >
      {children}
    </button>
  );
};

export default Button;
