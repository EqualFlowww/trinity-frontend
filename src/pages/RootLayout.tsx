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
import useChatStore from '@/store/socketStore';
import { useEffect } from 'react';

const RootLayout = () => {
  const cx = classNames.bind(classes);

  const {
    connectWebSocket,
    disconnectWebSocket,
    setMounted,
    // webSocketData
  } = useChatStore();

  useEffect(() => {
    setMounted(true);
    connectWebSocket();

    return () => {
      setMounted(false);
      disconnectWebSocket();
    };
  }, [connectWebSocket, disconnectWebSocket, setMounted]);

  // useEffect(() => {
  //   if (webSocketData) {
  //     console.log('새로운 메시지:', webSocketData);
  //     // 웹소켓 데이터를 처리하거나 상태를 업데이트하는 로직 추가 가능
  //   }
  // }, [webSocketData]);

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

const waitForGlobalVar = (): Promise<void> => {
  return new Promise((resolve) => {
    const checkInterval = 500; // 0.5초마다 확인

    const checkGlobalVar = () => {
      if (
        window.common.auth.username &&
        window.common.auth.userInfo &&
        window.common.auth.username !== ''
      ) {
        resolve(); // 글로벌 변수가 true가 되면 Promise를 해결
      } else {
        setTimeout(checkGlobalVar, checkInterval); // 다시 확인
      }
    };

    checkGlobalVar(); // 처음 검사 시작
  });
};

const loader = async ({}: LoaderFunctionArgs) => {
  await waitForGlobalVar();

  try {
    const chatRoomsData = await queryClient.fetchQuery({
      queryKey: ['chatRooms'],
      queryFn: ({ signal }) =>
        fetchChatRooms({ signal, searchTerm: window.common.auth.username }),
    });

    queryClient.fetchQuery({
      queryKey: ['unreadMessages'],
      queryFn: ({ signal }) =>
        fetchUnreadMessages({
          signal,
          searchTerm: window.common.auth.username,
        }),
    });

    queryClient.fetchQuery({
      queryKey: ['accounts'],
      queryFn: ({ signal }) =>
        fetchAccounts({
          signal,
        }),
    });

    if (chatRoomsData) {
      chatRoomsData.forEach((room: ChatRoom) => {
        queryClient.fetchQuery({
          queryKey: ['chatRoom', room.id],
          queryFn: ({ signal }) =>
            fetchChatRoomMessages({ signal, searchTerm: room.id }),
        });
        // queryClient.setQueryData(['chatRoom', room.id], room.messages);
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
