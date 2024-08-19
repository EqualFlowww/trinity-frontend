import SvgWarning from '@/assets/svgs/warning.svg?react';
import { IconProps } from '@/types/props';
import Icon from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconWarning = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgWarning />
    </Icon>
  );
};

export default IconWarning;
