import { ImageStyleProps } from '@/types/props';
import classNamesObjectToString from '@/utils/classNamesObjectToString';
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
  name,
  src,
  alt,
  srcSet,
  sizes,
  loading,
  decoding,
  htmlAttributes,
  ...restImgProps
}: Props) => {
  const defaultStyleProps: ImageStyleProps = {
    size: 'sz-3',
    margin: 'm-0',
  };

  return (
    <img
      src={src}
      alt={alt}
      srcSet={srcSet}
      sizes={sizes}
      loading={loading}
      decoding={decoding}
      className={`image ${classNamesObjectToString({ ...defaultStyleProps, ...restImgProps })}`}
      {...htmlAttributes}
    />
  );
};

export default Image;
