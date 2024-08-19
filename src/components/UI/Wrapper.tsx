import classNames from 'classnames/bind';
import classes from './Wrapper.module.scss';
import { ContainerProps } from '@/types/props';
import classNamesObjectToArray from '@/utils/classNamesObjectToArray';

interface Props extends ContainerProps {
  children: React.ReactNode;
  name?: string;
}

const Wrapper = ({
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

  const defaultClassNames = {
    size: 'auto',
    color: 'transparent',
    hoverColor: 'transparent',
    padding: '0',
    margin: '0',
    borderRadius: '0',
    shadow: 'none',
  };

  return (
    <div
      className={cx(
        'wrapper',
        ...classNamesObjectToArray({ ...defaultClassNames, ...classNamesProps })
      )}
      key={cx(name)}
      style={style}
    >
      {children}
    </div>
  );
};

export default Wrapper;
