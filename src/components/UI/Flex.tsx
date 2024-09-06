import { FlexStyleProps } from '@/types/props';
import classNamesObjectToString from '@/utils/classNamesObjectToString';
import { ComponentPropsWithoutRef } from 'react';

interface FlexProps extends FlexStyleProps {
  children: React.ReactNode;
  name?: string;
}
interface HTMLFlexProps
  extends Omit<ComponentPropsWithoutRef<'div'>, keyof FlexProps> {}
interface Props extends FlexProps {
  htmlAttributes?: HTMLFlexProps;
}

const Flex = ({ children, name, htmlAttributes, ...restFlexProps }: Props) => {
  const defaultStyleProps: FlexStyleProps = {
    size: 'sz-auto',
    color: 'c-transparent',
    padding: 'p-0',
    margin: 'm-0',
    justifyContent: 'jc-center',
    alignItems: 'ai-center',
    alignContent: 'ac-center',
    wrap: 'f-wrap',
    direction: 'f-row',
    gap: 'gap-0',
  };

  return (
    <div
      className={`flex ${classNamesObjectToString({ ...defaultStyleProps, ...restFlexProps })}`}
      {...htmlAttributes}
    >
      {children}
    </div>
  );
};

export default Flex;
