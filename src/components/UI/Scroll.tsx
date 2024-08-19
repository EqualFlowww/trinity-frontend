import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import classes from './Scroll.module.scss';
import getBrowser from '@/utils/getBrowser';

interface Props {
  children: React.ReactNode;
  type?: 'horizontal' | 'vertical' | 'both';
  size?: 'small' | 'medium' | 'large';
}

const Scroll = ({ children, type = 'vertical', size = 'medium' }: Props) => {
  const cx = classNames.bind(classes);
  const [broswer, setBroswer] = useState('');

  useEffect(() => {
    setBroswer(getBrowser().toLowerCase());
  }, []);

  return (
    <div className={cx('scroll', broswer, type, size)}>
      <div className={cx('children-wrapper', type)}>{children}</div>
    </div>
  );
};

export default Scroll;
