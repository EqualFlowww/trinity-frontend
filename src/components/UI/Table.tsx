import { TableStyleProps, WrapperStyleProps } from '@/types/props';
import classNamesObjectToString from '@/utils/classNamesObjectToString';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

interface TableProps extends TableStyleProps {
  children: React.ReactNode;
  name?: string;
}
interface HTMLTableProps
  extends Omit<ComponentPropsWithoutRef<'table'>, keyof TableProps> {}

interface Props extends TableProps {
  htmlAttributes?: HTMLTableProps;
}

const Table = forwardRef<HTMLTableElement, Props>(
  ({ children, name, htmlAttributes, ...restWrapperProps }, ref = null) => {
    const defaultStyleProps: TableStyleProps = {
      size: 'sz-auto',
      color: 'c-transparent',
      padding: 'p-0',
      margin: 'm-0',
      borderRadius: 'rad-0',
    };

    return (
      <table
        className={`wrapper flex ai-center jc-center ${classNamesObjectToString({ ...defaultStyleProps, ...restWrapperProps })}`}
        {...htmlAttributes}
        ref={ref}
      >
        {children}
      </table>
    );
  }
);
export default Table;
