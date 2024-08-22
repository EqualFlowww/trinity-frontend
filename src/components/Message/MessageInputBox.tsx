import classNames from 'classnames/bind';
import classes from './MessageInputBox.module.scss';
import Flex from '@/components/UI/Flex';
import { useState } from 'react';
import Text from '@/components/UI/Text';
import Button from '@/components/UI/Button';
import useSocketStore from '@/store/socketStore';

interface Props {
  chatRoomId: string;
  others: string[];
}

const MessageInputBox = ({ chatRoomId, others }: Props) => {
  const cx = classNames.bind(classes);
  const [message, setMessage] = useState('');
  // const { sendData } = useSocketStore();
  const { sendData } = useSocketStore();

  // 메시지 전송 핸들러
  const handleSendMessage = () => {
    if (message.trim()) {
      sendData({
        k: 'msg',
        v: {
          content: message,
          username: window.common.auth.username,
          roomId: chatRoomId,
          unreadUsernames: others,
        },
      }); // 부모 컴포넌트에 메시지 전송
      setMessage(''); // 입력 필드 초기화
    }
  };

  // 엔터 키를 눌렀을 때 메시지 전송
  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Flex
      size="full"
      padding="2"
      color="neutral-container-01"
      gap="1"
      direction="column"
    >
      <textarea
        className={cx('message-input')}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyUp={handleKeyPress}
        placeholder="메세지를 입력하세요."
        rows={1}
      ></textarea>
      <Flex width="full" justifyContent="end">
        <Button
          paddingX="1"
          paddingY="0-half"
          color="secondary"
          borderRadius="0-half"
          onClick={() => handleSendMessage()}
        >
          <Text type="body" size="medium" color="inherit">
            전송
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default MessageInputBox;
