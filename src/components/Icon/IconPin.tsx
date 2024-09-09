import SvgPin from '@/assets/svgs/pin.svg?react';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconPin = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgPin />
    </Icon>
  );
};

export default IconPin;
