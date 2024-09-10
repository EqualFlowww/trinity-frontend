import classNames from 'classnames/bind';
import { useState } from 'react';
import classes from './DashboardRoundList.module.scss';
import Flex from '@/components/UI/Flex';
import DashboardRoundItem from '@/components/Home/DashboardRoundItem';
import Button from '@/components/UI/Button';
import Wrapper from '@/components/UI/Wrapper';
import IconArrow from '@/components/Icon/IconArrow';
import Hr from '@/components/UI/Hr';
import {
  CartSummaryDataCollection,
  RoundSummaryDataCollection,
} from '@/types/home';
import { RoundSummaryDataList } from '@/types/home';

interface Props {
  cartCollection: CartSummaryDataCollection;
  roundCollection: RoundSummaryDataCollection;
}

const DashboardRoundList = ({ cartCollection, roundCollection }: Props) => {
  const cx = classNames.bind(classes);
  const roundList: RoundSummaryDataList = Object.values(roundCollection);

  // 페이지 수 계산(한 페이지당 4개의 아이템, 최대 페이지 10으로 제한)
  const pageNumber =
    roundList.length > 40 ? 10 : Math.ceil(roundList.length / 4);
  const [currentPage, setCurrentPage] = useState(0);
  const listEntireBoxStyle = {
    width: `calc((100% - 2.4rem) * ${pageNumber} + 2.4rem`,
    maxHeight: 'inherit',
    transform: `translateX(calc(((-100% + 2.4rem + 0.8rem * ${pageNumber}) / ${pageNumber} - 0.8rem) * ${currentPage}))`,
    transition: 'all 0.5s ease',
  };

  const hanldeMovePreviousPage = () =>
    setCurrentPage((prev) => (prev <= 0 ? 0 : prev - 1));

  const handleMoveNextPage = () =>
    setCurrentPage((prev) =>
      prev >= pageNumber - 1 ? pageNumber - 1 : prev + 1
    );

  const handleMovePage = (index: number) => setCurrentPage(index);

  return (
    <Flex width="w-full" direction="flex-col" gap="gap-1.5" position="relative">
      <div className={cx('list-veiw-box')}>
        <div className={cx('list-entire-box')} style={listEntireBoxStyle}>
          {(roundList.length > 40 ? roundList.slice(0, 40) : roundList).map(
            (round) => (
              <div className={cx('item-box')} key={round.id}>
                <DashboardRoundItem
                  cartList={round.cartIdList.map((id) => cartCollection[id])}
                  round={round}
                />
              </div>
            )
          )}
        </div>
      </div>
      {currentPage === 0 || (
        <Wrapper position="absolute" left="l-0" color="c-transparent">
          <Button
            padding="p-0.5"
            color="c-neutral"
            shadow="shd-gray"
            borderRadius="rad-circle"
            onClick={hanldeMovePreviousPage}
          >
            <IconArrow type="left" size="sz-2" color="c-inherit" />
          </Button>
        </Wrapper>
      )}
      {currentPage === pageNumber - 1 || (
        <Wrapper position="absolute" right="r-0" color="c-transparent">
          <Button
            padding="p-0.5"
            color="c-neutral"
            shadow="shd-gray"
            borderRadius="rad-circle"
            onClick={handleMoveNextPage}
          >
            <IconArrow type="right" size="sz-2" color="c-inherit" />
          </Button>
        </Wrapper>
      )}
      <Flex width="w-full" marginBottom="mb-0.5" gap="gap-1">
        {Array.from({ length: pageNumber }).map((_, index) => (
          <div key={index.toString()} className={cx('circle-button')}>
            {currentPage === index ? (
              <Flex
                padding="p-0"
                borderRadius="rad-circle"
                color="c-neutral-container-05"
                size="sz-full"
              />
            ) : (
              <Button
                padding="p-0"
                borderRadius="rad-circle"
                color="c-neutral-container-03"
                hover={{ color: 'hover:c-neutral-container-03' }}
                size="sz-full"
                onClick={() => handleMovePage(index)}
              />
            )}
          </div>
        ))}
      </Flex>
      <Wrapper paddingX="px-2" width="w-full">
        <Hr
          type="horizontal"
          color="c-neutral-container-05"
          length="len-full"
          thickness="thk-0.125"
        />
      </Wrapper>
    </Flex>
  );
};

export default DashboardRoundList;
