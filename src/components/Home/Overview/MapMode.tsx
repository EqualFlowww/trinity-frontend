import { useEffect, useRef, useState } from 'react';
// import courseMapImage from '@/assets/images/trinitycc-map-square.webp';
import courseMapImage from '@/assets/images/trinity-course-map.webp';

import {
  CartSummaryDataCollection,
  RoundSummaryDataCollection,
} from '@/types/home';
import Wrapper from '@/components/UI/Wrapper';
import Image from '@/components/UI/Image';
import Block from '@/components/UI/Block';
import useDebounce from '@/hooks/useDebounce';
import CircularSlider from '@/components/Home/Overview/CircularSlider';
import MapPointers from '@/components/Home/Overview/MapPointers';

interface Props {
  roundCollection: RoundSummaryDataCollection;
  cartCollection: CartSummaryDataCollection;
}

const MapMode = ({ roundCollection, cartCollection }: Props) => {
  // const tmpCartSummaryDataCollection = TMP_CART_SUMMARY_DATA_COLLECTION;
  // const tmpRoundSummaryDataCollection = TMP_ROUND_SUMMARY_DATA_COLLECTION;
  const viewRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapImageSize, setMapImageSize] = useState({ width: 0, height: 0 });
  const mapScale = useRef(1);
  const [mapScaleTrigger, setMapScaleTrigger] = useState(false);
  // const [mapScale, setMapScale] = useState(1);
  const [mapRotation, setMapRotation] = useState(0);
  const currentViewPosition = useRef({ x: 0, y: 0 });
  const [viewPosition, setViewPosition] = useState({
    x: 0,
    y: 0,
  });
  const [limitRadius, setLimitRadius] = useState(0);

  const mousePosition = useRef({ x: 0, y: 0 });

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

  // rotate된 화면에서의 위치를 계산
  const calculateRotatedPosition = (x: number, y: number) => {
    const rotationAngle = (mapRotation / 180) * Math.PI;
    const rotatedX =
      x * Math.cos(-rotationAngle) - y * Math.sin(-rotationAngle);
    const rotatedY =
      x * Math.sin(-rotationAngle) + y * Math.cos(-rotationAngle);
    return { x: rotatedX, y: rotatedY };
  };

  const getMousePosition = (
    event: React.WheelEvent | React.MouseEvent,
    element: HTMLElement
  ) => {
    const rect = element.getBoundingClientRect();
    // 마우스 위치를 div의 상대적인 좌표로 계산
    const relativeX =
      (event.clientX - rect.left - rect.width / 2) / mapScale.current;
    const relativeY =
      (event.clientY - rect.top - rect.height / 2) / mapScale.current;
    // rotate된 화면에서의 위치를 계산
    return calculateRotatedPosition(relativeX, relativeY);
  };

  const panTo = (nextX: number, nextY: number) => {
    // 이동하려는 좌표까지의 거리 계산
    const distance = Math.sqrt(nextX ** 2 + nextY ** 2);
    const radius = limitRadius; // 원의 반경을 limitPosition.x로 사용

    // 만약 이동 거리가 반경보다 크면 원의 경계에 위치하도록 조정
    if (distance > radius) {
      // 각도를 계산하여 원 경계에서의 위치를 재조정
      const angle = Math.atan2(nextY, nextX);
      nextX = radius * Math.cos(angle);
      nextY = radius * Math.sin(angle);
    }

    currentViewPosition.current = { x: nextX, y: nextY };

    requestAnimationFrame(() => {
      setViewPosition(() => {
        return currentViewPosition.current;
      });
    });
  };

  const handleWheel = (event: React.WheelEvent) => {
    if (!mapRef.current) return;
    const { x: mouseX, y: mouseY } = getMousePosition(event, mapRef.current);

    console.log('viewPosition.x', viewPosition.x);
    console.log('viewPosition.y', viewPosition.y);

    mousePosition.current = { x: mouseX, y: mouseY };

    const prevMapScale = mapScale.current;
    const deltaX = (mouseX - viewPosition.x) * prevMapScale;
    const deltaY = (mouseY - viewPosition.y) * prevMapScale;

    mapScale.current = Math.min(
      Math.max(1, mapScale.current + event.deltaY * -0.001),
      5
    );
    setMapScaleTrigger((prev) => !prev);

    const nextX = mouseX - deltaX / mapScale.current;
    const nextY = mouseY - deltaY / mapScale.current;

    panTo(nextX, nextY);
  };

  // debounce 적용한 handleWheel
  const debouncedHandleWheel = useDebounce(handleWheel, 10); // 20ms 지연 적용

  const handleMouseDown = (clickEvent: React.MouseEvent) => {
    clickEvent.stopPropagation();
    clickEvent.preventDefault();

    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      // 2️⃣
      const relativeX =
        (moveEvent.clientX - clickEvent.clientX) / mapScale.current;
      const relativeY =
        (moveEvent.clientY - clickEvent.clientY) / mapScale.current;

      // 회전된 화면의 이동을 위해 delta 값을 회전 변환
      const { x: rotatedRelativeX, y: rotatedRelativeY } =
        calculateRotatedPosition(relativeX, relativeY);

      // // 다음 위치 계산
      const nextX = viewPosition.x - rotatedRelativeX;
      const nextY = viewPosition.y - rotatedRelativeY;

      panTo(nextX, nextY);
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

  // mapImageSize와 mapScale이 변경될 때마다 limitPosition을 업데이트
  useEffect(() => {
    if (!viewRef.current) return;

    const limitX =
      (mapImageSize.width * mapScale.current - viewRef.current.clientWidth) / 2;
    const limitY =
      (mapImageSize.height * mapScale.current - viewRef.current.clientHeight) /
      2;
    if (limitX > limitY) {
      setLimitRadius(limitX <= 0 ? 0 : limitX);
    } else {
      setLimitRadius(limitY <= 0 ? 0 : limitY);
    }

    // console.log('limitRadius', limitRadius);
  }, [mapScaleTrigger, mapImageSize]);

  useEffect(() => {
    console.log('position', viewPosition);
  }, [viewPosition]);

  return (
    <Wrapper
      name="view"
      position="relative"
      size="sz-full"
      overflow="ovf-hidden"
      ref={viewRef}
    >
      <Wrapper
        position="absolute"
        color="c-primary"
        top="t-0"
        left="l-0"
        zIndex="z-10"
      >
        <CircularSlider
          angle={mapRotation}
          setAngle={(angle: number) => setMapRotation(angle)}
        ></CircularSlider>
      </Wrapper>
      <Wrapper
        name="map"
        position="absolute"
        zIndex="z-1"
        top="t-50pct"
        left="l-50pct"
        color="c-alert"
        htmlAttributes={{
          style: {
            width: `${mapImageSize.width * 3 * mapScale.current}px`,
            height: `${mapImageSize.height * 3 * mapScale.current}px`,
            transformOrigin: `calc(50% + ${viewPosition.x * mapScale.current}px) calc(50% + ${viewPosition.y * mapScale.current}px)`,
            transform: `translate(calc(-50% - ${viewPosition.x * mapScale.current}px), calc(-50% - ${viewPosition.y * mapScale.current}px)) rotate(${mapRotation}deg)`,
          },
        }}
        ref={mapRef}
      >
        <Block
          size="sz-1"
          position="absolute"
          top="t-50pct"
          left="l-50pct"
          zIndex="z-10"
          color="c-primary"
          transformTranslate="-trl-50pct"
        ></Block>
        <Block
          size="sz-1"
          position="absolute"
          top="t-50pct"
          left="l-50pct"
          zIndex="z-10"
          color="c-warning"
          htmlAttributes={{
            style: {
              transform: `translate(calc(-50% + ${viewPosition.x * mapScale.current}px), calc(-50% + ${viewPosition.y * mapScale.current}px)) rotate(${mapRotation}deg)`,
            },
          }}
        ></Block>
        <Block
          position="absolute"
          top="t-50pct"
          left="l-50pct"
          zIndex="z-10"
          color="c-transparent"
          borderWidth="bw-0.125"
          borderStyle="bs-solid"
          borderColor="bc-neutral"
          borderRadius="rad-circle"
          htmlAttributes={{
            style: {
              width: `${Math.sqrt((mousePosition.current.x - viewPosition.x) ** 2 + (mousePosition.current.y - viewPosition.y) ** 2) * mapScale.current * 2}px`,
              height: `${Math.sqrt((mousePosition.current.x - viewPosition.x) ** 2 + (mousePosition.current.y - viewPosition.y) ** 2) * mapScale.current * 2}px`,
              transform: `translate(calc(-50% + ${viewPosition.x * mapScale.current}px), calc(-50% + ${viewPosition.y * mapScale.current}px)) rotate(${mapRotation}deg)`,
            },
          }}
        ></Block>
        <Block
          size="sz-1"
          position="absolute"
          top="t-50pct"
          left="l-50pct"
          zIndex="z-10"
          color="c-neutral"
          htmlAttributes={{
            style: {
              transform: `translate(calc(-50% + ${mousePosition.current.x * mapScale.current}px), calc(-50% + ${mousePosition.current.y * mapScale.current}px)) rotate(${-mapRotation}deg)`,
            },
          }}
        ></Block>
        <Block
          name="interaction-cover"
          size="sz-full"
          color="c-transparent"
          position="relative"
          zIndex="z-15"
          htmlAttributes={{
            onWheel: debouncedHandleWheel,
            onMouseDown: handleMouseDown,
          }}
        />
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
              width: `${mapImageSize.width * mapScale.current}px`,
              height: `${mapImageSize.height * mapScale.current}px`,
            },
          }}
        />
        <MapPointers
          cartCollection={cartCollection}
          roundCollection={roundCollection}
          mapRotation={mapRotation}
        ></MapPointers>
      </Wrapper>
    </Wrapper>
  );
};

export default MapMode;
