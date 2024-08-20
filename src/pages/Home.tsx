import classNames from 'classnames/bind';
import classes from './Home.module.scss';
import Dashboard from '@/components/Home/Dashboard';
import Overview from '@/components/Home/Overview';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router-dom';
import { fetchEvents, queryClient } from '@/libs/http';

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

const loader = ({}: LoaderFunctionArgs) => {
  queryClient.fetchQuery({
    queryKey: ['home'],
    queryFn: ({ signal }) => fetchEvents({ signal, searchTerm: '' }),
  });
  return null;
};

const action = ({}: ActionFunctionArgs) => {
  return null;
};

Home.loader = loader;
Home.action = action;

export default Home;
