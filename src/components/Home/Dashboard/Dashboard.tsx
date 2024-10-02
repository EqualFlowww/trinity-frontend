import classNames from 'classnames/bind';
import classes from './Dashboard.module.scss';
import Flex from '@/components/UI/Flex';
import DateWidget from '@/components/Home/Dashboard/DateWidget';
import Scroll from '@/components/UI/Scroll';
import DashboardItemHeader from '@/components/Home/Dashboard/DashboardItemHeader';
import DashboardRoundList from '@/components/Home/Dashboard/DashboardRoundList';
import DashboardCartList from '@/components/Home/Dashboard/DashboardCartList';
import DashboardNotice from '@/components/Home/Dashboard/DashboardNotice'; // 공지사항 컴포넌트 임포트
import { cartQuery, roundQuery } from '@/queries';
import arrayToIdObject from '@/utils/arrayToIdObject';
import DashBoardButton from '@/components/Home/Dashboard/DashboardButton';
import Wrapper from '@/components/UI/Wrapper';

interface Props {
  isOn: boolean;
  toggleFeature: () => void;
  dashboardRef: React.RefObject<HTMLDivElement>;
}

const Dashboard = ({ isOn, toggleFeature, dashboardRef }: Props) => {
  const cx = classNames.bind(classes);

  const { data: cartsData } = cartQuery.useGetCarts();
  const { data: roundsData } = roundQuery.useGetRounds();

  const cartsCollection = arrayToIdObject(cartsData);
  const roundsCollection = arrayToIdObject(roundsData);

  return (
    <Wrapper
      name="dashboard"
      position="absolute"
      width="w-[49.2rem]"
      height="h-full"
      zIndex="z-10"
      top="t-0"
      left="l-0"
      transformTranslateX={isOn ? '-trlx-0' : '-trlx-100pct'}
      transition="trans-all"
      transitionDuration="dur-500"
      ref={dashboardRef}
    >
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
    </Wrapper>
  );
};

export default Dashboard;
