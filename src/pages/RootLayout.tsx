import classNames from 'classnames/bind';
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  Outlet,
} from 'react-router-dom';
import classes from './RootLayout.module.scss';
import Header from '@/components/Header/Header';
import MessageModal from '@/components/Message/MessageModal';
import SettingModal from '@/components/Setting/SettingModal';

const RootLayout = () => {
  const cx = classNames.bind(classes);

  return (
    <>
      <div className={cx('wrapper')}>
        <Header />
        <div className={cx('main')}>
          <Outlet />
        </div>
      </div>
      <MessageModal />
      <SettingModal />
    </>
  );
};

const loader = ({}: LoaderFunctionArgs) => {
  return null;
};

const action = ({}: ActionFunctionArgs) => {
  return null;
};

RootLayout.loader = loader;
RootLayout.action = action;

export default RootLayout;
