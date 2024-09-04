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
  const styleProps: FlexStyleProps = restFlexProps;
  const defaultStyleProps: FlexStyleProps = {
    size: 'auto',
    color: 'transparent',
    padding: '0',
    margin: '0',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    wrap: 'wrap',
    direction: 'row',
    gap: '0',
  };

  return (
    <div
      className={`flex ${classNamesObjectToString({ ...defaultStyleProps, ...styleProps })}}`}
      {...htmlAttributes}
    >
      {children}
    </div>
  );
};

export default Flex;
