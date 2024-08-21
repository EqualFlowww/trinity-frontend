import classNames from 'classnames/bind';
import useMessageStore from '@/store/messageStore';
import classes from './MessageModal.module.scss';
import Flex from '@/components/UI/Flex';
import { useRef } from 'react';
import Button from '@/components/UI/Button';
import IconClose from '@/components/Icon/IconClose';
import ChatListArea from '@/components/Message/ChatListArea';
import OpenChatArea from '@/components/Message/OpenChatArea';

const MessageModal = () => {
  const cx = classNames.bind(classes);
  const overlay = useRef(null);

  const isOpen = useMessageStore((state) => state.isModalOpen);
  const closeModal = useMessageStore((state) => state.closeModal);

  if (!isOpen) return null;

  return (
    <div
      className={cx('modal-overlay')}
      ref={overlay}
      onClick={(e) => {
        if (e.target == overlay.current) closeModal();
      }}
    >
      <div className={cx('modal')}>
        <Flex size="full">
          <div className={cx('chat-list-area')}>
            <ChatListArea />
          </div>
          <div className={cx('open-chat-area')}>
            <OpenChatArea />
          </div>
        </Flex>
        <Button
          position="absolute"
          top="0%"
          left="100%"
          padding="0"
          form="text"
          color="neutral-container-01"
          size="auto"
          marginLeft="0-half"
          onClick={closeModal}
        >
          <IconClose size="3" color="inherit" />
        </Button>
      </div>
    </div>
  );
};

export default MessageModal;
