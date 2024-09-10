import Flex from '@/components/UI/Flex';
import Text from '@/components/UI/Text';
import Button from '@/components/UI/Button';
import Wrapper from '@/components/UI/Wrapper';
import IconArrow from '@/components/Icon/IconArrow';
import { CartSummaryDataList, RoundSummaryData } from '@/types/home';

interface Props {
  cartList?: CartSummaryDataList;
  round: RoundSummaryData;
}

const DashboardRoundItem = ({ round, cartList }: Props) => {
  return (
    <Flex
      width="w-full"
      direction="flex-col"
      padding="p-1"
      gap="gap-1"
      borderRadius="rad-1"
      color="c-neutral-container-02"
    >
      <Flex width="w-full" justifyContent="jc-between" color="c-transparent">
        <Flex gap="gap-0.5">
          <Text font="font-outfit" size="title-s" color="c-neutral">
            {round.name}
          </Text>
          <Wrapper
            paddingY="py-0.5"
            paddingX="px-1"
            color="c-neutral-container-05"
            borderRadius="rad-0.5"
          >
            <Text size="label-m" color="c-neutral-container-01">
              {round.half === 'first' ? '전반' : '후반'}
            </Text>
          </Wrapper>
          <Wrapper
            paddingY="py-0.25"
            paddingX="px-1"
            color="c-neutral-container-03"
            borderRadius="rad-0.5"
          >
            <Text
              font="font-outfit"
              size="title-s"
              color="c-on-neutral-variant"
            >
              Hole {round.currentHole.number}
            </Text>
          </Wrapper>
        </Flex>
        <Button
          form="btn-text"
          padding="p-0"
          color="c-neutral-container-05"
          hover={{ color: 'hover:c-on-neutral-variant' }}
        >
          <IconArrow type="right" size="sz-2" color="c-inherit" />
        </Button>
      </Flex>
      <Flex
        width="w-full"
        justifyContent="jc-between"
        padding="p-0.5"
        color="c-neutral-container-01"
        borderRadius="rad-0.5"
      >
        <Flex gap="gap-0.5">
          <Wrapper
            paddingY="py-0.5"
            paddingX="px-1"
            color="c-on-neutral"
            borderRadius="rad-0.5"
          >
            <Text size="label-m" color="c-inherit">
              {round.currentHole.courseType.toUpperCase()}
            </Text>
          </Wrapper>
          <Wrapper
            paddingY="py-0.5"
            paddingX="px-1"
            color="c-transparent"
            borderWidth="bw-0.125"
            borderColor="bc-neutral"
            borderStyle="bs-solid"
            borderRadius="rad-0.5"
          >
            <Text size="label-m" color="c-neutral">
              {round.currentHole.startTime}
            </Text>
          </Wrapper>
        </Flex>
        <Flex gap="gap-0.5">
          <Wrapper
            paddingY="py-0.5"
            paddingX="px-1"
            color="c-primary"
            borderRadius="rad-0.5"
          >
            <Text size="label-m" color="c-inherit">
              {cartList && cartList?.length > 0 && cartList[0]?.manager.name}{' '}
              {cartList &&
              cartList?.length > 0 &&
              cartList[0]?.manager.type === 'caddy'
                ? '캐디'
                : '님'}
            </Text>
          </Wrapper>
          <Wrapper
            paddingY="py-0.5"
            paddingX="px-1"
            color="c-primary-container"
            borderRadius="rad-0.5"
          >
            <Text size="label-m" color="c-inherit">
              Cart No.{cartList && cartList?.length > 0 && cartList[0].name}
            </Text>
          </Wrapper>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardRoundItem;
