import classNames from 'classnames/bind';
import classes from './Error.module.scss';
import Header from '@/components/Header/Header';

const Error = () => {
  const cx = classNames.bind(classes);

  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('main')}>Error</div>
    </div>
  );
};

export default Error;
