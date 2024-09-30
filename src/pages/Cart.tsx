import { useState } from 'react';
import Flex from '@/components/UI/Flex';
import Hr from '@/components/UI/Hr';

const Cart = () => {
  const [activeTab, setActiveTab] = useState('카트 관리');

  return (
    <Flex
      name="dashboard-wrapper"
      direction="flex-col"
      padding="p-0"
      color="c-neutral-container-03"
      justifyContent="jc-start"
      size="sz-full"
      position="relative"
    >
      <Flex
        name="tab-menu"
        direction="flex-row"
        padding="p-3"
        color="c-neutral-container-03"
        justifyContent="jc-start"
        width="w-full"
        height="h-12"
        position="relative"
      >
        <span
          className={`mr-4 font-bold cursor-pointer ${activeTab === '카트 관리' ? 'text-black' : 'text-[#7B8B76]'} hover:text-black`}
          style={{ fontSize: '2.4rem' }}
          onClick={() => setActiveTab('카트 관리')}
        >
          카트 관리
        </span>
        <span
          className={`font-bold cursor-pointer ${activeTab === '카트 등록' ? 'text-black' : 'text-[#7B8B76]'} hover:text-black`}
          style={{ fontSize: '2.4rem' }}
          onClick={() => setActiveTab('카트 등록')}
        >
          카트 등록
        </span>
      </Flex>
      <Hr
        type="horizontal"
        length="len-full"
        thickness="thk-0.25"
        color="c-neutral-container-05"
        marginBottom="mb-auto"
        marginLeft="ml-6"
      />
    </Flex>
  );
};

export default Cart;
