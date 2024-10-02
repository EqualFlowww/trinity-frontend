import Svg from '@/assets/svgs/track.svg?react';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {}

const IconTrack = (props: Props) => {
  return (
    <Icon {...props}>
      <Svg />
    </Icon>
  );
};

export default IconTrack;
