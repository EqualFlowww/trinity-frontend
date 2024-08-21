import classNames from 'classnames/bind';
import classes from './ChatItem.module.scss';
import Text from '@/components/UI/Text';
import UnreadMessageCount from '@/components/Message/UnreadMessageCount';
import Button from '@/components/UI/Button';
import MessageTimestamp from '@/components/Message/MessageTimestamp';
import { ChatRoom, MessageList } from '@/types/message';
import { useQuery } from '@tanstack/react-query';
import { fetchChatRoomMessages, fetchUnreadMessages } from '@/libs/http';
import useMessageStore from '@/store/messageStore';

interface Props {
  chatRoom: ChatRoom;
}

const ChatItem = ({ chatRoom }: Props) => {
  const cx = classNames.bind(classes);
  const openChatRoom = useMessageStore((state) => state.openChatRoom);

  const {
    data: messagesData,
    // error,
  } = useQuery({
    queryKey: ['chatRoom', chatRoom.id],
    queryFn: ({ signal }) =>
      fetchChatRoomMessages({ signal, searchTerm: chatRoom.id }),
  });
  console.log('messagesData', messagesData);
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

  return (
    <Button
      width="full"
      justifyContent="between"
      alignItems="center"
      padding="1"
      borderRadius="1"
      gap="1"
      color="neutral"
      hoverColor="neutral-container-02"
      wrap="nowrap"
      onClick={() => {
        openChatRoom(chatRoom.id);
      }}
    >
      <div className={cx('message-content-container')}>
        <div className={cx('profile-image')} />
        <div className={cx('message-text')}>
          <Text type="title" size="small" color="on-neutral">
            {chatRoom.displayName}
          </Text>
          <Text type="label" color="on-neutral-variant">
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
              ? new Date((messagesData as MessageList)[0].tstamp)
              : null
          }
        ></MessageTimestamp>
        <UnreadMessageCount
          count={
            (unreadMessagesData as MessageList).filter(
              (unreadMessage) => unreadMessage.username === chatRoom.id
            ).length
          }
        />
      </div>
    </Button>
  );
};

export default ChatItem;
