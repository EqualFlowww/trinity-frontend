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
  const { sendMessage } = useSocketStore();

  // 메시지 전송 핸들러
  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage({
        message,
        roomId: chatRoomId,
        others,
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
      size="sz-full"
      padding="p-2"
      color="c-neutral-container-01"
      gap="gap-1"
      direction="flex-col"
    >
      <textarea
        className={cx('message-input')}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyUp={handleKeyPress}
        placeholder="메세지를 입력하세요."
        rows={1}
      ></textarea>
      <Flex width="w-full" justifyContent="jc-end">
        <Button
          paddingX="px-1"
          paddingY="py-0.5"
          color="c-secondary"
          borderRadius="rad-0.5"
          onClick={() => handleSendMessage()}
        >
          <Text size="body-m" color="c-inherit">
            전송
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default MessageInputBox;
