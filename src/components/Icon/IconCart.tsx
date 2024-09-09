import SvgCart from '@/assets/svgs/cart.svg?react';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconCart = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgCart />
    </Icon>
  );
};

export default IconCart;
