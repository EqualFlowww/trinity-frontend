import SvgEdit from '@/assets/svgs/edit.svg?react';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconEdit = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgEdit />
    </Icon>
  );
};

export default IconEdit;
