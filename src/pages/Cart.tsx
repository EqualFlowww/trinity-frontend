import { useState } from 'react';
import Flex from '@/components/UI/Flex';
import Hr from '@/components/UI/Hr';
import CartManagement from '@/components/Cart/\bCartManagement';
import CartRegistration from '@/components/Cart/CartRegistration';

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
        height="h-10"
        position="relative"
        marginTop="mt-0"
      >
        <button
          type="button"
          className={`mr-4 font-bold cursor-pointer ${activeTab === '카트 관리' ? 'text-black' : 'text-[#7B8B76]'} hover:text-black`}
          style={{
            fontSize: '2.4rem',
            background: 'none',
            border: 'none',
            padding: 0,
          }}
          onClick={() => setActiveTab('카트 관리')}
        >
          카트 관리
        </button>
        <button
          type="button"
          className={`font-bold cursor-pointer ${activeTab === '카트 등록' ? 'text-black' : 'text-[#7B8B76]'} hover:text-black`}
          style={{
            fontSize: '2.4rem',
            background: 'none',
            border: 'none',
            padding: 0,
          }}
          onClick={() => setActiveTab('카트 등록')}
        >
          카트 등록
        </button>
      </Flex>
      <Hr
        type="horizontal"
        length="len-full"
        thickness="thk-0.25"
        color="c-neutral-container-05"
        marginBottom="mb-auto"
        marginLeft="ml-6"
      />
      {activeTab === '카트 관리' && <CartManagement />}
      {activeTab === '카트 등록' && <CartRegistration />}
    </Flex>
  );
};

export default Cart;
