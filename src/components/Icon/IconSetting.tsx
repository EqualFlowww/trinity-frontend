import SvgSetting from '@/assets/svgs/setting.svg?react';
import { IconProps } from '@/types/props';
import Icon from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconSetting = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgSetting />
    </Icon>
  );
};

export default IconSetting;
