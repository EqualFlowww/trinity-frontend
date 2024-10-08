import CartEntity from '@/components/Home/CartEntity';
import Flex from '@/components/UI/Flex';
// import Hr from '@/components/UI/Hr';
import { CartSummaryData, RoundSummaryData } from '@/types/home';
// import Block from '@/components/UI/Block';
import { MapState } from '@/hooks/useMap';

interface Props {
  cart: CartSummaryData;
  round?: RoundSummaryData;
  mapState: MapState;
  setCenter: (nextX: number, nextY: number) => void;
  position: {
    x: number;
    y: number;
  };
}

const CartPointer = ({ cart, round, mapState, setCenter, position }: Props) => {
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
        setCenter={setCenter}
        position={position}
      />
    </Flex>
  );
};

export default CartPointer;
