import { useEffect, useRef, useState } from 'react';
// import courseMapImage from '@/assets/images/trinitycc-map-square.webp';
import courseMapImage from '@/assets/images/trinity-course-map.webp';

import {
  CartSummaryDataCollection,
  MapState,
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

  const mapViewPosition = useRef({ x: 0, y: 0 });
  const mapScale = useRef(1);
  const [mapState, setMapState] = useState<MapState>({
    imageSize: 0,
    scale: 1,
    size: 0,
    rotation: 0,
    viewPosition: { x: 0, y: 0 },
    viewSize: {
      width: 0,
      height: 0,
    },
    boundaryRadius: 0,
  });

  const mousePosition = useRef({ x: 0, y: 0 });

  const getBoundaryRadius = (mapState: MapState) => {
    // const limitX = Math.max(
    //   (mapState.imageSize * mapState.scale - mapState.viewSize.width) / 2,
    //   0
    // );
    // const limitY = Math.max(
    //   (mapState.imageSize * mapState.scale - mapState.viewSize.height) / 2,
    //   0
    // );

    // return limitX > limitY ? limitX : limitY;
    return (Math.sqrt(2) * mapState.imageSize * mapState.scale) / 2;
  };

  const resizeMapToView = (viewWidth: number, viewHeight: number) => {
    const length = viewWidth > viewHeight ? viewHeight : viewWidth;
    setMapState((prev) => {
      const current = {
        ...prev,
        size: length * 3,
        imageSize: length,
        viewSize: { width: viewWidth, height: viewHeight },
      };

      return {
        ...current,
        boundaryRadius: getBoundaryRadius(current),
      };
    });
  };

  // rotate된 화면에서의 위치를 계산
  const calculateRotatedPosition = (x: number, y: number) => {
    const rotationAngle = (mapState.rotation / 180) * Math.PI;
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
      (event.clientX - rect.left - rect.width / 2) / mapState.scale;
    const relativeY =
      (event.clientY - rect.top - rect.height / 2) / mapState.scale;
    // rotate된 화면에서의 위치를 계산
    return calculateRotatedPosition(relativeX, relativeY);
  };

  const panTo = (nextX: number, nextY: number) => {
    // 이동하려는 좌표까지의 거리 계산
    const distance = Math.sqrt(nextX ** 2 + nextY ** 2);
    const radius = mapState.boundaryRadius; // 원의 반경을 limitPosition.x로 사용

    // 만약 이동 거리가 반경보다 크면 원의 경계에 위치하도록 조정
    if (distance > radius) {
      // 각도를 계산하여 원 경계에서의 위치를 재조정
      const angle = Math.atan2(nextY, nextX);
      nextX = radius * Math.cos(angle);
      nextY = radius * Math.sin(angle);
    }

    mapViewPosition.current = { x: nextX, y: nextY };

    requestAnimationFrame(() => {
      setMapState((prev) => {
        return {
          ...prev,
          viewPosition: mapViewPosition.current,
        };
      });
    });
  };

  const handleWheel = (event: React.WheelEvent) => {
    if (!mapRef.current) return;
    const { x: mouseX, y: mouseY } = getMousePosition(event, mapRef.current);

    mousePosition.current = { x: mouseX, y: mouseY };

    const prevMapScale = mapScale.current;
    const deltaX = (mouseX - mapState.viewPosition.x) * prevMapScale;
    const deltaY = (mouseY - mapState.viewPosition.y) * prevMapScale;

    mapScale.current = Math.min(
      Math.max(1, mapScale.current + event.deltaY * -0.001),
      5
    );

    setMapState((prev) => {
      return {
        ...prev,
        scale: mapScale.current,
        boundaryRadius: getBoundaryRadius({ ...prev, scale: mapScale.current }),
      };
    });

    const nextX = mouseX - deltaX / mapScale.current;
    const nextY = mouseY - deltaY / mapScale.current;

    panTo(nextX, nextY);
  };

  // debounce 적용한 handleWheel
  const debouncedHandleWheel = useDebounce(handleWheel, 15); // 20ms 지연 적용

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
      const nextX = mapState.viewPosition.x - rotatedRelativeX;
      const nextY = mapState.viewPosition.y - rotatedRelativeY;

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
    resizeMapToView(clientWidth, clientHeight);

    const handleResize: ResizeObserverCallback = (entries) => {
      for (let entry of entries) {
        resizeMapToView(entry.contentRect.width, entry.contentRect.height);
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

  return (
    <Wrapper
      name="view"
      position="relative"
      size="sz-full"
      overflow="ovf-hidden"
      color="c-neutral-container-05"
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
          angle={mapState.rotation}
          setAngle={(angle: number) =>
            setMapState((prev) => ({ ...prev, rotation: angle }))
          }
        ></CircularSlider>
      </Wrapper>
      <Wrapper
        name="map"
        position="absolute"
        zIndex="z-1"
        top="t-50pct"
        left="l-50pct"
        htmlAttributes={{
          style: {
            width: `${mapState.imageSize * 3 * mapState.scale}px`,
            height: `${mapState.imageSize * 3 * mapState.scale}px`,
            transformOrigin: `calc(50% + ${mapState.viewPosition.x * mapState.scale}px) calc(50% + ${mapState.viewPosition.y * mapState.scale}px)`,
            transform: `translate(calc(-50% - ${mapState.viewPosition.x * mapState.scale}px), calc(-50% - ${mapState.viewPosition.y * mapState.scale}px)) rotate(${mapState.rotation}deg)`,
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
              transform: `translate(calc(-50% + ${mapState.viewPosition.x * mapState.scale}px), calc(-50% + ${mapState.viewPosition.y * mapState.scale}px)) rotate(${mapState.rotation}deg)`,
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
              width: `${Math.sqrt((mousePosition.current.x - mapState.viewPosition.x) ** 2 + (mousePosition.current.y - mapState.viewPosition.y) ** 2) * mapState.scale * 2}px`,
              height: `${Math.sqrt((mousePosition.current.x - mapState.viewPosition.x) ** 2 + (mousePosition.current.y - mapState.viewPosition.y) ** 2) * mapState.scale * 2}px`,
              transform: `translate(calc(-50% + ${mapState.viewPosition.x * mapState.scale}px), calc(-50% + ${mapState.viewPosition.y * mapState.scale}px)) rotate(${mapState.rotation}deg)`,
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
              transform: `translate(calc(-50% + ${mousePosition.current.x * mapState.scale}px), calc(-50% + ${mousePosition.current.y * mapState.scale}px)) rotate(${-mapState.rotation}deg)`,
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
              width: `${mapState.imageSize * mapState.scale}px`,
              height: `${mapState.imageSize * mapState.scale}px`,
            },
          }}
        />
        <MapPointers
          cartCollection={cartCollection}
          roundCollection={roundCollection}
          mapState={mapState}
          setMapState={setMapState}
        ></MapPointers>
      </Wrapper>
    </Wrapper>
  );
};

export default MapMode;
