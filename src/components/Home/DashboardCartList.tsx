import classNames from 'classnames/bind';
import { useState } from 'react';
import classes from './DashboardCartList.module.scss';
import Flex from '@/components/UI/Flex';
import SegmentedControl from '@/components/UI/SegmentedControl';
import {
  CartSummaryDataCollection,
  RoundSummaryDataCollection,
} from '@/types/home';
import CartEntity from '@/components/Home/CartEntity';
interface Props {
  cartCollection: CartSummaryDataCollection;
  roundCollection: RoundSummaryDataCollection;
}

const DashboardCartList = ({ cartCollection, roundCollection }: Props) => {
  const cx = classNames.bind(classes);

  const [currentSegment, setCurrentSegment] = useState('round');

  const handleSegmentChange = (segment: string) => {
    setCurrentSegment(segment);
  };

  return (
    <Flex width="full" direction="column" gap="2" paddingX="2">
      <SegmentedControl
        borderRadius="3"
        segments={{
          round: '라운드',
          work: '작업',
          training: '교육',
          waiting: '대기',
        }}
        currentSegment={currentSegment}
        handleSegmentChange={handleSegmentChange}
      ></SegmentedControl>
      <div className={cx('cart-box')}>
        <Flex
          size="full"
          minHeight="inherit"
          padding="1"
          gap="1"
          borderRadius="1"
          color="neutral-container-02"
          alignItems="start"
          alignContent="start"
          justifyContent="start"
          marginBottom="2"
        >
          {Object.values(cartCollection)
            .filter((cart) => cart.type === currentSegment)
            .map((cart) => (
              <CartEntity
                key={cart.id}
                cart={cart}
                round={cart.roundId ? roundCollection[cart.roundId] : undefined}
              ></CartEntity>
            ))}
        </Flex>
      </div>
    </Flex>
  );
};

export default DashboardCartList;
