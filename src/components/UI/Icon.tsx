import classNames from 'classnames/bind';
import classes from './UI.module.scss';
import { IconProps } from '@/types/props';
import classNamesObjectToArray from '@/utils/classNamesObjectToString';

interface Props extends IconProps {
  children: React.ReactNode;
}

const Icon = ({
  children,
  opacity,
  position = 'static',
  top,
  left,
  right,
  bottom,
  zIndex,
  ...classNamesProps
}: Props) => {
  const cx = classNames.bind(classes);
  const style = {
    opacity,
    position,
    top,
    left,
    right,
    bottom,
    zIndex,
  };

  const defaultClassNames = {
    size: '3',
    margin: '0',
    color: 'on-neutral',
  };

  return (
    <div
      className={cx(
        'icon',
        ...classNamesObjectToArray({ ...defaultClassNames, ...classNamesProps })
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Icon;
