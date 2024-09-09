import SvgAlarm from '@/assets/svgs/alarm.svg?react';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconAlarm = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgAlarm />
    </Icon>
  );
};

export default IconAlarm;
