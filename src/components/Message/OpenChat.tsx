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
import { ChatRoomList, MessageList } from '@/types/message';
import MessageInputBox from '@/components/Message/MessageInputBox';
import arrayToIdObject from '@/utils/arrayToIdObject';
import arrayToUsernameObject from '@/utils/arrayToUsernameObject';

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
      size="sz-full"
      direction="flex-col"
      color="c-neutral-container-02"
      wrap="flex-nowrap"
    >
      <Flex
        width="w-full"
        padding="p-2"
        justifyContent="jc-between"
        wrap="flex-nowrap"
      >
        <Flex gap="gap-1" wrap="flex-nowrap">
          <div className={cx('profile-image')} />
          <Flex
            direction="flex-col"
            justifyContent="jc-between"
            alignItems="ai-start"
          >
            <Text size="title-s" color="c-on-neutral">
              {
                arrayToIdObject(chatRoomsData as ChatRoomList)[chatRoomId]
                  .displayName
              }
            </Text>
            {false && (
              <Text size="label-m" color="c-on-neutral-variant">
                5
              </Text>
            )}
          </Flex>
        </Flex>
        <Button form="btn-text" color="c-on-neutral" padding="p-0">
          <IconSearch size="sz-3" color="c-inherit" />
        </Button>
      </Flex>
      <div className={cx('message-area')}>
        <Flex size="sz-full" alignContent="ac-end">
          <Scroll type="vertical">
            <Flex
              direction="flex-col-reverse"
              width="w-full"
              padding="p-1"
              paddingX="px-2"
              gap="gap-2"
              justifyContent="jc-end"
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
