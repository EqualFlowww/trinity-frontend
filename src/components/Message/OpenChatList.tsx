// import classNames from 'classnames/bind';
// import classes from './OpenChatList.module.scss';
import Flex from '@/components/UI/Flex';
import OpenChatItem from '@/components/Message/OpenChatItem';
import Scroll from '@/components/UI/Scroll';
import useMessageStore from '@/store/messageStore';
import { ChatRoomList } from '@/types/message';
import arrayToIdObject from '@/utils/arrayToIdObject';

interface Props {
  chatRoomList: ChatRoomList;
}

const OpenChatList = ({ chatRoomList }: Props) => {
  // const cx = classNames.bind(classes);
  const openChatRoomIdList = useMessageStore(
    (state) => state.openChatRoomIdList
  );
  const selectedChatRoomId = useMessageStore(
    (state) => state.selectedChatRoomId
  );
  const selectChatRoom = useMessageStore((state) => state.selectChatRoom);
  const closeChatRoom = useMessageStore((state) => state.closeChatRoom);

  return (
    <Flex width="full" color="neutral-container-05" justifyContent="start">
      <Scroll type="horizontal" size="medium">
        <Flex justifyContent="start" wrap="nowrap">
          {openChatRoomIdList.map((chatRoomId) => (
            <OpenChatItem
              key={chatRoomId}
              selected={chatRoomId === selectedChatRoomId}
              onClick={() => {
                selectChatRoom(chatRoomId);
              }}
              onRemove={() => {
                closeChatRoom(chatRoomId);
              }}
              chatTitle={arrayToIdObject(chatRoomList)[chatRoomId].displayName}
            />
          ))}
        </Flex>
      </Scroll>
    </Flex>
  );
};

export default OpenChatList;
