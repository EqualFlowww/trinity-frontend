import classNamesObjectToString from '@/utils/classNamesObjectToString';
import { ComponentPropsWithoutRef } from 'react';
import { HrStyleProps } from '@/types/props';

interface HrProps extends HrStyleProps {
  name?: string;
}
interface HTMLHrProps
  extends Omit<ComponentPropsWithoutRef<'div'>, keyof HrProps> {}
interface Props extends HrProps {
  htmlAttributes?: HTMLHrProps;
}

const Hr = ({ name, htmlAttributes, ...restFlexProps }: Props) => {
  const defaultStyleProps: HrStyleProps = {
    type: 'horizontal',
    length: 'len-full',
    thickness: 'thk-0.125',
    color: 'c-transparent',
    margin: 'm-0',
  };

  return (
    <div
      className={`hr ${classNamesObjectToString({ ...defaultStyleProps, ...restFlexProps })}`}
      {...htmlAttributes}
    />
  );
};

export default Hr;
