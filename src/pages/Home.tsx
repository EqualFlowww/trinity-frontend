import classNames from 'classnames/bind';
import classes from './Home.module.scss';
import Dashboard from '@/components/Home/Dashboard';
import Overview from '@/components/Home/Overview';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router-dom';
import { fetchCarts, fetchRounds, queryClient } from '@/libs/http';
import { useQuery } from '@tanstack/react-query';
import arrayToIdObject from '@/utils/arrayToIdObject';

const Home = () => {
  const cx = classNames.bind(classes);
  const {
    data: cartsData,
    // isPending,
    // error,
  } = useQuery({
    queryKey: ['carts'],
    queryFn: ({ signal }) => fetchCarts({ signal }),
  });
  const {
    data: roundsData,
    // isPending,
    // error,
  } = useQuery({
    queryKey: ['rounds'],
    queryFn: ({ signal }) => fetchRounds({ signal }),
  });

  console.log(cartsData);
  console.log(roundsData);

  return (
    <div className={cx('main')}>
      <div className={cx('dashboard')}>
        <Dashboard
          cartCollection={arrayToIdObject(cartsData)}
          roundCollection={arrayToIdObject(roundsData)}
        />
      </div>
      <div className={cx('overview')}>
        <Overview
          cartCollection={arrayToIdObject(cartsData)}
          roundCollection={arrayToIdObject(roundsData)}
        />
      </div>
    </div>
  );
};

const loader = async ({}: LoaderFunctionArgs) => {
  await queryClient.fetchQuery({
    queryKey: ['carts'],
    queryFn: ({ signal }) => fetchCarts({ signal }),
  });
  await queryClient.fetchQuery({
    queryKey: ['rounds'],
    queryFn: ({ signal }) => fetchRounds({ signal }),
  });
  return null;
};

const action = ({}: ActionFunctionArgs) => {
  return null;
};

Home.loader = loader;
Home.action = action;

export default Home;
