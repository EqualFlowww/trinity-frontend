import classNames from 'classnames/bind';
import classes from './OpenChatArea.module.scss';
import Flex from '@/components/UI/Flex';

interface Props {}

const OpenChatArea = ({}: Props) => {
  const cx = classNames.bind(classes);

  return (
    <Flex size="full">
      <Flex width="full">
        <div className={cx('')}></div>
      </Flex>
    </Flex>
  );
};

export default OpenChatArea;
