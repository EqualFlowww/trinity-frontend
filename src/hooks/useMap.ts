import useDebounce from '@/hooks/useDebounce';
import { useEffect, useRef, useState } from 'react';

export interface MapState {
  imageSize: number;
  scale: number;
  size: number;
  rotation: number;
  center: { x: number; y: number };
  boundaryRadius: number;
}

const useMap = (
  viewRef: React.RefObject<HTMLDivElement>,
  mapRef: React.RefObject<HTMLDivElement>
) => {
  const mapCenter = useRef({ x: 0, y: 0 });
  const mapScale = useRef(1);
  const [mapState, setMapState] = useState<MapState>({
    imageSize: 0,
    scale: 1,
    size: 0,
    rotation: 0,
    center: { x: 0, y: 0 },
    boundaryRadius: 0,
  });

  const getBoundaryRadius = (mapState: MapState) => {
    return (Math.sqrt(2) * mapState.imageSize * mapState.scale) / 2;
  };

  const setImageSize = (size: number) => {
    setMapState((prev) => {
      const current = {
        ...prev,
        size: size * 3,
        imageSize: size,
      };

      return {
        ...current,
        boundaryRadius: getBoundaryRadius(current),
      };
    });
  };

  const setScale = (scale: number) => {
    mapScale.current = Math.min(Math.max(1, scale), 5);

    setMapState((prev) => {
      return {
        ...prev,
        scale: mapScale.current,
        boundaryRadius: getBoundaryRadius({ ...prev, scale: mapScale.current }),
      };
    });
  };

  const setRotation = (rotation: number) => {
    setMapState((prev) => {
      return {
        ...prev,
        rotation,
      };
    });
  };

  const setCenter = (x: number, y: number) => {
    let nextX = x;
    let nextY = y;

    // 이동하려는 좌표까지의 거리 계산
    const distance = Math.sqrt(nextX ** 2 + nextY ** 2);
    const radius = mapState.boundaryRadius; // 원의 반경을 limitPosition.x로 사용

    // 만약 이동 거리가 반경보다 크면 바로 리턴
    if (distance > radius) {
      const angle = Math.atan2(nextY, nextX);
      nextX = radius * Math.cos(angle);
      nextY = radius * Math.sin(angle);
    }

    mapCenter.current = { x: nextX, y: nextY };

    setMapState((prev) => {
      return {
        ...prev,
        center: mapCenter.current,
      };
    });
  };

  const resizeMapToView = (viewWidth: number, viewHeight: number) => {
    const length = viewWidth > viewHeight ? viewHeight : viewWidth;
    setImageSize(length);
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

  const panTo = (x: number, y: number) => {
    requestAnimationFrame(() => {
      setCenter(x, y);
    });
  };

  const moveMap = (dx: number, dy: number) => {
    const relativeX = dx / mapScale.current;
    const relativeY = dy / mapScale.current;

    // 회전된 화면의 이동을 위해 delta 값을 회전 변환
    const { x: rotatedRelativeX, y: rotatedRelativeY } =
      calculateRotatedPosition(relativeX, relativeY);

    // // 다음 위치 계산
    const nextX = mapState.center.x - rotatedRelativeX;
    const nextY = mapState.center.y - rotatedRelativeY;
    setCenter(nextX, nextY);
  };

  const handleWheel = (event: React.WheelEvent) => {
    if (!mapRef.current) return;
    const { x: mouseX, y: mouseY } = getMousePosition(event, mapRef.current);
    const prevMapScale = mapScale.current;
    const deltaX = (mouseX - mapState.center.x) * prevMapScale;
    const deltaY = (mouseY - mapState.center.y) * prevMapScale;

    mapScale.current = Math.min(
      Math.max(1, mapScale.current + event.deltaY * -0.001),
      5
    );

    const nextX = mouseX - deltaX / mapScale.current;
    const nextY = mouseY - deltaY / mapScale.current;

    // 이동하려는 좌표까지의 거리 계산
    const distance = Math.sqrt(nextX ** 2 + nextY ** 2);
    const radius = mapState.boundaryRadius; // 원의 반경을 limitPosition.x로 사용

    // 만약 이동 거리가 반경보다 크면 원의 경계에 위치하도록 조정
    if (distance > radius) {
      // 각도를 계산하여 원 경계에서의 위치를 재조정
      const angle = Math.atan2(nextY, nextX);

      mapCenter.current = {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
      };
    } else {
      mapCenter.current = { x: nextX, y: nextY };
    }

    requestAnimationFrame(() => {
      setMapState((prev) => {
        return {
          ...prev,
          scale: mapScale.current,
          center: mapCenter.current,
        };
      });
    });
  };

  // debounce 적용한 handleWheel
  const debouncedHandleWheel = useDebounce(handleWheel, 15); // 20ms 지연 적용

  const handleMouseDown = (clickEvent: React.MouseEvent) => {
    clickEvent.stopPropagation();
    clickEvent.preventDefault();

    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      // 2️⃣
      moveMap(
        moveEvent.clientX - clickEvent.clientX,
        moveEvent.clientY - clickEvent.clientY
      );
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

  return {
    mapState,
    handleWheel: debouncedHandleWheel,
    handleMouseDown,
    moveMap,
    panTo,
    setImageSize,
    setScale,
    setRotation,
    setCenter,
  };
};

export default useMap;
