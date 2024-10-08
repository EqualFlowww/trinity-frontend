import classNames from 'classnames/bind';
import classes from './ChatItem.module.scss';
import Text from '@/components/UI/Text';
import UnreadMessageCount from '@/components/Message/UnreadMessageCount';
import Button from '@/components/UI/Button';
import MessageTimestamp from '@/components/Message/MessageTimestamp';
import { ChatRoom, MessageList } from '@/types/message';
import { useQuery } from '@tanstack/react-query';
import { fetchChatRoomPreview, fetchUnreadMessages } from '@/libs/http';
import useMessageStore from '@/store/messageStore';
import { useEffect } from 'react';

interface Props {
  chatRoom: ChatRoom;
}

const ChatItem = ({ chatRoom }: Props) => {
  const cx = classNames.bind(classes);
  const openChatRoom = useMessageStore((state) => state.openChatRoom);

  const {
    data: messagesData,
    isPending,
    // error,
  } = useQuery({
    queryKey: ['chatRoom', chatRoom.id, 'preview'],
    queryFn: ({ signal }) =>
      fetchChatRoomPreview({ signal, searchTerm: chatRoom.id }),
  });
  const {
    data: unreadMessagesData,
    // error,
  } = useQuery({
    queryKey: ['unreadMessages'],
    queryFn: ({ signal }) =>
      fetchUnreadMessages({
        signal,
        searchTerm: window.common.auth.username,
      }),
  });

  // useEffect(() => {
  //   if (messagesData) {
  //     console.log(new Date(messagesData[0].tstamp));
  //   }
  // }, [messagesData]);

  return (
    <Button
      width="w-full"
      justifyContent="jc-between"
      alignItems="ai-center"
      padding="p-1"
      borderRadius="rad-1"
      gap="gap-1"
      color="c-neutral"
      hover={{ color: 'hover:c-neutral-container-02' }}
      wrap="flex-nowrap"
      onClick={() => {
        openChatRoom(chatRoom.id);
      }}
    >
      <div className={cx('message-content-container')}>
        <div className={cx('profile-image')} />
        <div className={cx('message-text')}>
          <Text size="title-s" color="c-on-neutral">
            {chatRoom.displayName}
          </Text>
          <Text size="label-s" color="c-on-neutral-variant">
            {(messagesData as MessageList) &&
            (messagesData as MessageList).length > 0
              ? (messagesData as MessageList)[0].content
              : '신규 채팅방입니다.'}
          </Text>
        </div>
      </div>
      <div className={cx('message-meta-data')}>
        <MessageTimestamp
          date={
            (messagesData as MessageList) &&
            (messagesData as MessageList).length > 0
              ? new Date((messagesData as MessageList)[0].tstamp * 1000)
              : null
          }
        ></MessageTimestamp>
        <UnreadMessageCount
          count={
            (unreadMessagesData as MessageList) &&
            (unreadMessagesData as MessageList).length > 0
              ? (unreadMessagesData as MessageList).filter(
                  (unreadMessage) => unreadMessage.username === chatRoom.id
                ).length
              : 0
          }
        />
      </div>
    </Button>
  );
};

export default ChatItem;
