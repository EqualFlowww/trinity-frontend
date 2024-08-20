import classNames from 'classnames/bind';
import classes from './Spinner.module.scss';
import {
  ContentColorProps,
  MarginProps,
  OpacityProps,
  PositionProps,
} from '@/types/props';
import classNamesObjectToArray from '@/utils/classNamesObjectToArray';

interface Props
  extends ContentColorProps,
    PositionProps,
    MarginProps,
    OpacityProps {
  size?: 'small' | 'medium' | 'large' | 'full';
}

const Spinner = ({
  opacity,
  position = 'static',
  top,
  left,
  right,
  bottom,
  zIndex,
  color,
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

  const defaultClassNames: Props = {
    size: 'medium',
    margin: '0',
    color: 'on-neutral',
  };

  return (
    <div
      className={cx(
        'spinner',
        ...classNamesObjectToArray({ ...defaultClassNames, ...classNamesProps })
      )}
      style={style}
    >
      <span className={cx('loader', color)}></span>
    </div>
  );
};

export default Spinner;
