import classNames from 'classnames/bind';
import classes from './Device.module.scss';

const Device = () => {
  const cx = classNames.bind(classes);

  return <div className={cx('main')}></div>;
};

export default Device;
