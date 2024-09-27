// import {
// TMP_CART_SUMMARY_DATA_COLLECTION,
// TMP_ROUND_SUMMARY_DATA_COLLECTION,
// } from '@/data/temp-data';
import MapMode from '@/components/Home/Overview/MapMode';
import Wrapper from '@/components/UI/Wrapper';
import { cartQuery, roundQuery } from '@/queries';
import arrayToIdObject from '@/utils/arrayToIdObject';

const Overview = () => {
  const { data: cartsData } = cartQuery.useGetCarts();
  const { data: roundsData } = roundQuery.useGetRounds();

  const cartsCollection = arrayToIdObject(cartsData);
  const roundsCollection = arrayToIdObject(roundsData);
  return (
    <Wrapper name="overview" size="sz-full" position="relative">
      <MapMode
        roundCollection={roundsCollection}
        cartCollection={cartsCollection}
      ></MapMode>
    </Wrapper>
  );
};

export default Overview;
