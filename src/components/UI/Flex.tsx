import classNames from 'classnames/bind';
import classes from './Flex.module.scss';
import { FlexProps } from '@/types/props';
import classNamesObjectToArray from '@/utils/classNamesObjectToArray';

interface Props extends FlexProps {
  children?: React.ReactNode;
  name?: string;
  hover?: 'on' | 'off';
}

const Flex = ({
  children,
  name,
  position = 'static',
  top,
  left,
  right,
  bottom,
  zIndex,
  opacity,
  ...classNamesProps
}: Props) => {
  const cx = classNames.bind(classes);
  const style = {
    position,
    top,
    left,
    right,
    bottom,
    zIndex,
    opacity,
  };

  const defaultClassNamesProps: Props = {
    size: 'auto',
    color: 'transparent',
    hoverColor: 'transparent',
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
      className={cx(
        'flex',
        ...classNamesObjectToArray({
          ...defaultClassNamesProps,
          ...classNamesProps,
        })
      )}
      key={cx(name)}
      style={style}
    >
      {children}
    </div>
  );
};

export default Flex;
