import { useState } from 'react';
import Flex from '@/components/UI/Flex';
import Navbar from '@/components/Header/Navbar';
import background from '@/assets/svgs/trinity-background-pattern-B.svg';
import { LoaderFunctionArgs } from 'react-router-dom';
import AccountManagement from '@/components/Account/AccountManagement';

const Account = () => {
  const [activeTab, setActiveTab] = useState('계정 관리');

  return (
    <Flex
      name="main-wrapper"
      direction="flex-col"
      color="c-neutral"
      size="sz-full"
      position="relative"
    >
      <Navbar
        tabs={['계정 관리']}
        activeTab={activeTab}
        setActiveTab={(tab: string) => setActiveTab(tab)}
      ></Navbar>
      <Flex
        width="w-full"
        grow="grow-1"
        minHeight="mh-0"
        paddingLeft="pl-3"
        htmlAttributes={{
          style: {
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '15rem',
          },
        }}
      >
        {activeTab === '계정 관리' && <AccountManagement />}
      </Flex>
    </Flex>
  );
};

const loader = async ({}: LoaderFunctionArgs) => {
  // const wait = async (): Promise<void> => {
  //   return new Promise(() => {
  //     const checkInterval = 500; // 0.5초마다 확인
  //     const checkGlobalVar = () => {
  //       if (false) {
  //       } else {
  //         setTimeout(checkGlobalVar, checkInterval); // 다시 확인
  //       }
  //     };

  //     checkGlobalVar(); // 처음 검사 시작
  //   });
  // };

  // await wait();

  return null;
};

Account.loader = loader;

export default Account;
