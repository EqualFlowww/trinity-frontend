import { useRef, useState, useEffect, useCallback } from 'react';
import MapImage from './MapImage';
import CartPointerList from './CartPointerList';
import {
  CartSummaryDataCollection,
  RoundSummaryDataCollection,
} from '@/types/home';

interface ViewBoxSize {
  width: number;
  height: number;
  heightToWidthRatio: number;
}

interface NaturalMapSize {
  width: number;
  height: number;
  heightToWidthRatio: number;
  entireWidth: number;
  entireHeight: number;
  extraMapToMapWidthRatio: number;
  extraMapToMapHeightRatio: number;
}

interface MapBoxStyle {
  width: number;
  height: number;
  top: string;
  left: string;
}

interface Props {
  cartCollection: CartSummaryDataCollection;
  roundCollection: RoundSummaryDataCollection;
}

const ViewBox = ({ cartCollection, roundCollection }: Props) => {
  const viewBoxRef = useRef<HTMLDivElement | null>(null);
  const [viewBoxSize, setViewBoxSize] = useState<ViewBoxSize>({
    width: 0,
    height: 0,
    heightToWidthRatio: 1,
  });
  const [mapScale, setMapScale] = useState(1);
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  const [naturalMapSize, setNaturalMapSize] = useState<NaturalMapSize>({
    width: 0,
    height: 0,
    heightToWidthRatio: 1,
    entireWidth: 0,
    entireHeight: 0,
    extraMapToMapWidthRatio: 0,
    extraMapToMapHeightRatio: 0,
  });

  const [mapBoxStyle, setMapBoxStyle] = useState<MapBoxStyle>({
    width: 0,
    height: 0,
    top: '0rem',
    left: '0rem',
  });

  // ViewBox의 크기를 계산하여 상태로 저장
  useEffect(() => {
    if (viewBoxRef.current) {
      const { offsetWidth, offsetHeight } = viewBoxRef.current;
      setViewBoxSize({
        width: offsetWidth,
        height: offsetHeight,
        heightToWidthRatio: offsetHeight / offsetWidth,
      });
    }
  }, [viewBoxRef]);

  // Cart 위치를 계산하는 함수를 메모이제이션
  const calculateCartPosition = useCallback(
    (cartLocation: { x: number; y: number }) => {
      return {
        x: ((cartLocation.x - 127.5395) / (127.6145 - 127.5395)) * 100,
        y: ((cartLocation.y - 37.2378) / (37.1781 - 37.2378)) * 100,
      };
    },
    []
  );

  return (
    <div ref={viewBoxRef} className="view-box">
      {naturalMapSize && viewBoxSize && (
        <MapImage
          currentPosition={currentPosition}
          setCurrentPosition={setCurrentPosition}
          viewBoxSize={viewBoxSize}
          naturalMapSize={naturalMapSize}
          mapBoxStyle={mapBoxStyle}
          setMapBoxStyle={(style) => {
            if (style) {
              setMapBoxStyle(style);
            }
          }}
        />
      )}
      <CartPointerList
        cartCollection={cartCollection}
        roundCollection={roundCollection}
        calculateCartPosition={calculateCartPosition}
      />
    </div>
  );
};

export default ViewBox;
