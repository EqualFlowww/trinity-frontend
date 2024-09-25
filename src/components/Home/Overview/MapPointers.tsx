import CartPointer from '@/components/Home/Overview/CartPointer';
import {
  CartSummaryDataCollection,
  MapState,
  RoundSummaryDataCollection,
} from '@/types/home';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  roundCollection: RoundSummaryDataCollection;
  cartCollection: CartSummaryDataCollection;
  mapState: MapState;
  setMapState: Dispatch<SetStateAction<MapState>>;
}

const MapPointers = ({
  roundCollection,
  cartCollection,
  mapState,
  setMapState,
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
          setMapState={setMapState}
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
