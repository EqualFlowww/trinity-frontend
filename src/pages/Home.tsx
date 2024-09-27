import classNames from 'classnames/bind';
import classes from './Home.module.scss';
import Dashboard from '@/components/Home/Dashboard';
import Overview from '@/components/Home/Overview/Overview';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router-dom';
import arrayToIdObject from '@/utils/arrayToIdObject';
import waitForLogin from '@/utils/waitForLogin';
import Wrapper from '@/components/UI/Wrapper';
import { useState } from 'react';
import Button from '@/components/UI/Button';
import IconArrow from '@/components/Icon/IconArrow';
import { cartQuery, roundQuery } from '@/queries';

type Mode = 'map' | 'track';

const Home = () => {
  const cx = classNames.bind(classes);
  const [isDashboard, setIsDashboard] = useState(true);
  const [mode, setMode] = useState<Mode>('map');

  return (
    <div className={cx('main')}>
      <Wrapper
        name="dashboard"
        position="absolute"
        width="w-[31.2rem]"
        height="h-full"
        zIndex="z-10"
        top="t-0"
        left="l-0"
        transformTranslateX={isDashboard ? '-trlx-0' : '-trlx-100pct'}
        transition="trans-all"
        transitionDuration="dur-500"
      >
        <Dashboard
          isOn={isDashboard}
          toggleFeature={() => setIsDashboard((prev) => !prev)}
        />
      </Wrapper>
      <div className={cx('overview')}>
        <Overview />
      </div>
    </div>
  );
};

const loader = async ({}: LoaderFunctionArgs) => {
  await waitForLogin();

  await cartQuery.fetchCartsQuery();
  await roundQuery.fetchRoundsQuery();

  return null;
};

const action = ({}: ActionFunctionArgs) => {
  return null;
};

Home.loader = loader;
Home.action = action;

export default Home;
