import classNames from 'classnames/bind';
import classes from './Home.module.scss';
import Dashboard from '@/components/Home/Dashboard';
import Overview from '@/components/Home/Overview';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router-dom';
import { fetchCarts, fetchRounds, queryClient } from '@/libs/http';
import { useQuery } from '@tanstack/react-query';
import arrayToIdObject from '@/utils/arrayToIdObject';
import Spinner from '@/components/UI/Spinner';
import Flex from '@/components/UI/Flex';
import waitForLogin from '@/utils/waitForLogin';

const Home = () => {
  const cx = classNames.bind(classes);
  const {
    data: cartsData,
    isPending: isCartsPending,
    // error,
  } = useQuery({
    queryKey: ['carts'],
    queryFn: ({ signal }) => fetchCarts({ signal }),
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true, // 백그라운드에서도 폴링 유지
  });
  const {
    data: roundsData,
    isPending: isRoundsPending,
    // error,
  } = useQuery({
    queryKey: ['rounds'],
    queryFn: ({ signal }) => fetchRounds({ signal }),
  });

  return (
    <div className={cx('main')}>
      <div className={cx('dashboard')}>
        {isCartsPending || isRoundsPending ? (
          <Flex
            size="sz-full"
            justifyContent="jc-center"
            alignItems="ai-center"
          >
            <Spinner color="bc-neutral-container-03" />
          </Flex>
        ) : (
          cartsData &&
          roundsData && (
            <Dashboard
              cartCollection={arrayToIdObject(cartsData)}
              roundCollection={arrayToIdObject(roundsData)}
            />
          )
        )}
      </div>
      <div className={cx('overview')}>
        {isCartsPending || isRoundsPending ? (
          <Flex
            size="sz-full"
            justifyContent="jc-center"
            alignItems="ai-center"
          >
            <Spinner size="spinner-l" color="bc-tertiary" />
          </Flex>
        ) : (
          cartsData &&
          roundsData && (
            <Overview
              cartCollection={arrayToIdObject(cartsData)}
              roundCollection={arrayToIdObject(roundsData)}
            />
          )
        )}
      </div>
    </div>
  );
};

const loader = async ({}: LoaderFunctionArgs) => {
  await waitForLogin();

  console.log('pass');

  await queryClient.fetchQuery({
    queryKey: ['carts'],
    queryFn: ({ signal }) => fetchCarts({ signal }),
    staleTime: 1000,
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
