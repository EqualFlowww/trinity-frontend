import CartPointer from '@/components/Home/Overview/CartPointer';
import {
  CartSummaryDataCollection,
  RoundSummaryDataCollection,
} from '@/types/home';

interface Props {
  cartCollection: CartSummaryDataCollection;
  roundCollection: RoundSummaryDataCollection;
  calculateCartPosition: (cartLocation: { x: number; y: number }) => {
    x: number;
    y: number;
  };
}

const CartPointerList = ({
  cartCollection,
  roundCollection,
  calculateCartPosition,
}: Props) => {
  return (
    <>
      {Object.values(cartCollection).map((cart) => (
        <CartPointer
          key={cart.id}
          cart={cart}
          round={cart.roundId ? roundCollection[cart.roundId] : undefined}
          location={calculateCartPosition({
            x: cart.location.x,
            y: cart.location.y,
          })}
        />
      ))}
    </>
  );
};

export default CartPointerList;
