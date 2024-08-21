import SvgSearch from '@/assets/svgs/search.svg?react';
import { IconProps } from '@/types/props';
import Icon from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconSearch = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgSearch />
    </Icon>
  );
};

export default IconSearch;
