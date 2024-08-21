import classNames from 'classnames/bind';
import classes from './ChatListArea.module.scss';
import Flex from '@/components/UI/Flex';
import Text from '@/components/UI/Text';
import Button from '@/components/UI/Button';
import IconPlus from '@/components/Icon/IconPlus';
import ChatList from '@/components/Message/ChatList';

interface Props {}

const ChatListArea = ({}: Props) => {
  const cx = classNames.bind(classes);

  return (
    <Flex size="full" direction="column" wrap="nowrap">
      <Flex
        name="chat-list-header"
        width="full"
        padding="2"
        justifyContent="between"
        color="neutral-container-02"
        borderRadiusTopLeft="1"
      >
        <Flex gap="2">
          <Text type="title" size="medium" color="on-neutral">
            내 채팅
          </Text>
          <Button
            form="text"
            color="neutral-container-04"
            hoverColor="neutral-container-05"
            padding="0"
          >
            <Text type="title" size="medium" color="inherit">
              모든 채팅
            </Text>
          </Button>
        </Flex>
        <Button
          padding="1"
          paddingY="0-half"
          borderRadius="1"
          gap="1"
          color="secondary"
        >
          <IconPlus size="2" color="inherit"></IconPlus>
          <Text type="label" size="medium" color="inherit">
            New Chat
          </Text>
        </Button>
      </Flex>
      <div className={cx('chat-list')}>
        <ChatList></ChatList>
      </div>
    </Flex>
  );
};

export default ChatListArea;
