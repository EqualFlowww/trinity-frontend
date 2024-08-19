import SvgClose from '@/assets/svgs/close.svg?react';
import { IconProps } from '@/types/props';
import Icon from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconClose = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgClose />
    </Icon>
  );
};

export default IconClose;
