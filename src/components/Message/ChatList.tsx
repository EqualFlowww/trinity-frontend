import classNames from 'classnames/bind';
import classes from './ChatList.module.scss';
import ChatItem from '@/components/Message/ChatItem';
import Scroll from '@/components/UI/Scroll';
import Wrapper from '@/components/UI/Wrapper';

const chatItemData = [
  {
    id: '1',
    profileImage: 'https://',
    name: '이성하',
    latestMessage: '빨리 컴포넌트',
    unreadMessageCount: 3,
  },
  {
    id: '2',
    profileImage: 'https://',
    name: '아오 성하시치',
    latestMessage: '만들어라 성하 시치',
    unreadMessageCount: 369,
  },
  {
    id: '3',
    profileImage: 'https://',
    name: '김민제',
    latestMessage: '안녕하세요',
    unreadMessageCount: 1234687974956413,
  },
  {
    id: '4',
    profileImage: 'https://',
    name: '이민형',
    latestMessage:
      '안녕하세요. 반가워요반가워요반가워요반가워요반가워요반가워요반가워요반가워요반가워요반가워요반가워요반가워요반가워요',
    unreadMessageCount: 13,
  },
  {
    id: '5',
    profileImage: 'https://',
    name: '이성하',
    latestMessage: '안녕하세요',
    unreadMessageCount: 3,
  },
  {
    id: '6',
    profileImage: 'https://',
    name: '아오 성하시치',
    latestMessage: '안녕하세요',
    unreadMessageCount: 369,
  },
  {
    id: '7',
    profileImage: 'https://',
    name: '김민제',
    latestMessage: '안녕하세요',
    unreadMessageCount: 1234687974956413,
  },
  {
    id: '8',
    profileImage: 'https://',
    name: '이민형',
    latestMessage: '안녕하세요.',
    unreadMessageCount: 13,
  },
  {
    id: '9',
    profileImage: 'https://',
    name: '이성하',
    latestMessage: '안녕하세요',
    unreadMessageCount: 3,
  },
  {
    id: '10',
    profileImage: 'https://',
    name: '아오 성하시치',
    latestMessage: '안녕하세요',
    unreadMessageCount: 369,
  },
  {
    id: '11',
    profileImage: 'https://',
    name: '김민제',
    latestMessage: '안녕하세요',
    unreadMessageCount: 1234687974956413,
  },
  {
    id: '12',
    profileImage: 'https://',
    name: '이민형',
    latestMessage: '안녕하세요.',
    unreadMessageCount: 13,
  },
  {
    id: '13',
    profileImage: 'https://',
    name: '이성하',
    latestMessage: '안녕하세요',
    unreadMessageCount: 3,
  },
];

const ChatList = () => {
  const cx = classNames.bind(classes);

  return (
    <Wrapper
      name="scroll-wrapper"
      size="full"
      color="neutral"
      borderRadiusBottomLeft="1"
    >
      <Scroll type="vertical">
        <div className={cx('chat-list')}>
          {chatItemData.map((item) => (
            <ChatItem key={item.id} chatItemData={item} />
          ))}
        </div>
      </Scroll>
    </Wrapper>
  );
};

export default ChatList;
