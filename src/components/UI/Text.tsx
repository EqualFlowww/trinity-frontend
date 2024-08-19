import classNames from 'classnames/bind';
import classes from './Text.module.scss';
import {
  ContentColorProps,
  MarginProps,
  OpacityProps,
  PositionProps,
  ShadowProps,
} from '@/types/props';
import classNamesObjectToArray from '@/utils/classNamesObjectToArray';

interface Props
  extends ContentColorProps,
    MarginProps,
    ShadowProps,
    PositionProps,
    OpacityProps {
  children: React.ReactNode;
  tag?: 'p' | 'span' | 'div' | 'strong' | 'em';
  font?: 'pretendard' | 'outfit';
  type?: 'display' | 'headline' | 'title' | 'body' | 'label';
  size?: 'small' | 'medium' | 'large';
  lines?: number | 'infinity';
  align?: 'left' | 'center' | 'right';
}

const Text = ({
  children,
  lines = 1,
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
  const Component = classNamesProps.tag || 'p';

  const style = {
    WebkitLineClamp: lines === 'infinity' ? 'unset' : lines,
    opacity,
    position,
    top,
    left,
    bottom,
    right,
    zIndex,
  };

  const defaultClassNames = {
    tag: 'p',
    font: 'pretendard',
    type: 'body',
    size: 'medium',
    color: 'on-neutral',
    align: 'left',
    margin: '0',
  };

  return (
    <Component
      className={cx(
        'text',
        ...classNamesObjectToArray({ ...defaultClassNames, ...classNamesProps })
      )}
      style={style}
    >
      {children}
    </Component>
  );
};

export default Text;
