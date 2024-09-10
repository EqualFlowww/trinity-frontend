import classNames from 'classnames/bind';
import classes from './ChatMessage.module.scss';
import Flex from '@/components/UI/Flex';
import Text from '@/components/UI/Text';
// import Button from '@/components/UI/Button';
// import IconSearch from '@/components/Icon/IconSearch';
// import Scroll from '@/components/UI/Scroll';
import Wrapper from '@/components/UI/Wrapper';
import MessageTimestamp from '@/components/Message/MessageTimestamp';

interface Props {
  children?: React.ReactNode;
  isOtherUser: boolean;
  displayName: string;
  messageTimestamp: Date;
}

const ChatMessage = ({
  children,
  isOtherUser,
  displayName,
  messageTimestamp,
}: Props) => {
  const cx = classNames.bind(classes);

  return (
    <>
      {isOtherUser ? (
        <Flex
          width="w-full"
          direction="flex-col"
          alignContent="ac-start"
          gap="gap-1"
        >
          <Flex
            width="w-full"
            gap="gap-1"
            justifyContent="jc-start"
            wrap="flex-nowrap"
          >
            <div className={cx('profile-image')} />
            <Text size="label-m" color="c-on-neutral">
              {displayName}
            </Text>
          </Flex>
          <Flex
            gap="gap-1"
            width="w-full"
            justifyContent="jc-start"
            alignItems="ai-end"
            wrap="flex-nowrap"
          >
            <Wrapper
              padding="p-1"
              borderRadius="rad-1"
              borderRadiusTopLeft="rad-tl-0"
              color="c-secondary"
            >
              <Text size="body-s" color="c-inherit" line="line-clamp-none">
                {children}
              </Text>
            </Wrapper>
            <div className={cx('message-timestamp-wrapper')}>
              <MessageTimestamp date={messageTimestamp}></MessageTimestamp>
            </div>
          </Flex>
        </Flex>
      ) : (
        <Flex
          width="w-full"
          direction="flex-col"
          alignContent="ac-start"
          gap="gap-1"
        >
          <Flex
            gap="gap-1"
            width="w-full"
            justifyContent="jc-end"
            alignItems="ai-end"
            wrap="flex-nowrap"
          >
            <div className={cx('message-timestamp-wrapper')}>
              <MessageTimestamp date={messageTimestamp}></MessageTimestamp>
            </div>
            <Wrapper
              padding="p-1"
              borderRadius="rad-1"
              borderRadiusTopRight="rad-tr-0"
              color="c-secondary"
            >
              <Text size="body-s" color="c-inherit" line="line-clamp-none">
                {children}
              </Text>
            </Wrapper>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default ChatMessage;
