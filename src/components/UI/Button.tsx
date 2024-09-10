import classNamesObjectToString from '@/utils/classNamesObjectToString';
import { ComponentPropsWithoutRef } from 'react';
import { ButtonStyleProps } from '@/types/props';

interface ButtonProps extends ButtonStyleProps {
  children?: React.ReactNode;
  type?: 'button' | 'submit';
  onClick?: () => void;
}
interface HTMLButtonProps
  extends Omit<ComponentPropsWithoutRef<'button'>, keyof ButtonProps> {}

interface Props extends ButtonProps {
  htmlAttributes?: HTMLButtonProps;
}

const Button = ({
  type = 'button',
  children,
  onClick,
  htmlAttributes,
  ...restButtonProps
}: Props) => {
  const styleProps: ButtonStyleProps = restButtonProps;
  const defaultStyleProps: ButtonStyleProps = {
    form: 'btn-filled',
    size: 'sz-auto',
    color: 'c-transparent',
    padding: 'p-2',
    margin: 'm-0',
    justifyContent: 'jc-center',
    alignItems: 'ai-center',
    alignContent: 'ac-center',
    wrap: 'flex-nowrap',
    direction: 'flex-row',
    gap: 'gap-1',
    borderRadius: 'rad-3',
  };

  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={`btn ${classNamesObjectToString({ ...defaultStyleProps, ...styleProps })}}`}
      onClick={(event) => {
        event.stopPropagation();
        onClick && onClick();
      }}
      {...htmlAttributes}
    >
      {children}
    </button>
  );
};

export default Button;
