import Svg from '@/assets/svgs/status-time-alert.svg?react';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconStatusTimeAlert = (props: Props) => {
  return (
    <Icon {...props}>
      <Svg />
    </Icon>
  );
};

export default IconStatusTimeAlert;
