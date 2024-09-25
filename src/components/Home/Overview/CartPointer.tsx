import CartEntity from '@/components/Home/Overview/CartEntity';
import Flex from '@/components/UI/Flex';
import Hr from '@/components/UI/Hr';
import { CartSummaryData, MapState, RoundSummaryData } from '@/types/home';
import Block from '@/components/UI/Block';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  cart: CartSummaryData;
  round?: RoundSummaryData;
  mapState: MapState;
  setMapState: Dispatch<SetStateAction<MapState>>;
  position: {
    x: number;
    y: number;
  };
}

const CartPointer = ({
  cart,
  round,
  mapState,
  setMapState,
  position,
}: Props) => {
  return (
    <Flex
      name="cart-pointer"
      top="t-50pct"
      left="l-50pct"
      width="w-7.5"
      direction="flex-col"
      padding="p-0"
      gap="gap-0"
      color="c-transparent"
      position="absolute"
      transformOrigin="origin-bottom"
      zIndex="z-15"
      htmlAttributes={{
        style: {
          transform: `translate(calc(-50% + ${position.x * mapState.scale}px), calc(-100% + ${position.y * mapState.scale}px)) rotate(${-mapState.rotation}deg)`,
        },
      }}
    >
      <CartEntity
        cart={cart}
        round={round}
        setMapState={setMapState}
        position={position}
      />
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
