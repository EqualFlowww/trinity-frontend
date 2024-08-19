import SvgEdit from '@/assets/svgs/edit.svg?react';
import { IconProps } from '@/types/props';
import Icon from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconEdit = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgEdit />
    </Icon>
  );
};

export default IconEdit;
