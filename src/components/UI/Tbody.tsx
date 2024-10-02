import { WrapperStyleProps } from '@/types/props';
import classNamesObjectToString from '@/utils/classNamesObjectToString';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

interface WrapperProps extends WrapperStyleProps {
  children: React.ReactNode;
  name?: string;
}
interface HTMLWrapperProps
  extends Omit<ComponentPropsWithoutRef<'tbody'>, keyof WrapperProps> {}

interface Props extends WrapperProps {
  htmlAttributes?: HTMLWrapperProps;
}

const Tbody = forwardRef<HTMLTableSectionElement, Props>(
  ({ children, name, htmlAttributes, ...restWrapperProps }, ref = null) => {
    const defaultStyleProps: WrapperStyleProps = {
      size: 'sz-auto',
      color: 'c-transparent',
      padding: 'p-0',
      margin: 'm-0',
      borderRadius: 'rad-0',
    };

    return (
      <tbody
        className={`wrapper flex ai-center jc-center ${classNamesObjectToString({ ...defaultStyleProps, ...restWrapperProps })}`}
        {...htmlAttributes}
        ref={ref}
      >
        {children}
      </tbody>
    );
  }
);
export default Tbody;
