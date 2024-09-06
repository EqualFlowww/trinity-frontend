import { WrapperStyleProps } from '@/types/props';
import classNamesObjectToString from '@/utils/classNamesObjectToString';
import { ComponentPropsWithoutRef } from 'react';

interface WrapperProps extends WrapperStyleProps {
  children: React.ReactNode;
  name?: string;
}
interface HTMLWrapperProps
  extends Omit<ComponentPropsWithoutRef<'div'>, keyof WrapperProps> {}

interface Props extends WrapperProps {
  htmlAttributes?: HTMLWrapperProps;
}

const Wrapper = ({
  children,
  name,
  htmlAttributes,
  ...restWrapperProps
}: Props) => {
  const defaultStyleProps: WrapperStyleProps = {
    size: 'sz-auto',
    color: 'c-transparent',
    padding: 'p-0',
    margin: 'm-0',
    borderRadius: 'rad-0',
  };

  return (
    <div
      className={`wrapper ${classNamesObjectToString({ ...defaultStyleProps, ...restWrapperProps })}}`}
      {...htmlAttributes}
    >
      {children}
    </div>
  );
};

export default Wrapper;
