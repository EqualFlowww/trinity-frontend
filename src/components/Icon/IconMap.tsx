import SvgMap from '@/assets/svgs/map.svg?react';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconMap = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgMap />
    </Icon>
  );
};

export default IconMap;
