import classNames from 'classnames/bind';
import classes from './Hr.module.scss';
import {
  BorderWidth,
  ContainerColorProps,
  ContentSizing,
  MarginProps,
  OpacityProps,
  PaddingProps,
  ShadowProps,
} from '@/types/props';
import classNamesObjectToArray from '@/utils/classNamesObjectToArray';

interface Props
  extends ContainerColorProps,
    MarginProps,
    PaddingProps,
    OpacityProps,
    ShadowProps {
  type: 'vertical' | 'horizontal';
  size?: ContentSizing;
  weight?: BorderWidth;
}

const Hr = ({ opacity, ...classNamesProps }: Props) => {
  const cx = classNames.bind(classes);
  const style = {
    opacity,
  };

  const defaultClassNamesProps: Props = {
    type: 'horizontal',
    size: 'full',
    weight: '0-eighth',
    color: 'transparent',
    margin: '0',
  };

  return (
    <div
      className={cx(
        'hr',
        ...classNamesObjectToArray({
          ...defaultClassNamesProps,
          ...classNamesProps,
        })
      )}
      style={style}
    />
  );
};

export default Hr;
