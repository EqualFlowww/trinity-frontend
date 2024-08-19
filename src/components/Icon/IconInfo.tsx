import SvgInfo from '@/assets/svgs/info.svg?react';

import { IconProps } from '@/types/props';
import Icon from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconInfo = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgInfo />
    </Icon>
  );
};

export default IconInfo;
