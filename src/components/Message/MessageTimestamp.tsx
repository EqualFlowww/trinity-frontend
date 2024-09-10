import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import Text from '@/components/UI/Text';
import 'dayjs/locale/ko';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.locale('ko');

interface Props {
  date: Date | null;
}

const MessageTimestamp = ({ date }: Props) => {
  const now = dayjs();
  const messageDate = dayjs(date);
  const diffInMinutes = now.diff(messageDate, 'minute');
  const diffInDays = now.diff(messageDate, 'day');
  let text = '';
  if (date === null) {
    text = ' ';
  } else if (diffInMinutes < 1) {
    text = '방금 전'; // 1분 이내: "방금 전" 표시
  } else if (diffInDays === 0) {
    text = messageDate.format('A h:mm'); // 오늘 보낸 메세지: HH:mm 형식으로 표시
  } else if (diffInDays === 1) {
    text = '어제'; // 어제 보낸 메세지: "어제" 표시
  } else {
    text = messageDate.format('YYYY-MM-DD'); // 그 외: YYYY년 MM월 DD일 형식으로 표시
  }

  return (
    <Text size="label-s" color="c-neutral-outline-variant">
      {text}
    </Text>
  );
};

export default MessageTimestamp;
