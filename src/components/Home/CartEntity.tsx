import Flex from '@/components/UI/Flex';
import { CartSummaryData, RoundSummaryData } from '@/types/home';
import IconStatusCrown from '@/components/Icon/IconStatusCrown';
import IconStatusNinePlus from '@/components/Icon/IconStatusNinePlus';
import IconStatusAlpha from '@/components/Icon/IconStatusAlpha';
import IconStatusOmega from '@/components/Icon/IconStatusOmega';
import IconStatusWarning from '@/components/Icon/IconStatusWarning';
import IconStatusBatteryAlert from '@/components/Icon/IconStatusBatteryAlert';
import Button from '@/components/UI/Button';
// import Wrapper from '@/components/UI/Wrapper';
import Text from '@/components/UI/Text';

interface Props {
  cart: CartSummaryData;
  round?: RoundSummaryData;
  setCenter: (nextX: number, nextY: number) => void;
  position?: {
    x: number;
    y: number;
  };
}

const CartEntity = ({ cart, round, setCenter, position }: Props) => {
  return (
    <Flex width="w-7.5" direction="flex-col" gap="gap-0.25">
      <Flex name="cart-status" width="w-full" justifyContent="jc-between">
        <Flex>
          {round?.isVip && <IconStatusCrown size="sz-1" />}
          {round?.isNineHolePlus && <IconStatusNinePlus size="sz-1" />}
          {round?.order === 'first' ? (
            <IconStatusAlpha size="sz-1" />
          ) : (
            round?.order === 'last' && <IconStatusOmega size="sz-1" />
          )}
        </Flex>
        <Flex gap="gap-0.25">
          <IconStatusWarning size="sz-1" opacity="oc-1" />
          {cart.isBatteryAlert && <IconStatusBatteryAlert size="sz-1" />}
        </Flex>
      </Flex>
      <Button
        width="w-full"
        direction="flex-col"
        form="btn-outlined"
        color="c-on-neutral"
        borderRadius="rad-0.5"
        padding="p-0"
        gap="gap-0"
        onClick={() => {
          setCenter && position && setCenter(position.x, position.y);
        }}
      >
        <Flex
          width="w-full"
          paddingY="py-0.25"
          color="c-on-neutral"
          borderRadiusTopLeft="rad-tl-0.5"
          borderRadiusTopRight="rad-tr-0.5"
        >
          <Text size="label-m" color="c-inherit">
            No. {cart.name}
          </Text>
        </Flex>
        <Flex
          width="w-full"
          paddingY="py-0.5"
          color="c-neutral"
          borderRadiusBottomLeft="rad-bl-0.5"
          borderRadiusBottomRight="rad-br-0.5"
        >
          <Text size="title-s" color="c-inherit">
            {cart.manager.name}
          </Text>
        </Flex>
      </Button>
    </Flex>
  );
};

export default CartEntity;
