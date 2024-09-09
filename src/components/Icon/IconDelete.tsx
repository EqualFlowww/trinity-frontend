import SvgDelete from '@/assets/svgs/delete.svg?react';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconDelete = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgDelete />
    </Icon>
  );
};

export default IconDelete;
