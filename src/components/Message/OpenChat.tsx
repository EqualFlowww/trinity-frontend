import classNames from 'classnames/bind';
import classes from './OpenChat.module.scss';
import Flex from '@/components/UI/Flex';
import Text from '@/components/UI/Text';
import Button from '@/components/UI/Button';
import IconSearch from '@/components/Icon/IconSearch';
import Scroll from '@/components/UI/Scroll';
import ChatMessage from '@/components/Message/ChatMessage';
import { useQuery } from '@tanstack/react-query';
import {
  fetchAccounts,
  fetchChatRoomMessages,
  fetchChatRooms,
} from '@/libs/http';
import arrayToIdObject from '@/utils/arrayToIdObject';
import { ChatRoomList, MessageList } from '@/types/message';
import arrayToUsernameObject from '@/utils/arrayToUsernameObject';
import MessageInputBox from '@/components/Message/MessageInputBox';

interface Props {
  chatRoomId: string;
}

const OpenChat = ({ chatRoomId }: Props) => {
  const cx = classNames.bind(classes);

  const {
    data: messagesData,
    // error,
  } = useQuery({
    queryKey: ['chatRoom', chatRoomId],
    queryFn: ({ signal }) =>
      fetchChatRoomMessages({ signal, searchTerm: chatRoomId }),

    refetchInterval: 1000,
    refetchIntervalInBackground: true, // 백그라운드에서도 폴링 유지
  });

  const {
    data: chatRoomsData,
    // error,
  } = useQuery({
    queryKey: ['chatRooms'],
    queryFn: ({ signal }) =>
      fetchChatRooms({ signal, searchTerm: window.common.auth.username }),
  });

  const {
    data: accountsData,
    // error,
  } = useQuery({
    queryKey: ['accounts'],
    queryFn: ({ signal }) =>
      fetchAccounts({
        signal,
      }),
  });

  return (
    <Flex
      size="full"
      direction="column"
      color="neutral-container-02"
      wrap="nowrap"
    >
      <Flex width="full" padding="2" justifyContent="between" wrap="nowrap">
        <Flex gap="1" wrap="nowrap">
          <div className={cx('profile-image')} />
          <Flex direction="column" justifyContent="between" alignItems="start">
            <Text type="title" size="small" color="on-neutral">
              {
                arrayToIdObject(chatRoomsData as ChatRoomList)[chatRoomId]
                  .displayName
              }
            </Text>
            {false && (
              <Text type="label" color="on-neutral-variant">
                5
              </Text>
            )}
          </Flex>
        </Flex>
        <Button form="text" color="on-neutral" padding="0">
          <IconSearch size="3" color="inherit" />
        </Button>
      </Flex>
      <div className={cx('message-area')}>
        <Flex size="full" alignContent="end">
          <Scroll type="vertical">
            <Flex
              direction="column-reverse"
              width="full"
              padding="1"
              paddingX="2"
              gap="2"
              justifyContent="end"
            >
              {(messagesData as MessageList).map((message) => (
                <ChatMessage
                  key={message.id}
                  isOtherUser={message.username !== window.common.auth.username}
                  messageTimestamp={new Date(message.tstamp)}
                  displayName={
                    accountsData && accountsData.length > 0
                      ? arrayToUsernameObject(accountsData)[message.username]
                          .displayName
                      : '유저'
                  }
                >
                  {message.content}
                </ChatMessage>
              ))}
            </Flex>
          </Scroll>
        </Flex>
      </div>
      <div className={cx('message-input-box')}>
        <MessageInputBox
          chatRoomId={chatRoomId}
          others={
            accountsData && accountsData.length > 0
              ? arrayToIdObject(chatRoomsData as ChatRoomList)[
                  chatRoomId
                ].participants.filter(
                  (username: string) => username !== window.common.auth.username
                )
              : ['unknown']
          }
        />
      </div>
    </Flex>
  );
};

export default OpenChat;
