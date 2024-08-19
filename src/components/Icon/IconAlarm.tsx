import SvgAlarm from '@/assets/svgs/alarm.svg?react';
import { IconProps } from '@/types/props';
import Icon from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconAlarm = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgAlarm />
    </Icon>
  );
};

export default IconAlarm;
