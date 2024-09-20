import CartPointer from '@/components/Home/Overview/CartPointer';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
// import courseMapImage from '@/assets/images/trinitycc-map-square.webp';
import courseMapImage from '@/assets/images/trinity-course-map.webp';

import {
  CartSummaryDataCollection,
  RoundSummaryDataCollection,
} from '@/types/home';
import Wrapper from '@/components/UI/Wrapper';
import classes from './MapMode.module.scss';
import Image from '@/components/UI/Image';
import Block from '@/components/UI/Block';

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

const MapMode = ({ roundCollection, cartCollection }: Props) => {
  const cx = classNames.bind(classes);

  // const tmpCartSummaryDataCollection = TMP_CART_SUMMARY_DATA_COLLECTION;
  // const tmpRoundSummaryDataCollection = TMP_ROUND_SUMMARY_DATA_COLLECTION;
  const viewRef = useRef<HTMLDivElement>(null);
  const [mapImageSize, setMapImageSize] = useState({ width: 0, height: 0 });
  const [mapScale, setMapScale] = useState(2);
  const currentViewPosition = useRef({ x: 0, y: 0 });
  const [viewPosition, setViewPosition] = useState({ x: 0, y: 0 });

  const [viewBoxSize, setViewBoxSize] = useState<ViewBoxSize>();
  const [naturalMapSize, setNaturalMapSize] = useState<NaturalMapSize>();
  const [mapBoxStyle, setMapBoxStyle] = useState<MapBoxStyle>();

  const resizeMapImageToView = (width: number, height: number) => {
    if (width > height) {
      setMapImageSize({
        width: height,
        height: height,
      });
    } else {
      setMapImageSize({
        width: width,
        height: width,
      });
    }
  };

  const handleWheel = (event: React.WheelEvent) => {
    setMapScale((prev) =>
      Math.min(Math.max(1, prev + event.deltaY * -0.001), 5)
    );
  };

  const handleMouseDown = (clickEvent: React.MouseEvent) => {
    clickEvent.preventDefault();

    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      // 2️⃣
      const deltaX = moveEvent.clientX - clickEvent.clientX;
      const deltaY = moveEvent.clientY - clickEvent.clientY;

      currentViewPosition.current = {
        x: viewPosition.x + deltaX,
        y: viewPosition.y + deltaY,
      };

      requestAnimationFrame(() => {
        setViewPosition(currentViewPosition.current);
      });

      // const limitx =
      //   ((mapBoxStyle.width / naturalMapSize.extraMapToMapWidthRatio -
      //     viewBoxSize.width) /
      //     2 /
      //     mapBoxStyle.width) *
      //   100;
      // const limity =
      //   ((mapBoxStyle.height / naturalMapSize.extraMapToMapHeightRatio -
      //     viewBoxSize.height) /
      //     2 /
      //     mapBoxStyle.height) *
      //   100;
      // setViewPosition((prev) => ({
      //   x: prev.x + deltaX * 0.1,
      //   y: prev.y + deltaY * 0.1,
      //   // x:
      //   //   limitx <= 0
      //   //     ? prev.x
      //   //     : Math.max(
      //   //         Math.min(
      //   //           prev.x +
      //   //             (deltaX / (mapScale * 5) / 0.5 / mapBoxStyle.width) * 100,
      //   //           limitx
      //   //         ),
      //   //         limitx * -1
      //   //       ),
      //   // y:
      //   //   limity <= 0
      //   //     ? prev.y
      //   //     : Math.max(
      //   //         Math.min(
      //   //           prev.y +
      //   //             (deltaY / (mapScale * 5) / 0.5 / mapBoxStyle.height) * 100,
      //   //           limity
      //   //         ),
      //   //         limity * -1
      //   //       ),
      // }));
    };

    document.addEventListener('mousemove', mouseMoveHandler);

    const mouseUpHandler = () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
    document.addEventListener('mouseup', mouseUpHandler, { once: true });
  };

  //첫 렌더링 시
  useEffect(() => {
    if (!viewRef.current) return;
    const { clientWidth, clientHeight } = viewRef.current;
    resizeMapImageToView(clientWidth, clientHeight);

    const handleResize: ResizeObserverCallback = (entries) => {
      console.log('entries', entries);
      for (let entry of entries) {
        resizeMapImageToView(entry.contentRect.width, entry.contentRect.height);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (viewRef.current) {
      resizeObserver.observe(viewRef.current);
    }

    return () => {
      if (viewRef.current) {
        resizeObserver.unobserve(viewRef.current);
      }
    };
  }, []);

  // const calculateCartPosition = (cartLocation: { x: number; y: number }) => {
  //   return {
  //     // x: ((cartLocation.x - 127.535) / (127.615 - 127.535)) * 100,
  //     // y: ((cartLocation.y - 37.245) / (37.17 - 37.245)) * 100,
  //     x: ((cartLocation.x - 127.5395) / (127.6145 - 127.5395)) * 100,
  //     y: ((cartLocation.y - 37.2378) / (37.1781 - 37.2378)) * 100,
  //   };
  // };

  // useEffect(() => {
  //   if (!mapRef.current || !naturalMapSize || !viewBoxSize) return;

  //   setMapBoxStyle((prev) => ({
  //     ...prev,
  //     ...calculateEntrieMapBoxSize(viewBoxSize, naturalMapSize),
  //     top: '50%',
  //     left: '50%',
  //   }));
  // }, [viewBoxSize, naturalMapSize, mapScale]);

  // useEffect(() => {
  //   // console.log('mapScale', mapScale);
  //   if (!mapBoxStyle || !naturalMapSize || !viewBoxSize) return;
  //   const limitx =
  //     ((mapBoxStyle.width / naturalMapSize.extraMapToMapWidthRatio -
  //       viewBoxSize.width) /
  //       2 /
  //       mapBoxStyle.width) *
  //     100;
  //   const limity =
  //     ((mapBoxStyle.height / naturalMapSize.extraMapToMapHeightRatio -
  //       viewBoxSize.height) /
  //       2 /
  //       mapBoxStyle.height) *
  //     100;

  //   setCurrentPosition((prev) => ({
  //     x: limitx <= 0 ? 0 : prev.x >= 0 ? limitx : limitx * -1,
  //     y: limity <= 0 ? 0 : prev.y >= 0 ? limity : limity * -1,
  //   }));
  // }, [mapBoxStyle]);

  return (
    <Wrapper
      name="view"
      position="relative"
      size="sz-full"
      overflow="ovf-hidden"
      ref={viewRef}
    >
      <Block
        name="interaction-cover"
        size="sz-full"
        color="c-transparent"
        position="relative"
        zIndex="z-5"
        htmlAttributes={{
          onWheel: handleWheel,
          onMouseDown: handleMouseDown,
        }}
      />
      <Wrapper
        name="map"
        position="absolute"
        zIndex="z-1"
        top="t-50pct"
        left="l-50pct"
        color="c-alert"
        transition="trans-transform"
        transitionDuration="dur-100"
        transitionTimingFunction="ease-linear"
        htmlAttributes={{
          style: {
            width: `${mapImageSize.width * 3}px`,
            height: `${mapImageSize.height * 3}px`,
            transform: `translate(calc(-50% + ${viewPosition.x}px), calc(-50% + ${viewPosition.y}px)) scale(${mapScale})`,
          },
        }}
      >
        <Image
          src={courseMapImage}
          alt="course-map"
          position="absolute"
          zIndex="z-1"
          top="t-50pct"
          left="l-50pct"
          transformTranslate="-trl-50pct"
          htmlAttributes={{
            style: {
              width: `${mapImageSize.width}px`,
              height: `${mapImageSize.height}px`,
            },
          }}
        />
      </Wrapper>
      {/* <div
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
            location={calculateCartPosition({
              x: cart.location.x,
              y: cart.location.y,
            })}
            // location={calculateCartPosition({ x: 127.565, y: 37.195 })}
          ></CartPointer>
        ))}
      </div> */}
    </Wrapper>
  );
};

export default MapMode;
