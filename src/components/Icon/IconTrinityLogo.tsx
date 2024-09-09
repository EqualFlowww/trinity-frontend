import SvgTrinityLogo from '@/assets/svgs/trinity-logo.svg?react';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconTrinityLogo = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgTrinityLogo />
    </Icon>
  );
};

export default IconTrinityLogo;
