import { IconStyleProps } from '@/types/props';
import classNamesObjectToString from '@/utils/classNamesObjectToString';
import { ComponentPropsWithoutRef } from 'react';

interface SvgProps extends IconStyleProps {
  children: React.ReactNode;
  name?: string;
}
interface HTMLSvgProps
  extends Omit<ComponentPropsWithoutRef<'div'>, keyof SvgProps> {}

interface Props extends SvgProps {
  htmlAttributes?: HTMLSvgProps;
}

interface BaseIconProps extends IconStyleProps {
  name?: string;
}
interface HTMLCustomIconProps
  extends Omit<ComponentPropsWithoutRef<'div'>, keyof BaseIconProps> {}

export interface IconProps extends BaseIconProps {
  htmlAttributes?: HTMLCustomIconProps;
}

const Icon = ({ children, name, htmlAttributes, ...restIconProps }: Props) => {
  const defaultStyleProps: IconStyleProps = {
    size: 'sz-3',
    margin: 'm-0',
    color: 'c-on-neutral',
  };

  return (
    <div
      className={`flex jc-center ai-center svg ${classNamesObjectToString({ ...defaultStyleProps, ...restIconProps })}`}
      {...htmlAttributes}
    >
      {children}
    </div>
  );
};

export default Icon;
