import classNames from 'classnames/bind';
import classes from './Dashboard.module.scss';
import Flex from '@/components/UI/Flex';
import DateWidget from '@/components/Home/DateWidget';
import Scroll from '@/components/UI/Scroll';
import DashboardItemHeader from '@/components/Home/DashboardItemHeader';
import DashboardRoundList from '@/components/Home/DashboardRoundList';
import DashboardCartList from '@/components/Home/DashboardCartList';
import DashboardNotice from '@/components/Home/DashboardNotice'; // 공지사항 컴포넌트 임포트
import {
  CartSummaryDataCollection,
  RoundSummaryDataCollection,
} from '@/types/home';

interface Props {
  roundCollection: RoundSummaryDataCollection;
  cartCollection: CartSummaryDataCollection;
}

const Dashboard = ({ roundCollection, cartCollection }: Props) => {
  const cx = classNames.bind(classes);

  return (
    <Flex
      name="dashboard-wrapper"
      direction='flex-col'
      padding='p-0'
      color='c-neutral'
      justifyContent='jc-start'
      size='sz-full'
    >
      <div className={cx('dashboard-header')}>
        <DateWidget weather="clear-day" />
      </div>
      <div className={cx('dashboard-list')}>
        <Scroll type="vertical">
          <DashboardItemHeader description="Dashboard">
            공지사항
          </DashboardItemHeader>
          <DashboardNotice /> {/* 공지사항 컴포넌트 추가 */}
          <DashboardItemHeader description="HelloWorld">
            라운드 현황
          </DashboardItemHeader>
          <DashboardRoundList
            cartCollection={cartCollection}
            roundCollection={roundCollection}
          />
          <DashboardItemHeader description="Dashboard">
            카트 현황
          </DashboardItemHeader>
          <DashboardCartList
            cartCollection={cartCollection}
            roundCollection={roundCollection}
          />
        </Scroll>
      </div>
    </Flex>
  );
};

export default Dashboard;
