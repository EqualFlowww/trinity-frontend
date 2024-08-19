import SvgPlus from '@/assets/svgs/plus.svg?react';
import { IconProps } from '@/types/props';
import Icon from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconPlus = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgPlus />
    </Icon>
  );
};

export default IconPlus;
