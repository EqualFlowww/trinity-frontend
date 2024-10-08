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
      <Flex
        name="cart-status"
        width="w-full"
        justifyContent="jc-between"
        gap="gap-0.5"
      >
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
        borderRadius="rad-0.5"
        padding="p-0"
        gap="gap-0.5"
        onClick={() => {
          setCenter && position && setCenter(position.x, position.y);
        }}
      >
        <Flex
          width="w-9"
          paddingY="py-0.25"
          color="c-neutral"
          borderRadiusTopLeft="rad-tl-1"
          borderRadiusTopRight="rad-tr-1"
          borderRadiusBottom="rad-b-1"
          direction="flex-col"
          gap="gap-1"
        >
          <Text size="body-m" color="c-inherit">
            NO. {cart.name}
          </Text>
        </Flex>
        <Flex
          width="w-9"
          paddingY="py-0.5"
          color="c-on-neutral"
          borderRadius="rad-1"
          position="relative"
        >
          <Text size="title-s" color="c-inherit">
            {cart.manager.name}
          </Text>
          <div
            style={{
              position: 'absolute',
              bottom: '-1rem',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '0',
              height: '0',
              borderLeft: '1rem solid transparent',
              borderRight: '1rem solid transparent',
              borderTop: '1rem solid #000',
            }}
          />
        </Flex>
      </Button>
    </Flex>
  );
};

export default CartEntity;
