import classNames from 'classnames/bind';
import classes from './ChatItem.module.scss';
import Text from '@/components/UI/Text';
import UnreadMessageCount from '@/components/Message/UnreadMessageCount';
import { ChatItemData } from '@/types/chat';
import Button from '@/components/UI/Button';
import MessageTimestamp from '@/components/Message/MessageTimestamp';

interface Props {
  chatItemData: ChatItemData;
}

const ChatItem = ({ chatItemData }: Props) => {
  const cx = classNames.bind(classes);

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
    >
      <div className={cx('message-content-container')}>
        <div className={cx('profile-image')} />
        <div className={cx('message-text')}>
          <Text type="title" size="small" color="on-neutral">
            {chatItemData.name}
          </Text>
          <Text type="label" color="on-neutral-variant">
            {chatItemData.latestMessage}
          </Text>
        </div>
      </div>
      <div className={cx('message-meta-data')}>
        <MessageTimestamp date={new Date()}></MessageTimestamp>
        <UnreadMessageCount count={chatItemData.unreadMessageCount} />
      </div>
    </Button>
  );
};

export default ChatItem;
