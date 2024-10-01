import CartPointer from '@/components/Home/CartPointer';
import { MapState } from '@/hooks/useMap';
import {
  CartSummaryDataCollection,
  RoundSummaryDataCollection,
} from '@/types/home';

interface Props {
  roundCollection: RoundSummaryDataCollection;
  cartCollection: CartSummaryDataCollection;
  mapState: MapState;
  setCenter: (nextX: number, nextY: number) => void;
}

const MapPointers = ({
  roundCollection,
  cartCollection,
  mapState,
  setCenter,
}: Props) => {
  const calculateGPSToPosition = (cartLocation: { x: number; y: number }) => {
    return {
      // x: ((cartLocation.x - 127.535) / (127.615 - 127.535)) * 100,
      // y: ((cartLocation.y - 37.245) / (37.17 - 37.245)) * 100,
      x:
        ((cartLocation.x - 127.5395) / (127.6145 - 127.5395) - 0.5) *
        mapState.size,
      y:
        ((cartLocation.y - 37.2378) / (37.1781 - 37.2378) - 0.5) *
        mapState.size,
    };
  };

  return (
    <>
      {Object.values(cartCollection).map((cart) => (
        <CartPointer
          key={cart.id}
          cart={cart}
          round={cart.roundId ? roundCollection[cart.roundId] : undefined}
          mapState={mapState}
          setCenter={setCenter}
          position={calculateGPSToPosition({
            x: cart.location.x,
            y: cart.location.y,
          })}
        ></CartPointer>
      ))}
    </>
  );
};

export default MapPointers;
