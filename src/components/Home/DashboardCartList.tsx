import { useState } from 'react';
import Flex from '@/components/UI/Flex';
import SegmentedControl from '@/components/UI/SegmentedControl';
import {
  CartSummaryDataCollection,
  RoundSummaryDataCollection,
} from '@/types/home';
import CartEntity from '@/components/Home/Overview/CartEntity';
import Wrapper from '@/components/UI/Wrapper';
interface Props {
  cartCollection: CartSummaryDataCollection;
  roundCollection: RoundSummaryDataCollection;
}

const DashboardCartList = ({ cartCollection, roundCollection }: Props) => {
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
      <Wrapper width="w-full" minHeight="mh-32">
        <Flex
          size="sz-full"
          minHeight="mh-inherit"
          padding="p-1"
          gap="gap-[0.65rem]"
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
      </Wrapper>
    </Flex>
  );
};

export default DashboardCartList;
