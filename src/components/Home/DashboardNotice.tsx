import React from 'react';
import classNames from 'classnames/bind';
import classes from './DashboardNotice.module.scss';
import { NOTICE_DATA } from '@/data/noticeData';
import Scroll from '@/components/UI/Scroll';
import IconPin from '@/components/Icon/IconPin';
import Wrapper from '@/components/UI/Wrapper';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

const cx = classNames.bind(classes);

// 텍스트를 자르는 함수
const truncateText = (text: string, maxLength: number): string => {
  if (typeof text !== 'string') {
    return '';
  }
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

const DashboardNotice: React.FC = () => {
  const getNoticeDateTime = (time: string) => {
    const today = dayjs().format('YYYY-MM-DD');
    const dateTimeString = `${today} ${time}`;
    return dayjs(dateTimeString, 'YYYY-MM-DD HH:mm');
  };

  return (
    <Wrapper name="dashboard-notice-wrapper">
      <div className={cx('list-view-box')}>
        <Scroll type="horizontal" size="medium">
          <Wrapper name="scroll-container-wrapper">
            <div className={cx('scroll-container')}>
              {NOTICE_DATA.map((notice) => (
                <Wrapper key={notice.id} name="item-box-wrapper">
                  <div className={cx('item-box')}>
                    <div className={cx('notice-title')}>
                      <span>트리니티 관리자</span>
                      <IconPin color="primary" />
                    </div>
                    <div className={cx('dashboard-notice')}>
                      <div className={cx('notice-content-time')}>
                        <div className={cx('notice-content')}>
                          <p>{truncateText(notice.content, 100)}</p>
                        </div>
                        <div className={cx('notice-time')}>
                          {getNoticeDateTime(notice.time).fromNow()}
                        </div>
                      </div>
                    </div>
                  </div>
                </Wrapper>
              ))}
            </div>
          </Wrapper>
        </Scroll>
      </div>
    </Wrapper>
  );
};

export default DashboardNotice;
