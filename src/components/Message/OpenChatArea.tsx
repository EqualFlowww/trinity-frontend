import classNames from 'classnames/bind';
import classes from './OpenChatArea.module.scss';
import Flex from '@/components/UI/Flex';
import OpenChatList from '@/components/Message/OpenChatList';
import OpenChat from '@/components/Message/OpenChat';
import { ChatRoomList } from '@/types/message';
import useMessageStore from '@/store/messageStore';

interface Props {
  chatRoomList: ChatRoomList;
}

const OpenChatArea = ({ chatRoomList }: Props) => {
  const cx = classNames.bind(classes);
  const selectedChatRoomId = useMessageStore(
    (state) => state.selectedChatRoomId
  );

  return (
    <Flex size="full" direction="column" wrap="nowrap">
      <OpenChatList chatRoomList={chatRoomList}></OpenChatList>
      <div className={cx('open-chat-main')}>
        {selectedChatRoomId !== null && (
          <OpenChat chatRoomId={selectedChatRoomId}></OpenChat>
        )}
      </div>
    </Flex>
  );
};

export default OpenChatArea;
