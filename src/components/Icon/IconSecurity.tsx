import SvgSecurity from '@assets/svgs/security.svg?react';
import { IconProps } from '@/types/props';
import Icon from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconSecurity = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgSecurity />
    </Icon>
  );
};
export default IconSecurity;
