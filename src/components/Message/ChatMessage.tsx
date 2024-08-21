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
        <Flex width="full" direction="column" alignContent="start" gap="1">
          <Flex width="full" gap="1" justifyContent="start" wrap="nowrap">
            <div className={cx('profile-image')} />
            <Text type="label" size="medium" color="on-neutral">
              {displayName}
            </Text>
          </Flex>
          <Flex
            gap="1"
            width="full"
            justifyContent="start"
            alignItems="end"
            wrap="nowrap"
          >
            <Wrapper
              padding="1"
              borderRadius="1"
              borderRadiusTopLeft="0"
              color="secondary"
            >
              <Text type="body" size="small" color="inherit" lines={'infinity'}>
                {children}
              </Text>
            </Wrapper>
            <div className={cx('message-timestamp-wrapper')}>
              <MessageTimestamp date={messageTimestamp}></MessageTimestamp>
            </div>
          </Flex>
        </Flex>
      ) : (
        <Flex width="full" direction="column" alignContent="start" gap="1">
          <Flex
            gap="1"
            width="full"
            justifyContent="end"
            alignItems="end"
            wrap="nowrap"
          >
            <div className={cx('message-timestamp-wrapper')}>
              <MessageTimestamp date={messageTimestamp}></MessageTimestamp>
            </div>
            <Wrapper
              padding="1"
              borderRadius="1"
              borderRadiusTopRight="0"
              color="secondary"
            >
              <Text type="body" size="small" color="inherit" lines={'infinity'}>
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
