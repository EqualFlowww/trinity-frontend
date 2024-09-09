import SvgSearch from '@/assets/svgs/search.svg?react';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconSearch = (props: Props) => {
  return (
    <Icon {...props}>
      <SvgSearch />
    </Icon>
  );
};

export default IconSearch;
