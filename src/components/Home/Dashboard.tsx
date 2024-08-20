import classNames from 'classnames/bind';
import classes from './Dashboard.module.scss';
import Flex from '@/components/UI/Flex';
import DateWidget from '@/components/Home/DateWidget';
import Scroll from '@/components/UI/Scroll';
import DashboardItemHeader from '@/components/Home/DashboardItemHeader';
import DashboardRoundList from '@/components/Home/DashboardRoundList';
import DashboardCartList from '@/components/Home/DashboardCartList';
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

  // const tmpCartSummaryDataCollection = TMP_CART_SUMMARY_DATA_COLLECTION;
  // const tmpRoundSummaryDataCollection = TMP_ROUND_SUMMARY_DATA_COLLECTION;

  return (
    <Flex
      name="dashboard-wrapper"
      direction="column"
      padding="0"
      color="neutral"
      justifyContent="start"
      size="full"
    >
      <div className={cx('dashboard-header')}>
        <DateWidget weather="clear-day" />
      </div>
      <div className={cx('dashboard-list')}>
        <Scroll type="vertical">
          <DashboardItemHeader description="Dashboard">
            공지사항
          </DashboardItemHeader>
          <DashboardItemHeader description="Dashboard">
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
          ></DashboardCartList>
        </Scroll>
      </div>
    </Flex>
  );
};

export default Dashboard;
