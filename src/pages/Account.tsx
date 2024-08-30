import classNames from 'classnames/bind';
import classes from './Account.module.scss';
import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';
import Flex from '@/components/UI/Flex';
import Spinner from '@/components/UI/Spinner';

const Account = () => {
  const cx = classNames.bind(classes);
  const data = useLoaderData();

  // const navigation = useNavigation();

  // if (navigation.state === 'loading') {
  //   // 로딩 상태 또는 대기 상태를 표시
  //   return <Spinner size="large" color="primary" />;
  // }

  return <div className={cx('main')}>Account</div>;
};

const loader = async ({}: LoaderFunctionArgs) => {
  const wait = async (): Promise<void> => {
    return new Promise((resolve) => {
      const checkInterval = 500; // 0.5초마다 확인
      const checkGlobalVar = () => {
        if (false) {
        } else {
          setTimeout(checkGlobalVar, checkInterval); // 다시 확인
        }
      };

      checkGlobalVar(); // 처음 검사 시작
    });
  };

  await wait();

  return null;
};

Account.loader = loader;

export default Account;
