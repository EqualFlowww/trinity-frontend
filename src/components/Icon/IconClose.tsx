import SvgClose from '@/assets/svgs/close.svg?react';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconClose = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgClose />
    </Icon>
  );
};

export default IconClose;
