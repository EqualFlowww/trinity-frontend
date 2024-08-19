import Svg from '@/assets/svgs/status-nine-plus.svg?react';
import { IconProps } from '@/types/props';
import Icon from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconStatusNinePlus = (props: Props) => {
  return (
    <Icon {...props}>
      <Svg />
    </Icon>
  );
};

export default IconStatusNinePlus;
