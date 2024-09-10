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
    <div className={cx('unread-message-count', count <= 0 && 'hidden')}>
      <Flex
        color="c-alert"
        padding="p-0.5"
        paddingTop="pt-0.25"
        paddingBottom="pb-0.25"
        borderRadius="rad-2"
      >
        <Text size="label-s" color="c-inherit">
          {displayCount}
        </Text>
      </Flex>
    </div>
  );
};

export default UnreadMessageCount;
