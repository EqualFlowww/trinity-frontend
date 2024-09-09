import SvgCheck from '@/assets/svgs/check.svg?react';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconCheck = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgCheck />
    </Icon>
  );
};

export default IconCheck;
