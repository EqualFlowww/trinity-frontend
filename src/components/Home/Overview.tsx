// import classNames from 'classnames/bind';
// import classes from './Overview.module.scss';
import Flex from '@/components/UI/Flex';
// import {
// TMP_CART_SUMMARY_DATA_COLLECTION,
// TMP_ROUND_SUMMARY_DATA_COLLECTION,
// } from '@/data/temp-data';
import Wrapper from '@/components/UI/Wrapper';
import Image from '@/components/UI/Image';
import courseMapImage from '@/assets/images/trinity-map.webp';

// interface Props {}

const Overview = () => {
  // const cx = classNames.bind(classes);

  // const tmpCartSummaryDataCollection = TMP_CART_SUMMARY_DATA_COLLECTION;
  // const tmpRoundSummaryDataCollection = TMP_ROUND_SUMMARY_DATA_COLLECTION;

  return (
    <Flex
      name="dashboard-wrapper"
      direction="column"
      padding="0"
      color="alert"
      justifyContent="start"
      size="full"
      position="relative"
    >
      <Wrapper name="overlay">
        <Image src={courseMapImage} alt="course-map"></Image>
      </Wrapper>
    </Flex>
  );
};

export default Overview;
