import classNames from 'classnames/bind';
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  Outlet,
  useNavigation,
} from 'react-router-dom';
import classes from './RootLayout.module.scss';
import Header from '@/components/Header/Header';
import MessageModal from '@/components/Message/MessageModal';
import SettingModal from '@/components/Setting/SettingModal';
import {
  fetchAccounts,
  fetchChatRoomMessages,
  fetchChatRooms,
  fetchUnreadMessages,
  queryClient,
} from '@/libs/http';
import { ChatRoom } from '@/types/message';
import waitForLogin from '@/utils/waitForLogin';
import Flex from '@/components/UI/Flex';
import Spinner from '@/components/UI/Spinner';
// import { useWebSocket } from '@/hooks/useWebsocket';
// import useSocketStore from '@/store/socketStore';

const RootLayout = () => {
  const cx = classNames.bind(classes);

  const navigation = useNavigation();

  if (navigation.state === 'loading') {
    // 로딩 상태 또는 대기 상태를 표시
    return (
      <div className={cx('wrapper')}>
        <Flex size="sz-full" justifyContent="jc-center" alignItems="ai-center">
          <Spinner size="spinner-l" color="bc-primary" />
        </Flex>
      </div>
    );
  }

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

const loader = async ({}: LoaderFunctionArgs) => {
  await waitForLogin();

  // console.log('pass');

  const chatRoomsData = await queryClient.fetchQuery({
    queryKey: ['chatRooms'],
    queryFn: ({ signal }) =>
      fetchChatRooms({ signal, searchTerm: window.common.auth.username }),
  });
  console.log('chatRoomsData', chatRoomsData);
  const unreadMessagesData = await queryClient.fetchQuery({
    queryKey: ['unreadMessages'],
    queryFn: ({ signal }) =>
      fetchUnreadMessages({
        signal,
        searchTerm: window.common.auth.username,
      }),
  });
  console.log('unreadMessagesData', unreadMessagesData);
  const accountsData = await queryClient.fetchQuery({
    queryKey: ['accounts'],
    queryFn: ({ signal }) =>
      fetchAccounts({
        signal,
      }),
  });
  console.log('accountsData', accountsData);
  if (chatRoomsData) {
    await chatRoomsData.forEach(async (room: ChatRoom) => {
      const chatroomData = await queryClient.fetchQuery({
        queryKey: ['chatRoom', room.id],
        queryFn: ({ signal, queryKey }) =>
          fetchChatRoomMessages({ signal, searchTerm: queryKey[1] }),
      });
      // queryClient.setQueryData(['chatRoom', room.id], room.messages);
      console.log('chatroomData', chatroomData);
    });
  }

  return null;
};

const action = ({}: ActionFunctionArgs) => {
  return null;
};

RootLayout.loader = loader;
RootLayout.action = action;

export default RootLayout;
