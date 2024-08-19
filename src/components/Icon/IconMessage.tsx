import SvgMessage from '@/assets/svgs/message.svg?react';
import { IconProps } from '@/types/props';
import Icon from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconMessage = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgMessage />
    </Icon>
  );
};

export default IconMessage;
