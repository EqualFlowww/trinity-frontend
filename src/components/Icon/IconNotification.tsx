import SvgNotification from '@/assets/svgs/notification.svg?react';
import { IconProps } from '@/types/props';
import Icon from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconNotification = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgNotification />
    </Icon>
  );
};

export default IconNotification;
