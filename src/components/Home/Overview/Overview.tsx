// import {
// TMP_CART_SUMMARY_DATA_COLLECTION,
// TMP_ROUND_SUMMARY_DATA_COLLECTION,
// } from '@/data/temp-data';

import {
  CartSummaryDataCollection,
  RoundSummaryDataCollection,
} from '@/types/home';
import MapMode from '@/components/Home/Overview/MapMode';
import Wrapper from '@/components/UI/Wrapper';

interface Props {
  roundCollection: RoundSummaryDataCollection;
  cartCollection: CartSummaryDataCollection;
}

const Overview = ({ roundCollection, cartCollection }: Props) => {
  return (
    <Wrapper name="overview" size="sz-full" position="relative">
      <MapMode
        roundCollection={roundCollection}
        cartCollection={cartCollection}
      ></MapMode>
    </Wrapper>
  );
};

export default Overview;
