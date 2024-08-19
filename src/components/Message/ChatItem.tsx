import classNames from 'classnames/bind';
import classes from './ChatItem.module.scss';
import Text from '@/components/UI/Text';
import UnreadMessageCount from '@/components/Message/UnreadMessageCount';
import { ChatItemData } from '@/types/chat';

interface Props {
  chatItemData: ChatItemData;
}

const ChatItem = ({ chatItemData }: Props) => {
  const cx = classNames.bind(classes);

  return (
    <div className={cx('chat-item')}>
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
      <UnreadMessageCount count={chatItemData.unreadMessageCount} />
    </div>
  );
};

export default ChatItem;
