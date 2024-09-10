import classNames from 'classnames/bind';
import classes from './ChatListArea.module.scss';
import Flex from '@/components/UI/Flex';
import Text from '@/components/UI/Text';
import Button from '@/components/UI/Button';
import IconPlus from '@/components/Icon/IconPlus';
import ChatList from '@/components/Message/ChatList';
import { ChatRoomList } from '@/types/message';

interface Props {
  chatRoomList: ChatRoomList;
}

const ChatListArea = ({ chatRoomList }: Props) => {
  const cx = classNames.bind(classes);

  return (
    <Flex size="sz-full" direction="flex-col" wrap="flex-nowrap">
      <Flex
        name="chat-list-header"
        width="w-full"
        padding="p-2"
        justifyContent="jc-between"
        color="c-neutral-container-02"
        borderRadiusTopLeft="rad-tl-1"
      >
        <Flex gap="gap-2">
          <Text size="title-m" color="c-on-neutral">
            내 채팅
          </Text>
          <Button
            form="btn-text"
            color="c-neutral-container-04"
            hover={{ color: 'hover:c-neutral-container-05' }}
            padding="p-0"
          >
            <Text size="title-m" color="c-inherit">
              모든 채팅
            </Text>
          </Button>
        </Flex>
        <Button
          padding="p-1"
          paddingY="py-0.5"
          borderRadius="rad-1"
          gap="gap-1"
          color="c-on-secondary"
        >
          <IconPlus size="sz-2" color="c-inherit"></IconPlus>
          <Text size="label-m" color="c-inherit">
            New Chat
          </Text>
        </Button>
      </Flex>
      <div className={cx('chat-list')}>
        <ChatList chatRoomList={chatRoomList}></ChatList>
      </div>
    </Flex>
  );
};

export default ChatListArea;
