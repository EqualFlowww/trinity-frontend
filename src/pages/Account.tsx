import classNames from 'classnames/bind';
import classes from './Account.module.scss';

const Account = () => {
  const cx = classNames.bind(classes);

  return <div className={cx('main')}>Account</div>;
};

export default Account;
