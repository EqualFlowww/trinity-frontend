import classNames from 'classnames/bind';
import classes from './IconArrow.module.scss';
import SvgArrow from '@/assets/svgs/arrow.svg?react';
import { IconProps } from '@/types/props';
import Icon from '@/components/UI/Icon';

// svg 파일 가져옴

interface Props extends IconProps {
  type: 'up' | 'down' | 'left' | 'right';
}

const IconArrow = ({ type, ...props }: Props) => {
  const cx = classNames.bind(classes);

  return (
    <div className={cx('icon-arrow', type)}>
      <Icon {...props}>
        <SvgArrow />
      </Icon>
    </div>
  );
};

export default IconArrow;
