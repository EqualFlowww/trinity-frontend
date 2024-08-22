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
import {
  fetchAccounts,
  fetchChatRoomMessages,
  fetchChatRooms,
  fetchUnreadMessages,
  queryClient,
} from '@/libs/http';
import { ChatRoom } from '@/types/message';
import useSocketStore from '@/store/socketStore';
import { useEffect } from 'react';
import waitForLogin from '@/utils/waitForLogin';
// import { useWebSocket } from '@/hooks/useWebsocket';
// import useSocketStore from '@/store/socketStore';

const RootLayout = () => {
  const cx = classNames.bind(classes);

  const { connectWebSocket, disconnectWebSocket, setMounted, webSocketData } =
    useSocketStore();

  useEffect(() => {
    setMounted(true);
    connectWebSocket();

    return () => {
      setMounted(false);
      disconnectWebSocket();
    };
  }, [connectWebSocket, disconnectWebSocket, setMounted]);

  useEffect(() => {
    if (webSocketData) {
      console.log('새로운 메시지:', webSocketData);
      // 웹소켓 데이터를 처리하거나 상태를 업데이트하는 로직 추가 가능
    }
  }, [webSocketData]);

  // const { ws } = useWebSocket();
  // const { setWebSocket } = useSocketStore();

  // useEffect(() => {
  //   if (!ws) return;
  //   setWebSocket(ws);
  // }, [ws]);

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

  console.log('pass');

  try {
    const chatRoomsData = await queryClient.fetchQuery({
      queryKey: ['chatRooms'],
      queryFn: ({ signal }) =>
        fetchChatRooms({ signal, searchTerm: window.common.auth.username }),
      staleTime: 1000,
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
          queryFn: ({ signal }) =>
            fetchChatRoomMessages({ signal, searchTerm: room.id }),
          staleTime: 1000,
        });
        // queryClient.setQueryData(['chatRoom', room.id], room.messages);
        console.log('chatroomData', chatroomData);
      });
    }
  } catch (error) {
    console.error(error);
  }

  return null;
};

const action = ({}: ActionFunctionArgs) => {
  return null;
};

RootLayout.loader = loader;
RootLayout.action = action;

export default RootLayout;
