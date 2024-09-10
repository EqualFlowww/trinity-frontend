import classNames from 'classnames/bind';
import useMessageStore from '@/store/messageStore';
import classes from './MessageModal.module.scss';
import Flex from '@/components/UI/Flex';
import { useRef } from 'react';
import Button from '@/components/UI/Button';
import IconClose from '@/components/Icon/IconClose';
import ChatListArea from '@/components/Message/ChatListArea';
import OpenChatArea from '@/components/Message/OpenChatArea';
import { useQuery } from '@tanstack/react-query';
import { fetchChatRooms } from '@/libs/http';
import { ChatRoomList } from '@/types/message';

const MessageModal = () => {
  const cx = classNames.bind(classes);
  const overlay = useRef(null);

  const isOpen = useMessageStore((state) => state.isModalOpen);
  const closeModal = useMessageStore((state) => state.closeModal);

  const {
    data: chatRoomsData,
    // error,
  } = useQuery({
    queryKey: ['chatRooms'],
    queryFn: ({ signal }) =>
      fetchChatRooms({ signal, searchTerm: window.common.auth.username }),

    // refetchInterval: 1000,
    // refetchIntervalInBackground: true, // 백그라운드에서도 폴링 유지
  });

  if (!isOpen) return null;

  return (
    <div
      className={cx('modal-overlay')}
      ref={overlay}
      onClick={(e) => {
        if (e.target == overlay.current) closeModal();
      }}
    >
      <div className={cx('modal')}>
        <Flex size="sz-full" wrap="flex-nowrap">
          <div className={cx('chat-list-area')}>
            <ChatListArea chatRoomList={chatRoomsData as ChatRoomList} />
          </div>
          <div className={cx('open-chat-area')}>
            <OpenChatArea chatRoomList={chatRoomsData as ChatRoomList} />
          </div>
        </Flex>
        <Button
          position="absolute"
          top="t-0"
          left="l-100pct"
          padding="p-0"
          form="btn-text"
          color="c-neutral-container-02"
          size="sz-auto"
          marginLeft="ml-0.5"
          onClick={closeModal}
        >
          <IconClose size="sz-3" color="c-inherit" />
        </Button>
      </div>
    </div>
  );
};

export default MessageModal;
