import { TextStyleProps } from '@/types/props';
import classNamesObjectToString from '@/utils/classNamesObjectToString';
import { ComponentPropsWithoutRef } from 'react';

interface TextProps extends TextStyleProps {
  children: React.ReactNode;
  name?: string;
  tag?: 'p' | 'span' | 'div' | 'strong' | 'em';
}
interface HTMLTextProps
  extends Omit<ComponentPropsWithoutRef<'p'>, keyof TextProps> {}
interface Props extends TextProps {
  htmlAttributes?: HTMLTextProps;
}

const Text = ({
  children,
  name,
  tag,
  htmlAttributes,
  ...restTextProps
}: Props) => {
  const Component = tag || 'p';

  const defaultStyleProps: TextStyleProps = {
    font: 'font-suit',
    size: 'body-m',
    color: 'c-on-neutral',
    align: 'text-left',
    margin: 'm-0',
    line: 'line-clamp-1',
    wordBreak: 'break-words',
  };

  return (
    <Component
      className={`text ${classNamesObjectToString({ ...defaultStyleProps, ...restTextProps })}`}
      {...htmlAttributes}
    >
      {children}
    </Component>
  );
};

export default Text;
