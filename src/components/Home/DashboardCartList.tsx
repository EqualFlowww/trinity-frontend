import classNames from 'classnames/bind';
import { useState } from 'react';
import classes from './DashboardCartList.module.scss';
import Flex from '@/components/UI/Flex';
import SegmentedControl from '@/components/UI/SegmentedControl';
import {
  CartSummaryDataCollection,
  RoundSummaryDataCollection,
} from '@/types/home';
import CartEntity from '@/components/Home/Overview/CartEntity';
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
    <Flex width="w-full" direction="flex-col" gap="gap-2" paddingX="px-2">
      <SegmentedControl
        borderRadius="rad-3"
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
          size="sz-full"
          minHeight="mh-inherit"
          padding="p-1"
          gap="gap-1"
          borderRadius="rad-1"
          color="c-neutral-container-02"
          alignItems="ai-start"
          alignContent="ac-start"
          justifyContent="jc-start"
          marginBottom="mb-2"
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
