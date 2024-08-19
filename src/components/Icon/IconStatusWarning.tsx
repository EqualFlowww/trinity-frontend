import Svg from '@/assets/svgs/status-warning.svg?react';
import { IconProps } from '@/types/props';
import Icon from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconStatusWarning = (props: Props) => {
  return (
    <Icon {...props}>
      <Svg />
    </Icon>
  );
};

export default IconStatusWarning;
