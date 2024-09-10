import { SpinnerStyleProps } from '@/types/props';
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

const Spinner = ({ name, htmlAttributes, ...restSpinnerProps }: Props) => {
  const defaultStyleProps: SpinnerStyleProps = {
    size: 'spinner-m',
    margin: 'm-0',
    color: 'bc-on-neutral',
  };

  return (
    <div
      className={`${classNamesObjectToString({ ...defaultStyleProps, ...restSpinnerProps })}`}
      {...htmlAttributes}
    >
      <span className="loader sz-full rad-circle inline-block bs-solid bc-inherit !brc-transparent animate-spin"></span>
    </div>
  );
};

export default Spinner;
