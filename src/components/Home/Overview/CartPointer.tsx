import CartEntity from '@/components/Home/Overview/CartEntity';
import Flex from '@/components/UI/Flex';
import Hr from '@/components/UI/Hr';
import { CartSummaryData, RoundSummaryData } from '@/types/home';
import Block from '@/components/UI/Block';

interface Props {
  cart: CartSummaryData;
  round?: RoundSummaryData;
  angle: number;
  location?: {
    x: number;
    y: number;
  };
}

const CartPointer = ({ cart, round, angle, location }: Props) => {
  const style = {
    top: `${location?.y}%`,
    left: `${location?.x}%`,
    transform: `translate(-50%, -100%) rotate(${-angle}deg)`,
  };

  return (
    <Flex
      name="cart-pointer"
      width="w-7.5"
      direction="flex-col"
      padding="p-0"
      gap="gap-0"
      color="c-transparent"
      position="absolute"
      transformOrigin="origin-bottom"
      zIndex="z-15"
      htmlAttributes={{ style: style }}
    >
      <CartEntity cart={cart} round={round} />
      <Hr
        type="vertical"
        length="len-2.5"
        color="c-on-neutral"
        thickness="thk-0.125"
      ></Hr>
      <Block
        position="absolute"
        left="l-50pct"
        bottom="b-0"
        size="sz-0.5"
        borderRadius="rad-circle"
        color="c-on-neutral"
        transformTranslateX="-trlx-50pct"
        transformTranslateY="trly-50pct"
      />
    </Flex>
  );
};

export default CartPointer;
