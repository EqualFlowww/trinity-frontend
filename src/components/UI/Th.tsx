import { WrapperStyleProps } from '@/types/props';
import classNamesObjectToString from '@/utils/classNamesObjectToString';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

interface WrapperProps extends WrapperStyleProps {
  children: React.ReactNode;
  name?: string;
  scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
  colspan?: number;
  rowspan?: number;
}
interface HTMLWrapperProps
  extends Omit<ComponentPropsWithoutRef<'th'>, keyof WrapperProps> {}

interface Props extends WrapperProps {
  htmlAttributes?: HTMLWrapperProps;
}

const Th = forwardRef<HTMLTableCellElement, Props>(
  (
    {
      children,
      name,
      scope,
      colspan,
      rowspan,
      htmlAttributes,
      ...restWrapperProps
    },
    ref = null
  ) => {
    const defaultStyleProps: WrapperStyleProps = {
      size: 'sz-auto',
      color: 'c-transparent',
      padding: 'p-0',
      margin: 'm-0',
      borderRadius: 'rad-0',
    };

    return (
      <th
        className={`wrapper flex ai-center jc-center ${classNamesObjectToString({ ...defaultStyleProps, ...restWrapperProps })}`}
        {...htmlAttributes}
        ref={ref}
        scope={scope}
        colSpan={colspan}
        rowSpan={rowspan}
      >
        {children}
      </th>
    );
  }
);
export default Th;
