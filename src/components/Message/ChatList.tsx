import classNames from 'classnames/bind';
import classes from './ChatList.module.scss';
import ChatItem from '@/components/Message/ChatItem';
import Scroll from '@/components/UI/Scroll';
import Wrapper from '@/components/UI/Wrapper';
import { ChatRoomList } from '@/types/message';

interface Props {
  chatRoomList: ChatRoomList;
}

const ChatList = ({ chatRoomList }: Props) => {
  const cx = classNames.bind(classes);

  return (
    <Wrapper
      name="scroll-wrapper"
      size="full"
      color="neutral"
      borderRadiusBottomLeft="1"
    >
      <Scroll type="vertical">
        <div className={cx('chat-list')}>
          {chatRoomList.map((chatRoom) => (
            <ChatItem key={chatRoom.id} chatRoom={chatRoom} />
          ))}
        </div>
      </Scroll>
    </Wrapper>
  );
};

export default ChatList;
