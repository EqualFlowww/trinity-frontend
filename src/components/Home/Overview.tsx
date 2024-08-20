import classNames from 'classnames/bind';
import classes from './Overview.module.scss';
// import {
// TMP_CART_SUMMARY_DATA_COLLECTION,
// TMP_ROUND_SUMMARY_DATA_COLLECTION,
// } from '@/data/temp-data';
import courseMapImage from '@/assets/images/trinity-map.webp';
import { useEffect, useRef, useState } from 'react';
import {
  CartSummaryDataCollection,
  RoundSummaryDataCollection,
} from '@/types/home';
import CartPointer from '@/components/Home/CartPointer';

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
  roundCollection: RoundSummaryDataCollection;
  cartCollection: CartSummaryDataCollection;
}

const Overview = ({ roundCollection, cartCollection }: Props) => {
  const cx = classNames.bind(classes);

  // const tmpCartSummaryDataCollection = TMP_CART_SUMMARY_DATA_COLLECTION;
  // const tmpRoundSummaryDataCollection = TMP_ROUND_SUMMARY_DATA_COLLECTION;
  const viewBoxRef = useRef(null);
  const mapRef = useRef<HTMLImageElement>(null);
  const [viewBoxSize, setViewBoxSize] = useState<ViewBoxSize>();
  const [naturalMapSize, setNaturalMapSize] = useState<NaturalMapSize>();
  const [mapBoxStyle, setMapBoxStyle] = useState<MapBoxStyle>();
  const [mapScale, setMapScale] = useState(1);
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  const calculateEntrieMapBoxSize = (
    viewBoxSize: ViewBoxSize,
    naturalMapSize: NaturalMapSize
  ) => {
    if (naturalMapSize.heightToWidthRatio <= viewBoxSize.heightToWidthRatio) {
      // viewBox의 세로비가 map의 세로비보다 더 긴 경우
      return {
        width:
          viewBoxSize.width * naturalMapSize.extraMapToMapWidthRatio * mapScale,
        height:
          viewBoxSize.width *
          naturalMapSize.heightToWidthRatio *
          naturalMapSize.extraMapToMapHeightRatio *
          mapScale,
      };
    } else {
      // viewBox의 가로비가 map의 가로비보다 더 긴 경우
      return {
        width:
          (viewBoxSize.height / naturalMapSize.heightToWidthRatio) *
          naturalMapSize.extraMapToMapWidthRatio *
          mapScale,
        height:
          viewBoxSize.height *
          naturalMapSize.extraMapToMapHeightRatio *
          mapScale,
      };
    }
  };

  const calculateCartPosition = (cartLocation: { x: number; y: number }) => {
    return {
      x: ((cartLocation.x - 127.535) / (127.615 - 127.535)) * 100,
      y: ((cartLocation.y - 37.245) / (37.17 - 37.245)) * 100,
    };
  };

  const handleWheel = (event: React.WheelEvent) => {
    if (!mapRef.current || !mapBoxStyle || !naturalMapSize || !viewBoxSize)
      return;

    setMapScale((prev) =>
      Math.min(Math.max(1, prev + event.deltaY * -0.001), 3)
    );
  };

  const handleMouseDown = (clickEvent: React.MouseEvent) => {
    if (!mapRef.current || !mapBoxStyle || !naturalMapSize || !viewBoxSize)
      return;
    console.log('mousedown');

    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      console.log('mousemove');
      // 2️⃣
      const deltaX = moveEvent.screenX - clickEvent.screenX;
      const deltaY = moveEvent.screenY - clickEvent.screenY;
      const limitx =
        ((mapBoxStyle.width / naturalMapSize.extraMapToMapWidthRatio -
          viewBoxSize.width) /
          2 /
          mapBoxStyle.width) *
        100;
      const limity =
        ((mapBoxStyle.height / naturalMapSize.extraMapToMapHeightRatio -
          viewBoxSize.height) /
          2 /
          mapBoxStyle.height) *
        100;
      console.log('limitx', limitx, 'limity', limity);
      console.log(
        currentPosition.x + (deltaX / mapBoxStyle.width) * 100,
        'currentPosition.x'
      );
      setCurrentPosition((prev) => ({
        x:
          limitx <= 0
            ? prev.x
            : Math.max(
                Math.min(
                  prev.x +
                    (deltaX / (mapScale * 5) / 0.5 / mapBoxStyle.width) * 100,
                  limitx
                ),
                limitx * -1
              ),
        y:
          limity <= 0
            ? prev.y
            : Math.max(
                Math.min(
                  prev.y +
                    (deltaY / (mapScale * 5) / 0.5 / mapBoxStyle.height) * 100,
                  limity
                ),
                limity * -1
              ),
      }));
    };

    const mouseUpHandler = () => {
      console.log('mouseup');
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler, { once: true });
  };

  // 첫 렌더링 시
  useEffect(() => {
    const initialExtraMapToMapWidthRatio = 4;
    const initialExtraMapToMapHeightRatio = 3;

    const handleLoadMap = () => {
      const { naturalWidth, naturalHeight } =
        mapRef.current as HTMLImageElement;
      setNaturalMapSize({
        width: naturalWidth / initialExtraMapToMapWidthRatio,
        height: naturalHeight / initialExtraMapToMapHeightRatio,
        heightToWidthRatio:
          naturalHeight /
          initialExtraMapToMapHeightRatio /
          (naturalWidth / initialExtraMapToMapWidthRatio),
        entireWidth: naturalWidth,
        entireHeight: naturalHeight,
        extraMapToMapWidthRatio: initialExtraMapToMapWidthRatio,
        extraMapToMapHeightRatio: initialExtraMapToMapHeightRatio,
      });
    };

    const handleResize: ResizeObserverCallback = (entries) => {
      for (let entry of entries) {
        setViewBoxSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
          heightToWidthRatio:
            entry.contentRect.height / entry.contentRect.width,
        });
      }
    };

    if (mapRef.current) {
      // 이미지가 로드된 후 원본 크기 가져오기
      if (mapRef.current.complete) {
        handleLoadMap();
      } else {
        mapRef.current.addEventListener('load', handleLoadMap);
      }
    }

    const resizeObserver = new ResizeObserver(handleResize);
    if (viewBoxRef.current) {
      resizeObserver.observe(viewBoxRef.current);
    }

    return () => {
      if (viewBoxRef.current) {
        resizeObserver.unobserve(viewBoxRef.current);
      }
      if (mapRef.current) {
        mapRef.current.removeEventListener('load', handleLoadMap);
      }
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || !naturalMapSize || !viewBoxSize) return;

    setMapBoxStyle((prev) => ({
      ...prev,
      ...calculateEntrieMapBoxSize(viewBoxSize, naturalMapSize),
      top: '50%',
      left: '50%',
    }));
  }, [viewBoxSize, naturalMapSize, mapScale]);

  useEffect(() => {
    console.log('mapScale', mapScale);
    if (!mapBoxStyle || !naturalMapSize || !viewBoxSize) return;
    const limitx =
      ((mapBoxStyle.width / naturalMapSize.extraMapToMapWidthRatio -
        viewBoxSize.width) /
        2 /
        mapBoxStyle.width) *
      100;
    const limity =
      ((mapBoxStyle.height / naturalMapSize.extraMapToMapHeightRatio -
        viewBoxSize.height) /
        2 /
        mapBoxStyle.height) *
      100;

    setCurrentPosition((prev) => ({
      x: limitx <= 0 ? 0 : prev.x >= 0 ? limitx : limitx * -1,
      y: limity <= 0 ? 0 : prev.y >= 0 ? limity : limity * -1,
    }));
  }, [mapBoxStyle]);

  return (
    <div className={cx('overview')}>
      {/* <div className={cx('interaction-box')}></div> */}
      <div className={cx('view-box')} ref={viewBoxRef}>
        <div
          className={cx('map-box')}
          style={
            mapBoxStyle
              ? {
                  ...mapBoxStyle,
                  width: `${mapBoxStyle.width}px`,
                  height: `${mapBoxStyle.height}px`,
                  transform: `translate(calc(-50% + ${currentPosition.x}%), calc(-50% + ${currentPosition.y}%))`,
                }
              : {
                  transform: `translate(calc(-50% + ${currentPosition.x}%), calc(-50% + ${currentPosition.y}%))`,
                }
          }
        >
          <div
            className={cx('interaction-cover')}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
          ></div>
          <img
            className={cx('map-image')}
            src={courseMapImage}
            alt="course-map"
            ref={mapRef}
          />
          {Object.values(cartCollection).map((cart) => (
            <CartPointer
              key={cart.id}
              cart={cart}
              round={cart.roundId ? roundCollection[cart.roundId] : undefined}
              location={calculateCartPosition({ x: 127.578056, y: 37.205343 })}
              // location={calculateCartPosition({ x: 127.565, y: 37.195 })}
            ></CartPointer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
