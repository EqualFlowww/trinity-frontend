import classNames from 'classnames/bind';
import classes from './Dashboard.module.scss';
import Flex from '@/components/UI/Flex';
import DateWidget from '@/components/Home/DateWidget';
import Scroll from '@/components/UI/Scroll';
import DashboardItemHeader from '@/components/Home/DashboardItemHeader';
import DashboardRoundList from '@/components/Home/DashboardRoundList';
import DashboardCartList from '@/components/Home/DashboardCartList';
import DashboardNotice from '@/components/Home/DashboardNotice'; // 공지사항 컴포넌트 임포트
import { cartQuery, roundQuery } from '@/queries';
import arrayToIdObject from '@/utils/arrayToIdObject';
import DashBoardButton from '@/components/Home/DashboardButton';

interface Props {
  isOn: boolean;
  toggleFeature: () => void;
}

const Dashboard = ({ isOn, toggleFeature }: Props) => {
  const cx = classNames.bind(classes);

  const { data: cartsData } = cartQuery.useGetCarts();
  const { data: roundsData } = roundQuery.useGetRounds();

  const cartsCollection = arrayToIdObject(cartsData);
  const roundsCollection = arrayToIdObject(roundsData);

  return (
    <>
      <Flex
        name="dashboard-wrapper"
        direction="flex-col"
        padding="p-0"
        color="c-neutral"
        justifyContent="jc-start"
        size="sz-full"
        position="relative"
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
              cartCollection={cartsCollection}
              roundCollection={roundsCollection}
            />
            <DashboardItemHeader description="Dashboard">
              카트 현황
            </DashboardItemHeader>
            <DashboardCartList
              cartCollection={cartsCollection}
              roundCollection={roundsCollection}
            />
          </Scroll>
        </div>
      </Flex>
      <DashBoardButton isOn={isOn} onClick={toggleFeature}></DashBoardButton>
    </>
  );
};

export default Dashboard;
