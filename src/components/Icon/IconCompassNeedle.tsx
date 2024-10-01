import Svg from '@/assets/svgs/compass-needle.svg?react';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconCompassNeedle = (props: Props) => {
  return (
    <Icon {...props}>
      <Svg />
    </Icon>
  );
};

export default IconCompassNeedle;
