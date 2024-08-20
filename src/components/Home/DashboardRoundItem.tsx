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
  console.log('cartList', cartList);
  return (
    <Flex
      width="full"
      direction="column"
      padding="1"
      gap="1"
      borderRadius="1"
      color="neutral-container-02"
    >
      <Flex width="full" justifyContent="between" color="transparent">
        <Flex gap="0-half">
          <Text font="outfit" type="title" size="small" color="on-neutral">
            {round.name}
          </Text>
          <Wrapper
            paddingY="0-half"
            paddingX="1"
            color="neutral-container-05"
            borderRadius="0-half"
          >
            <Text type="label" size="medium" color="neutral-container-01">
              {round.half === 'first' ? '전반' : '후반'}
            </Text>
          </Wrapper>
          <Wrapper
            paddingY="0-quarter"
            paddingX="1"
            color="neutral-container-03"
            borderRadius="0-half"
          >
            <Text
              font="outfit"
              type="title"
              size="small"
              color="on-neutral-variant"
            >
              Hole {round.currentHole.number}
            </Text>
          </Wrapper>
        </Flex>
        <Button
          form="text"
          padding="0"
          color="neutral-container-05"
          hoverColor="on-neutral-variant"
        >
          <IconArrow type="right" size="2" color="inherit" />
        </Button>
      </Flex>
      <Flex
        width="full"
        justifyContent="between"
        padding="0-half"
        color="neutral-container-01"
        borderRadius="0-half"
      >
        <Flex gap="0-half">
          <Wrapper
            paddingY="0-half"
            paddingX="1"
            color="on-neutral"
            borderRadius="0-half"
          >
            <Text type="label" size="medium" color="inherit">
              {round.currentHole.courseType.toUpperCase()}
            </Text>
          </Wrapper>
          <Wrapper
            paddingY="0-half"
            paddingX="1"
            color="transparent"
            borderWidth="0-eighth"
            borderColor="on-neutral"
            borderStyle="solid"
            borderRadius="0-half"
          >
            <Text type="label" size="medium" color="on-neutral">
              {round.currentHole.startTime}
            </Text>
          </Wrapper>
        </Flex>
        <Flex gap="0-half">
          <Wrapper
            paddingY="0-half"
            paddingX="1"
            color="primary"
            borderRadius="0-half"
          >
            <Text type="label" size="medium" color="inherit">
              {cartList && cartList[0]?.manager.name}{' '}
              {cartList && cartList[0]?.manager.type === 'caddy'
                ? '캐디'
                : '님'}
            </Text>
          </Wrapper>
          <Wrapper
            paddingY="0-half"
            paddingX="1"
            color="primary-container"
            borderRadius="0-half"
          >
            <Text type="label" size="medium" color="inherit">
              Cart No.{cartList && cartList[0].name}
            </Text>
          </Wrapper>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardRoundItem;
