import { Outlet, useNavigation } from 'react-router-dom';
import Flex from '@/components/UI/Flex';
import Spinner from '@/components/UI/Spinner';

const AppLayout = () => {
  const navigation = useNavigation();

  if (navigation.state === 'loading') {
    // 로딩 상태 또는 대기 상태를 표시
    return (
      <Flex size="full" justifyContent="center" alignItems="center">
        <Spinner size="large" color="tertiary" />
      </Flex>
    );
  }

  return <Outlet />;
};

// const loader = async ({}: LoaderFunctionArgs) => {
//   const checkGlobalVar = () => {
//     return (
//       window.common.auth.username &&
//       window.common.auth.userInfo &&
//       window.common.auth.username !== ''
//     );
//   };

//   const sleep = (ms: number) => {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   };

//   const checkAndRender = async () => {
//     if (checkGlobalVar()) {
//       console.log('AppLayout is ready');
//     } else {
//       setTimeout(checkAndRender, 500);
//       await sleep(500); // 0.5초 후에 다시 검사
//     }
//   };

//   checkAndRender();

//   return null;
// };

// const action = ({}: ActionFunctionArgs) => {
//   return null;
// };

// AppLayout.loader = loader;
// AppLayout.action = action;

export default AppLayout;
