import CartPointer from '@/components/Home/Overview/CartPointer';
import {
  CartSummaryDataCollection,
  RoundSummaryDataCollection,
} from '@/types/home';

interface Props {
  roundCollection: RoundSummaryDataCollection;
  cartCollection: CartSummaryDataCollection;
  mapRotation: number;
}

const MapPointers = ({
  roundCollection,
  cartCollection,
  mapRotation,
}: Props) => {
  const calculateGPSToPosition = (cartLocation: { x: number; y: number }) => {
    return {
      // x: ((cartLocation.x - 127.535) / (127.615 - 127.535)) * 100,
      // y: ((cartLocation.y - 37.245) / (37.17 - 37.245)) * 100,
      x: ((cartLocation.x - 127.5395) / (127.6145 - 127.5395)) * 100,
      y: ((cartLocation.y - 37.2378) / (37.1781 - 37.2378)) * 100,
    };
  };

  return (
    <>
      {Object.values(cartCollection).map((cart) => (
        <CartPointer
          key={cart.id}
          cart={cart}
          round={cart.roundId ? roundCollection[cart.roundId] : undefined}
          angle={mapRotation}
          location={calculateGPSToPosition({
            x: cart.location.x,
            y: cart.location.y,
          })}
        ></CartPointer>
      ))}
    </>
  );
};

export default MapPointers;
