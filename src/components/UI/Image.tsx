import { ImageStyleProps } from '@/types/props';
import classNamesObjectToArray from '@/utils/classNamesObjectToString';
import { ComponentPropsWithoutRef } from 'react';

interface ImageProps extends ImageStyleProps {
  name?: string;
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
  loading?: 'eager' | 'lazy';
  decoding?: 'sync' | 'async' | 'auto';
}
interface HTMLImageProps
  extends Omit<ComponentPropsWithoutRef<'img'>, keyof ImageProps> {}
interface Props extends ImageProps {
  htmlAttributes?: HTMLImageProps;
}

const Image = ({
  src,
  alt,
  srcSet,
  sizes,
  loading,
  decoding,
  ...classNamesProps
}: Props) => {
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
