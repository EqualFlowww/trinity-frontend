import classNames from 'classnames/bind';
import classes from './UnreadMessageCount.module.scss';
import Text from '@/components/UI/Text';
import Flex from '@/components/UI/Flex';

interface Props {
  count: number;
}

const UnreadMessageCount = ({ count }: Props) => {
  const cx = classNames.bind(classes);

  // 메시지 수가 999를 초과하면 '999+'로 표시
  const displayCount = count > 999 ? '999+' : count.toString();

  return (
    <div className={cx('unread-message-count')}>
      <Flex
        color="alert"
        padding="0-half"
        paddingTop="0-quarter"
        paddingBottom="0-quarter"
        borderRadius="2"
      >
        <Text type="label" size="small" color="inherit">
          {displayCount}
        </Text>
      </Flex>
    </div>
  );
};

export default UnreadMessageCount;
