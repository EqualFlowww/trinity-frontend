import classNames from 'classnames/bind';
import classes from './Image.module.scss';
import { BorderProps, ContentProps } from '@/types/props';
import classNamesObjectToArray from '@/utils/classNamesObjectToArray';

interface Props extends ContentProps, BorderProps {
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
  loading?: 'eager' | 'lazy';
  decoding?: 'sync' | 'async' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

const Image = ({
  src,
  alt,
  srcSet,
  sizes,
  loading,
  decoding,
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
  };

  const defaultClassNames = {
    size: '3',
    margin: '0',
    position,
    top,
    left,
    right,
    bottom,
    zIndex,
  };

  return (
    <img
      src={src}
      alt={alt}
      srcSet={srcSet}
      sizes={sizes}
      loading={loading}
      decoding={decoding}
      className={cx(
        'img',
        ...classNamesObjectToArray({ ...defaultClassNames, ...classNamesProps })
      )}
      style={style}
    />
  );
};

export default Image;
