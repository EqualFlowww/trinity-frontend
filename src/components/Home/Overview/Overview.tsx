import classNames from 'classnames/bind';
import classes from './Overview.module.scss';
// import {
// TMP_CART_SUMMARY_DATA_COLLECTION,
// TMP_ROUND_SUMMARY_DATA_COLLECTION,
// } from '@/data/temp-data';

import {
  CartSummaryDataCollection,
  RoundSummaryDataCollection,
} from '@/types/home';
import MapMode from '@/components/Home/Overview/MapMode';

interface Props {
  roundCollection: RoundSummaryDataCollection;
  cartCollection: CartSummaryDataCollection;
}

const Overview = ({ roundCollection, cartCollection }: Props) => {
  const cx = classNames.bind(classes);

  return (
    <div className={cx('overview')}>
      {/* <div className={cx('interaction-box')}></div> */}
      <MapMode
        roundCollection={roundCollection}
        cartCollection={cartCollection}
      ></MapMode>
    </div>
  );
};

export default Overview;
