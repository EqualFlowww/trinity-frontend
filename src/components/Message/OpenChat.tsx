import classNames from 'classnames/bind';
import classes from './OpenChat.module.scss';
import Flex from '@/components/UI/Flex';
import Text from '@/components/UI/Text';
import Button from '@/components/UI/Button';
import IconSearch from '@/components/Icon/IconSearch';
import Scroll from '@/components/UI/Scroll';
import ChatMessage from '@/components/Message/ChatMessage';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import {
  fetchAccounts,
  fetchChatRoomMessages,
  fetchChatRooms,
} from '@/libs/http';
import { ChatRoomList, Message } from '@/types/message';
import MessageInputBox from '@/components/Message/MessageInputBox';
import arrayToIdObject from '@/utils/arrayToIdObject';
import arrayToUsernameObject from '@/utils/arrayToUsernameObject';
import { useCallback, useEffect, useRef, useState } from 'react';
import Wrapper from '@/components/UI/Wrapper';
import Spinner from '@/components/UI/Spinner';

interface Props {
  chatRoomId: string;
}

interface PendingMessage {
  id: string;
  content: string;
  username: string;
}

const OpenChat = ({ chatRoomId }: Props) => {
  const cx = classNames.bind(classes);
  const chatContainerRef = useRef<HTMLDivElement>(null); // 채팅 컨테이너 참조
  const [prevHeight, setPrevHeight] = useState(0); // 이전 chat container 높이
  const [pendingMessages, setPendingMessages] = useState<PendingMessage[]>([]);

  const {
    data: messagesData,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    // error,
  } = useInfiniteQuery({
    queryKey: ['chatRoom', chatRoomId, 'messages'],
    queryFn: ({ signal, pageParam }) =>
      fetchChatRoomMessages({ signal, searchTerm: chatRoomId, pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage && lastPage.length === 12) {
        return allPages.length + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
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

  const scrollToBottom = useCallback(
    (ref: React.RefObject<HTMLDivElement>) => {
      if (!ref.current || ref.current.scrollHeight <= ref.current.clientHeight)
        return;

      if (
        ref.current.scrollHeight -
          ref.current.clientHeight -
          ref.current.scrollTop <
        100
      )
        ref.current.scrollTo({
          top: ref.current.scrollHeight,
          behavior: 'smooth',
        });
      else ref.current.scrollTo({ top: ref.current.scrollHeight });
    },
    [chatContainerRef]
  );

  /* 스크롤이 맨 위에 도달했을때 이전 메시지 로드 */
  const handleScrollOnTop = () => {
    if (!chatContainerRef.current || isFetchingNextPage || !hasNextPage) return;

    const { scrollTop } = chatContainerRef.current;
    // 스크롤이 맨 위에 도달했는지 확인
    if (scrollTop === 0) {
      fetchNextPage(); // 이전 메시지 로드
    }
  };

  /* 처음 채팅창이 열렸을때 Bottom으로 이동 */
  useEffect(() => {
    scrollToBottom(chatContainerRef);
  }, []);

  /* 무한 스크롤 이벤트 등록 */
  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.addEventListener('scroll', handleScrollOnTop);
    }

    return () => {
      if (chatContainer) {
        chatContainer.removeEventListener('scroll', handleScrollOnTop);
      }
    };
  }, [handleScrollOnTop]);

  /* message 업데이트가 될때 Scroll이 Bottom 근처일 경우 Bottom으로 이동 */
  useEffect(() => {
    if (!chatContainerRef.current) return;
    setPrevHeight(chatContainerRef.current?.scrollHeight);
    if (
      chatContainerRef.current.scrollTop >
      chatContainerRef.current.scrollHeight -
        chatContainerRef.current.clientHeight * 1.5
    )
      scrollToBottom(chatContainerRef);
  }, [messagesData, isFetching]);

  useEffect(() => {
    if (!isFetchingNextPage) {
      chatContainerRef.current?.scrollTo({
        top:
          chatContainerRef.current.scrollTop +
          chatContainerRef.current?.scrollHeight -
          prevHeight,
      });
    }
  }, [isFetchingNextPage]);

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
          </Flex>
        </Flex>
        <Button form="btn-text" color="c-on-neutral" padding="p-0">
          <IconSearch size="sz-3" color="c-inherit" />
        </Button>
      </Flex>
      <div className={cx('message-area')}>
        <Flex size="sz-full" alignContent="ac-end">
          <Scroll type="vertical" ref={chatContainerRef}>
            <Flex
              direction="flex-col-reverse"
              width="w-full"
              padding="p-1"
              paddingX="px-2"
              gap="gap-2"
              justifyContent="jc-end"
            >
              {isFetching && (
                <Wrapper width="w-full">
                  <Spinner
                    size="spinner-s"
                    margin="m-auto"
                    color="bc-neutral-container-04"
                  ></Spinner>
                </Wrapper>
              )}
              {messagesData?.pages.map((page) => (
                <>
                  {page.map((message: Message) => (
                    <ChatMessage
                      key={message.id}
                      isOtherUser={
                        message.username !== window.common.auth.username
                      }
                      messageTimestamp={new Date(message.tstamp * 1000)}
                      displayName={
                        accountsData && accountsData.length > 0
                          ? arrayToUsernameObject(accountsData)[
                              message.username
                            ].displayName
                          : '유저'
                      }
                    >
                      {message.content}
                    </ChatMessage>
                  ))}
                </>
              ))}
              {isFetchingNextPage && (
                <Wrapper width="w-full">
                  <Spinner
                    size="spinner-m"
                    margin="m-auto"
                    color="bc-neutral-container-04"
                  ></Spinner>
                </Wrapper>
              )}
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
