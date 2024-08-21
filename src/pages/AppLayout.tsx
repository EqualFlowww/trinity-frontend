import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Flex from '@/components/UI/Flex';
import Spinner from '@/components/UI/Spinner';

const AppLayout = () => {
  const [isReady, setIsReady] = useState(false);

  // 글로벌 변수의 값을 확인하는 함수
  const checkGlobalVar = () => {
    return (
      window.common.auth.username &&
      window.common.auth.userInfo &&
      window.common.auth.username !== ''
    );
  };

  useEffect(() => {
    const checkAndRender = () => {
      if (checkGlobalVar()) {
        setIsReady(true);
      } else {
        setTimeout(checkAndRender, 500); // 0.5초 후에 다시 검사
      }
    };

    checkAndRender();
  }, []);

  if (!isReady) {
    // 로딩 상태 또는 대기 상태를 표시
    return (
      <Flex size="full" justifyContent="center" alignItems="center">
        <Spinner size="large" color="tertiary" />
      </Flex>
    );
  }

  return <Outlet />;
};

export default AppLayout;
