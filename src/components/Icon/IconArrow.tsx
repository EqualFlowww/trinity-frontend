import SvgArrow from '@/assets/svgs/arrow.svg?react';
import Icon, { IconProps } from '@/components/UI/Icon';

interface Props extends IconProps {
  type: 'up' | 'down' | 'left' | 'right';
}

const IconArrow = ({ type, ...props }: Props) => {
  const typeVariants = {
    up: 'rotate-0',
    right: 'rotate-90',
    down: 'rotate-180',
    left: '-rotate-90',
  };

  return (
    <div className={`${typeVariants[type]}`}>
      <Icon {...props}>
        <SvgArrow />
      </Icon>
    </div>
  );
};

export default IconArrow;
