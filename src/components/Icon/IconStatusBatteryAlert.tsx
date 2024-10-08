import Svg from '@/assets/svgs/status-battery-alert.svg?react';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconStatusBatteryAlert = (props: Props) => {
  return (
    <Icon {...props}>
      <Svg />
    </Icon>
  );
};

export default IconStatusBatteryAlert;
