import { useState } from 'react';
import Flex from '@/components/UI/Flex';
import Navbar from '@/components/Header/Navbar';
import background from '@/assets/svgs/trinity-background-pattern-B.svg';
import CartManagement from '@/components/Cart/CartManagement';
import CartRegistration from '@/components/Cart/CartRegistration';

const Media = () => {
  const [activeTab, setActiveTab] = useState('템플릿 설정');

  return (
    <Flex
      name="main-wrapper"
      direction="flex-col"
      color="c-neutral"
      size="sz-full"
      position="relative"
    >
      <Navbar
        tabs={[
          '템플릿 설정',
          '위젯 관리',
          '스케줄 관리',
          '콘텐츠 관리',
          '이벤트 관리',
        ]}
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
        {activeTab === '카트 관리' && <CartManagement />}
        {activeTab === '카트 등록' && <CartRegistration />}
      </Flex>
    </Flex>
  );
};

export default Media;
