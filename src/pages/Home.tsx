import classNames from 'classnames/bind';
import classes from './Home.module.scss';
import Dashboard from '@/components/Home/Dashboard';
import Overview from '@/components/Home/Overview';

const Home = () => {
  const cx = classNames.bind(classes);
  return (
    <div className={cx('main')}>
      <div className={cx('dashboard')}>
        <Dashboard />
      </div>
      <div className={cx('overview')}>
        <Overview />
      </div>
    </div>
  );
};

export default Home;
