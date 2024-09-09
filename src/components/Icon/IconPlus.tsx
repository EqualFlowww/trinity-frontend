import SvgPlus from '@/assets/svgs/plus.svg?react';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconPlus = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgPlus />
    </Icon>
  );
};

export default IconPlus;
