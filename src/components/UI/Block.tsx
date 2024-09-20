import { BlockStyleProps } from '@/types/props';
import classNamesObjectToString from '@/utils/classNamesObjectToString';
import { ComponentPropsWithoutRef } from 'react';

interface BlockProps extends BlockStyleProps {
  name?: string;
}
interface HTMLBlockProps
  extends Omit<ComponentPropsWithoutRef<'div'>, keyof BlockProps> {}

interface Props extends BlockProps {
  htmlAttributes?: HTMLBlockProps;
}

const Block = ({ name, htmlAttributes, ...restWrapperProps }: Props) => {
  const defaultStyleProps: BlockStyleProps = {
    size: 'sz-4',
    color: 'c-on-neutral',
    margin: 'm-0',
    borderRadius: 'rad-0',
  };

  return (
    <div
      className={`block ${classNamesObjectToString({ ...defaultStyleProps, ...restWrapperProps })}`}
      {...htmlAttributes}
    ></div>
  );
};

export default Block;
