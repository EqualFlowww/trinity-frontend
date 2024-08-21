import classNames from 'classnames/bind';
import classes from './Device.module.scss';
import Dashboard from '@/components/Home/Dashboard';
import Overview from '@/components/Home/Overview';
import {
  TMP_CART_SUMMARY_DATA_COLLECTION,
  TMP_ROUND_SUMMARY_DATA_COLLECTION,
} from '@/data/temp-data';

const Device = () => {
  const cx = classNames.bind(classes);
  const tmpCartSummaryDataCollection = TMP_CART_SUMMARY_DATA_COLLECTION;
  const tmpRoundSummaryDataCollection = TMP_ROUND_SUMMARY_DATA_COLLECTION;

  return (
    <div className={cx('main')}>
      <div className={cx('dashboard')}>
        <Dashboard
          cartCollection={tmpCartSummaryDataCollection}
          roundCollection={tmpRoundSummaryDataCollection}
        />
      </div>
      <div className={cx('overview')}>
        <Overview
          cartCollection={tmpCartSummaryDataCollection}
          roundCollection={tmpRoundSummaryDataCollection}
        />
      </div>
    </div>
  );
};

export default Device;
