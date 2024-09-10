import { FlexStyleProps } from '@/types/props';
import classNamesObjectToString from '@/utils/classNamesObjectToString';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

interface FlexProps extends FlexStyleProps {
  children?: React.ReactNode;
  name?: string;
}
interface HTMLFlexProps
  extends Omit<ComponentPropsWithoutRef<'div'>, keyof FlexProps> {}
interface Props extends FlexProps {
  htmlAttributes?: HTMLFlexProps;
}

const Flex = forwardRef<HTMLDivElement, Props>(
  ({ children, name, htmlAttributes, ...restFlexProps }, ref = null) => {
    const defaultStyleProps: FlexStyleProps = {
      size: 'sz-auto',
      color: 'c-transparent',
      padding: 'p-0',
      margin: 'm-0',
      justifyContent: 'jc-center',
      alignItems: 'ai-center',
      alignContent: 'ac-center',
      wrap: 'flex-wrap',
      direction: 'flex-row',
      gap: 'gap-0',
    };

    return (
      <div
        className={`flex ${classNamesObjectToString({ ...defaultStyleProps, ...restFlexProps })}`}
        {...htmlAttributes}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export default Flex;
