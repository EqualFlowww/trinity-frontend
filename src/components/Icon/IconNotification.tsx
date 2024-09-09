import SvgNotification from '@/assets/svgs/notification.svg?react';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconNotification = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgNotification />
    </Icon>
  );
};

export default IconNotification;
