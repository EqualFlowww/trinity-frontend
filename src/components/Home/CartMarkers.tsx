import {
  CartSummaryDataCollection,
  RoundSummaryDataCollection,
} from '@/types/home';
import CartPointer from '@/components/Home/CartPointer';

interface CartMarkersProps {
  cartCollection: CartSummaryDataCollection;
  roundCollection: RoundSummaryDataCollection;
  calculateCartPosition: (cartLocation: { x: number; y: number }) => {
    x: number;
    y: number;
  };
}

const CartMarkers = ({
  cartCollection,
  roundCollection,
  calculateCartPosition,
}: CartMarkersProps) => {
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

export default CartMarkers;
